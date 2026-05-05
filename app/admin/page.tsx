import Link from 'next/link'
import { supabaseServer } from '../lib/supabaseServer'

export const dynamic = 'force-dynamic'

const QUICK_ACTIONS = [
  { label: 'Write News', href: '/admin/posts/create' },
  { label: 'Add Music', href: '/admin/post/music' },
  { label: 'Add Artist', href: '/admin/post/artist' },
  { label: 'Update Rankings', href: '/admin/post/rankings' },
]

export default async function AdminDashboardPage() {
  // Fetch real-time metrics
  const [
    { count: totalPosts },
    { count: totalArtists },
    { count: totalSongs },
    { data: recentPosts }
  ] = await Promise.all([
    supabaseServer.from('articles').select('*', { count: 'exact', head: true }),
    supabaseServer.from('artists').select('*', { count: 'exact', head: true }),
    supabaseServer.from('songs').select('*', { count: 'exact', head: true }),
    supabaseServer.from('articles').select('*').order('created_at', { ascending: false }).limit(3)
  ])

  const STATS = [
    { label: 'Total Posts', value: totalPosts || 0, change: 'All time articles' },
    { label: 'Total Artists', value: totalArtists || 0, change: 'Registered profiles' },
    { label: 'Songs Submitted', value: totalSongs || 0, change: 'Tracks available' },
    { label: 'Monthly Visitors', value: '10,240', change: '+18% this month (demo)' },
  ]

  return (
    <div style={{ display: 'grid', gap: 28 }}>
      <section style={{ display: 'grid', gap: 20 }}>
        <div>
          <p style={{ fontSize: 14, color: '#6a8aaa', marginBottom: 8 }}>Welcome back, admin.</p>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: '#fff', margin: 0 }}>Zero Entertainment content control</h1>
          <p style={{ fontSize: 15, color: '#9db4d8', maxWidth: 720, marginTop: 12 }}>
            Use the admin panel to publish news, update artists, manage music releases, and control the front page content feed.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18 }}>
          {STATS.map(stat => (
            <div key={stat.label} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 24 }}>
              <div style={{ fontSize: 13, color: '#7da8ff', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 10 }}>{stat.label}</div>
              <div style={{ fontSize: 34, fontWeight: 800, color: '#fff' }}>{stat.value}</div>
              <div style={{ marginTop: 10, fontSize: 13, color: '#8fa4cc' }}>{stat.change}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ display: 'grid', gap: 18 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 800, margin: 0, color: '#fff' }}>Quick content actions</h2>
            <p style={{ fontSize: 13, color: '#9db4d8', margin: '6px 0 0' }}>Fast access to the posts and media workflows.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
          {QUICK_ACTIONS.map(action => (
            <Link key={action.label} href={action.href} style={{ display: 'block', padding: 22, borderRadius: 18, background: 'rgba(26,111,255,0.06)', border: '1px solid rgba(26,111,255,0.12)', textDecoration: 'none', color: '#fff' }}>
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{action.label}</div>
              <div style={{ fontSize: 13, color: '#9db4d8' }}>Manage content for the front page and publish live updates.</div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ display: 'grid', gap: 18 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 800, margin: 0, color: '#fff' }}>Recent content</h2>
            <p style={{ fontSize: 13, color: '#9db4d8', margin: '6px 0 0' }}>Published and draft items controlled by staff.</p>
          </div>
        </div>

        <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 150px 120px 140px', background: 'rgba(255,255,255,0.03)', padding: '18px 22px', color: '#7da8ff', fontSize: 12, letterSpacing: 1 }}>            
            <span>Title</span>
            <span>Category</span>
            <span>Status</span>
            <span>Date</span>
          </div>
          {recentPosts?.map(post => (
            <div key={post.id} style={{ display: 'grid', gridTemplateColumns: '1fr 150px 120px 140px', padding: '18px 22px', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', background: !post.published ? 'rgba(255, 214, 0, 0.07)' : 'transparent' }}>
              <span style={{ color: '#eef3ff', fontWeight: 600 }}>{post.title}</span>
              <span style={{ color: '#9db4d8' }}>{post.category}</span>
              <span style={{ color: post.published ? '#7bff9e' : '#ffe06a', fontWeight: 700 }}>{post.published ? 'Published' : 'Draft'}</span>
              <span style={{ color: '#9db4d8' }} suppressHydrationWarning>{new Date(post.created_at).toLocaleDateString('en-US')}</span>
            </div>
          ))}
          {(!recentPosts || recentPosts.length === 0) && (
            <div style={{ padding: '40px', textAlign: 'center', color: '#6a8aaa' }}>
              No recent content.
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
