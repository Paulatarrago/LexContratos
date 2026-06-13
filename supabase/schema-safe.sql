-- LexContratos production foundation - safe first install
-- Run this in Supabase SQL Editor if it warns about destructive operations.
-- This script creates missing objects, but does not drop policies, triggers, tables or data.

do $$
begin
  execute 'create extension if not exists "pgcrypto"';
exception
  when insufficient_privilege then
    raise notice 'No permission to create pgcrypto. Continuing because Supabase normally already exposes gen_random_uuid().';
  when undefined_file then
    raise notice 'pgcrypto is not available in this project. Continuing; table creation will use Supabase/Postgres gen_random_uuid() if present.';
end $$;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create or replace function public.prevent_profile_privilege_escalation()
returns trigger
language plpgsql
as $$
begin
  if auth.role() = 'authenticated' then
    if tg_op = 'INSERT' then
      if new.role is distinct from 'user'
        or new.license_status is distinct from 'inactive'
        or new.account_status is distinct from 'active' then
        raise exception 'No autorizado para modificar permisos de cuenta.';
      end if;
    end if;

    if tg_op = 'UPDATE' then
      if new.role is distinct from old.role
        or new.license_status is distinct from old.license_status
        or new.account_status is distinct from old.account_status then
        raise exception 'No autorizado para modificar permisos de cuenta.';
      end if;
    end if;
  end if;

  return new;
end;
$$;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  full_name text,
  role text not null default 'user' check (role in ('user', 'admin', 'superadmin')),
  account_status text not null default 'active' check (account_status in ('active', 'inactive')),
  license_status text not null default 'inactive' check (license_status in ('inactive', 'trial', 'active', 'expired')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.licenses (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  status text not null default 'inactive' check (status in ('inactive', 'trial', 'active', 'expired', 'cancelled')),
  plan text not null default 'trial',
  starts_at timestamptz,
  ends_at timestamptz,
  provider text,
  provider_customer_id text,
  provider_subscription_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id)
);

create table if not exists public.folders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  path text not null,
  root text not null default 'Clientes',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, path)
);

create table if not exists public.master_templates (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  title text not null,
  category text not null default 'Operacion',
  body text not null default '',
  language text not null default 'es',
  is_shared boolean not null default false,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.contract_matters (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  folio text not null,
  title text not null,
  folder_path text not null default 'Clientes',
  contract_type text,
  status text not null default 'En preparacion',
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, folio)
);

create table if not exists public.contracts (
  id text primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  matter_id uuid references public.contract_matters(id) on delete set null,
  title text not null,
  template_key text,
  language text not null default 'es',
  body text not null default '',
  status text not null default 'Borrador',
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.contract_versions (
  id text primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  contract_id text references public.contracts(id) on delete cascade,
  matter_id uuid references public.contract_matters(id) on delete set null,
  title text not null,
  language text not null default 'es',
  body text not null default '',
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.contract_documents (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  matter_id uuid references public.contract_matters(id) on delete cascade,
  role_label text,
  party_name text,
  storage_bucket text not null default 'contract-documents',
  storage_path text not null,
  file_name text not null,
  mime_type text,
  file_size bigint,
  document_type text,
  extraction_status text not null default 'pending',
  created_at timestamptz not null default now()
);

create table if not exists public.extracted_data (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  matter_id uuid references public.contract_matters(id) on delete cascade,
  document_id uuid references public.contract_documents(id) on delete set null,
  role_label text,
  field_name text not null,
  field_label text,
  extracted_value text,
  status text not null default 'pending' check (status in ('pending', 'validated', 'rejected', 'manual')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.signature_packets (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  matter_id uuid references public.contract_matters(id) on delete cascade,
  provider text not null default 'Firma externa',
  provider_request_id text,
  status text not null default 'pending_configuration',
  signers jsonb not null default '[]'::jsonb,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function pg_temp.create_trigger_if_missing(
  p_trigger_name text,
  p_table regclass,
  p_trigger_sql text
)
returns void
language plpgsql
as $$
begin
  if not exists (
    select 1 from pg_trigger
    where tgname = p_trigger_name and tgrelid = p_table
  ) then
    execute p_trigger_sql;
  end if;
end;
$$;

select pg_temp.create_trigger_if_missing('profiles_set_updated_at', 'public.profiles'::regclass, $sql$create trigger profiles_set_updated_at before update on public.profiles for each row execute function public.set_updated_at()$sql$);
select pg_temp.create_trigger_if_missing('prevent_profile_privilege_escalation', 'public.profiles'::regclass, $sql$create trigger prevent_profile_privilege_escalation before insert or update on public.profiles for each row execute function public.prevent_profile_privilege_escalation()$sql$);
select pg_temp.create_trigger_if_missing('licenses_set_updated_at', 'public.licenses'::regclass, $sql$create trigger licenses_set_updated_at before update on public.licenses for each row execute function public.set_updated_at()$sql$);
select pg_temp.create_trigger_if_missing('folders_set_updated_at', 'public.folders'::regclass, $sql$create trigger folders_set_updated_at before update on public.folders for each row execute function public.set_updated_at()$sql$);
select pg_temp.create_trigger_if_missing('master_templates_set_updated_at', 'public.master_templates'::regclass, $sql$create trigger master_templates_set_updated_at before update on public.master_templates for each row execute function public.set_updated_at()$sql$);
select pg_temp.create_trigger_if_missing('contract_matters_set_updated_at', 'public.contract_matters'::regclass, $sql$create trigger contract_matters_set_updated_at before update on public.contract_matters for each row execute function public.set_updated_at()$sql$);
select pg_temp.create_trigger_if_missing('contracts_set_updated_at', 'public.contracts'::regclass, $sql$create trigger contracts_set_updated_at before update on public.contracts for each row execute function public.set_updated_at()$sql$);
select pg_temp.create_trigger_if_missing('extracted_data_set_updated_at', 'public.extracted_data'::regclass, $sql$create trigger extracted_data_set_updated_at before update on public.extracted_data for each row execute function public.set_updated_at()$sql$);
select pg_temp.create_trigger_if_missing('signature_packets_set_updated_at', 'public.signature_packets'::regclass, $sql$create trigger signature_packets_set_updated_at before update on public.signature_packets for each row execute function public.set_updated_at()$sql$);

alter table public.profiles enable row level security;
alter table public.licenses enable row level security;
alter table public.folders enable row level security;
alter table public.master_templates enable row level security;
alter table public.contract_matters enable row level security;
alter table public.contracts enable row level security;
alter table public.contract_versions enable row level security;
alter table public.contract_documents enable row level security;
alter table public.extracted_data enable row level security;
alter table public.signature_packets enable row level security;

create or replace function pg_temp.create_policy_if_missing(
  p_policy_name text,
  p_schema_name text,
  p_table_name text,
  p_policy_sql text
)
returns void
language plpgsql
as $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = p_schema_name
      and tablename = p_table_name
      and policyname = p_policy_name
  ) then
    execute p_policy_sql;
  end if;
end;
$$;

select pg_temp.create_policy_if_missing('profiles_select_own', 'public', 'profiles', $sql$create policy "profiles_select_own" on public.profiles for select to authenticated using ((select auth.uid()) = id)$sql$);
select pg_temp.create_policy_if_missing('profiles_insert_own', 'public', 'profiles', $sql$create policy "profiles_insert_own" on public.profiles for insert to authenticated with check ((select auth.uid()) = id and role = 'user' and account_status = 'active' and license_status = 'inactive')$sql$);
select pg_temp.create_policy_if_missing('licenses_select_own', 'public', 'licenses', $sql$create policy "licenses_select_own" on public.licenses for select to authenticated using ((select auth.uid()) = user_id)$sql$);
select pg_temp.create_policy_if_missing('folders_crud_own', 'public', 'folders', $sql$create policy "folders_crud_own" on public.folders for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id)$sql$);
select pg_temp.create_policy_if_missing('templates_select_own_or_shared', 'public', 'master_templates', $sql$create policy "templates_select_own_or_shared" on public.master_templates for select to authenticated using (is_shared or (select auth.uid()) = user_id)$sql$);
select pg_temp.create_policy_if_missing('templates_insert_own', 'public', 'master_templates', $sql$create policy "templates_insert_own" on public.master_templates for insert to authenticated with check ((select auth.uid()) = user_id and not is_shared)$sql$);
select pg_temp.create_policy_if_missing('templates_update_own', 'public', 'master_templates', $sql$create policy "templates_update_own" on public.master_templates for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id and not is_shared)$sql$);
select pg_temp.create_policy_if_missing('templates_delete_own', 'public', 'master_templates', $sql$create policy "templates_delete_own" on public.master_templates for delete to authenticated using ((select auth.uid()) = user_id and not is_shared)$sql$);
select pg_temp.create_policy_if_missing('matters_crud_own', 'public', 'contract_matters', $sql$create policy "matters_crud_own" on public.contract_matters for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id)$sql$);
select pg_temp.create_policy_if_missing('contracts_crud_own', 'public', 'contracts', $sql$create policy "contracts_crud_own" on public.contracts for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id)$sql$);
select pg_temp.create_policy_if_missing('versions_crud_own', 'public', 'contract_versions', $sql$create policy "versions_crud_own" on public.contract_versions for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id)$sql$);
select pg_temp.create_policy_if_missing('documents_crud_own', 'public', 'contract_documents', $sql$create policy "documents_crud_own" on public.contract_documents for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id)$sql$);
select pg_temp.create_policy_if_missing('extracted_data_crud_own', 'public', 'extracted_data', $sql$create policy "extracted_data_crud_own" on public.extracted_data for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id)$sql$);
select pg_temp.create_policy_if_missing('signature_packets_crud_own', 'public', 'signature_packets', $sql$create policy "signature_packets_crud_own" on public.signature_packets for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id)$sql$);

do $$
begin
  insert into storage.buckets (id, name, public, file_size_limit)
  values ('contract-documents', 'contract-documents', false, 52428800)
  on conflict (id) do nothing;
exception
  when others then
    raise notice 'Storage bucket was not created automatically: %. Create a private bucket named contract-documents in Supabase Storage.', sqlerrm;
end $$;

select pg_temp.create_policy_if_missing('storage_select_own_contract_documents', 'storage', 'objects', $sql$create policy "storage_select_own_contract_documents" on storage.objects for select to authenticated using (bucket_id = 'contract-documents' and (storage.foldername(name))[1] = (select auth.uid())::text)$sql$);
select pg_temp.create_policy_if_missing('storage_insert_own_contract_documents', 'storage', 'objects', $sql$create policy "storage_insert_own_contract_documents" on storage.objects for insert to authenticated with check (bucket_id = 'contract-documents' and (storage.foldername(name))[1] = (select auth.uid())::text)$sql$);
select pg_temp.create_policy_if_missing('storage_update_own_contract_documents', 'storage', 'objects', $sql$create policy "storage_update_own_contract_documents" on storage.objects for update to authenticated using (bucket_id = 'contract-documents' and (storage.foldername(name))[1] = (select auth.uid())::text) with check (bucket_id = 'contract-documents' and (storage.foldername(name))[1] = (select auth.uid())::text)$sql$);
select pg_temp.create_policy_if_missing('storage_delete_own_contract_documents', 'storage', 'objects', $sql$create policy "storage_delete_own_contract_documents" on storage.objects for delete to authenticated using (bucket_id = 'contract-documents' and (storage.foldername(name))[1] = (select auth.uid())::text)$sql$);
