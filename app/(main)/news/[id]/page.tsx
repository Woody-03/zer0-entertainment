import { supabaseServer } from '../../../lib/supabaseServer'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

export default async function ArticleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const { data: article, error } = await supabaseServer
    .from('articles')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !article || !article.published) {
    notFound()
  }

  return (
    <div style={{ background: '#050d1a', minHeight: '100vh', paddingBottom: 80 }}>
      {/* Header Section */}
      <div style={{
        background: 'linear-gradient(135deg, #070f1e, #0a2a5e)',
        padding: '80px 40px 60px',
        borderBottom: '1px solid rgba(26,111,255,0.2)',
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          
          <Link href="/news" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            color: '#3a6a9a', fontSize: 13, fontWeight: 600,
            textDecoration: 'none', marginBottom: 32,
            background: 'rgba(26,111,255,0.05)', padding: '8px 16px',
            borderRadius: 100, border: '1px solid rgba(26,111,255,0.1)'
          }}>
            ← Back to News
          </Link>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 24 }}>
            <span style={{
              background: 'rgba(26,111,255,0.2)',
              color: '#1a6fff',
              fontSize: 11, fontWeight: 700,
              padding: '6px 16px', borderRadius: 100,
              letterSpacing: 1,
            }}>
              {article.category}
            </span>
            {article.hot && (
              <span style={{
                background: 'rgba(255,60,60,0.15)',
                color: '#ff6060',
                fontSize: 11, fontWeight: 700,
                padding: '6px 16px', borderRadius: 100,
                letterSpacing: 1,
              }}>
                HOT
              </span>
            )}
          </div>

          <h1 style={{ fontSize: 48, fontWeight: 800, color: '#fff', marginBottom: 24, lineHeight: 1.2 }}>
            {article.title}
          </h1>

          <p style={{ fontSize: 18, color: '#6a8aaa', lineHeight: 1.7, marginBottom: 32 }}>
            {article.excerpt}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, paddingTop: 32, borderTop: '1px solid rgba(26,111,255,0.1)' }}>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 11, color: '#3a6a9a', letterSpacing: 1, marginBottom: 4 }}>WRITTEN BY</div>
              <div style={{ fontSize: 14, color: '#e8f0ff', fontWeight: 600 }}>{article.author}</div>
            </div>
            <div style={{ width: 1, height: 30, background: 'rgba(26,111,255,0.2)' }} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 11, color: '#3a6a9a', letterSpacing: 1, marginBottom: 4 }}>PUBLISHED ON</div>
              <div style={{ fontSize: 14, color: '#e8f0ff', fontWeight: 600 }} suppressHydrationWarning>
                {new Date(article.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
            </div>
            <div style={{ width: 1, height: 30, background: 'rgba(26,111,255,0.2)' }} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 11, color: '#3a6a9a', letterSpacing: 1, marginBottom: 4 }}>READ TIME</div>
              <div style={{ fontSize: 14, color: '#e8f0ff', fontWeight: 600 }}>{article.read_time}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div style={{ maxWidth: 800, margin: '60px auto 0', padding: '0 40px' }}>
        <div style={{
          fontSize: 17,
          color: '#9db4d8',
          lineHeight: 1.9,
          whiteSpace: 'pre-wrap',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          {article.content}
        </div>

        <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid rgba(26,111,255,0.1)', display: 'flex', justifyContent: 'center' }}>
          <Link href="/news" style={{
            background: 'linear-gradient(135deg, rgba(26,111,255,0.1), rgba(5,13,26,0.9))',
            border: '1px solid rgba(26,111,255,0.2)',
            color: '#1a6fff', padding: '14px 32px', borderRadius: 100, textDecoration: 'none',
            fontSize: 14, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8,
            transition: 'all 0.2s ease', cursor: 'pointer'
          }}>
            Read More Articles
          </Link>
        </div>
      </div>
    </div>
  )
}
