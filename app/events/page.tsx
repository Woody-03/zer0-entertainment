import Link from 'next/link'

export default function EventsPage() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#050d1a',
      color: '#fff',
      padding: '60px 24px',
    }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ marginBottom: 24 }}>
          <p style={{ fontSize: 12, letterSpacing: 2, color: '#3a6a9a' }}>
            EVENTS
          </p>
          <h1 style={{ fontSize: 44, fontWeight: 800, margin: '12px 0', lineHeight: 1.05 }}>
            Live shows, premieres, and Sierra Leone entertainment events
          </h1>
          <p style={{ maxWidth: 680, color: '#8fa4c1', lineHeight: 1.8 }}>
            Discover upcoming concerts, premieres, festivals, and cultural gatherings across Sierra Leone.
            Check back soon for the latest event announcements.
          </p>
        </div>

        <section style={{
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 20,
          padding: 32,
          background: 'rgba(255,255,255,0.02)',
        }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
            Coming soon
          </h2>
          <p style={{ marginBottom: 24, color: '#8fa4c1', lineHeight: 1.7 }}>
            This page is under construction. Event details and ticket info will be available here shortly.
          </p>
          <Link href="/" style={{
            display: 'inline-block',
            padding: '12px 24px',
            borderRadius: 999,
            background: '#1a6fff',
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 700,
          }}>
            Back to Home
          </Link>
        </section>
      </div>
    </main>
  )
}
