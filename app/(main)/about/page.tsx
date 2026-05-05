import Link from 'next/link'

const TEAM = [
  {
    name: 'Woody Astarte',
    role: 'Founder & CEO',
    bio: 'Artist, entrepreneur and visionary behind Zero Entertainment. Passionate about elevating Sierra Leone culture globally.',
    emoji: '👑',
  },
  {
    name: 'Content Team',
    role: 'News & Media',
    bio: 'A dedicated team of writers and journalists covering everything happening in Sierra Leone entertainment.',
    emoji: '📰',
  },
  {
    name: 'Music Team',
    role: 'Music Curation',
    bio: 'Music lovers and industry insiders handpicking the best Sierra Leone music for our platform.',
    emoji: '🎵',
  },
  {
    name: 'Fashion Team',
    role: 'Style & Culture',
    bio: 'Fashion enthusiasts documenting the vibrant style scene emerging from Freetown and beyond.',
    emoji: '👗',
  },
]

const VALUES = [
  { icon: '🇸🇱', title: 'Salone First', desc: 'We celebrate Sierra Leone culture, talent and creativity above everything else.' },
  { icon: '🎯', title: 'Authentic', desc: 'Real stories, real artists, real culture. No fluff, no fake — just pure Salone.' },
  { icon: '🌍', title: 'Global Vision', desc: 'We believe Sierra Leone entertainment deserves a global stage and we are building it.' },
  { icon: '🤝', title: 'Community', desc: 'We exist to serve the Sierra Leone creative community and help artists grow.' },
]

export default function AboutPage() {
  return (
    <div style={{ background: '#050d1a', minHeight: '100vh' }}>
      <style>{`
        .team-card {
          transition: all 0.3s ease;
        }
        .team-card:hover {
          transform: translateY(-4px);
          border-color: rgba(26,111,255,0.4) !important;
          box-shadow: 0 16px 48px rgba(26,111,255,0.15);
        }
        .value-card {
          transition: all 0.3s ease;
        }
        .value-card:hover {
          transform: translateY(-4px);
          border-color: rgba(26,111,255,0.3) !important;
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .glow-text {
          background: linear-gradient(135deg, #ffffff 0%, #a8c8ff 50%, #1a6fff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
      `}</style>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #070f1e, #0a2a5e)',
        padding: '80px 40px',
        borderBottom: '1px solid rgba(26,111,255,0.2)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '10%', right: '5%',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(26,111,255,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative' }}>
          <div style={{ fontSize: 11, color: '#1a6fff', letterSpacing: 3, marginBottom: 16 }}>
            OUR STORY
          </div>
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 800, marginBottom: 20, lineHeight: 1.1 }}>
            <span className="glow-text">About Zero</span>
            <br />
            <span style={{ color: '#fff' }}>Entertainment</span>
          </h1>
          <p style={{ fontSize: 18, color: '#6a8aaa', lineHeight: 1.8, maxWidth: 600, margin: '0 auto 40px' }}>
            We are Sierra Leone's premier entertainment platform — built by Salone people, for Salone people and the world.
          </p>
          <div style={{ display: 'flex', gap: 40, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[['2025', 'Founded'], ['500+', 'Artists'], ['10K+', 'Monthly Readers'], ['6', 'Content Categories']].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontSize: 28, fontWeight: 800, color: '#1a6fff' }}>{num}</div>
                <div style={{ fontSize: 11, color: '#4a6a8a', letterSpacing: 1 }}>{label.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission */}
      <section style={{ padding: '80px 40px', background: '#070f1e' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 11, color: '#1a6fff', letterSpacing: 3, marginBottom: 12 }}>
                OUR MISSION
              </div>
              <h2 style={{ fontSize: 40, fontWeight: 800, color: '#fff', marginBottom: 20, lineHeight: 1.2 }}>
                Putting Sierra Leone Entertainment On The World Map
              </h2>
              <p style={{ fontSize: 15, color: '#6a8aaa', lineHeight: 1.9, marginBottom: 20 }}>
                Zero Entertainment was born from a simple belief — Sierra Leone has world class talent, culture and creativity that deserves a world class platform to showcase it.
              </p>
              <p style={{ fontSize: 15, color: '#6a8aaa', lineHeight: 1.9, marginBottom: 32 }}>
                From music to fashion, news to rankings, we cover every corner of Sierra Leone entertainment with passion, authenticity and pride. We are not just a website — we are a movement.
              </p>
              <Link href="/contact" style={{
                display: 'inline-block',
                padding: '14px 32px',
                background: '#1a6fff',
                borderRadius: 12, color: '#fff',
                fontSize: 14, fontWeight: 700,
                textDecoration: 'none',
              }}>
                Get In Touch →
              </Link>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, #0a2a5e, #0d1f42)',
              border: '1px solid rgba(26,111,255,0.3)',
              borderRadius: 24, padding: 48,
              textAlign: 'center',
            }}>
              <div style={{ fontSize: 80, marginBottom: 24 }}>🇸🇱</div>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: '#fff', marginBottom: 12 }}>
                Made in Sierra Leone
              </h3>
              <p style={{ fontSize: 14, color: '#6a8aaa', lineHeight: 1.7 }}>
                Every article, every review, every ranking — created with love and pride for our beautiful country and its incredible people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '80px 40px', background: '#050d1a' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 11, color: '#1a6fff', letterSpacing: 3, marginBottom: 8 }}>
              WHAT WE STAND FOR
            </div>
            <h2 style={{ fontSize: 40, fontWeight: 800, color: '#fff' }}>
              Our Values
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {VALUES.map(value => (
              <div key={value.title} className="value-card" style={{
                background: 'linear-gradient(135deg, rgba(26,111,255,0.06), rgba(5,13,26,0.9))',
                border: '1px solid rgba(26,111,255,0.1)',
                borderRadius: 20, padding: 32,
              }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{value.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 10 }}>
                  {value.title}
                </h3>
                <p style={{ fontSize: 13, color: '#6a8aaa', lineHeight: 1.7 }}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '80px 40px', background: '#070f1e' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 11, color: '#1a6fff', letterSpacing: 3, marginBottom: 8 }}>
              THE PEOPLE BEHIND IT
            </div>
            <h2 style={{ fontSize: 40, fontWeight: 800, color: '#fff' }}>
              Our Team
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {TEAM.map(member => (
              <div key={member.name} className="team-card" style={{
                background: 'linear-gradient(135deg, rgba(26,111,255,0.06), rgba(5,13,26,0.9))',
                border: '1px solid rgba(26,111,255,0.12)',
                borderRadius: 20, padding: 32, textAlign: 'center',
              }}>
                <div style={{
                  width: 80, height: 80, borderRadius: 20,
                  background: 'linear-gradient(135deg, #1a6fff22, #0a3d9e44)',
                  border: '2px solid rgba(26,111,255,0.3)',
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: 36,
                  margin: '0 auto 20px',
                }}>
                  {member.emoji}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 4 }}>
                  {member.name}
                </h3>
                <div style={{ fontSize: 12, color: '#1a6fff', marginBottom: 14, fontWeight: 600, letterSpacing: 1 }}>
                  {member.role.toUpperCase()}
                </div>
                <p style={{ fontSize: 13, color: '#6a8aaa', lineHeight: 1.7 }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 40px', background: '#050d1a' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{
            background: 'linear-gradient(135deg, #0a2a5e, #0d1f42)',
            border: '1px solid rgba(26,111,255,0.3)',
            borderRadius: 28, padding: '60px 40px',
            textAlign: 'center',
          }}>
            <h2 style={{ fontSize: 40, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              Join The Movement
            </h2>
            <p style={{ fontSize: 16, color: '#6a8aaa', maxWidth: 500, margin: '0 auto 36px', lineHeight: 1.7 }}>
              Whether you are an artist, journalist, designer or just a fan — there is a place for you at Zero Entertainment.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/submit" style={{
                padding: '14px 36px', background: '#1a6fff',
                borderRadius: 12, color: '#fff',
                fontSize: 14, fontWeight: 700, textDecoration: 'none',
              }}>
                Submit Your Music
              </Link>
              <Link href="/contact" style={{
                padding: '14px 36px', background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 12, color: '#fff',
                fontSize: 14, fontWeight: 600, textDecoration: 'none',
              }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}