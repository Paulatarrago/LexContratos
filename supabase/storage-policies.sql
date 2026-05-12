-- LexContratos Storage setup
-- Run this only if the Storage section in schema.sql showed a notice/error.
-- First create a private bucket in Supabase Storage named: contract-documents

insert into storage.buckets (id, name, public, file_size_limit)
values ('contract-documents', 'contract-documents', false, 52428800)
on conflict (id) do update set public = false, file_size_limit = 52428800;

drop policy if exists "storage_select_own_contract_documents" on storage.objects;
drop policy if exists "storage_insert_own_contract_documents" on storage.objects;
drop policy if exists "storage_update_own_contract_documents" on storage.objects;
drop policy if exists "storage_delete_own_contract_documents" on storage.objects;

create policy "storage_select_own_contract_documents"
on storage.objects for select to authenticated
using (bucket_id = 'contract-documents' and (storage.foldername(name))[1] = (select auth.uid())::text);

create policy "storage_insert_own_contract_documents"
on storage.objects for insert to authenticated
with check (bucket_id = 'contract-documents' and (storage.foldername(name))[1] = (select auth.uid())::text);

create policy "storage_update_own_contract_documents"
on storage.objects for update to authenticated
using (bucket_id = 'contract-documents' and (storage.foldername(name))[1] = (select auth.uid())::text)
with check (bucket_id = 'contract-documents' and (storage.foldername(name))[1] = (select auth.uid())::text);

create policy "storage_delete_own_contract_documents"
on storage.objects for delete to authenticated
using (bucket_id = 'contract-documents' and (storage.foldername(name))[1] = (select auth.uid())::text);
