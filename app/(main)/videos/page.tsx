import Link from 'next/link'

const VIDEOS = [
  {
    id: 1,
    title: 'Bebe — Official Music Video',
    artist: 'Woody Astarte ft. Alabama Charm',
    category: 'MUSIC VIDEO',
    duration: '3:42',
    views: '24,500',
    date: 'May 1, 2025',
    hot: true,
    new: true,
    emoji: '🎵',
  },
  {
    id: 2,
    title: 'Salone Vibes — Behind The Scenes',
    artist: 'Drizilik',
    category: 'BEHIND THE SCENES',
    duration: '8:15',
    views: '18,300',
    date: 'April 28, 2025',
    hot: true,
    new: false,
    emoji: '🎬',
  },
  {
    id: 3,
    title: 'Emmerson Bockarie — Exclusive Interview',
    artist: 'Zero Entertainment',
    category: 'INTERVIEW',
    duration: '22:40',
    views: '45,100',
    date: 'April 25, 2025',
    hot: false,
    new: false,
    emoji: '🎤',
  },
  {
    id: 4,
    title: 'Freetown Fashion Week 2025 Highlights',
    artist: 'Zero Entertainment',
    category: 'FASHION',
    duration: '6:30',
    views: '32,800',
    date: 'April 22, 2025',
    hot: true,
    new: false,
    emoji: '👗',
  },
  {
    id: 5,
    title: 'No Wahala — Official Music Video',
    artist: 'Alabama Charm',
    category: 'MUSIC VIDEO',
    duration: '3:28',
    views: '54,200',
    date: 'April 20, 2025',
    hot: false,
    new: false,
    emoji: '🎵',
  },
  {
    id: 6,
    title: 'Top 10 Sierra Leone Songs of 2025',
    artist: 'Zero Entertainment',
    category: 'COUNTDOWN',
    duration: '15:20',
    views: '67,900',
    date: 'April 18, 2025',
    hot: false,
    new: false,
    emoji: '🏆',
  },
  {
    id: 7,
    title: 'Cinematic — Official Music Video',
    artist: 'Fantacee Wiz',
    category: 'MUSIC VIDEO',
    duration: '4:22',
    views: '22,400',
    date: 'April 15, 2025',
    hot: false,
    new: false,
    emoji: '🎬',
  },
  {
    id: 8,
    title: 'Sierra Leone Music Awards 2025 Recap',
    artist: 'Zero Entertainment',
    category: 'EVENT',
    duration: '18:55',
    views: '89,300',
    date: 'April 12, 2025',
    hot: false,
    new: false,
    emoji: '🏆',
  },
]

const CATEGORIES = ['ALL', 'MUSIC VIDEO', 'INTERVIEW', 'BEHIND THE SCENES', 'FASHION', 'EVENT', 'COUNTDOWN']

export default function VideosPage() {
  return (
    <div style={{ background: '#050d1a', minHeight: '100vh' }}>
      <style>{`
        .video-card {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .video-card:hover {
          transform: translateY(-4px);
          border-color: rgba(26,111,255,0.4) !important;
          box-shadow: 0 16px 48px rgba(26,111,255,0.15);
        }
        .play-overlay {
          transition: all 0.2s ease;
        }
        .video-card:hover .play-overlay {
          background: rgba(26,111,255,0.9) !important;
          transform: scale(1.1);
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
            WATCH NOW
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 800, color: '#fff', marginBottom: 12 }}>
            Videos
          </h1>
          <p style={{ fontSize: 16, color: '#6a8aaa', maxWidth: 500 }}>
            Music videos, interviews, fashion and exclusive content from Sierra Leone
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div style={{
        padding: '24px 40px',
        borderBottom: '1px solid rgba(26,111,255,0.1)',
        background: '#070f1e',
        overflowX: 'auto',
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
              whiteSpace: 'nowrap',
            }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: '60px 40px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          {/* Featured Video */}
          <div className="video-card" style={{
            background: 'linear-gradient(135deg, #0a2a5e, #0d1f42)',
            border: '1px solid rgba(26,111,255,0.3)',
            borderRadius: 24,
            overflow: 'hidden',
            marginBottom: 40,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
          }}>
            {/* Thumbnail */}
            <div style={{
              background: 'linear-gradient(135deg, #0a1a3e, #1a3a6e)',
              height: 320,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}>
              <div style={{ fontSize: 80 }}>🎵</div>
              <div className="play-overlay" style={{
                position: 'absolute',
                width: 72, height: 72,
                borderRadius: '50%',
                background: 'rgba(26,111,255,0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                boxShadow: '0 8px 32px rgba(26,111,255,0.4)',
              }}>
                ▶
              </div>
              <div style={{
                position: 'absolute',
                bottom: 16, right: 16,
                background: 'rgba(0,0,0,0.7)',
                color: '#fff',
                fontSize: 11,
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: 6,
              }}>
                {VIDEOS[0].duration}
              </div>
            </div>

            {/* Info */}
            <div style={{ padding: 40 }}>
              <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
                <span style={{
                  background: 'rgba(26,111,255,0.2)',
                  color: '#1a6fff',
                  fontSize: 10, fontWeight: 700,
                  padding: '4px 12px', borderRadius: 6,
                  letterSpacing: 1,
                }}>
                  {VIDEOS[0].category}
                </span>
                <span style={{
                  background: 'rgba(255,60,60,0.15)',
                  color: '#ff6060',
                  fontSize: 10, fontWeight: 700,
                  padding: '4px 12px', borderRadius: 6,
                }}>
                  NEW
                </span>
              </div>
              <h2 style={{ fontSize: 26, fontWeight: 800, color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>
                {VIDEOS[0].title}
              </h2>
              <div style={{ fontSize: 14, color: '#1a6fff', marginBottom: 16, fontWeight: 500 }}>
                {VIDEOS[0].artist}
              </div>
              <div style={{ display: 'flex', gap: 16, marginBottom: 28 }}>
                <span style={{ fontSize: 12, color: '#3a6a9a' }}>{VIDEOS[0].views} views</span>
                <span style={{ fontSize: 12, color: '#3a6a9a' }}>{VIDEOS[0].date}</span>
              </div>
              <button style={{
                padding: '14px 32px',
                background: '#1a6fff',
                border: 'none',
                borderRadius: 10,
                color: '#fff',
                fontSize: 14,
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'inherit',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}>
                ▶ Watch Now
              </button>
            </div>
          </div>

          {/* Videos Grid */}
          <h2 style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 24 }}>
            All Videos
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
          }}>
            {VIDEOS.slice(1).map(video => (
              <div key={video.id} className="video-card" style={{
                background: 'linear-gradient(135deg, rgba(26,111,255,0.05), rgba(5,13,26,0.95))',
                border: '1px solid rgba(26,111,255,0.12)',
                borderRadius: 20,
                overflow: 'hidden',
              }}>
                {/* Thumbnail */}
                <div style={{
                  background: 'linear-gradient(135deg, #0a1a3e, #0d2040)',
                  height: 180,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}>
                  <div style={{ fontSize: 52 }}>{video.emoji}</div>
                  <div className="play-overlay" style={{
                    position: 'absolute',
                    width: 52, height: 52,
                    borderRadius: '50%',
                    background: 'rgba(26,111,255,0.7)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 18,
                  }}>
                    ▶
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: 10, right: 10,
                    background: 'rgba(0,0,0,0.7)',
                    color: '#fff',
                    fontSize: 10,
                    fontWeight: 700,
                    padding: '3px 8px',
                    borderRadius: 4,
                  }}>
                    {video.duration}
                  </div>
                  {video.hot && (
                    <div style={{
                      position: 'absolute',
                      top: 10, left: 10,
                      background: 'rgba(255,60,60,0.9)',
                      color: '#fff',
                      fontSize: 9,
                      fontWeight: 700,
                      padding: '3px 8px',
                      borderRadius: 4,
                      letterSpacing: 1,
                    }}>
                      HOT
                    </div>
                  )}
                </div>

                {/* Info */}
                <div style={{ padding: 20 }}>
                  <span style={{
                    background: 'rgba(26,111,255,0.15)',
                    color: '#1a6fff',
                    fontSize: 9, fontWeight: 700,
                    padding: '3px 8px', borderRadius: 4,
                    letterSpacing: 1,
                    display: 'inline-block',
                    marginBottom: 10,
                  }}>
                    {video.category}
                  </span>
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: '#e8f0ff', marginBottom: 6, lineHeight: 1.4 }}>
                    {video.title}
                  </h3>
                  <div style={{ fontSize: 12, color: '#1a6fff', marginBottom: 12 }}>
                    {video.artist}
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingTop: 12,
                    borderTop: '1px solid rgba(26,111,255,0.08)',
                  }}>
                    <span style={{ fontSize: 11, color: '#3a6a9a' }}>{video.views} views</span>
                    <span style={{ fontSize: 11, color: '#3a6a9a' }}>{video.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}