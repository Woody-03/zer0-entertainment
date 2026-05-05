-- ============================================================================
-- ADMIN CREDENTIALS FOR LOCAL DEVELOPMENT:
-- Email: admin@zero.com
-- Password: zero2025
-- ============================================================================

-- Create an admin user for local development
-- WARNING: This is for development/seed purposes only!

-- 1. Insert into auth.users
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  recovery_sent_at,
  last_sign_in_at,
  raw_app_meta_data,
  raw_user_meta_data,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
)
VALUES (
  '00000000-0000-0000-0000-000000000000',
  'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', -- predetermined UUID
  'authenticated',
  'authenticated',
  'admin@zero.com',
  crypt('zero2025', gen_salt('bf')), -- bcrypt hash of password
  current_timestamp,
  current_timestamp,
  current_timestamp,
  '{"provider":"email","providers":["email"]}',
  '{"role":"admin"}',
  current_timestamp,
  current_timestamp,
  '',
  '',
  '',
  ''
) ON CONFLICT (id) DO NOTHING;

-- 2. Insert into auth.identities
INSERT INTO auth.identities (
  id,
  user_id,
  provider_id,
  identity_data,
  provider,
  last_sign_in_at,
  created_at,
  updated_at
)
VALUES (
  'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
  'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
  'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
  format('{"sub":"%s","email":"%s"}', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'admin@zero.com')::jsonb,
  'email',
  current_timestamp,
  current_timestamp,
  current_timestamp
) ON CONFLICT (provider_id, provider) DO NOTHING;

-- 3. Insert into public.staff_profiles
INSERT INTO public.staff_profiles (
  user_id,
  role,
  full_name
)
SELECT 
  'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
  'admin',
  'Zero Entertainment Admin'
WHERE NOT EXISTS (
  SELECT 1 FROM public.staff_profiles WHERE user_id = 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11'
);
