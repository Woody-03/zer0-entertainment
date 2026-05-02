import Link from 'next/link'

const ARTISTS = [
  {
    id: 1,
    name: 'Woody Astarte',
    genre: 'Afrobeats / Afro-fusion',
    location: 'Freetown, Sierra Leone',
    followers: '12,400',
    songs: 8,
    bio: 'Rising star blending Krio, English and indigenous Sierra Leonean sounds into something entirely new and powerful.',
    verified: true,
    new: true,
  },
  {
    id: 2,
    name: 'Alabama Charm',
    genre: 'Hip-Hop / R&B',
    location: 'Freetown, Sierra Leone',
    followers: '28,900',
    songs: 15,
    bio: 'One of Sierra Leone most consistent artists delivering hard hitting Hip-Hop and smooth R&B since 2018.',
    verified: true,
    new: false,
  },
  {
    id: 3,
    name: 'Drizilik',
    genre: 'Afrobeats',
    location: 'Freetown, Sierra Leone',
    followers: '45,200',
    songs: 32,
    bio: 'Sierra Leone music icon known for energetic performances and deeply cultural Afrobeats that celebrate Salone life.',
    verified: true,
    new: false,
  },
  {
    id: 4,
    name: 'Emmerson Bockarie',
    genre: 'Afrobeats',
    location: 'Freetown, Sierra Leone',
    followers: '67,800',
    songs: 48,
    bio: 'Living legend of Sierra Leone music. Emmerson has been the voice of Salone for over two decades.',
    verified: true,
    new: false,
  },
  {
    id: 5,
    name: 'Fantacee Wiz',
    genre: 'Hip-Hop',
    location: 'Freetown, Sierra Leone',
    followers: '19,300',
    songs: 21,
    bio: 'Freetown lyricist known for cinematic visuals and sharp wordplay that tells real stories from Sierra Leone streets.',
    verified: true,
    new: false,
  },
  {
    id: 6,
    name: 'Kao Denero',
    genre: 'Hip-Hop',
    location: 'Freetown, Sierra Leone',
    followers: '38,500',
    songs: 40,
    bio: 'One of West Africa most respected Hip-Hop artists. Kao Denero has put Sierra Leone on the global rap map.',
    verified: true,
    new: false,
  },
  {
    id: 7,
    name: 'Boss La',
    genre: 'Hip-Hop',
    location: 'Freetown, Sierra Leone',
    followers: '22,100',
    songs: 18,
    bio: 'Street certified Hip-Hop artist bringing raw authentic energy from the heart of Freetown to every track.',
    verified: false,
    new: false,
  },
  {
    id: 8,
    name: 'Innocent',
    genre: 'R&B',
    location: 'Bo, Sierra Leone',
    followers: '14,700',
    songs: 12,
    bio: 'Smooth R&B vocalist from Bo bringing a fresh romantic sound to Sierra Leone music scene.',
    verified: false,
    new: true,
  },
]

const GENRES = ['ALL', 'AFROBEATS', 'HIP-HOP', 'R&B', 'AFRO-FUSION']

export default function ArtistsPage() {
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
        .view-profile {
          transition: all 0.2s ease;
        }
        .view-profile:hover {
          background: #0a3d9e !important;
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
            display: 'flex', gap: 32,
            marginBottom: 40,
            padding: '20px 28px',
            background: 'rgba(26,111,255,0.05)',
            border: '1px solid rgba(26,111,255,0.1)',
            borderRadius: 14,
            flexWrap: 'wrap',
          }}>
            {[
              ['500+', 'Total Artists'],
              ['8', 'Featured This Week'],
              ['12', 'New This Month'],
              ['6', 'Genres'],
            ].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontSize: 22, fontWeight: 800, color: '#1a6fff' }}>{num}</div>
                <div style={{ fontSize: 11, color: '#3a6a9a', letterSpacing: 1 }}>{label.toUpperCase()}</div>
              </div>
            ))}
          </div>

          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
          }}>
            {ARTISTS.map(artist => (
              <div key={artist.id} className="artist-card" style={{
                background: 'linear-gradient(135deg, rgba(26,111,255,0.05), rgba(5,13,26,0.95))',
                border: '1px solid rgba(26,111,255,0.12)',
                borderRadius: 20,
                padding: 28,
                position: 'relative',
              }}>

                {/* Badges */}
                <div style={{ position: 'absolute', top: 16, right: 16, display: 'flex', gap: 6 }}>
                  {artist.verified && (
                    <span style={{
                      background: 'rgba(26,111,255,0.2)',
                      color: '#1a6fff',
                      fontSize: 9, fontWeight: 700,
                      padding: '3px 8px', borderRadius: 4,
                      letterSpacing: 1,
                    }}>✓ VERIFIED</span>
                  )}
                  {artist.new && (
                    <span style={{
                      background: 'rgba(26,255,111,0.15)',
                      color: '#26ff6f',
                      fontSize: 9, fontWeight: 700,
                      padding: '3px 8px', borderRadius: 4,
                      letterSpacing: 1,
                    }}>NEW</span>
                  )}
                </div>

                {/* Avatar */}
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

                {/* Info */}
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

                {/* Stats */}
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

                {/* Button */}
                <Link href={`/artists/${artist.id}`} className="view-profile" style={{
                  display: 'block',
                  padding: '11px 20px',
                  background: '#1a6fff',
                  borderRadius: 10,
                  color: '#fff',
                  fontSize: 13,
                  fontWeight: 700,
                  textDecoration: 'none',
                  textAlign: 'center',
                }}>
                  View Profile
                </Link>

              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}