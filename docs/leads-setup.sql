-- Run this in Supabase → SQL Editor to create the leads table.

create table if not exists public.leads (
  id          bigint generated always as identity primary key,
  name        text not null,
  email       text not null,
  phone       text not null,
  subject     text,
  message     text not null,
  created_at  timestamptz not null default now()
);

-- Row Level Security: keep it ON. We insert from the server using the
-- service-role key, which bypasses RLS, so no public policies are needed.
-- This means the table is NOT readable/writable by the anon (public) key.
alter table public.leads enable row level security;
