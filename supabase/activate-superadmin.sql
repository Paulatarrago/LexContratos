-- LexContratos initial super administrator activation.
-- Run after supabase/roles-superadmin.sql.
-- Replace the email below with the account that should control global settings.

with target_user as (
  select
    id,
    email,
    coalesce(raw_user_meta_data->>'full_name', email) as full_name
  from auth.users
  where lower(email) = lower('tu-correo@ejemplo.com')
)
insert into public.profiles (id, email, full_name, role, license_status, account_status)
select id, email, full_name, 'superadmin', 'active', 'active'
from target_user
on conflict (id) do update
set
  role = 'superadmin',
  license_status = 'active',
  account_status = 'active',
  updated_at = now();

with target_user as (
  select id
  from auth.users
  where lower(email) = lower('tu-correo@ejemplo.com')
)
insert into public.licenses (user_id, status, plan, starts_at)
select id, 'active', 'internal', now()
from target_user
on conflict (user_id) do update
set
  status = 'active',
  plan = 'internal',
  updated_at = now();
