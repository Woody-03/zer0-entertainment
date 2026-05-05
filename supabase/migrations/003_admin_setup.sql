-- Admin User Setup for Zero Entertainment
-- This file contains instructions for setting up admin users
-- Note: Cannot directly seed auth.users table as it's managed by Supabase Auth

/*
ADMIN USER SETUP INSTRUCTIONS:

1. Create admin user in Supabase Auth:
   - Go to Supabase Dashboard > Authentication > Users
   - Click "Add user"
   - Create user with email: admin@zero.com
   - Set password: zero2025
   - Enable "Auto confirm user"

2. Set user metadata for staff role:
   - After creating the user, go to the user details
   - Add to "user_metadata":
     {
       "role": "admin"
     }

3. Alternative: Use the app's admin auth flow
   - The app has fallback auth for development
   - Email: admin@zero.com
   - Password: zero2025
   - This creates a mock session for testing

4. For production, always use Supabase Auth with proper metadata

SAMPLE STAFF PROFILE INSERT (after user exists in auth.users):
-- Replace 'user-uuid-here' with actual user ID from auth.users
INSERT INTO staff_profiles (user_id, role, full_name) VALUES
('user-uuid-here', 'admin', 'Zero Entertainment Admin');

TESTING WORKFLOW:
- Use published=true content for public pages
- Use published=false content for admin approval workflow
- Test CRUD operations on all content types
- Verify RLS policies work correctly
*/