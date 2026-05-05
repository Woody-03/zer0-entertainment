'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { name: 'Music', href: '/music' },
  { name: 'Videos', href: '/videos' },
  { name: 'News', href: '/news' },
  { name: 'Artists', href: '/artists' },
  { name: 'Fashion', href: '/fashion' },
  { name: 'Events', href: '/events' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: scrolled ? 'rgba(5,13,26,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled
        ? '1px solid rgba(26,111,255,0.2)'
        : '1px solid transparent',
      transition: 'all 0.4s ease',
      padding: '0 40px',
    }}>
      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 70,
      }}>

        {/* Logo */}
        <Link href="/" style={{
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}>
          <picture>
            <source srcSet="/zero-entertainment-logo-light.svg" media="(prefers-color-scheme: light)" />
            <source srcSet="/zero-entertainment-logo.svg" media="(prefers-color-scheme: dark)" />
            <img
              src="/zero-entertainment-logo.svg"
              alt="Zero Entertainment logo"
              width={42}
              height={42}
              style={{
                display: 'block',
                borderRadius: 12,
              }}
            />
          </picture>
          <div>
            <div style={{
              fontSize: 16,
              fontWeight: 800,
              letterSpacing: 1,
              color: '#fff',
              lineHeight: 1,
              fontFamily: 'Montserrat, sans-serif',
            }}>ZERO</div>
            <div style={{
              fontSize: 9,
              color: '#1a6fff',
              letterSpacing: 3,
              fontFamily: 'Montserrat, sans-serif',
            }}>ENTERTAINMENT</div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 32,
        }}>
          {NAV_LINKS.map(link => (
            <Link
              key={link.name}
              href={link.href}
              style={{
                color: '#9ab0cc',
                textDecoration: 'none',
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 0.5,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#1a6fff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#9ab0cc')}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Buttons */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}>
          <Link href="/admin" style={{
            padding: '8px 20px',
            background: 'transparent',
            border: '1px solid rgba(26,111,255,0.4)',
            borderRadius: 8,
            color: '#9ab0cc',
            fontSize: 13,
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'all 0.2s',
          }}>
            Admin
          </Link>
          <Link href="/submit" style={{
            padding: '8px 20px',
            background: 'linear-gradient(135deg, #1a6fff, #0a3d9e)',
            border: 'none',
            borderRadius: 8,
            color: '#fff',
            fontSize: 13,
            fontWeight: 700,
            textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(26,111,255,0.35)',
            transition: 'all 0.2s',
          }}>
            Submit Music
          </Link>
        </div>

      </div>
    </nav>
  )
}