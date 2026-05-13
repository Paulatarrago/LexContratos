-- LexContratos: activate first admin user
-- Replace the email below and run this after creating the user.

insert into public.profiles (id, email, full_name, role, account_status, license_status)
select
  id,
  email,
  coalesce(raw_user_meta_data->>'full_name', email),
  'admin',
  'active',
  'active'
from auth.users
where email = 'TU_CORREO_AQUI'
on conflict (id) do update
set
  email = excluded.email,
  full_name = coalesce(public.profiles.full_name, excluded.full_name),
  role = 'admin',
  account_status = 'active',
  license_status = 'active',
  updated_at = now();

insert into public.licenses (user_id, status, plan, starts_at)
select id, 'active', 'internal', now()
from auth.users
where email = 'TU_CORREO_AQUI'
on conflict (user_id) do update
set status = 'active', plan = 'internal', updated_at = now();

update public.profiles
set license_status = 'active', role = 'admin', account_status = 'active', updated_at = now()
where email = 'TU_CORREO_AQUI';
