'use client'

import Link from 'next/link'

const SECTIONS = [
  { icon: '🎵', label: 'Music', href: '/music', desc: 'Latest releases and singles from SL artists' },
  { icon: '🎬', label: 'Videos', href: '/videos', desc: 'Music videos and exclusive visual content' },
  { icon: '📰', label: 'News', href: '/news', desc: 'Breaking entertainment news from Sierra Leone' },
  { icon: '🎤', label: 'Artists', href: '/artists', desc: 'Profiles and discographies of SL talent' },
  { icon: 'ℹ️', label: 'About', href: '/about', desc: 'Our story, mission and the team behind Zero Entertainment' },
  { icon: '📩', label: 'Contact', href: '/contact', desc: 'Get in touch with the Zero Entertainment team' },
]

const POSTS = [
  { id: 1, time: '1 hour ago', content: 'Huge congratulations to Drizilik on the new album drop! Pure Salone vibes!', likes: 342, comments: 47 },
  { id: 2, time: '3 hours ago', content: 'Sierra Leone Music Awards nominations are OPEN! Vote for your favourite artists.', likes: 891, comments: 203 },
  { id: 3, time: 'Yesterday', content: 'Freetown Fashion Week 2025 is officially confirmed. The culture is about to POP!', likes: 567, comments: 89 },
]

export default function Explore() {
  return (
    <div>

      <section style={{ padding: '80px 40px', background: '#070f1e' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ fontSize: 11, color: '#1a6fff', letterSpacing: 3, marginBottom: 8 }}>
              EVERYTHING IN ONE PLACE
            </p>
            <h2 style={{ fontSize: 40, fontWeight: 800, color: '#fff' }}>
              Explore Zero Entertainment
            </h2>
            <p style={{ fontSize: 15, color: '#4a6a8a', marginTop: 12 }}>
              Every aspect of Sierra Leone entertainment all in one place
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {SECTIONS.map(sec => (
              <Link
                key={sec.label}
                href={sec.href}
                style={{
                  background: 'rgba(26,111,255,0.06)',
                  border: '1px solid rgba(26,111,255,0.1)',
                  borderRadius: 20,
                  padding: '32px 24px',
                  textAlign: 'center',
                  display: 'block',
                  textDecoration: 'none',
                }}
              >
                <div style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  background: 'rgba(26,111,255,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 28,
                  margin: '0 auto 16px',
                }}>
                  {sec.icon}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8, color: '#e8f0ff' }}>
                  {sec.label}
                </h3>
                <p style={{ fontSize: 12, color: '#4a6a8a', lineHeight: 1.6 }}>
                  {sec.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 40px', background: '#050d1a' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 40 }}>
            <p style={{ fontSize: 11, color: '#1a6fff', letterSpacing: 3, marginBottom: 8 }}>
              STAY CONNECTED
            </p>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: '#fff' }}>
              Latest From Facebook
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {POSTS.map(post => (
              <div
                key={post.id}
                style={{
                  background: 'rgba(24,119,242,0.06)',
                  border: '1px solid rgba(24,119,242,0.15)',
                  borderRadius: 20,
                  padding: 28,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: '#1877f2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 900,
                    fontSize: 20,
                  }}>
                    Z
                  </div>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: '#e8f0ff' }}>
                      Zero Entertainment SL
                    </p>
                    <p style={{ fontSize: 11, color: '#3a6a9a' }}>
                      {post.time}
                    </p>
                  </div>
                </div>
                <p style={{ fontSize: 14, color: '#8aaac8', lineHeight: 1.7, marginBottom: 20 }}>
                  {post.content}
                </p>
                <div style={{ display: 'flex', gap: 20, paddingTop: 16, borderTop: '1px solid rgba(26,111,255,0.1)' }}>
                  <span style={{ fontSize: 12, color: '#3a6a9a' }}>
                    Likes: {post.likes}
                  </span>
                  <span style={{ fontSize: 12, color: '#3a6a9a' }}>
                    Comments: {post.comments}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}