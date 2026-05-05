import { supabaseServer } from '../../lib/supabaseServer'
import { requireStaffUser } from '../../lib/authServer'

export async function GET(req: Request) {
  const url = new URL(req.url)
  const published = url.searchParams.get('published')

  let query = supabaseServer.from('artists').select('*').order('created_at', { ascending: false })
  if (published === 'true') {
    query = query.eq('published', true)
  }

  const { data, error } = await query
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

export async function POST(req: Request) {
  await requireStaffUser(req)
  const body = await req.json()

  const payload = {
    name: body.name,
    genre: body.genre || 'AFROBEATS',
    location: body.location || 'Sierra Leone',
    bio: body.bio || null,
    followers: Number(body.followers) || 0,
    songs: Number(body.songs) || 0,
    verified: Boolean(body.verified),
    published: Boolean(body.published),
    photo_url: body.photo_url || null,
  }

  const { data, error } = await supabaseServer.from('artists').insert([payload])
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    })
  }

  return new Response(JSON.stringify({ data }), {
    status: 201,
    headers: { 'content-type': 'application/json' },
  })
}
