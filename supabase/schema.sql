-- LexContratos production foundation
-- Run this in Supabase SQL Editor before enabling the production frontend.
-- If Supabase shows notices in the Storage section, run supabase/storage-policies.sql
-- after creating the "contract-documents" bucket from the Supabase dashboard.

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

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  full_name text,
  role text not null default 'user' check (role in ('user', 'admin')),
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
  category text not null default 'Operación',
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
  status text not null default 'En preparación',
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
  provider text not null default 'Dropbox Sign',
  provider_request_id text,
  status text not null default 'pending_configuration',
  signers jsonb not null default '[]'::jsonb,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists profiles_set_updated_at on public.profiles;
drop trigger if exists licenses_set_updated_at on public.licenses;
drop trigger if exists folders_set_updated_at on public.folders;
drop trigger if exists master_templates_set_updated_at on public.master_templates;
drop trigger if exists contract_matters_set_updated_at on public.contract_matters;
drop trigger if exists contracts_set_updated_at on public.contracts;
drop trigger if exists extracted_data_set_updated_at on public.extracted_data;
drop trigger if exists signature_packets_set_updated_at on public.signature_packets;

create trigger profiles_set_updated_at before update on public.profiles for each row execute function public.set_updated_at();
create trigger licenses_set_updated_at before update on public.licenses for each row execute function public.set_updated_at();
create trigger folders_set_updated_at before update on public.folders for each row execute function public.set_updated_at();
create trigger master_templates_set_updated_at before update on public.master_templates for each row execute function public.set_updated_at();
create trigger contract_matters_set_updated_at before update on public.contract_matters for each row execute function public.set_updated_at();
create trigger contracts_set_updated_at before update on public.contracts for each row execute function public.set_updated_at();
create trigger extracted_data_set_updated_at before update on public.extracted_data for each row execute function public.set_updated_at();
create trigger signature_packets_set_updated_at before update on public.signature_packets for each row execute function public.set_updated_at();

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

drop policy if exists "profiles_select_own" on public.profiles;
drop policy if exists "profiles_insert_own" on public.profiles;
drop policy if exists "profiles_update_own" on public.profiles;
drop policy if exists "licenses_select_own" on public.licenses;
drop policy if exists "folders_crud_own" on public.folders;
drop policy if exists "templates_select_own_or_shared" on public.master_templates;
drop policy if exists "templates_insert_own" on public.master_templates;
drop policy if exists "templates_update_own" on public.master_templates;
drop policy if exists "templates_delete_own" on public.master_templates;
drop policy if exists "matters_crud_own" on public.contract_matters;
drop policy if exists "contracts_crud_own" on public.contracts;
drop policy if exists "versions_crud_own" on public.contract_versions;
drop policy if exists "documents_crud_own" on public.contract_documents;
drop policy if exists "extracted_data_crud_own" on public.extracted_data;
drop policy if exists "signature_packets_crud_own" on public.signature_packets;

create policy "profiles_select_own" on public.profiles for select to authenticated using ((select auth.uid()) = id);
create policy "profiles_insert_own" on public.profiles for insert to authenticated with check ((select auth.uid()) = id);
create policy "profiles_update_own" on public.profiles for update to authenticated using ((select auth.uid()) = id) with check ((select auth.uid()) = id);

create policy "licenses_select_own" on public.licenses for select to authenticated using ((select auth.uid()) = user_id);

create policy "folders_crud_own" on public.folders for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

create policy "templates_select_own_or_shared" on public.master_templates for select to authenticated using (is_shared or (select auth.uid()) = user_id);
create policy "templates_insert_own" on public.master_templates for insert to authenticated with check ((select auth.uid()) = user_id and not is_shared);
create policy "templates_update_own" on public.master_templates for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id and not is_shared);
create policy "templates_delete_own" on public.master_templates for delete to authenticated using ((select auth.uid()) = user_id and not is_shared);

create policy "matters_crud_own" on public.contract_matters for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "contracts_crud_own" on public.contracts for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "versions_crud_own" on public.contract_versions for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "documents_crud_own" on public.contract_documents for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "extracted_data_crud_own" on public.extracted_data for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "signature_packets_crud_own" on public.signature_packets for all to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

do $$
begin
  insert into storage.buckets (id, name, public, file_size_limit)
  values ('contract-documents', 'contract-documents', false, 52428800)
  on conflict (id) do update set public = false, file_size_limit = 52428800;
exception
  when others then
    raise notice 'Storage bucket was not created automatically: %. Create the private bucket contract-documents in Storage and run supabase/storage-policies.sql.', sqlerrm;
end $$;

do $$
begin
  execute 'drop policy if exists "storage_select_own_contract_documents" on storage.objects';
  execute 'drop policy if exists "storage_insert_own_contract_documents" on storage.objects';
  execute 'drop policy if exists "storage_update_own_contract_documents" on storage.objects';
  execute 'drop policy if exists "storage_delete_own_contract_documents" on storage.objects';

  execute $policy$
    create policy "storage_select_own_contract_documents"
    on storage.objects for select to authenticated
    using (bucket_id = 'contract-documents' and (storage.foldername(name))[1] = (select auth.uid())::text)
  $policy$;

  execute $policy$
    create policy "storage_insert_own_contract_documents"
    on storage.objects for insert to authenticated
    with check (bucket_id = 'contract-documents' and (storage.foldername(name))[1] = (select auth.uid())::text)
  $policy$;

  execute $policy$
    create policy "storage_update_own_contract_documents"
    on storage.objects for update to authenticated
    using (bucket_id = 'contract-documents' and (storage.foldername(name))[1] = (select auth.uid())::text)
    with check (bucket_id = 'contract-documents' and (storage.foldername(name))[1] = (select auth.uid())::text)
  $policy$;

  execute $policy$
    create policy "storage_delete_own_contract_documents"
    on storage.objects for delete to authenticated
    using (bucket_id = 'contract-documents' and (storage.foldername(name))[1] = (select auth.uid())::text)
  $policy$;
exception
  when others then
    raise notice 'Storage policies were not configured automatically: %. Create the private bucket contract-documents in Storage and run supabase/storage-policies.sql.', sqlerrm;
end $$;
