'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import AdminShell from './AdminShell'

type AdminAuthLayoutProps = {
  children: React.ReactNode
}

const isSupabaseConfigured = Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function AdminAuthLayout({ children }: AdminAuthLayoutProps) {
  const [session, setSession] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [authLoading, setAuthLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const isStaffUser = (user: any) => {
    const role = user?.user_metadata?.role ?? user?.app_metadata?.role
    return role === 'staff' || role === 'admin'
  }

  useEffect(() => {
    const initialize = async () => {
      if (isSupabaseConfigured) {
        const { data: sessionData } = await supabase.auth.getSession()
        if (sessionData.session) {
          const { data: userData } = await supabase.auth.getUser()
          if (userData.user && isStaffUser(userData.user)) {
            setSession(sessionData.session)
          } else {
            await supabase.auth.signOut()
            setSession(null)
          }
        }
      } else {
        const persisted = typeof window !== 'undefined' && window.localStorage.getItem('zero-admin-session')
        if (persisted === 'true') {
          setSession({ user: { email: 'admin@zero.com' } })
        }
      }
      setLoading(false)
    }

    initialize()

    if (isSupabaseConfigured) {
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session ?? null)
      })
      return () => {
        subscription?.unsubscribe()
      }
    }
  }, [])

  const handleLogin = async () => {
    setAuthLoading(true)
    setError('')

    if (isSupabaseConfigured) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        setError(error.message)
      } else {
        const user = data?.user ?? data?.session?.user
        if (!user || !isStaffUser(user)) {
          await supabase.auth.signOut()
          setSession(null)
          setError('Admin access requires a staff role. Please sign in with a staff account.')
        } else {
          setSession(data.session)
        }
      }
    } else {
      await new Promise(resolve => setTimeout(resolve, 500))
      if (email === 'admin@zero.com' && password === 'zero2025') {
        setSession({ user: { email: 'admin@zero.com' } })
        if (typeof window !== 'undefined') {
          window.localStorage.setItem('zero-admin-session', 'true')
        }
      } else {
        setError('Invalid credentials. Try admin@zero.com / zero2025')
      }
    }

    setAuthLoading(false)
  }

  const handleLogout = async () => {
    if (isSupabaseConfigured) {
      await supabase.auth.signOut()
    }
    setSession(null)
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('zero-admin-session')
    }
  }

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: '#050d1a', color: '#fff' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 32, marginBottom: 14 }}>Initializing admin...</div>
          <div style={{ color: '#6a8aaa' }}>Please wait while authentication loads.</div>
        </div>
      </div>
    )
  }

  if (!session) {
    return (
      <div style={{ background: '#050d1a', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <div style={{ width: '100%', maxWidth: 420, background: '#08172f', borderRadius: 24, padding: '48px 36px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ marginBottom: 32, textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#fff', marginBottom: 6 }}>Zero Entertainment Admin</div>
            <p style={{ color: '#6a8aaa', fontSize: 14, margin: 0 }}>Secure staff access for content publishing and site management.</p>
          </div>

          <div style={{ display: 'grid', gap: 20 }}>
            <div>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#8698c4', letterSpacing: 1, marginBottom: 8 }}>EMAIL ADDRESS</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="admin@zero.com"
                style={{ width: '100%', padding: '14px 16px', borderRadius: 14, border: '1px solid rgba(255,255,255,0.08)', background: '#0f2037', color: '#fff', fontSize: 14, fontFamily: 'inherit' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#8698c4', letterSpacing: 1, marginBottom: 8 }}>PASSWORD</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter your password"
                onKeyDown={e => e.key === 'Enter' && handleLogin()}
                style={{ width: '100%', padding: '14px 16px', borderRadius: 14, border: '1px solid rgba(255,255,255,0.08)', background: '#0f2037', color: '#fff', fontSize: 14, fontFamily: 'inherit' }}
              />
            </div>
            {error && (
              <div style={{ padding: '14px 16px', background: 'rgba(255, 96, 96, 0.12)', borderRadius: 12, color: '#ff9aa8', fontSize: 13 }}>
                {error}
              </div>
            )}
            <button
              onClick={handleLogin}
              disabled={authLoading}
              style={{ width: '100%', padding: '14px 16px', borderRadius: 14, border: 'none', background: '#1a6fff', color: '#fff', fontSize: 15, fontWeight: 700, cursor: authLoading ? 'not-allowed' : 'pointer' }}
            >
              {authLoading ? 'Signing in…' : 'Sign in to admin'}
            </button>
            <div style={{ fontSize: 12, color: '#6a8aaa', textAlign: 'center' }}>
              Use your staff credentials to manage front page content.
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <AdminShell session={session} onLogout={handleLogout}>{children}</AdminShell>
}
