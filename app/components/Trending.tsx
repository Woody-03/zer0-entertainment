import { supabaseServer } from '../lib/supabaseServer'
import Link from 'next/link'

function formatTimeAgo(dateStr: string) {
  const date = new Date(dateStr)
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)
  
  if (diffInSeconds < 60) return `${diffInSeconds}s ago`
  const diffInMinutes = Math.floor(diffInSeconds / 60)
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`
  const diffInHours = Math.floor(diffInMinutes / 60)
  if (diffInHours < 24) return `${diffInHours}h ago`
  const diffInDays = Math.floor(diffInHours / 24)
  return `${diffInDays}d ago`
}

export default async function Trending() {
  const { data: articles } = await supabaseServer
    .from('articles')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false })
    .limit(8)

  const trendingPosts = articles || []

  // Create a duplicate array for the seamless CSS ticker
  const tickerItems = [...trendingPosts, ...trendingPosts]

  return (
    <>
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-content {
          display: flex;
          animation: ticker 35s linear infinite;
          width: max-content;
        }
        .ticker-content:hover {
          animation-play-state: paused;
        }
        .trend-card {
          transition: all 0.3s ease;
          cursor: pointer;
          text-decoration: none;
          display: block;
        }
        .trend-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(26,111,255,0.2);
          border-color: rgba(26,111,255,0.4) !important;
        }
      `}</style>

      {/* News Ticker */}
      <div style={{
        background: '#1a6fff',
        padding: '10px 0',
        overflow: 'hidden',
      }}>
        <div style={{ overflow: 'hidden' }}>
          <div className="ticker-content">
            {tickerItems.length > 0 ? tickerItems.map((item, i) => (
              <span key={i} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                marginRight: 60,
                fontSize: 12,
                fontWeight: 600,
                whiteSpace: 'nowrap',
                color: '#fff',
              }}>
                <span style={{
                  background: 'rgba(255,255,255,0.25)',
                  padding: '2px 8px',
                  borderRadius: 3,
                  fontSize: 10,
                  letterSpacing: 1,
                }}>{item.category}</span>
                {item.title}
                <span style={{ opacity: 0.5 }}>•</span>
              </span>
            )) : (
               <span style={{ color: '#fff', fontSize: 12, fontWeight: 600, padding: '0 20px' }}>
                 No recent updates.
               </span>
            )}
          </div>
        </div>
      </div>

      {/* Trending Cards */}
      <section style={{
        padding: '80px 40px',
        background: '#070f1e',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          {/* Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 40,
          }}>
            <div>
              <div style={{
                fontSize: 11, color: '#1a6fff',
                letterSpacing: 3, marginBottom: 8,
              }}>WHAT'S HOT RIGHT NOW</div>
              <h2 style={{
                fontSize: 36, fontWeight: 800, color: '#fff',
              }}>Trending in Salone</h2>
            </div>
            <Link href="/news" style={{
              background: 'transparent',
              border: '1px solid rgba(26,111,255,0.3)',
              borderRadius: 8, color: '#1a6fff', textDecoration: 'none',
              padding: '10px 20px', fontSize: 13,
              fontWeight: 600, cursor: 'pointer',
            }}>
              View All →
            </Link>
          </div>

          {/* Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
          }}>
            {trendingPosts.map(item => (
              <Link href={`/news/${item.id}`} key={item.id} className="trend-card" style={{
                background: 'linear-gradient(135deg, rgba(26,111,255,0.06), rgba(10,61,158,0.04))',
                border: '1px solid rgba(26,111,255,0.15)',
                borderRadius: 16,
                padding: 24,
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 14,
                }}>
                  <span style={{
                    background: 'rgba(26,111,255,0.15)',
                    color: '#1a6fff',
                    fontSize: 10, fontWeight: 700,
                    padding: '4px 10px', borderRadius: 6,
                    letterSpacing: 1,
                  }}>
                    {item.category}
                  </span>
                  {item.hot && (
                    <span style={{
                      background: 'rgba(255,60,60,0.15)',
                      color: '#ff6060',
                      fontSize: 10, fontWeight: 700,
                      padding: '4px 10px', borderRadius: 6,
                      letterSpacing: 1,
                    }}>
                      🔥 HOT
                    </span>
                  )}
                </div>
                <h3 style={{
                  fontSize: 15, fontWeight: 700,
                  lineHeight: 1.5, marginBottom: 12,
                  color: '#e8f0ff',
                }}>{item.title}</h3>
                <div style={{
                  fontSize: 11, color: '#3a6a9a',
                }} suppressHydrationWarning>{formatTimeAgo(item.created_at)}</div>
              </Link>
            ))}
            
            {trendingPosts.length === 0 && (
               <div style={{ color: '#3a6a9a', gridColumn: '1 / -1' }}>
                 No trending posts available at the moment.
               </div>
            )}
          </div>

        </div>
      </section>
    </>
  )
}