-- Drop existing tables if they exist to ensure clean schema
drop table if exists rankings cascade;
drop table if exists songs cascade;
drop table if exists artists cascade;
drop table if exists articles cascade;
drop table if exists staff_profiles cascade;

-- Create staff profile table for admin role enforcement
create table staff_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  role text not null check (role in ('staff', 'admin')),
  full_name text,
  created_at timestamptz not null default now()
);

-- Articles / news
create table articles (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  excerpt text not null,
  content text not null,
  category text not null default 'NEWS',
  author text not null default 'Zero Entertainment',
  read_time text not null default '3 min read',
  hot boolean not null default false,
  featured boolean not null default false,
  published boolean not null default false,
  cover_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Artists
create table artists (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  genre text not null default 'AFROBEATS',
  location text not null default 'Sierra Leone',
  bio text,
  followers integer not null default 0,
  songs integer not null default 0,
  verified boolean not null default false,
  published boolean not null default false,
  photo_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Songs / music releases
create table songs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  artist text not null,
  genre text not null default 'AFROBEATS',
  duration text not null default '3:00',
  plays integer not null default 0,
  new_release boolean not null default false,
  hot boolean not null default false,
  published boolean not null default false,
  audio_url text,
  cover_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Rankings / charts
create table rankings (
  id uuid primary key default gen_random_uuid(),
  artist_name text not null,
  rank integer not null,
  genre text not null default 'AFROBEATS',
  streams integer not null default 0,
  weeks integer not null default 1,
  change text not null default 'stable',
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Utility function for staff roles in RLS policies
create or replace function public.is_staff_role() returns boolean language sql stable as $$
  select (
    auth.role() = 'service_role'
    or auth.jwt() -> 'user_metadata' ->> 'role' = 'staff'
    or auth.jwt() -> 'user_metadata' ->> 'role' = 'admin'
  );
$$;

-- Enable RLS for managed tables
alter table articles enable row level security;
alter table artists enable row level security;
alter table songs enable row level security;
alter table rankings enable row level security;

-- Public read policies for published content
create policy "Public read published articles" on articles
  for select using (published = true or public.is_staff_role());

create policy "Public read published artists" on artists
  for select using (published = true or public.is_staff_role());

create policy "Public read published songs" on songs
  for select using (published = true or public.is_staff_role());

create policy "Public read published rankings" on rankings
  for select using (published = true or public.is_staff_role());

-- Admin write policies for content tables
create policy "Staff can manage articles" on articles
  for all using (public.is_staff_role()) with check (public.is_staff_role());

create policy "Staff can manage artists" on artists
  for all using (public.is_staff_role()) with check (public.is_staff_role());

create policy "Staff can manage songs" on songs
  for all using (public.is_staff_role()) with check (public.is_staff_role());

create policy "Staff can manage rankings" on rankings
  for all using (public.is_staff_role()) with check (public.is_staff_role());
