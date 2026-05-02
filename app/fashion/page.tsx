import Link from 'next/link'

const FASHION_POSTS = [
  {
    id: 1,
    category: 'TRENDS',
    title: 'Freetown Fashion Week 2025 — Everything You Need To Know',
    excerpt: 'The most anticipated fashion event in West Africa is back. Here is your complete guide to this year Freetown Fashion Week featuring local and international designers.',
    date: 'May 1, 2025',
    readTime: '5 min read',
    hot: true,
    featured: true,
    emoji: '👗',
  },
  {
    id: 2,
    category: 'STYLE',
    title: 'How Sierra Leone Artists Are Influencing African Fashion',
    excerpt: 'From Drizilik signature street style to Emmerson timeless Kente looks, Salone artists are setting trends across the continent.',
    date: 'April 28, 2025',
    readTime: '4 min read',
    hot: true,
    featured: false,
    emoji: '✨',
  },
  {
    id: 3,
    category: 'DESIGNERS',
    title: 'Meet The Top 5 Fashion Designers From Sierra Leone',
    excerpt: 'These five talented designers are putting Sierra Leone on the global fashion map with their unique blend of African tradition and modern style.',
    date: 'April 25, 2025',
    readTime: '6 min read',
    hot: false,
    featured: false,
    emoji: '🎨',
  },
  {
    id: 4,
    category: 'CULTURE',
    title: 'Kente and Ankara — The Rise of African Print in Freetown',
    excerpt: 'African print fashion is having a massive moment in Freetown with young designers and everyday people embracing their cultural roots through clothing.',
    date: 'April 22, 2025',
    readTime: '3 min read',
    hot: false,
    featured: false,
    emoji: '🌍',
  },
  {
    id: 5,
    category: 'STYLE',
    title: 'Street Style Report — Freetown Edition 2025',
    excerpt: 'We hit the streets of Freetown to capture the best everyday fashion looks from real Sierra Leoneans showing up and showing out.',
    date: 'April 20, 2025',
    readTime: '4 min read',
    hot: true,
    featured: false,
    emoji: '📸',
  },
  {
    id: 6,
    category: 'TRENDS',
    title: 'The Colours of Salone — 2025 Palette Guide',
    excerpt: 'This year fashion palette in Sierra Leone is bold, vibrant and deeply rooted in the colours of our land. Here is what everyone is wearing.',
    date: 'April 18, 2025',
    readTime: '3 min read',
    hot: false,
    featured: false,
    emoji: '🎨',
  },
]

const CATEGORIES = ['ALL', 'TRENDS', 'STYLE', 'DESIGNERS', 'CULTURE']

export default function FashionPage() {
  return (
    <div style={{ background: '#050d1a', minHeight: '100vh' }}>
      <style>{`
        .fashion-card {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .fashion-card:hover {
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
            STYLE AND CULTURE
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 800, color: '#fff', marginBottom: 12 }}>
            Salone Fashion
          </h1>
          <p style={{ fontSize: 16, color: '#6a8aaa', maxWidth: 500 }}>
            Trends, designers and style stories from the heart of Freetown
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

      <div style={{ padding: '60px 40px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          {/* Featured Post */}
          <div className="fashion-card" style={{
            background: 'linear-gradient(135deg, #0a2a5e, #0d1f42)',
            border: '1px solid rgba(26,111,255,0.3)',
            borderRadius: 24,
            padding: 40,
            marginBottom: 40,
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
                  {FASHION_POSTS[0].category}
                </span>
                <span style={{
                  background: 'rgba(255,60,60,0.15)',
                  color: '#ff6060',
                  fontSize: 10, fontWeight: 700,
                  padding: '4px 12px', borderRadius: 6,
                }}>
                  FEATURED
                </span>
              </div>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: '#fff', marginBottom: 16, lineHeight: 1.3 }}>
                {FASHION_POSTS[0].title}
              </h2>
              <p style={{ fontSize: 14, color: '#6a8aaa', lineHeight: 1.8, marginBottom: 24 }}>
                {FASHION_POSTS[0].excerpt}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
                <span style={{ fontSize: 12, color: '#3a6a9a' }}>{FASHION_POSTS[0].date}</span>
                <span style={{ fontSize: 12, color: '#3a6a9a' }}>{FASHION_POSTS[0].readTime}</span>
              </div>
              <Link href={`/fashion/${FASHION_POSTS[0].id}`} style={{
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
              borderRadius: 20,
              height: 280,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 100,
              border: '1px solid rgba(26,111,255,0.2)',
            }}>
              {FASHION_POSTS[0].emoji}
            </div>
          </div>

          {/* Posts Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 24,
          }}>
            {FASHION_POSTS.slice(1).map(post => (
              <div key={post.id} className="fashion-card" style={{
                background: 'linear-gradient(135deg, rgba(26,111,255,0.05), rgba(5,13,26,0.9))',
                border: '1px solid rgba(26,111,255,0.12)',
                borderRadius: 20,
                padding: 28,
              }}>
                <div style={{
                  width: '100%', height: 140,
                  borderRadius: 14,
                  background: 'rgba(26,111,255,0.08)',
                  border: '1px solid rgba(26,111,255,0.1)',
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 60, marginBottom: 20,
                }}>
                  {post.emoji}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{
                    background: 'rgba(26,111,255,0.15)',
                    color: '#1a6fff',
                    fontSize: 10, fontWeight: 700,
                    padding: '4px 10px', borderRadius: 6,
                    letterSpacing: 1,
                  }}>
                    {post.category}
                  </span>
                  {post.hot && (
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
                  {post.title}
                </h3>
                <p style={{ fontSize: 13, color: '#6a8aaa', lineHeight: 1.7, marginBottom: 20 }}>
                  {post.excerpt}
                </p>
                <div style={{
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: 16,
                  borderTop: '1px solid rgba(26,111,255,0.08)',
                }}>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <span style={{ fontSize: 11, color: '#3a6a9a' }}>{post.date}</span>
                    <span style={{ fontSize: 11, color: '#3a6a9a' }}>{post.readTime}</span>
                  </div>
                  <Link href={`/fashion/${post.id}`} style={{
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