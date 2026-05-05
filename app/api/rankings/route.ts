import { supabaseServer } from '../../lib/supabaseServer'
import { requireStaffUser } from '../../lib/authServer'
export const dynamic = 'force-dynamic'


export async function GET(req: Request) {
  const url = new URL(req.url)
  const published = url.searchParams.get('published')

  let query = supabaseServer.from('rankings').select('*').order('rank', { ascending: true })
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
    artist_name: body.artist_name,
    rank: Number(body.rank) || 1,
    genre: body.genre || 'AFROBEATS',
    streams: Number(body.streams) || 0,
    weeks: Number(body.weeks) || 1,
    change: body.change || 'stable',
    published: Boolean(body.published),
  }

  const { data, error } = await supabaseServer.from('rankings').insert([payload])
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
