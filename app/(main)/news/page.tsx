import Link from 'next/link'
import { supabaseServer } from '../../lib/supabaseServer'

export const dynamic = 'force-dynamic'

interface Article {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  read_time: string
  hot: boolean
  featured: boolean
  published: boolean
  cover_url?: string
  created_at: string
  updated_at: string
}

const CATEGORIES = ['ALL', 'NEWS', 'FASHION', 'MUSIC', 'ARTISTS', 'ENTERTAINMENT', 'VIDEOS']

export default async function NewsPage() {
  const { data: articlesData } = await supabaseServer
    .from('articles')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false })

  const articles: Article[] = articlesData || []

  return (
    <div style={{ background: '#050d1a', minHeight: '100vh' }}>
      <style>{`
        .news-card {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .news-card:hover {
          transform: translateY(-4px);
          border-color: rgba(26,111,255,0.4) !important;
          box-shadow: 0 16px 48px rgba(26,111,255,0.15);
        }
        .cat-btn {
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .cat-btn:hover {
          background: rgba(26,111,255,0.2) !important;
          color: #fff !important;
        }
      `}</style>

      {/* Page Header */}
      <div style={{
        background: 'linear-gradient(135deg, #070f1e, #0a2a5e)',
        padding: '60px 40px',
        borderBottom: '1px solid rgba(26,111,255,0.2)',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ fontSize: 11, color: '#1a6fff', letterSpacing: 3, marginBottom: 12 }}>
            STAY INFORMED
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 800, color: '#fff', marginBottom: 12 }}>
            Entertainment News
          </h1>
          <p style={{ fontSize: 16, color: '#6a8aaa', maxWidth: 500 }}>
            Breaking news, updates and stories from Sierra Leone entertainment scene
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div style={{
        padding: '24px 40px',
        borderBottom: '1px solid rgba(26,111,255,0.1)',
        background: '#070f1e',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {CATEGORIES.map(cat => (
            <button key={cat} className="cat-btn" style={{
              padding: '8px 20px',
              background: cat === 'ALL' ? '#1a6fff' : 'rgba(26,111,255,0.1)',
              border: '1px solid rgba(26,111,255,0.2)',
              borderRadius: 100,
              color: cat === 'ALL' ? '#fff' : '#6a8aaa',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 1,
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles */}
      <div style={{ padding: '60px 40px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          {articles.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '80px 40px',
              color: '#3a6a9a',
            }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>📰</div>
              <h2 style={{ fontSize: 22, fontWeight: 700, color: '#4a6a8a', marginBottom: 8 }}>
                No articles yet
              </h2>
              <p style={{ fontSize: 14 }}>
                Articles posted from the admin dashboard will appear here
              </p>
            </div>
          ) : (
            <div>
              {/* Featured top article */}
              {articles[0] && (
                <div className="news-card" style={{
                  background: 'linear-gradient(135deg, #0a2a5e, #0d1f42)',
                  border: '1px solid rgba(26,111,255,0.3)',
                  borderRadius: 20,
                  padding: 40,
                  marginBottom: 32,
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 40,
                  alignItems: 'center',
                }}>
                  <div>
                    <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
                      <span style={{
                        background: 'rgba(26,111,255,0.2)',
                        color: '#1a6fff',
                        fontSize: 10, fontWeight: 700,
                        padding: '4px 12px', borderRadius: 6,
                        letterSpacing: 1,
                      }}>
                        {articles[0].category}
                      </span>
                      {articles[0].hot && (
                        <span style={{
                          background: 'rgba(255,60,60,0.15)',
                          color: '#ff6060',
                          fontSize: 10, fontWeight: 700,
                          padding: '4px 12px', borderRadius: 6,
                        }}>
                          BREAKING
                        </span>
                      )}
                    </div>
                    <h2 style={{ fontSize: 28, fontWeight: 800, color: '#fff', marginBottom: 16, lineHeight: 1.3 }}>
                      {articles[0].title}
                    </h2>
                    <p style={{ fontSize: 14, color: '#6a8aaa', lineHeight: 1.8, marginBottom: 24 }}>
                      {articles[0].excerpt}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                      <span style={{ fontSize: 12, color: '#3a6a9a' }} suppressHydrationWarning>
                        {new Date(articles[0].created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span style={{ fontSize: 12, color: '#3a6a9a' }}>{articles[0].read_time}</span>
                    </div>
                    <Link href={`/news/${articles[0].id}`} style={{
                      padding: '12px 28px',
                      background: '#1a6fff',
                      borderRadius: 8,
                      color: '#fff',
                      fontSize: 13,
                      fontWeight: 700,
                      textDecoration: 'none',
                      display: 'inline-block',
                    }}>
                      Read Full Story
                    </Link>
                  </div>
                  <div style={{
                    background: 'rgba(26,111,255,0.1)',
                    borderRadius: 16,
                    height: 280,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 80,
                    border: '1px solid rgba(26,111,255,0.2)',
                  }}>
                    📰
                  </div>
                </div>
              )}

              {/* Rest of articles */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 24,
              }}>
                {articles.slice(1).map(article => (
                  <div key={article.id} className="news-card" style={{
                    background: 'linear-gradient(135deg, rgba(26,111,255,0.05), rgba(5,13,26,0.9))',
                    border: '1px solid rgba(26,111,255,0.12)',
                    borderRadius: 20,
                    padding: 28,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                      <span style={{
                        background: 'rgba(26,111,255,0.15)',
                        color: '#1a6fff',
                        fontSize: 10, fontWeight: 700,
                        padding: '4px 10px', borderRadius: 6,
                        letterSpacing: 1,
                      }}>
                        {article.category}
                      </span>
                      {article.hot && (
                        <span style={{
                          background: 'rgba(255,60,60,0.15)',
                          color: '#ff6060',
                          fontSize: 10, fontWeight: 700,
                          padding: '4px 10px', borderRadius: 6,
                        }}>
                          HOT
                        </span>
                      )}
                    </div>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: '#e8f0ff', marginBottom: 12, lineHeight: 1.4 }}>
                      {article.title}
                    </h3>
                    <p style={{ fontSize: 13, color: '#6a8aaa', lineHeight: 1.7, marginBottom: 20 }}>
                      {article.excerpt}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, borderTop: '1px solid rgba(26,111,255,0.08)' }}>
                      <div style={{ display: 'flex', gap: 12 }}>
                        <span style={{ fontSize: 11, color: '#3a6a9a' }} suppressHydrationWarning>
                          {new Date(article.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span style={{ fontSize: 11, color: '#3a6a9a' }}>{article.read_time}</span>
                      </div>
                      <Link href={`/news/${article.id}`} style={{
                        fontSize: 12, color: '#1a6fff',
                        textDecoration: 'none', fontWeight: 600,
                      }}>
                        Read More →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}