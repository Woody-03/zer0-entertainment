import Link from 'next/link'

const SONGS = [
  {
    id: 1,
    title: 'Bebe',
    artist: 'Woody Astarte ft. Alabama Charm',
    genre: 'Afrobeats',
    duration: '3:42',
    plays: '24,500',
    new: true,
    hot: true,
  },
  {
    id: 2,
    title: 'Bounce On Me',
    artist: 'Woody Astarte',
    genre: 'Afro-fusion',
    duration: '3:18',
    plays: '18,200',
    new: true,
    hot: false,
  },
  {
    id: 3,
    title: 'Salone Vibes',
    artist: 'Drizilik',
    genre: 'Afrobeats',
    duration: '4:05',
    plays: '87,400',
    new: false,
    hot: true,
  },
  {
    id: 4,
    title: 'Freetong',
    artist: 'Emmerson Bockarie',
    genre: 'Afrobeats',
    duration: '3:55',
    plays: '65,100',
    new: false,
    hot: false,
  },
  {
    id: 5,
    title: 'No Wahala',
    artist: 'Alabama Charm',
    genre: 'Hip-Hop',
    duration: '3:28',
    plays: '54,800',
    new: false,
    hot: true,
  },
  {
    id: 6,
    title: 'Street Life',
    artist: 'Kao Denero',
    genre: 'Hip-Hop',
    duration: '4:12',
    plays: '48,300',
    new: false,
    hot: false,
  },
  {
    id: 7,
    title: 'Loving You',
    artist: 'Innocent',
    genre: 'R&B',
    duration: '3:35',
    plays: '32,100',
    new: true,
    hot: false,
  },
  {
    id: 8,
    title: 'Hustler',
    artist: 'Boss La',
    genre: 'Hip-Hop',
    duration: '3:50',
    plays: '28,700',
    new: false,
    hot: false,
  },
  {
    id: 9,
    title: 'Cinematic',
    artist: 'Fantacee Wiz',
    genre: 'Hip-Hop',
    duration: '4:22',
    plays: '22,400',
    new: false,
    hot: false,
  },
  {
    id: 10,
    title: 'Real Love',
    artist: 'Enos Fresh',
    genre: 'Afrobeats',
    duration: '3:15',
    plays: '19,800',
    new: true,
    hot: false,
  },
]

const GENRES = ['ALL', 'AFROBEATS', 'HIP-HOP', 'R&B', 'AFRO-FUSION']

export default function MusicPage() {
  return (
    <div style={{ background: '#050d1a', minHeight: '100vh' }}>
      <style>{`
        .song-row {
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .song-row:hover {
          background: rgba(26,111,255,0.08) !important;
          border-color: rgba(26,111,255,0.3) !important;
        }
        .play-btn {
          transition: all 0.2s ease;
        }
        .play-btn:hover {
          background: #0a3d9e !important;
          transform: scale(1.1);
        }
        .genre-btn {
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .genre-btn:hover {
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
            LISTEN NOW
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 800, color: '#fff', marginBottom: 12 }}>
            Salone Music
          </h1>
          <p style={{ fontSize: 16, color: '#6a8aaa', maxWidth: 500 }}>
            The latest and greatest music from Sierra Leone artists
          </p>
        </div>
      </div>

      {/* Genre Filter */}
      <div style={{
        padding: '24px 40px',
        borderBottom: '1px solid rgba(26,111,255,0.1)',
        background: '#070f1e',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {GENRES.map(genre => (
            <button key={genre} className="genre-btn" style={{
              padding: '8px 20px',
              background: genre === 'ALL' ? '#1a6fff' : 'rgba(26,111,255,0.1)',
              border: '1px solid rgba(26,111,255,0.2)',
              borderRadius: 100,
              color: genre === 'ALL' ? '#fff' : '#6a8aaa',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 1,
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}>
              {genre}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: '60px 40px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 32 }}>

            {/* Songs List */}
            <div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 24,
              }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: '#fff' }}>
                  Latest Releases
                </h2>
                <Link href="/submit" style={{
                  padding: '10px 20px',
                  background: 'rgba(26,111,255,0.1)',
                  border: '1px solid rgba(26,111,255,0.3)',
                  borderRadius: 8,
                  color: '#1a6fff',
                  fontSize: 12,
                  fontWeight: 700,
                  textDecoration: 'none',
                }}>
                  + Submit Song
                </Link>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {SONGS.map((song, index) => (
                  <div key={song.id} className="song-row" style={{
                    background: 'rgba(26,111,255,0.03)',
                    border: '1px solid rgba(26,111,255,0.08)',
                    borderRadius: 14,
                    padding: '14px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                  }}>

                    {/* Number */}
                    <div style={{
                      width: 28,
                      fontSize: 13,
                      fontWeight: 700,
                      color: '#3a6a9a',
                      flexShrink: 0,
                      textAlign: 'center',
                    }}>
                      {index + 1}
                    </div>

                    {/* Play button */}
                    <div className="play-btn" style={{
                      width: 40, height: 40,
                      borderRadius: 10,
                      background: '#1a6fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 14,
                      flexShrink: 0,
                      cursor: 'pointer',
                    }}>
                      ▶
                    </div>

                    {/* Song info */}
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
                        <span style={{ fontSize: 14, fontWeight: 700, color: '#e8f0ff' }}>
                          {song.title}
                        </span>
                        {song.new && (
                          <span style={{
                            background: 'rgba(26,255,111,0.15)',
                            color: '#26ff6f',
                            fontSize: 8, fontWeight: 700,
                            padding: '2px 6px', borderRadius: 4,
                            letterSpacing: 1,
                          }}>NEW</span>
                        )}
                        {song.hot && (
                          <span style={{
                            background: 'rgba(255,60,60,0.15)',
                            color: '#ff6060',
                            fontSize: 8, fontWeight: 700,
                            padding: '2px 6px', borderRadius: 4,
                          }}>HOT</span>
                        )}
                      </div>
                      <div style={{ fontSize: 12, color: '#3a6a9a' }}>
                        {song.artist}
                      </div>
                    </div>

                    {/* Genre */}
                    <div style={{
                      fontSize: 10, color: '#1a6fff',
                      background: 'rgba(26,111,255,0.1)',
                      padding: '4px 10px', borderRadius: 6,
                      fontWeight: 600, flexShrink: 0,
                    }}>
                      {song.genre}
                    </div>

                    {/* Plays */}
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: '#7ab0ff' }}>
                        {song.plays}
                      </div>
                      <div style={{ fontSize: 9, color: '#3a6a9a' }}>plays</div>
                    </div>

                    {/* Duration */}
                    <div style={{
                      fontSize: 12, color: '#3a6a9a',
                      flexShrink: 0, minWidth: 36,
                      textAlign: 'right',
                    }}>
                      {song.duration}
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* Side Panel */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

              {/* Featured Song */}
              <div style={{
                background: 'linear-gradient(135deg, #0a2a5e, #0d1f42)',
                border: '1px solid rgba(26,111,255,0.3)',
                borderRadius: 20, padding: 28,
              }}>
                <div style={{ fontSize: 11, color: '#1a6fff', letterSpacing: 2, marginBottom: 16, fontWeight: 700 }}>
                  SONG OF THE WEEK
                </div>
                <div style={{
                  width: '100%', height: 160,
                  borderRadius: 14,
                  background: 'linear-gradient(135deg, #1a6fff22, #0a3d9e44)',
                  border: '1px solid rgba(26,111,255,0.2)',
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: 60,
                  marginBottom: 20,
                }}>
                  🎵
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 4 }}>
                  Bebe
                </h3>
                <div style={{ fontSize: 12, color: '#1a6fff', marginBottom: 16 }}>
                  Woody Astarte ft. Alabama Charm
                </div>
                <div style={{
                  display: 'flex', gap: 10,
                }}>
                  <button style={{
                    flex: 1, padding: '12px',
                    background: '#1a6fff',
                    border: 'none', borderRadius: 10,
                    color: '#fff', fontSize: 13,
                    fontWeight: 700, cursor: 'pointer',
                    fontFamily: 'inherit',
                  }}>
                    ▶ Play
                  </button>
                  <button style={{
                    padding: '12px 16px',
                    background: 'rgba(26,111,255,0.1)',
                    border: '1px solid rgba(26,111,255,0.2)',
                    borderRadius: 10,
                    color: '#1a6fff', fontSize: 13,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                  }}>
                    ♡
                  </button>
                </div>
              </div>

              {/* Submit Music */}
              <div style={{
                background: 'rgba(26,111,255,0.06)',
                border: '1px solid rgba(26,111,255,0.15)',
                borderRadius: 20, padding: 28,
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>🎤</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 8 }}>
                  Are You An Artist?
                </h3>
                <p style={{ fontSize: 12, color: '#4a6a8a', lineHeight: 1.6, marginBottom: 20 }}>
                  Submit your music to be featured on Zero Entertainment and reach thousands of fans
                </p>
                <Link href="/submit" style={{
                  display: 'block',
                  padding: '12px 20px',
                  background: '#1a6fff',
                  borderRadius: 10,
                  color: '#fff',
                  fontSize: 13,
                  fontWeight: 700,
                  textDecoration: 'none',
                }}>
                  Submit Music
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}