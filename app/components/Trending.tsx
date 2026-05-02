'use client'

const TRENDING = [
  {
    id: 1, category: 'MUSIC',
    title: 'Drizilik Drops Surprise Album Salone Vibes',
    time: '2h ago', hot: true,
  },
  {
    id: 2, category: 'NEWS',
    title: 'Sierra Leone Music Awards 2025 Date Announced',
    time: '4h ago', hot: true,
  },
  {
    id: 3, category: 'FASHION',
    title: 'Freetown Fashion Week Returns This December',
    time: '6h ago', hot: false,
  },
  {
    id: 4, category: 'RANKINGS',
    title: 'Top 10 Most Streamed SL Artists This Month',
    time: '8h ago', hot: false,
  },
  {
    id: 5, category: 'ARTISTS',
    title: 'Emmerson Bockarie Announces World Tour Dates',
    time: '10h ago', hot: true,
  },
  {
    id: 6, category: 'VIDEOS',
    title: 'Fantacee Wiz Drops Stunning New Music Video',
    time: '12h ago', hot: false,
  },
]

export default function Trending() {
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
            {[...TRENDING, ...TRENDING].map((item, i) => (
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
            ))}
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
            <button style={{
              background: 'transparent',
              border: '1px solid rgba(26,111,255,0.3)',
              borderRadius: 8, color: '#1a6fff',
              padding: '10px 20px', fontSize: 13,
              fontWeight: 600, cursor: 'pointer',
            }}>
              View All →
            </button>
          </div>

          {/* Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
          }}>
            {TRENDING.map(item => (
              <div key={item.id} className="trend-card" style={{
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
                }}>{item.time}</div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}