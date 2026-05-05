import Link from 'next/link'
import { supabaseServer } from '../../lib/supabaseServer'
import DeletePostButton from './DeletePostButton'

export const dynamic = 'force-dynamic'

export default async function AdminPostsPage() {
  const { data: posts } = await supabaseServer
    .from('articles')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: 28, fontWeight: 800, margin: 0, color: '#fff' }}>Posts Management</h1>
          <p style={{ fontSize: 14, color: '#9db4d8', margin: '4px 0 0' }}>Manage news, updates and articles.</p>
        </div>
        <Link href="/admin/posts/create" style={{
          display: 'flex', alignItems: 'center', gap: 8,
          background: 'linear-gradient(135deg, #1a6fff, #0a3d9e)',
          color: '#fff', padding: '10px 20px', borderRadius: 14,
          textDecoration: 'none', fontWeight: 700, fontSize: 14
        }}>
          {/* @ts-ignore */}
          <ion-icon name="create-outline" style={{ fontSize: 20 }}></ion-icon>
          Create Post
        </Link>
      </div>

      <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', background: 'rgba(255,255,255,0.03)', padding: '18px 24px', color: '#7da8ff', fontSize: 12, letterSpacing: 1, fontWeight: 700 }}>
          <span>TITLE</span>
          <span>CATEGORY</span>
          <span>STATUS</span>
          <span>DATE</span>
          <span style={{ textAlign: 'right' }}>ACTIONS</span>
        </div>
        {posts?.map(post => (
          <div key={post.id} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', padding: '18px 24px', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', background: !post.published ? 'rgba(255, 214, 0, 0.04)' : 'transparent' }}>
            <span style={{ color: '#fff', fontWeight: 600 }}>{post.title}</span>
            <span style={{ color: '#9db4d8', fontSize: 13 }}>{post.category}</span>
            <span style={{ color: post.published ? '#7bff9e' : '#ffe06a', fontWeight: 700, fontSize: 13 }}>
              {post.published ? 'Published' : 'Draft'}
            </span>
            <span style={{ color: '#9db4d8', fontSize: 13 }} suppressHydrationWarning>
              {new Date(post.created_at).toLocaleDateString('en-US')}
            </span>
            <div style={{ textAlign: 'right', display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
              <Link href={`/admin/posts/${post.id}/edit`} style={{
                background: 'rgba(26,111,255,0.1)', border: '1px solid rgba(26,111,255,0.3)',
                color: '#1a6fff', padding: '6px 12px', borderRadius: 8, textDecoration: 'none',
                fontSize: 12, fontWeight: 700, display: 'inline-block'
              }}>
                Edit
              </Link>
              <DeletePostButton id={post.id} />
            </div>
          </div>
        ))}
        {(!posts || posts.length === 0) && (
          <div style={{ padding: '40px', textAlign: 'center', color: '#6a8aaa' }}>
            No posts found. Create your first post!
          </div>
        )}
      </div>
    </div>
  )
}
