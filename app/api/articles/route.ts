import { supabaseServer } from '../../lib/supabaseServer'
import { requireStaffUser } from '../../lib/authServer'

export async function GET(req: Request) {
  const url = new URL(req.url)
  const published = url.searchParams.get('published')

  let query = supabaseServer.from('articles').select('*').order('created_at', { ascending: false })
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
    excerpt: body.excerpt,
    content: body.content,
    category: body.category || 'NEWS',
    author: body.author || 'Zero Entertainment',
    read_time: body.read_time || '3 min read',
    hot: Boolean(body.hot),
    featured: Boolean(body.featured),
    published: Boolean(body.published),
    cover_url: body.cover_url || null,
  }

  const { data, error } = await supabaseServer.from('articles').insert([payload])
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

export async function DELETE(req: Request) {
  await requireStaffUser(req)
  const url = new URL(req.url)
  const id = url.searchParams.get('id')

  if (!id) {
    return new Response(JSON.stringify({ error: 'ID is required' }), { status: 400 })
  }

  const { error } = await supabaseServer.from('articles').delete().eq('id', id)
  
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    })
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  })
}

export async function PUT(req: Request) {
  await requireStaffUser(req)
  const url = new URL(req.url)
  const id = url.searchParams.get('id')

  if (!id) {
    return new Response(JSON.stringify({ error: 'ID is required' }), { status: 400 })
  }

  const body = await req.json()

  const payload = {
    title: body.title,
    excerpt: body.excerpt,
    content: body.content,
    category: body.category,
    author: body.author,
    read_time: body.read_time,
    hot: Boolean(body.hot),
    featured: Boolean(body.featured),
    published: Boolean(body.published),
    cover_url: body.cover_url || null,
  }

  const { data, error } = await supabaseServer
    .from('articles')
    .update(payload)
    .eq('id', id)
    
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    })
  }

  return new Response(JSON.stringify({ success: true, data }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  })
}
