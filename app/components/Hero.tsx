'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const WORDS = [
  'Sierra Leone Entertainment',
  'Music. Fashion. Culture.',
  'Your Story. Our Platform.',
  'The Voice of Salone.',
]

export default function Hero() {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = WORDS[wordIndex % WORDS.length]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIndex + 1))
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800)
        } else {
          setCharIndex(c => c + 1)
        }
      } else {
        setText(current.slice(0, charIndex - 1))
        if (charIndex - 1 === 0) {
          setDeleting(false)
          setWordIndex(w => w + 1)
          setCharIndex(0)
        } else {
          setCharIndex(c => c - 1)
        }
      }
    }, deleting ? 40 : 80)
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, wordIndex])

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .hero-1 { animation: fadeUp 1s ease forwards; }
        .hero-2 { animation: fadeUp 1s ease 0.2s forwards; opacity: 0; }
        .hero-3 { animation: fadeUp 1s ease 0.4s forwards; opacity: 0; }
        .hero-4 { animation: fadeUp 1s ease 0.6s forwards; opacity: 0; }
        .floating { animation: float 4s ease-in-out infinite; }
        .glow-text {
          background: linear-gradient(135deg, #ffffff 0%, #a8c8ff 50%, #1a6fff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .grid-bg {
          background-image:
            linear-gradient(rgba(26,111,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,111,255,0.06) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(26,111,255,0.5) !important;
        }
        .btn-secondary:hover {
          background: rgba(26,111,255,0.1) !important;
          transform: translateY(-2px);
        }
        .btn-primary, .btn-secondary {
          transition: all 0.25s ease;
        }
      `}</style>

      <section className="grid-bg" style={{
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '60px 40px',
      }}>

        {/* Background glow orbs */}
        <div style={{
          position: 'absolute', top: '10%', right: '5%',
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(26,111,255,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '5%', left: '0%',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(10,61,158,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Floating music orb */}
        <div className="floating" style={{
          position: 'absolute', right: '8%', top: '20%',
          width: 280, height: 280, borderRadius: '50%',
          border: '1px solid rgba(26,111,255,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none',
        }}>
          <div style={{
            width: 200, height: 200, borderRadius: '50%',
            border: '1px solid rgba(26,111,255,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              width: 120, height: 120, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(26,111,255,0.3), rgba(10,61,158,0.5))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 40,
              boxShadow: '0 0 60px rgba(26,111,255,0.3)',
            }}>🎵</div>
          </div>
        </div>

        {/* Main content */}
        <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%' }}>

          {/* Badge */}
          <div className="hero-1">
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(26,111,255,0.12)',
              border: '1px solid rgba(26,111,255,0.3)',
              borderRadius: 100, padding: '6px 16px', marginBottom: 28,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%',
                background: '#1a6fff',
                animation: 'pulse 1.5s infinite',
                display: 'inline-block',
              }} />
              <span style={{
                fontSize: 11, color: '#7ab0ff',
                letterSpacing: 2,
              }}>SIERRA LEONE'S #1 ENTERTAINMENT PLATFORM</span>
            </div>
          </div>

          {/* Headline */}
          <div className="hero-2">
            <h1 style={{
              fontSize: 'clamp(42px, 7vw, 88px)',
              fontWeight: 800,
              lineHeight: 1.05,
              marginBottom: 12,
              maxWidth: 800,
            }}>
              <span className="glow-text">The Home of</span>
              <br />
              <span style={{ color: '#fff' }}>Salone Culture</span>
            </h1>
          </div>

          {/* Typewriter */}
          <div className="hero-3" style={{ marginBottom: 24 }}>
            <div style={{
              fontSize: 'clamp(18px, 2.5vw, 26px)',
              color: '#4a90d9',
              fontWeight: 600,
              height: 36,
            }}>
              {text}
              <span style={{
                animation: 'pulse 1s infinite',
                color: '#1a6fff',
                display: 'inline-block',
              }}>|</span>
            </div>
          </div>

          {/* Description */}
          <div className="hero-3">
            <p style={{
              fontSize: 16,
              color: '#6a8aaa',
              maxWidth: 520,
              lineHeight: 1.8,
              marginBottom: 40,
              fontWeight: 300,
            }}>
              Your ultimate destination for African music, news, rankings,
              fashion and cultural content — straight from the heart of
              Freetown, Sierra Leone.
            </p>
          </div>

          {/* Buttons */}
          <div className="hero-4" style={{
            display: 'flex', gap: 16,
            flexWrap: 'wrap', marginBottom: 60,
          }}>
            <Link href="/music" className="btn-primary" style={{
              padding: '16px 36px',
              background: 'linear-gradient(135deg, #1a6fff, #0a3d9e)',
              border: 'none', borderRadius: 12,
              color: '#fff', fontSize: 15, fontWeight: 700,
              textDecoration: 'none',
              boxShadow: '0 8px 32px rgba(26,111,255,0.4)',
              letterSpacing: 0.5,
              display: 'inline-block',
            }}>
              Explore Now →
            </Link>
            <Link href="/submit" className="btn-secondary" style={{
              padding: '16px 36px',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 12,
              color: '#fff', fontSize: 15, fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-block',
            }}>
              Submit Your Music
            </Link>
          </div>

          {/* Stats */}
          <div className="hero-4" style={{
            display: 'flex', gap: 40, flexWrap: 'wrap',
          }}>
            {[
              ['500+', 'Artists'],
              ['10K+', 'Monthly Readers'],
              ['50+', 'Weekly Posts'],
              ['100%', 'Salone Made'],
            ].map(([num, label]) => (
              <div key={label}>
                <div style={{
                  fontSize: 28, fontWeight: 800,
                  color: '#1a6fff', lineHeight: 1,
                }}>{num}</div>
                <div style={{
                  fontSize: 11, color: '#4a6a8a',
                  letterSpacing: 1, marginTop: 4,
                }}>{label.toUpperCase()}</div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}