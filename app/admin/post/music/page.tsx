'use client'

import { useState } from 'react'
import { supabase } from '../../../lib/supabase'
import Link from 'next/link'

export default function PostSong() {
  const [form, setForm] = useState({
    title: '',
    artist: '',
    genre: 'AFROBEATS',
    duration: '3:00',
    plays: '0',
    new_release: false,
    hot: false,
    published: false,
    audio_url: '',
    cover_url: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value
    setForm(prev => ({ ...prev, [target.name]: value }))
  }

  const handleSubmit = async () => {
    if (!form.title || !form.artist) {
      setError('Please fill in title and artist')
      return
    }

    setLoading(true)
    setError('')

    const { data: sessionData } = await supabase.auth.getSession()
    const accessToken = sessionData?.session?.access_token

    if (!accessToken) {
      setError('You must be signed in to save songs.')
      setLoading(false)
      return
    }

    const response = await fetch('/api/songs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(form),
    })

    const result = await response.json()

    if (!response.ok) {
      setError(result?.error || 'Error saving song')
    } else {
      setSuccess(true)
      setForm({
        title: '',
        artist: '',
        genre: 'AFROBEATS',
        duration: '3:00',
        plays: '0',
        new_release: false,
        hot: false,
        published: false,
        audio_url: '',
        cover_url: '',
      })
    }

    setLoading(false)
  }

  return (
    <div style={{ background: '#050d1a', minHeight: '100vh', padding: '40px' }}>
      <style>{`
        .input-field {
          transition: all 0.2s ease;
        }
        .input-field:focus {
          outline: none;
          border-color: #1a6fff !important;
          box-shadow: 0 0 0 3px rgba(26,111,255,0.15);
        }
      `}</style>

      <div style={{ maxWidth: 800, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 36 }}>
          <div>
            <Link href="/admin" style={{ fontSize: 12, color: '#3a6a9a', textDecoration: 'none', display: 'block', marginBottom: 8 }}>
              ← Back to Dashboard
            </Link>
            <h1 style={{ fontSize: 28, fontWeight: 800, color: '#fff' }}>
              Add New Song
            </h1>
          </div>
          <div style={{ fontSize: 24 }}>🎵</div>
        </div>

        {/* Success message */}
        {success && (
          <div style={{
            background: 'rgba(26,255,111,0.1)',
            border: '1px solid rgba(26,255,111,0.3)',
            borderRadius: 12,
            padding: '16px 20px',
            marginBottom: 24,
            fontSize: 14,
            color: '#26ff6f',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <span>Song saved successfully!</span>
            <div style={{ display: 'flex', gap: 12 }}>
              <Link href="/music" style={{ fontSize: 12, color: '#26ff6f', textDecoration: 'none', fontWeight: 600 }}>
                View on Site →
              </Link>
              <button onClick={() => setSuccess(false)} style={{ background: 'none', border: 'none', color: '#26ff6f', cursor: 'pointer', fontSize: 16 }}>
                ×
              </button>
            </div>
          </div>
        )}

        {/* Error message */}
        {error && (
          <div style={{
            background: 'rgba(255,60,60,0.1)',
            border: '1px solid rgba(255,60,60,0.3)',
            borderRadius: 12,
            padding: '16px 20px',
            marginBottom: 24,
            fontSize: 14,
            color: '#ff8080',
          }}>
            {error}
          </div>
        )}

        {/* Form */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(26,111,255,0.05), rgba(5,13,26,0.9))',
          border: '1px solid rgba(26,111,255,0.15)',
          borderRadius: 20,
          padding: '32px',
        }}>

          {/* Title */}
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#e8f0ff', marginBottom: 8 }}>
              Song Title *
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="input-field"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(5,13,26,0.8)',
                border: '1px solid rgba(26,111,255,0.2)',
                borderRadius: 10,
                color: '#fff',
                fontSize: 14,
              }}
              placeholder="Enter song title"
            />
          </div>

          {/* Artist */}
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#e8f0ff', marginBottom: 8 }}>
              Artist *
            </label>
            <input
              type="text"
              name="artist"
              value={form.artist}
              onChange={handleChange}
              className="input-field"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(5,13,26,0.8)',
                border: '1px solid rgba(26,111,255,0.2)',
                borderRadius: 10,
                color: '#fff',
                fontSize: 14,
              }}
              placeholder="Enter artist name"
            />
          </div>

          {/* Genre */}
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#e8f0ff', marginBottom: 8 }}>
              Genre
            </label>
            <select
              name="genre"
              value={form.genre}
              onChange={handleChange}
              className="input-field"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(5,13,26,0.8)',
                border: '1px solid rgba(26,111,255,0.2)',
                borderRadius: 10,
                color: '#fff',
                fontSize: 14,
              }}
            >
              <option value="AFROBEATS">AFROBEATS</option>
              <option value="HIP-HOP">HIP-HOP</option>
              <option value="R&B">R&B</option>
              <option value="AFRO-FUSION">AFRO-FUSION</option>
              <option value="REGGAE">REGGAE</option>
              <option value="POP">POP</option>
            </select>
          </div>

          {/* Duration & Plays */}
          <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#e8f0ff', marginBottom: 8 }}>
                Duration
              </label>
              <input
                type="text"
                name="duration"
                value={form.duration}
                onChange={handleChange}
                className="input-field"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'rgba(5,13,26,0.8)',
                  border: '1px solid rgba(26,111,255,0.2)',
                  borderRadius: 10,
                  color: '#fff',
                  fontSize: 14,
                }}
                placeholder="3:00"
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#e8f0ff', marginBottom: 8 }}>
                Plays
              </label>
              <input
                type="number"
                name="plays"
                value={form.plays}
                onChange={handleChange}
                className="input-field"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'rgba(5,13,26,0.8)',
                  border: '1px solid rgba(26,111,255,0.2)',
                  borderRadius: 10,
                  color: '#fff',
                  fontSize: 14,
                }}
                placeholder="0"
              />
            </div>
          </div>

          {/* Audio URL */}
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#e8f0ff', marginBottom: 8 }}>
              Audio URL
            </label>
            <input
              type="url"
              name="audio_url"
              value={form.audio_url}
              onChange={handleChange}
              className="input-field"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(5,13,26,0.8)',
                border: '1px solid rgba(26,111,255,0.2)',
                borderRadius: 10,
                color: '#fff',
                fontSize: 14,
              }}
              placeholder="https://example.com/audio.mp3"
            />
          </div>

          {/* Cover URL */}
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#e8f0ff', marginBottom: 8 }}>
              Cover Art URL
            </label>
            <input
              type="url"
              name="cover_url"
              value={form.cover_url}
              onChange={handleChange}
              className="input-field"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(5,13,26,0.8)',
                border: '1px solid rgba(26,111,255,0.2)',
                borderRadius: 10,
                color: '#fff',
                fontSize: 14,
              }}
              placeholder="https://example.com/cover.jpg"
            />
          </div>

          {/* Checkboxes */}
          <div style={{ display: 'flex', gap: 24, marginBottom: 32 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
              <input
                type="checkbox"
                name="new_release"
                checked={form.new_release}
                onChange={handleChange}
                style={{ accentColor: '#1a6fff' }}
              />
              <span style={{ fontSize: 14, color: '#e8f0ff' }}>New Release</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
              <input
                type="checkbox"
                name="hot"
                checked={form.hot}
                onChange={handleChange}
                style={{ accentColor: '#1a6fff' }}
              />
              <span style={{ fontSize: 14, color: '#e8f0ff' }}>Hot Track</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
              <input
                type="checkbox"
                name="published"
                checked={form.published}
                onChange={handleChange}
                style={{ accentColor: '#1a6fff' }}
              />
              <span style={{ fontSize: 14, color: '#e8f0ff' }}>Published</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              width: '100%',
              padding: '14px 24px',
              background: loading ? 'rgba(26,111,255,0.5)' : '#1a6fff',
              border: 'none',
              borderRadius: 12,
              color: '#fff',
              fontSize: 16,
              fontWeight: 700,
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {loading ? 'Saving...' : 'Save Song'}
          </button>
        </div>
      </div>
    </div>
  )
}