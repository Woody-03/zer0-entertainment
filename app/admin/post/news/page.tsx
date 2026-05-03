'use client'

import { useState } from 'react'
import { supabase } from '../../../lib/supabase'
import Link from 'next/link'

export default function PostNews() {
  const [form, setForm] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'NEWS',
    author: 'Zero Entertainment',
    read_time: '3 min read',
    hot: false,
    featured: false,
    published: false,
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
    if (!form.title || !form.excerpt || !form.content) {
      setError('Please fill in title, excerpt and content')
      return
    }
    setLoading(true)
    setError('')
    const { error } = await supabase.from('articles').insert([form])
    if (error) {
      setError('Error saving article: ' + error.message)
    } else {
      setSuccess(true)
      setForm({
        title: '',
        excerpt: '',
        content: '',
        category: 'NEWS',
        author: 'Zero Entertainment',
        read_time: '3 min read',
        hot: false,
        featured: false,
        published: false,
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
              Post New Article
            </h1>
          </div>
          <div style={{ fontSize: 24 }}>📰</div>
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
            <span>Article saved successfully!</span>
            <div style={{ display: 'flex', gap: 12 }}>
              <Link href="/news" style={{ fontSize: 12, color: '#26ff6f', textDecoration: 'none', fontWeight: 600 }}>
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
          padding: 36,
        }}>

          {/* Title */}
          <div style={{ marginBottom: 20 }}>
            <label style={{ fontSize: 11, color: '#4a6a8a', display: 'block', marginBottom: 8, fontWeight: 700, letterSpacing: 1 }}>
              TITLE *
            </label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Enter article title..."
              className="input-field"
              style={{
                width: '100%',
                padding: '14px 16px',
                background: 'rgba(26,111,255,0.06)',
                border: '1px solid rgba(26,111,255,0.2)',
                borderRadius: 10,
                color: '#fff',
                fontSize: 15,
                fontFamily: 'inherit',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Excerpt */}
          <div style={{ marginBottom: 20 }}>
            <label style={{ fontSize: 11, color: '#4a6a8a', display: 'block', marginBottom: 8, fontWeight: 700, letterSpacing: 1 }}>
              EXCERPT * (short summary shown on cards)
            </label>
            <textarea
              name="excerpt"
              value={form.excerpt}
              onChange={handleChange}
              placeholder="Write a short summary of the article..."
              rows={3}
              className="input-field"
              style={{
                width: '100%',
                padding: '14px 16px',
                background: 'rgba(26,111,255,0.06)',
                border: '1px solid rgba(26,111,255,0.2)',
                borderRadius: 10,
                color: '#fff',
                fontSize: 14,
                fontFamily: 'inherit',
                resize: 'vertical',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Content */}
          <div style={{ marginBottom: 20 }}>
            <label style={{ fontSize: 11, color: '#4a6a8a', display: 'block', marginBottom: 8, fontWeight: 700, letterSpacing: 1 }}>
              FULL CONTENT *
            </label>
            <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              placeholder="Write the full article content here..."
              rows={10}
              className="input-field"
              style={{
                width: '100%',
                padding: '14px 16px',
                background: 'rgba(26,111,255,0.06)',
                border: '1px solid rgba(26,111,255,0.2)',
                borderRadius: 10,
                color: '#fff',
                fontSize: 14,
                fontFamily: 'inherit',
                resize: 'vertical',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Row — Category + Author + Read Time */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 20 }}>
            <div>
              <label style={{ fontSize: 11, color: '#4a6a8a', display: 'block', marginBottom: 8, fontWeight: 700, letterSpacing: 1 }}>
                CATEGORY
              </label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="input-field"
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  background: '#0a1628',
                  border: '1px solid rgba(26,111,255,0.2)',
                  borderRadius: 10,
                  color: '#fff',
                  fontSize: 14,
                  fontFamily: 'inherit',
                  boxSizing: 'border-box',
                }}
              >
                <option value="NEWS">News</option>
                <option value="MUSIC">Music</option>
                <option value="FASHION">Fashion</option>
                <option value="ARTISTS">Artists</option>
                <option value="RANKINGS">Rankings</option>
                <option value="VIDEOS">Videos</option>
                <option value="ENTERTAINMENT">Entertainment</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: 11, color: '#4a6a8a', display: 'block', marginBottom: 8, fontWeight: 700, letterSpacing: 1 }}>
                AUTHOR
              </label>
              <input
                name="author"
                value={form.author}
                onChange={handleChange}
                className="input-field"
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
            <div>
              <label style={{ fontSize: 11, color: '#4a6a8a', display: 'block', marginBottom: 8, fontWeight: 700, letterSpacing: 1 }}>
                READ TIME
              </label>
              <input
                name="read_time"
                value={form.read_time}
                onChange={handleChange}
                className="input-field"
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
          </div>

          {/* Checkboxes */}
          <div style={{ display: 'flex', gap: 32, marginBottom: 32 }}>
            {[
              { name: 'hot', label: 'Mark as HOT' },
              { name: 'featured', label: 'Mark as Featured' },
              { name: 'published', label: 'Publish immediately' },
            ].map(item => (
              <label key={item.name} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  name={item.name}
                  checked={form[item.name as keyof typeof form] as boolean}
                  onChange={handleChange}
                  style={{ width: 18, height: 18, accentColor: '#1a6fff', cursor: 'pointer' }}
                />
                <span style={{ fontSize: 13, color: '#7ab0ff', fontWeight: 600 }}>
                  {item.label}
                </span>
              </label>
            ))}
          </div>

          {/* Submit Buttons */}
          <div style={{ display: 'flex', gap: 12 }}>
            <button
              onClick={() => { setForm(p => ({ ...p, published: true })); handleSubmit() }}
              disabled={loading}
              style={{
                flex: 1,
                padding: '14px',
                background: loading ? 'rgba(26,111,255,0.5)' : 'linear-gradient(135deg, #1a6fff, #0a3d9e)',
                border: 'none',
                borderRadius: 10,
                color: '#fff',
                fontSize: 14,
                fontWeight: 700,
                cursor: loading ? 'not-allowed' : 'pointer',
                fontFamily: 'inherit',
              }}
            >
              {loading ? 'Saving...' : '🚀 Publish Now'}
            </button>
            <button
              onClick={() => { setForm(p => ({ ...p, published: false })); handleSubmit() }}
              disabled={loading}
              style={{
                padding: '14px 24px',
                background: 'rgba(26,111,255,0.1)',
                border: '1px solid rgba(26,111,255,0.3)',
                borderRadius: 10,
                color: '#7ab0ff',
                fontSize: 14,
                fontWeight: 700,
                cursor: loading ? 'not-allowed' : 'pointer',
                fontFamily: 'inherit',
              }}
            >
              Save Draft
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}