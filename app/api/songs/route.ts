import { supabaseServer } from '../../lib/supabaseServer'
import { requireStaffUser } from '../../lib/authServer'

export async function GET(req: Request) {
  const url = new URL(req.url)
  const published = url.searchParams.get('published')

  let query = supabaseServer.from('songs').select('*').order('created_at', { ascending: false })
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
    title: body.title,
    artist: body.artist,
    genre: body.genre || 'AFROBEATS',
    duration: body.duration || '3:00',
    plays: Number(body.plays) || 0,
    new_release: Boolean(body.new_release),
    hot: Boolean(body.hot),
    published: Boolean(body.published),
    audio_url: body.audio_url || null,
    cover_url: body.cover_url || null,
  }

  const { data, error } = await supabaseServer.from('songs').insert([payload])
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
