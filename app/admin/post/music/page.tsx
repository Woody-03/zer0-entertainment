import { supabase } from '../../../lib/supabase'
import Link from 'next/link'

async function getSongs() {
  const { data, error } = await supabase
    .from('songs')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching songs:', error)
    return []
  }

  return data
}

const GENRES = ['ALL', 'AFROBEATS', 'HIP-HOP', 'R&B', 'AFRO-FUSION']

export default async function MusicPage() {
  const songs = await getSongs()

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
              fontSize: 11, fontWeight: 700,
              letterSpacing: 1, cursor: 'pointer',
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
                  borderRadius: 8, color: '#1a6fff',
                  fontSize: 12, fontWeight: 700,
                  textDecoration: 'none',
                }}>
                  + Submit Song
                </Link>
              </div>

              {songs.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 20px', color: '#3a6a9a' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>🎵</div>
                  <h2 style={{ fontSize: 20, fontWeight: 700, color: '#4a6a8a', marginBottom: 8 }}>
                    No songs yet
                  </h2>
                  <p style={{ fontSize: 14, marginBottom: 20 }}>
                    Songs added from the admin dashboard will appear here
                  </p>
                  <Link href="/admin/post/music" style={{
                    display: 'inline-block',
                    padding: '12px 24px', background: '#1a6fff',
                    borderRadius: 10, color: '#fff',
                    fontSize: 13, fontWeight: 700, textDecoration: 'none',
                  }}>
                    Add First Song
                  </Link>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {songs.map((song, index) => (
                    <div key={song.id} className="song-row" style={{
                      background: 'rgba(26,111,255,0.03)',
                      border: '1px solid rgba(26,111,255,0.08)',
                      borderRadius: 14,
                      padding: '14px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 16,
                    }}>
                      <div style={{
                        width: 28, fontSize: 13,
                        fontWeight: 700, color: '#3a6a9a',
                        flexShrink: 0, textAlign: 'center',
                      }}>
                        {index + 1}
                      </div>
                      <div className="play-btn" style={{
                        width: 40, height: 40, borderRadius: 10,
                        background: '#1a6fff',
                        display: 'flex', alignItems: 'center',
                        justifyContent: 'center', fontSize: 14,
                        flexShrink: 0, cursor: 'pointer',
                      }}>
                        ▶
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
                          <span style={{ fontSize: 14, fontWeight: 700, color: '#e8f0ff' }}>
                            {song.title}
                          </span>
                          {song.new_release && (
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
                      <div style={{
                        fontSize: 10, color: '#1a6fff',
                        background: 'rgba(26,111,255,0.1)',
                        padding: '4px 10px', borderRadius: 6,
                        fontWeight: 600, flexShrink: 0,
                      }}>
                        {song.genre}
                      </div>
                      <div style={{ textAlign: 'right', flexShrink: 0 }}>
                        <div style={{ fontSize: 12, fontWeight: 700, color: '#7ab0ff' }}>
                          {song.plays}
                        </div>
                        <div style={{ fontSize: 9, color: '#3a6a9a' }}>plays</div>
                      </div>
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
              )}
            </div>

            {/* Side Panel */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {songs.length > 0 && (
                <div style={{
                  background: 'linear-gradient(135deg, #0a2a5e, #0d1f42)',
                  border: '1px solid rgba(26,111,255,0.3)',
                  borderRadius: 20, padding: 28,
                }}>
                  <div style={{ fontSize: 11, color: '#1a6fff', letterSpacing: 2, marginBottom: 16, fontWeight: 700 }}>
                    SONG OF THE WEEK
                  </div>
                  <div style={{
                    width: '100%', height: 160, borderRadius: 14,
                    background: 'linear-gradient(135deg, #1a6fff22, #0a3d9e44)',
                    border: '1px solid rgba(26,111,255,0.2)',
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: 60, marginBottom: 20,
                  }}>
                    🎵
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 4 }}>
                    {songs[0].title}
                  </h3>
                  <div style={{ fontSize: 12, color: '#1a6fff', marginBottom: 16 }}>
                    {songs[0].artist}
                  </div>
                  <div style={{ display: 'flex', gap: 10 }}>
                    <button style={{
                      flex: 1, padding: '12px',
                      background: '#1a6fff', border: 'none',
                      borderRadius: 10, color: '#fff',
                      fontSize: 13, fontWeight: 700,
                      cursor: 'pointer', fontFamily: 'inherit',
                    }}>
                      ▶ Play
                    </button>
                    <button style={{
                      padding: '12px 16px',
                      background: 'rgba(26,111,255,0.1)',
                      border: '1px solid rgba(26,111,255,0.2)',
                      borderRadius: 10, color: '#1a6fff',
                      fontSize: 13, cursor: 'pointer',
                      fontFamily: 'inherit',
                    }}>
                      ♡
                    </button>
                  </div>
                </div>
              )}

              <div style={{
                background: 'rgba(26,111,255,0.06)',
                border: '1px solid rgba(26,111,255,0.15)',
                borderRadius: 20, padding: 28, textAlign: 'center',
              }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>🎤</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 8 }}>
                  Are You An Artist?
                </h3>
                <p style={{ fontSize: 12, color: '#4a6a8a', lineHeight: 1.6, marginBottom: 20 }}>
                  Submit your music to be featured on Zero Entertainment
                </p>
                <Link href="/submit" style={{
                  display: 'block', padding: '12px 20px',
                  background: '#1a6fff', borderRadius: 10,
                  color: '#fff', fontSize: 13, fontWeight: 700,
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