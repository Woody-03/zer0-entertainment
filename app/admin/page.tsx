'use client'

import { useState } from 'react'
import Link from 'next/link'

const STATS = [
  { label: 'Total Posts', value: '124', icon: '📝', change: '+12 this week' },
  { label: 'Total Artists', value: '48', icon: '🎤', change: '+3 this week' },
  { label: 'Monthly Visitors', value: '10,240', icon: '👥', change: '+18% this month' },
  { label: 'Songs Submitted', value: '89', icon: '🎵', change: '+7 this week' },
]

const RECENT_POSTS = [
  { id: 1, title: 'Sierra Leone Music Awards 2025 Date Announced', category: 'News', date: 'May 1, 2025', status: 'published' },
  { id: 2, title: 'Freetown Fashion Week Returns', category: 'Fashion', date: 'April 28, 2025', status: 'published' },
  { id: 3, title: 'Drizilik New Album Review', category: 'Music', date: 'April 25, 2025', status: 'draft' },
  { id: 4, title: 'Top 10 Artists This Month', category: 'Rankings', date: 'April 22, 2025', status: 'published' },
  { id: 5, title: 'Emmerson World Tour Dates', category: 'News', date: 'April 20, 2025', status: 'published' },
]

const SECTIONS = [
  { icon: '📰', label: 'Post News', href: '/admin/post/news', desc: 'Write and publish news articles' },
  { icon: '🎵', label: 'Add Music', href: '/admin/post/music', desc: 'Add new songs and albums' },
  { icon: '🏆', label: 'Update Rankings', href: '/admin/post/rankings', desc: 'Update weekly chart positions' },
  { icon: '🎤', label: 'Add Artist', href: '/admin/post/artist', desc: 'Create new artist profiles' },
  { icon: '👗', label: 'Post Fashion', href: '/admin/post/fashion', desc: 'Publish fashion stories' },
  { icon: '🎬', label: 'Add Video', href: '/admin/post/video', desc: 'Upload and manage videos' },
]

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setLoading(true)
    setError('')
    await new Promise(r => setTimeout(r, 1000))
    if (email === 'admin@zero.com' && password === 'zero2025') {
      setIsLoggedIn(true)
    } else {
      setError('Invalid email or password. Try admin@zero.com / zero2025')
    }
    setLoading(false)
  }

  if (!isLoggedIn) {
    return (
      <div style={{
        background: '#050d1a',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
      }}>
        <style>{`
          .input-field {
            transition: all 0.2s ease;
          }
          .input-field:focus {
            outline: none;
            border-color: #1a6fff !important;
            box-shadow: 0 0 0 3px rgba(26,111,255,0.15);
          }
          .login-btn {
            transition: all 0.2s ease;
          }
          .login-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 32px rgba(26,111,255,0.4) !important;
          }
        `}</style>

        <div style={{
          background: 'linear-gradient(135deg, #0a2a5e, #0d1f42)',
          border: '1px solid rgba(26,111,255,0.3)',
          borderRadius: 24,
          padding: '48px 40px',
          width: '100%',
          maxWidth: 420,
        }}>
          {/* Logo */}
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div style={{
              width: 56, height: 56, borderRadius: 14,
              background: 'linear-gradient(135deg, #1a6fff, #0a3d9e)',
              display: 'flex', alignItems: 'center',
              justifyContent: 'center',
              fontSize: 24, fontWeight: 900, color: '#fff',
              margin: '0 auto 16px',
              boxShadow: '0 8px 32px rgba(26,111,255,0.4)',
            }}>Z</div>
            <h1 style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 4 }}>
              Admin Login
            </h1>
            <p style={{ fontSize: 13, color: '#4a6a8a' }}>
              Zero Entertainment Dashboard
            </p>
          </div>

          {/* Error */}
          {error && (
            <div style={{
              background: 'rgba(255,60,60,0.1)',
              border: '1px solid rgba(255,60,60,0.3)',
              borderRadius: 10,
              padding: '12px 16px',
              marginBottom: 20,
              fontSize: 13,
              color: '#ff8080',
            }}>
              {error}
            </div>
          )}

          {/* Email */}
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 12, color: '#4a6a8a', display: 'block', marginBottom: 8, fontWeight: 600, letterSpacing: 1 }}>
              EMAIL
            </label>
            <input
              type="email"
              className="input-field"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="admin@zero.com"
              style={{
                width: '100%',
                padding: '14px 16px',
                background: 'rgba(26,111,255,0.06)',
                border: '1px solid rgba(26,111,255,0.2)',
                borderRadius: 10,
                color: '#fff',
                fontSize: 14,
                fontFamily: 'inherit',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: 24 }}>
            <label style={{ fontSize: 12, color: '#4a6a8a', display: 'block', marginBottom: 8, fontWeight: 600, letterSpacing: 1 }}>
              PASSWORD
            </label>
            <input
              type="password"
              className="input-field"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password"
              onKeyDown={e => e.key === 'Enter' && handleLogin()}
              style={{
                width: '100%',
                padding: '14px 16px',
                background: 'rgba(26,111,255,0.06)',
                border: '1px solid rgba(26,111,255,0.2)',
                borderRadius: 10,
                color: '#fff',
                fontSize: 14,
                fontFamily: 'inherit',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Login Button */}
          <button
            className="login-btn"
            onClick={handleLogin}
            disabled={loading}
            style={{
              width: '100%',
              padding: '14px',
              background: loading ? 'rgba(26,111,255,0.5)' : 'linear-gradient(135deg, #1a6fff, #0a3d9e)',
              border: 'none',
              borderRadius: 10,
              color: '#fff',
              fontSize: 15,
              fontWeight: 700,
              cursor: loading ? 'not-allowed' : 'pointer',
              fontFamily: 'inherit',
              boxShadow: '0 4px 20px rgba(26,111,255,0.3)',
            }}
          >
            {loading ? 'Logging in...' : 'Login to Dashboard'}
          </button>

          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <Link href="/" style={{ fontSize: 13, color: '#3a6a9a', textDecoration: 'none' }}>
              ← Back to Zero Entertainment
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ background: '#050d1a', minHeight: '100vh' }}>
      <style>{`
        .admin-card {
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .admin-card:hover {
          transform: translateY(-3px);
          border-color: rgba(26,111,255,0.4) !important;
          box-shadow: 0 12px 40px rgba(26,111,255,0.15);
        }
        .post-row {
          transition: all 0.2s ease;
        }
        .post-row:hover {
          background: rgba(26,111,255,0.06) !important;
        }
        .logout-btn:hover {
          background: rgba(255,60,60,0.2) !important;
          color: #ff8080 !important;
        }
      `}</style>

      {/* Admin Header */}
      <div style={{
        background: '#0a1628',
        borderBottom: '1px solid rgba(26,111,255,0.15)',
        padding: '0 40px',
      }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', height: 64,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: 'linear-gradient(135deg, #1a6fff, #0a3d9e)',
              display: 'flex', alignItems: 'center',
              justifyContent: 'center',
              fontSize: 14, fontWeight: 900, color: '#fff',
            }}>Z</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 800, color: '#fff', letterSpacing: 1 }}>
                ZERO ENTERTAINMENT
              </div>
              <div style={{ fontSize: 9, color: '#1a6fff', letterSpacing: 2 }}>
                ADMIN DASHBOARD
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ fontSize: 13, color: '#4a6a8a' }}>
              Welcome, <span style={{ color: '#7ab0ff', fontWeight: 600 }}>Admin</span>
            </div>
            <Link href="/" style={{
              fontSize: 12, color: '#4a6a8a',
              textDecoration: 'none', padding: '6px 14px',
              border: '1px solid rgba(26,111,255,0.2)',
              borderRadius: 6,
            }}>
              View Site
            </Link>
            <button
              className="logout-btn"
              onClick={() => setIsLoggedIn(false)}
              style={{
                fontSize: 12, color: '#ff6060',
                background: 'rgba(255,60,60,0.1)',
                border: '1px solid rgba(255,60,60,0.2)',
                borderRadius: 6, padding: '6px 14px',
                cursor: 'pointer', fontFamily: 'inherit',
                transition: 'all 0.2s',
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div style={{ padding: '40px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          {/* Welcome */}
          <div style={{ marginBottom: 36 }}>
            <h1 style={{ fontSize: 28, fontWeight: 800, color: '#fff', marginBottom: 4 }}>
              Dashboard
            </h1>
            <p style={{ fontSize: 14, color: '#4a6a8a' }}>
              Manage all Zero Entertainment content from here
            </p>
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 20,
            marginBottom: 40,
          }}>
            {STATS.map(stat => (
              <div key={stat.label} className="admin-card" style={{
                background: 'linear-gradient(135deg, rgba(26,111,255,0.08), rgba(5,13,26,0.9))',
                border: '1px solid rgba(26,111,255,0.15)',
                borderRadius: 16, padding: 24,
              }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{stat.icon}</div>
                <div style={{ fontSize: 28, fontWeight: 800, color: '#fff', marginBottom: 4 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: 13, color: '#4a6a8a', marginBottom: 8 }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: 11, color: '#1a6fff', fontWeight: 600 }}>
                  {stat.change}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>

            {/* Quick Post Actions */}
            <div>
              <h2 style={{ fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 20 }}>
                Post New Content
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 14,
              }}>
                {SECTIONS.map(sec => (
                  <Link key={sec.label} href={sec.href} className="admin-card" style={{
                    background: 'rgba(26,111,255,0.05)',
                    border: '1px solid rgba(26,111,255,0.12)',
                    borderRadius: 14,
                    padding: 20,
                    textDecoration: 'none',
                    display: 'block',
                  }}>
                    <div style={{ fontSize: 24, marginBottom: 8 }}>{sec.icon}</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#e8f0ff', marginBottom: 4 }}>
                      {sec.label}
                    </div>
                    <div style={{ fontSize: 11, color: '#3a5a7a', lineHeight: 1.4 }}>
                      {sec.desc}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
                <h2 style={{ fontSize: 18, fontWeight: 800, color: '#fff' }}>
                  Recent Posts
                </h2>
                <button style={{
                  background: 'transparent',
                  border: '1px solid rgba(26,111,255,0.2)',
                  borderRadius: 6,
                  color: '#1a6fff',
                  padding: '6px 14px',
                  fontSize: 11,
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                }}>
                  View All
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {RECENT_POSTS.map(post => (
                  <div key={post.id} className="post-row" style={{
                    background: 'rgba(26,111,255,0.03)',
                    border: '1px solid rgba(26,111,255,0.08)',
                    borderRadius: 12,
                    padding: '14px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                  }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: '#e8f0ff', marginBottom: 4 }}>
                        {post.title}
                      </div>
                      <div style={{ display: 'flex', gap: 10 }}>
                        <span style={{ fontSize: 10, color: '#3a6a9a' }}>{post.category}</span>
                        <span style={{ fontSize: 10, color: '#3a6a9a' }}>{post.date}</span>
                      </div>
                    </div>
                    <span style={{
                      fontSize: 9, fontWeight: 700,
                      padding: '4px 10px', borderRadius: 6,
                      letterSpacing: 1,
                      background: post.status === 'published'
                        ? 'rgba(26,255,111,0.12)'
                        : 'rgba(255,200,26,0.12)',
                      color: post.status === 'published' ? '#26ff6f' : '#ffc81a',
                    }}>
                      {post.status.toUpperCase()}
                    </span>
                    <button style={{
                      background: 'rgba(26,111,255,0.1)',
                      border: '1px solid rgba(26,111,255,0.2)',
                      borderRadius: 6,
                      color: '#1a6fff',
                      padding: '5px 12px',
                      fontSize: 11,
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                    }}>
                      Edit
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}