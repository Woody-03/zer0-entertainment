import Link from 'next/link'

export default function Footer() {
  return (
    <div>

      {/* Submit Music CTA */}
      <section style={{ padding: '80px 40px', background: '#070f1e' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{
            background: 'linear-gradient(135deg, #0a2a5e 0%, #0d1f42 50%, #0a3d9e 100%)',
            border: '1px solid rgba(26,111,255,0.3)',
            borderRadius: 28,
            padding: '72px 60px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <p style={{ fontSize: 11, color: '#7ab0ff', letterSpacing: 3, marginBottom: 16 }}>
              ARE YOU AN ARTIST?
            </p>
            <h2 style={{ fontSize: 48, fontWeight: 800, color: '#fff', marginBottom: 16, lineHeight: 1.1 }}>
              Get Your Music On
              <br />
              <span style={{ color: '#1a6fff' }}>Zero Entertainment</span>
            </h2>
            <p style={{ fontSize: 16, color: '#6a9acc', maxWidth: 500, margin: '0 auto 40px', lineHeight: 1.7 }}>
              Submit your music, get featured, and reach thousands of
              Sierra Leoneans who love great music.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/submit" style={{
                padding: '16px 40px',
                background: '#1a6fff',
                borderRadius: 12,
                color: '#fff',
                fontSize: 15,
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(26,111,255,0.5)',
              }}>
                Submit Music Now
              </Link>
              <Link href="/about" style={{
                padding: '16px 40px',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 12,
                color: '#fff',
                fontSize: 15,
                fontWeight: 600,
                textDecoration: 'none',
              }}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#030a14', borderTop: '1px solid rgba(26,111,255,0.1)', padding: '60px 40px 30px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>

            {/* Brand */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{
                  width: 38, height: 38, borderRadius: 10,
                  background: 'linear-gradient(135deg, #1a6fff, #0a3d9e)',
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 18, fontWeight: 900, color: '#fff',
                }}>Z</div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 800, letterSpacing: 1, color: '#fff' }}>ZERO</div>
                  <div style={{ fontSize: 9, color: '#1a6fff', letterSpacing: 3 }}>ENTERTAINMENT</div>
                </div>
              </div>
              <p style={{ fontSize: 13, color: '#3a5a7a', lineHeight: 1.8, maxWidth: 260 }}>
                Sierra Leone premier entertainment platform. Music, news, fashion, rankings and culture all in one place.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
                {['Facebook', 'Instagram', 'TikTok', 'YouTube'].map(social => (
                  <div key={social} style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: 'rgba(26,111,255,0.1)',
                    border: '1px solid rgba(26,111,255,0.2)',
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 11, color: '#1a6fff',
                    cursor: 'pointer', fontWeight: 700,
                  }}>
                    {social[0]}
                  </div>
                ))}
              </div>
            </div>

            {/* Explore */}
            <div>
              <div style={{ fontSize: 11, color: '#1a6fff', letterSpacing: 2, fontWeight: 700, marginBottom: 20 }}>
                EXPLORE
              </div>
              {['Music', 'Videos', 'News', 'Rankings', 'Artists', 'Fashion'].map(link => (
                <Link key={link} href={`/${link.toLowerCase()}`} style={{
                  display: 'block', fontSize: 13, color: '#3a5a7a',
                  marginBottom: 10, textDecoration: 'none',
                }}>
                  {link}
                </Link>
              ))}
            </div>

            {/* Platform */}
            <div>
              <div style={{ fontSize: 11, color: '#1a6fff', letterSpacing: 2, fontWeight: 700, marginBottom: 20 }}>
                PLATFORM
              </div>
              {['Submit Music', 'Advertise', 'Admin Login', 'Contact Us'].map(link => (
                <div key={link} style={{
                  fontSize: 13, color: '#3a5a7a',
                  marginBottom: 10, cursor: 'pointer',
                }}>
                  {link}
                </div>
              ))}
            </div>

            {/* Company */}
            <div>
              <div style={{ fontSize: 11, color: '#1a6fff', letterSpacing: 2, fontWeight: 700, marginBottom: 20 }}>
                COMPANY
              </div>
              {['About Us', 'Privacy Policy', 'Terms of Use', 'Sitemap'].map(link => (
                <div key={link} style={{
                  fontSize: 13, color: '#3a5a7a',
                  marginBottom: 10, cursor: 'pointer',
                }}>
                  {link}
                </div>
              ))}
            </div>

          </div>

          {/* Bottom bar */}
          <div style={{
            borderTop: '1px solid rgba(26,111,255,0.08)',
            paddingTop: 24,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}>
            <div style={{ fontSize: 12, color: '#2a4a6a' }}>
              2024 Zero Entertainment. Made with love in Sierra Leone
            </div>
            <div style={{ fontSize: 12, color: '#2a4a6a' }}>
              The Voice of Salone Entertainment
            </div>
          </div>

        </div>
      </footer>

    </div>
  )
}