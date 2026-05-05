import { supabaseServer } from '../../../lib/supabaseServer'
import { requireStaffUser } from '../../../lib/authServer'
export const dynamic = 'force-dynamic'


export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const { data, error } = await supabaseServer
    .from('songs')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    })
  }

  return new Response(JSON.stringify({ data }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  })
}

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  await requireStaffUser(req)
  const { id } = await params
  const body = await req.json()

  const { data, error } = await supabaseServer
    .from('songs')
    .update({
      ...body,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    })
  }

  return new Response(JSON.stringify({ data }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  })
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  await requireStaffUser(req)
  const { id } = await params
  const { data, error } = await supabaseServer.from('songs').delete().eq('id', id)

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    })
  }

  return new Response(JSON.stringify({ data }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  })
}
