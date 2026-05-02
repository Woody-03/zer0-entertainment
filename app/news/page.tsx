import Link from 'next/link'

const NEWS_ARTICLES = [
  {
    id: 1,
    category: 'MUSIC',
    title: 'Sierra Leone Music Awards 2025 Date Officially Announced',
    excerpt: 'The highly anticipated Sierra Leone Music Awards is returning this year with a bigger stage, more categories and surprise performances from top Salone artists.',
    author: 'Zero Entertainment',
    date: 'May 1, 2025',
    readTime: '3 min read',
    hot: true,
  },
  {
    id: 2,
    category: 'FASHION',
    title: 'Freetown Fashion Week 2025 Returns With Global Designers',
    excerpt: 'This December Freetown becomes the fashion capital of West Africa as local and international designers come together to celebrate African style and culture.',
    author: 'Zero Entertainment',
    date: 'April 28, 2025',
    readTime: '4 min read',
    hot: true,
  },
  {
    id: 3,
    category: 'MUSIC',
    title: 'Drizilik Drops Surprise Album Salone Vibes',
    excerpt: 'Without any prior announcement Sierra Leone music icon Drizilik has released a full studio album celebrating the sounds and culture of Sierra Leone.',
    author: 'Zero Entertainment',
    date: 'April 25, 2025',
    readTime: '2 min read',
    hot: false,
  },
  {
    id: 4,
    category: 'ARTISTS',
    title: 'Emmerson Bockarie Announces First World Tour',
    excerpt: 'Sierra Leone legend Emmerson Bockarie is taking Salone music to the world with a 12 city tour spanning Europe, North America and Africa.',
    author: 'Zero Entertainment',
    date: 'April 22, 2025',
    readTime: '3 min read',
    hot: false,
  },
  {
    id: 5,
    category: 'ENTERTAINMENT',
    title: 'SL Entertainment Summit 2025 Calls For Speakers',
    excerpt: 'The annual Sierra Leone Entertainment Summit is accepting applications from industry professionals, artists and creatives to speak at this year event.',
    author: 'Zero Entertainment',
    date: 'April 20, 2025',
    readTime: '2 min read',
    hot: false,
  },
  {
    id: 6,
    category: 'VIDEOS',
    title: 'Fantacee Wiz Drops Stunning Cinematic Music Video',
    excerpt: 'Freetown based artist Fantacee Wiz has released a visually breathtaking music video shot entirely on location across Sierra Leone showcasing the beauty of the country.',
    author: 'Zero Entertainment',
    date: 'April 18, 2025',
    readTime: '2 min read',
    hot: false,
  },
]

const CATEGORIES = ['ALL', 'MUSIC', 'FASHION', 'ARTISTS', 'ENTERTAINMENT', 'VIDEOS']

export default function NewsPage() {
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
            <button
              key={cat}
              className="cat-btn"
              style={{
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
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div style={{ padding: '60px 40px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          {/* Featured top article */}
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
                  {NEWS_ARTICLES[0].category}
                </span>
                <span style={{
                  background: 'rgba(255,60,60,0.15)',
                  color: '#ff6060',
                  fontSize: 10, fontWeight: 700,
                  padding: '4px 12px', borderRadius: 6,
                  letterSpacing: 1,
                }}>
                  BREAKING
                </span>
              </div>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: '#fff', marginBottom: 16, lineHeight: 1.3 }}>
                {NEWS_ARTICLES[0].title}
              </h2>
              <p style={{ fontSize: 14, color: '#6a8aaa', lineHeight: 1.8, marginBottom: 24 }}>
                {NEWS_ARTICLES[0].excerpt}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                <span style={{ fontSize: 12, color: '#3a6a9a' }}>{NEWS_ARTICLES[0].date}</span>
                <span style={{ fontSize: 12, color: '#3a6a9a' }}>{NEWS_ARTICLES[0].readTime}</span>
              </div>
              <Link href={`/news/${NEWS_ARTICLES[0].id}`} style={{
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

          {/* Articles grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 24,
          }}>
            {NEWS_ARTICLES.slice(1).map(article => (
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
                    <span style={{ fontSize: 11, color: '#3a6a9a' }}>{article.date}</span>
                    <span style={{ fontSize: 11, color: '#3a6a9a' }}>{article.readTime}</span>
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
      </div>

    </div>
  )
}