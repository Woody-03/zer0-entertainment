'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

type AdminShellProps = {
  children: React.ReactNode
  session: any
  onLogout: () => void | Promise<void>
}

const ADMIN_NAV = [
  { id: 'dashboard', label: 'Dashboard', href: '/admin', icon: '🏠' },
  { id: 'posts', label: 'Posts', href: '/admin/posts', icon: '📝' },
  { id: 'media', label: 'Media', href: '/admin/post/music', icon: '🖼️' },
  { id: 'artists', label: 'Artists', href: '/admin/post/artist', icon: '🎤' },
  { id: 'videos', label: 'Videos', href: '/admin/post/video', icon: '🎬' },
  { id: 'settings', label: 'Settings', href: '/admin/settings', icon: '⚙️' },
]

export default function AdminShell({ children, session, onLogout }: AdminShellProps) {
  const pathname = usePathname()
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === '/admin') {
      return pathname === '/admin'
    }
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <div style={{ minHeight: '100vh', background: '#050d1a', color: '#fff' }}>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <aside style={{ width: 280, background: '#081328', borderRight: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 32 }}>
            <div style={{ width: 46, height: 46, borderRadius: 14, background: 'linear-gradient(135deg, #1a6fff, #0a3d9e)', display: 'grid', placeItems: 'center', color: '#fff', fontWeight: 900, fontSize: 20 }}>
              Z
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: 1, color: '#fff' }}>ZERO CMS</div>
              <div style={{ fontSize: 11, color: '#6a8aaa', letterSpacing: 1.5 }}>Staff content control</div>
            </div>
          </div>

          <nav style={{ display: 'grid', gap: 8, marginBottom: 32 }}>
            {ADMIN_NAV.map(item => (
              <Link
                key={item.id}
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '14px 16px',
                  borderRadius: 14,
                  textDecoration: 'none',
                  color: isActive(item.href) ? '#fff' : '#9db4d8',
                  background: isActive(item.href) ? 'rgba(26,111,255,0.18)' : 'transparent',
                  border: isActive(item.href) ? '1px solid rgba(26,111,255,0.25)' : '1px solid transparent',
                  fontWeight: 600,
                }}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </aside>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <header style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            padding: '16px 32px', 
            background: '#061022',
            borderBottom: '1px solid rgba(255,255,255,0.06)' 
          }}>
            <div>
              <div style={{ fontSize: 18, fontWeight: 800, color: '#fff' }}>Dashboard</div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <Link href="/admin/posts/create" style={{ 
                display: 'flex', alignItems: 'center', gap: 8, 
                background: 'linear-gradient(135deg, #1a6fff, #0a3d9e)',
                color: '#fff', padding: '8px 16px', borderRadius: 20, 
                textDecoration: 'none', fontWeight: 600, fontSize: 14 
              }}>
                {/* @ts-ignore */}
                <ion-icon name="add-circle-outline" style={{ fontSize: 20 }}></ion-icon>
                New Post
              </Link>

              <div style={{ position: 'relative' }}>
                <button 
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  style={{ 
                    background: 'none', border: 'none', color: '#fff', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: 10
                  }}
                >
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#1a6fff', display: 'grid', placeItems: 'center', fontWeight: 800 }}>
                    {session?.user?.email?.charAt(0).toUpperCase() ?? 'A'}
                  </div>
                  {/* @ts-ignore */}
                  <ion-icon name="chevron-down-outline"></ion-icon>
                </button>

                {isProfileOpen && (
                  <div style={{ 
                    position: 'absolute', top: '100%', right: 0, marginTop: 12,
                    background: '#081328', border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 12, padding: 16, width: 220, zIndex: 10,
                    boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
                  }}>
                    <div style={{ fontSize: 11, color: '#7da8ff', letterSpacing: 1, marginBottom: 8 }}>SIGNED IN AS</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 16, wordBreak: 'break-all' }}>
                      {session?.user?.email ?? 'Admin user'}
                    </div>
                    <button 
                      onClick={onLogout} 
                      style={{ 
                        width: '100%', border: '1px solid rgba(255,96,96,0.25)', 
                        borderRadius: 8, background: 'rgba(255,96,96,0.12)', 
                        color: '#ff8080', padding: '10px 0', fontWeight: 700, 
                        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
                      }}
                    >
                      {/* @ts-ignore */}
                      <ion-icon name="log-out-outline"></ion-icon>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </header>
          <main style={{ flex: 1, overflow: 'auto', padding: '32px' }}>{children}</main>
        </div>
      </div>
    </div>
  )
}
