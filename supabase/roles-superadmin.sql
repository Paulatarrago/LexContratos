-- LexContratos roles update
-- Run in Supabase SQL Editor after the base schema/hardening.
-- Purpose:
-- 1) Keep existing users intact.
-- 2) Allow three account roles:
--    - user: regular user.
--    - admin: can manage users, licenses, catalog formats and group letterheads.
--    - superadmin: full operational administration.

alter table public.profiles
drop constraint if exists profiles_role_check;

alter table public.profiles
add constraint profiles_role_check
check (role in ('user', 'admin', 'superadmin'));

comment on column public.profiles.role
is 'LexContratos role: user, admin, or superadmin. Superadmin should be reserved for platform ownership and security operations.';
