-- LexContratos security hardening
-- Run in Supabase SQL Editor after the base schema.
-- Purpose:
-- 1) Prevent a normal signed-in user from granting themselves admin/licence access.
-- 2) Keep profile and license activation under administrator/server control.
-- 3) Preserve existing data and avoid destructive table operations.

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

drop trigger if exists prevent_profile_privilege_escalation on public.profiles;
create trigger prevent_profile_privilege_escalation
before insert or update on public.profiles
for each row execute function public.prevent_profile_privilege_escalation();

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own"
on public.profiles
for insert
to authenticated
with check (
  (select auth.uid()) = id
  and role = 'user'
  and account_status = 'active'
  and license_status = 'inactive'
);

drop policy if exists "profiles_update_own" on public.profiles;

drop policy if exists "licenses_insert_own" on public.licenses;
drop policy if exists "licenses_update_own" on public.licenses;
drop policy if exists "licenses_delete_own" on public.licenses;
drop policy if exists "licenses_crud_own" on public.licenses;

alter table public.profiles enable row level security;
alter table public.licenses enable row level security;

comment on function public.prevent_profile_privilege_escalation()
is 'Prevents authenticated client users from changing role, account status or license status. Admin/server operations must use service role.';
