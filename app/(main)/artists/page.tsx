import Link from 'next/link'
import { supabaseServer } from '../../lib/supabaseServer'

export const dynamic = 'force-dynamic'


async function getArtists() {
  const { data } = await supabaseServer
    .from('artists')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false })
  
  return data || []
}

const GENRES = ['ALL', 'AFROBEATS', 'HIP-HOP', 'R&B', 'AFRO-FUSION']

export default async function ArtistsPage() {
  const artists = await getArtists()

  return (
    <div style={{ background: '#050d1a', minHeight: '100vh' }}>
      <style>{`
        .artist-card {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .artist-card:hover {
          transform: translateY(-6px);
          border-color: rgba(26,111,255,0.4) !important;
          box-shadow: 0 20px 60px rgba(26,111,255,0.15);
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
            DISCOVER TALENT
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 800, color: '#fff', marginBottom: 12 }}>
            Sierra Leone Artists
          </h1>
          <p style={{ fontSize: 16, color: '#6a8aaa', maxWidth: 500 }}>
            Discover and support the incredible talent coming out of Sierra Leone
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

      {/* Artists Grid */}
      <div style={{ padding: '60px 40px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          {/* Stats bar */}
          <div style={{
            display: 'flex',
            gap: 32,
            marginBottom: 40,
            padding: '20px 28px',
            background: 'rgba(26,111,255,0.05)',
            border: '1px solid rgba(26,111,255,0.1)',
            borderRadius: 14,
            flexWrap: 'wrap',
          }}>
            {[
              [artists.length.toString(), 'Total Artists'],
              [artists.filter((artist: any) => artist.verified).length.toString(), 'Verified'],
              [artists.filter((artist: any) => {
                const date = new Date(artist.created_at)
                const now = new Date()
                const diffDays = (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
                return diffDays <= 30
              }).length.toString(), 'New This Month'],
              ['6', 'Genres'],
            ].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontSize: 22, fontWeight: 800, color: '#1a6fff' }}>{num}</div>
                <div style={{ fontSize: 11, color: '#3a6a9a', letterSpacing: 1 }}>{label.toUpperCase()}</div>
              </div>
            ))}
          </div>

          {artists.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 40px', color: '#3a6a9a' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🎤</div>
              <h2 style={{ fontSize: 22, fontWeight: 700, color: '#4a6a8a', marginBottom: 8 }}>
                No artists yet
              </h2>
              <p style={{ fontSize: 14 }}>
                Artists added from the admin dashboard will appear here
              </p>
              <Link href="/admin/post/artist" style={{
                display: 'inline-block', marginTop: 20,
                padding: '12px 24px', background: '#1a6fff',
                borderRadius: 10, color: '#fff',
                fontSize: 13, fontWeight: 700, textDecoration: 'none',
              }}>
                Add First Artist
              </Link>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 24,
            }}>
              {artists.map((artist: any) => (
                <div key={artist.id} className="artist-card" style={{
                  background: 'linear-gradient(135deg, rgba(26,111,255,0.05), rgba(5,13,26,0.95))',
                  border: '1px solid rgba(26,111,255,0.12)',
                  borderRadius: 20,
                  padding: 28,
                  position: 'relative',
                }}>
                  <div style={{ position: 'absolute', top: 16, right: 16, display: 'flex', gap: 6 }}>
                    {artist.verified && (
                      <span style={{
                        background: 'rgba(26,111,255,0.2)', color: '#1a6fff',
                        fontSize: 9, fontWeight: 700,
                        padding: '3px 8px', borderRadius: 4, letterSpacing: 1,
                      }}>✓ VERIFIED</span>
                    )}
                  </div>

                  <div style={{
                    width: 72, height: 72, borderRadius: 18,
                    background: 'linear-gradient(135deg, #1a6fff22, #0a3d9e44)',
                    border: '2px solid rgba(26,111,255,0.3)',
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: 32,
                    marginBottom: 16,
                  }}>
                    🎤
                  </div>

                  <h3 style={{ fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 4 }}>
                    {artist.name}
                  </h3>
                  <div style={{ fontSize: 12, color: '#1a6fff', marginBottom: 4, fontWeight: 500 }}>
                    {artist.genre}
                  </div>
                  <div style={{ fontSize: 11, color: '#3a5a7a', marginBottom: 14 }}>
                    {artist.location}
                  </div>
                  <p style={{ fontSize: 12, color: '#5a7a9a', lineHeight: 1.6, marginBottom: 20 }}>
                    {artist.bio}
                  </p>

                  <div style={{
                    display: 'flex', gap: 20,
                    padding: '14px 0',
                    borderTop: '1px solid rgba(26,111,255,0.08)',
                    borderBottom: '1px solid rgba(26,111,255,0.08)',
                    marginBottom: 20,
                  }}>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: '#e8f0ff' }}>
                        {artist.followers}
                      </div>
                      <div style={{ fontSize: 10, color: '#3a6a9a' }}>FOLLOWERS</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: '#e8f0ff' }}>
                        {artist.songs}
                      </div>
                      <div style={{ fontSize: 10, color: '#3a6a9a' }}>SONGS</div>
                    </div>
                  </div>

                  <Link href={`/artists/${artist.id}`} style={{
                    display: 'block', padding: '11px 20px',
                    background: '#1a6fff', borderRadius: 10,
                    color: '#fff', fontSize: 13, fontWeight: 700,
                    textDecoration: 'none', textAlign: 'center',
                  }}>
                    View Profile
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
