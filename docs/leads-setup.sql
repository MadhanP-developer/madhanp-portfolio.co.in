-- Run this in Supabase → SQL Editor to create the leads table.

create table if not exists public.leads (
  id          bigint generated always as identity primary key,
  name        text not null,
  email       text not null,
  phone       text not null,
  subject     text,
  message     text not null,
  consent     boolean not null default false,
  status      text not null default 'new'
                check (status in ('new','contacted','qualified','won','lost')),
  created_at  timestamptz not null default now()
);

-- If the table already exists from an earlier setup, add the columns:
alter table public.leads add column if not exists consent boolean not null default false;
alter table public.leads add column if not exists status text not null default 'new';
-- Restrict status to known values (drops first so re-running is safe):
alter table public.leads drop constraint if exists leads_status_check;
alter table public.leads add constraint leads_status_check
  check (status in ('new','contacted','qualified','won','lost'));

-- Row Level Security: keep it ON. We insert from the server using the
-- service-role key, which bypasses RLS, so no public policies are needed.
-- This means the table is NOT readable/writable by the anon (public) key.
alter table public.leads enable row level security;
