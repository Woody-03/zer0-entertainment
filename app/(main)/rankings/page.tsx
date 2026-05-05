import Link from 'next/link'
import { supabaseServer } from '../../lib/supabaseServer'

export const dynamic = 'force-dynamic'


interface Ranking {
  id: string
  artist_name: string
  rank: number
  genre: string
  streams: number
  weeks: number
  change: string
  published: boolean
  created_at: string
  updated_at: string
}

async function getRankings(): Promise<Ranking[]> {
  const { data } = await supabaseServer
    .from('rankings')
    .select('*')
    .eq('published', true)
    .order('rank', { ascending: true })
  
  return data || []
}

const CATEGORIES = [
  { icon: '🎵', label: 'Most Streamed', active: true },
  { icon: '🔥', label: 'Trending', active: false },
  { icon: '🆕', label: 'New Entries', active: false },
  { icon: '👑', label: 'All Time', active: false },
]

export default async function RankingsPage() {
  const rankings = await getRankings()

  return (
    <div style={{ background: '#050d1a', minHeight: '100vh' }}>
      <style>{`
        .rank-row {
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .rank-row:hover {
          background: rgba(26,111,255,0.08) !important;
          border-color: rgba(26,111,255,0.3) !important;
        }
        .cat-tab {
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .cat-tab:hover {
          border-color: rgba(26,111,255,0.4) !important;
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
            WEEKLY CHARTS
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 800, color: '#fff', marginBottom: 12 }}>
            Sierra Leone Rankings
          </h1>
          <p style={{ fontSize: 16, color: '#6a8aaa', maxWidth: 500 }}>
            The official Zero Entertainment charts updated every week
          </p>
        </div>
      </div>

      <div style={{ padding: '60px 40px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          {/* Category Tabs */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 40, flexWrap: 'wrap' }}>
            {CATEGORIES.map(cat => (
              <button key={cat.label} className="cat-tab" style={{
                padding: '12px 24px',
                background: cat.active ? 'rgba(26,111,255,0.15)' : 'transparent',
                border: `1px solid ${cat.active ? 'rgba(26,111,255,0.5)' : 'rgba(26,111,255,0.15)'}`,
                borderRadius: 12,
                color: cat.active ? '#fff' : '#4a6a8a',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'inherit',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}>
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 32 }}>

            {/* Rankings Table */}
            <div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 20,
              }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: '#fff' }}>
                  Top 10 This Week
                </h2>
                <span style={{ fontSize: 11, color: '#3a6a9a', letterSpacing: 1 }}>
                  Updated May 2025
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {rankings.map(artist => (
                  <div key={artist.rank} className="rank-row" style={{
                    background: artist.rank <= 3
                      ? 'linear-gradient(135deg, rgba(26,111,255,0.1), rgba(10,61,158,0.05))'
                      : 'rgba(26,111,255,0.03)',
                    border: `1px solid ${artist.rank <= 3 ? 'rgba(26,111,255,0.2)' : 'rgba(26,111,255,0.08)'}`,
                    borderRadius: 14,
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                  }}>

                    {/* Rank number */}
                    <div style={{
                      width: 40, height: 40,
                      borderRadius: 10,
                      background: artist.rank === 1
                        ? 'linear-gradient(135deg, #ffd700, #ffaa00)'
                        : artist.rank === 2
                        ? 'linear-gradient(135deg, #c0c0c0, #a0a0a0)'
                        : artist.rank === 3
                        ? 'linear-gradient(135deg, #cd7f32, #a05a20)'
                        : 'rgba(26,111,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 14,
                      fontWeight: 800,
                      color: artist.rank <= 3 ? '#000' : '#4a6a8a',
                      flexShrink: 0,
                    }}>
                      {artist.rank}
                    </div>

                    {/* Avatar placeholder */}
                    <div style={{
                      width: 44, height: 44, borderRadius: 12,
                      background: 'linear-gradient(135deg, #1a6fff22, #0a3d9e22)',
                      border: '1px solid rgba(26,111,255,0.2)',
                      display: 'flex', alignItems: 'center',
                      justifyContent: 'center', fontSize: 20,
                      flexShrink: 0,
                    }}>
                      🎤
                    </div>

                    {/* Artist info */}
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 15, fontWeight: 700, color: '#e8f0ff', marginBottom: 2 }}>
                        {artist.artist_name}
                      </div>
                      <div style={{ fontSize: 11, color: '#3a6a9a' }}>
                        {artist.genre}
                      </div>
                    </div>

                    {/* Weeks on chart */}
                    <div style={{ textAlign: 'center', flexShrink: 0 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#7ab0ff' }}>
                        {artist.weeks}
                      </div>
                      <div style={{ fontSize: 10, color: '#3a6a9a' }}>
                        weeks
                      </div>
                    </div>

                    {/* Streams */}
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#e8f0ff' }}>
                        {artist.streams}
                      </div>
                      <div style={{ fontSize: 10, color: '#3a6a9a' }}>
                        streams
                      </div>
                    </div>

                    {/* Change indicator */}
                    <div style={{
                      width: 28, height: 28,
                      borderRadius: 8,
                      background: artist.change === 'up'
                        ? 'rgba(26,255,111,0.1)'
                        : artist.change === 'down'
                        ? 'rgba(255,60,60,0.1)'
                        : 'rgba(26,111,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 12,
                      flexShrink: 0,
                    }}>
                      {artist.change === 'up' ? '↑' : artist.change === 'down' ? '↓' : '—'}
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* Side Panel */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

              {/* Top 3 Spotlight */}
              <div style={{
                background: 'linear-gradient(135deg, #0a2a5e, #0d1f42)',
                border: '1px solid rgba(26,111,255,0.3)',
                borderRadius: 20, padding: 28,
              }}>
                <div style={{ fontSize: 11, color: '#1a6fff', letterSpacing: 2, marginBottom: 20, fontWeight: 700 }}>
                  TOP 3 SPOTLIGHT
                </div>
                {rankings.slice(0, 3).map(artist => (
                  <div key={artist.rank} style={{
                    display: 'flex', alignItems: 'center',
                    gap: 12, marginBottom: 16,
                    paddingBottom: 16,
                    borderBottom: artist.rank < 3 ? '1px solid rgba(26,111,255,0.1)' : 'none',
                  }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 8,
                      background: artist.rank === 1
                        ? 'linear-gradient(135deg, #ffd700, #ffaa00)'
                        : artist.rank === 2
                        ? 'linear-gradient(135deg, #c0c0c0, #a0a0a0)'
                        : 'linear-gradient(135deg, #cd7f32, #a05a20)',
                      display: 'flex', alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 13, fontWeight: 800, color: '#000',
                    }}>
                      {artist.rank}
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#e8f0ff' }}>
                        {artist.artist_name}
                      </div>
                      <div style={{ fontSize: 11, color: '#3a6a9a' }}>
                        {artist.streams} streams
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Submit to chart */}
              <div style={{
                background: 'rgba(26,111,255,0.06)',
                border: '1px solid rgba(26,111,255,0.15)',
                borderRadius: 20, padding: 28,
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>🏆</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 8 }}>
                  Want To Chart?
                </h3>
                <p style={{ fontSize: 12, color: '#4a6a8a', lineHeight: 1.6, marginBottom: 20 }}>
                  Submit your music to be considered for the weekly Zero Entertainment charts
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