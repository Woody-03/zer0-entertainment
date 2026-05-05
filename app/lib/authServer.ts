import { supabaseServer } from './supabaseServer'

export type StaffUser = {
  id: string
  email: string | null
  role: string | null
}

export async function getStaffUserFromRequest(req: Request): Promise<StaffUser | null> {
  const authHeader = req.headers.get('authorization') ?? ''
  const accessToken = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : authHeader

  if (!accessToken) {
    return null
  }

  const { data, error } = await supabaseServer.auth.getUser(accessToken)
  if (error || !data.user) {
    return null
  }

  const role = data.user.user_metadata?.role ?? data.user.user_metadata?.role ?? null
  if (role !== 'staff' && role !== 'admin') {
    return null
  }

  return {
    id: data.user.id,
    email: data.user.email ?? null,
    role,
  }
}

export async function requireStaffUser(req: Request) {
  const staff = await getStaffUserFromRequest(req)
  if (!staff) {
    throw new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'content-type': 'application/json' },
    })
  }
  return staff
}
