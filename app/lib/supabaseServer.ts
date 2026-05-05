import { createClient, SupabaseClient } from '@supabase/supabase-js'

let supabaseInstance: SupabaseClient | null = null

const getSupabaseServer = () => {
  if (supabaseInstance) return supabaseInstance

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  
  if (!supabaseUrl || !supabaseServiceRoleKey) {
    // Return a dummy client or handle gracefully during build
    // This prevents the entire build from crashing during module evaluation
    console.warn('Supabase environment variables are missing. Database operations will fail.')
    return createClient('https://placeholder.supabase.co', 'placeholder-key')
  }

  supabaseInstance = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })
  return supabaseInstance
}

// Export a proxy that initializes the client only when a property is accessed
export const supabaseServer = new Proxy({} as SupabaseClient, {
  get(_, prop) {
    const instance = getSupabaseServer()
    return (instance as any)[prop]
  }
})
