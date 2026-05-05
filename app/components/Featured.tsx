import { supabaseServer } from '../lib/supabaseServer'
import Link from 'next/link'

export default async function Featured() {
  const { data: articles } = await supabaseServer
    .from('articles')
    .select('*')
    .eq('published', true)
    .eq('featured', true)
    .order('created_at', { ascending: false })
    .limit(3)

  const featuredPosts = articles || []

  return (
    <>
      <style>{`
        .feat-card {
          transition: all 0.3s ease;
          cursor: pointer;
          text-decoration: none;
          display: block;
        }
        .feat-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(26,111,255,0.2);
        }
        .read-more {
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .read-more:hover {
          background: rgba(26,111,255,0.2) !important;
          color: #7ab0ff !important;
        }
      `}</style>

      <section style={{
        padding: '80px 40px',
        background: '#050d1a',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          {/* Header */}
          <div style={{ marginBottom: 40 }}>
            <div style={{
              fontSize: 11, color: '#1a6fff',
              letterSpacing: 3, marginBottom: 8,
            }}>HANDPICKED FOR YOU</div>
            <h2 style={{
              fontSize: 36, fontWeight: 800, color: '#fff',
            }}>Featured This Week</h2>
          </div>

          {/* Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 24,
          }}>
            {featuredPosts.map((item, index) => {
              const isHighlight = index === 0 // Make the most recent featured post highlighted
              return (
                <Link href={`/news/${item.id}`} key={item.id} className="feat-card" style={{
                  background: isHighlight
                    ? 'linear-gradient(135deg, #0a2a5e, #0d1f42)'
                    : 'linear-gradient(135deg, rgba(26,111,255,0.05), rgba(5,13,26,0.9))',
                  border: `1px solid ${isHighlight
                    ? 'rgba(26,111,255,0.4)'
                    : 'rgba(26,111,255,0.12)'}`,
                  borderRadius: 20,
                  padding: 32,
                  position: 'relative',
                  overflow: 'hidden',
                }}>

                  {/* Glow for highlighted card */}
                  {isHighlight && (
                    <div style={{
                      position: 'absolute',
                      top: -40, right: -40,
                      width: 160, height: 160,
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(26,111,255,0.3), transparent)',
                      pointerEvents: 'none',
                    }} />
                  )}

                  {/* Top row */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 20,
                  }}>
                    <span style={{
                      fontSize: 10, color: '#4a90d9',
                      letterSpacing: 2, textTransform: 'uppercase',
                    }}>{item.category}</span>
                    <span style={{
                      background: 'rgba(26,111,255,0.2)',
                      color: '#7ab0ff',
                      fontSize: 9, padding: '4px 10px',
                      borderRadius: 6, letterSpacing: 1,
                      fontWeight: 700,
                    }}>FEATURED</span>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: 22, fontWeight: 800,
                    marginBottom: 6, color: '#fff',
                  }}>{item.title}</h3>

                  {/* Subtitle / Author */}
                  <div style={{
                    fontSize: 12, color: '#1a6fff',
                    marginBottom: 14, fontWeight: 500,
                  }}>By {item.author}</div>

                  {/* Description */}
                  <p style={{
                    fontSize: 13, color: '#6a8aaa',
                    lineHeight: 1.7,
                  }}>{item.excerpt}</p>

                  {/* Button */}
                  <div className="read-more" style={{
                    marginTop: 24,
                    background: 'transparent',
                    border: '1px solid rgba(26,111,255,0.3)',
                    borderRadius: 8,
                    color: '#1a6fff',
                    padding: '10px 20px',
                    fontSize: 12, fontWeight: 600,
                    fontFamily: 'inherit',
                    display: 'inline-block',
                  }}>
                    Read More →
                  </div>

                </Link>
              )
            })}
            {featuredPosts.length === 0 && (
               <div style={{ color: '#3a6a9a', gridColumn: '1 / -1' }}>
                 No featured posts available at the moment.
               </div>
            )}
          </div>

        </div>
      </section>
    </>
  )
}