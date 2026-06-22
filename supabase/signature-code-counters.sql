-- LexContratos: safe signature code counters.
-- Run in Supabase SQL Editor after the base schema.
-- Purpose: generate unique final signature codes like SJ/CGC-2026-001.

create table if not exists public.signature_code_counters (
  id uuid primary key default gen_random_uuid(),
  company_code text not null,
  year int not null,
  last_number int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (company_code, year)
);

alter table public.signature_code_counters enable row level security;

revoke all on table public.signature_code_counters from anon;
revoke all on table public.signature_code_counters from authenticated;

create or replace function public.generate_signature_code(
  p_company_code text,
  p_year int default extract(year from now())::int
)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  v_company text;
  v_year int;
  v_next int;
  v_code text;
begin
  if auth.uid() is null then
    raise exception 'Usuario no autenticado';
  end if;

  v_company := upper(regexp_replace(coalesce(p_company_code, 'CGC'), '[^A-Z0-9]', '', 'g'));

  if v_company = '' then
    v_company := 'CGC';
  end if;

  v_year := coalesce(p_year, extract(year from now())::int);

  insert into public.signature_code_counters (company_code, year, last_number)
  values (v_company, v_year, 1)
  on conflict (company_code, year)
  do update
    set last_number = public.signature_code_counters.last_number + 1,
        updated_at = now()
  returning last_number into v_next;

  v_code := 'SJ/' || v_company || '-' || v_year || '-' || lpad(v_next::text, 3, '0');

  return v_code;
end;
$$;

grant execute on function public.generate_signature_code(text, int) to authenticated;

create unique index if not exists contract_matters_unique_signature_code
on public.contract_matters (folio)
where folio like 'SJ/%';
