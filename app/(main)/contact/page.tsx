'use client'

import { useState } from 'react'
import Link from 'next/link'

const CONTACT_OPTIONS = [
  { icon: '🎵', title: 'Submit Music', desc: 'Want to get your music featured on Zero Entertainment?', link: '/submit', label: 'Submit Now' },
  { icon: '📰', title: 'Press & Media', desc: 'Media inquiries, interviews and press releases.', link: 'mailto:press@zeroentertainment.com', label: 'Email Us' },
  { icon: '💼', title: 'Advertising', desc: 'Reach thousands of Sierra Leoneans through our platform.', link: 'mailto:ads@zeroentertainment.com', label: 'Get In Touch' },
  { icon: '🤝', title: 'Partnerships', desc: 'Interested in partnering with Zero Entertainment?', link: 'mailto:partners@zeroentertainment.com', label: 'Partner With Us' },
]

const SOCIALS = [
  { icon: '👍', name: 'Facebook', handle: '@ZeroEntertainmentSL', color: '#1877f2' },
  { icon: '📸', name: 'Instagram', handle: '@zeroslentertainment', color: '#e1306c' },
  { icon: '🎵', name: 'TikTok', handle: '@zeroentertainmentsl', color: '#ff0050' },
  { icon: '▶', name: 'YouTube', handle: 'Zero Entertainment SL', color: '#ff0000' },
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in your name, email and message')
      return
    }
    setLoading(true)
    setError('')
    await new Promise(r => setTimeout(r, 1500))
    setSuccess(true)
    setLoading(false)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div style={{ background: '#050d1a', minHeight: '100vh' }}>
      <style>{`
        .input-field:focus {
          outline: none;
          border-color: #1a6fff !important;
          box-shadow: 0 0 0 3px rgba(26,111,255,0.15);
        }
        .contact-card {
          transition: all 0.3s ease;
        }
        .contact-card:hover {
          transform: translateY(-4px);
          border-color: rgba(26,111,255,0.4) !important;
          box-shadow: 0 16px 48px rgba(26,111,255,0.15);
        }
        .social-card {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .social-card:hover {
          transform: translateY(-3px);
          border-color: rgba(26,111,255,0.4) !important;
        }
        .submit-btn {
          transition: all 0.25s ease;
        }
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(26,111,255,0.5) !important;
        }
      `}</style>

      {/* Page Header */}
      <div style={{
        background: 'linear-gradient(135deg, #070f1e, #0a2a5e)',
        padding: '80px 40px',
        borderBottom: '1px solid rgba(26,111,255,0.2)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ fontSize: 11, color: '#1a6fff', letterSpacing: 3, marginBottom: 16 }}>
            GET IN TOUCH
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
            Contact Us
          </h1>
          <p style={{ fontSize: 16, color: '#6a8aaa', maxWidth: 500, margin: '0 auto' }}>
            Have a question, story tip, or want to work with us? We would love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact Options */}
      <section style={{ padding: '80px 40px', background: '#070f1e' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 11, color: '#1a6fff', letterSpacing: 3, marginBottom: 8 }}>
              HOW CAN WE HELP
            </div>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: '#fff' }}>
              What Are You Looking For?
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {CONTACT_OPTIONS.map(option => (
              <div key={option.title} className="contact-card" style={{
                background: 'linear-gradient(135deg, rgba(26,111,255,0.06), rgba(5,13,26,0.9))',
                border: '1px solid rgba(26,111,255,0.12)',
                borderRadius: 20, padding: 28,
              }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{option.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 8 }}>
                  {option.title}
                </h3>
                <p style={{ fontSize: 13, color: '#6a8aaa', lineHeight: 1.6, marginBottom: 20 }}>
                  {option.desc}
                </p>
                <Link href={option.link} style={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  background: 'rgba(26,111,255,0.15)',
                  border: '1px solid rgba(26,111,255,0.3)',
                  borderRadius: 8, color: '#1a6fff',
                  fontSize: 12, fontWeight: 700,
                  textDecoration: 'none',
                }}>
                  {option.label} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Social */}
      <section style={{ padding: '80px 40px', background: '#050d1a' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 48 }}>

            {/* Form */}
            <div>
              <div style={{ marginBottom: 36 }}>
                <div style={{ fontSize: 11, color: '#1a6fff', letterSpacing: 3, marginBottom: 8 }}>
                  SEND A MESSAGE
                </div>
                <h2 style={{ fontSize: 36, fontWeight: 800, color: '#fff' }}>
                  Drop Us A Line
                </h2>
              </div>

              {success && (
                <div style={{
                  background: 'rgba(26,255,111,0.1)',
                  border: '1px solid rgba(26,255,111,0.3)',
                  borderRadius: 12, padding: '16px 20px',
                  marginBottom: 24, fontSize: 14, color: '#26ff6f',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                  <span>Message sent successfully! We will get back to you soon.</span>
                  <button onClick={() => setSuccess(false)} style={{ background: 'none', border: 'none', color: '#26ff6f', cursor: 'pointer', fontSize: 16 }}>×</button>
                </div>
              )}

              {error && (
                <div style={{
                  background: 'rgba(255,60,60,0.1)',
                  border: '1px solid rgba(255,60,60,0.3)',
                  borderRadius: 12, padding: '16px 20px',
                  marginBottom: 24, fontSize: 14, color: '#ff8080',
                }}>
                  {error}
                </div>
              )}

              <div style={{
                background: 'linear-gradient(135deg, rgba(26,111,255,0.05), rgba(5,13,26,0.9))',
                border: '1px solid rgba(26,111,255,0.15)',
                borderRadius: 20, padding: 36,
              }}>

                {/* Name + Email */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
                  <div>
                    <label style={{ fontSize: 11, color: '#4a6a8a', display: 'block', marginBottom: 8, fontWeight: 700, letterSpacing: 1 }}>
                      YOUR NAME *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="input-field"
                      style={{
                        width: '100%', padding: '14px 16px',
                        background: 'rgba(26,111,255,0.06)',
                        border: '1px solid rgba(26,111,255,0.2)',
                        borderRadius: 10, color: '#fff',
                        fontSize: 14, fontFamily: 'inherit',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: 11, color: '#4a6a8a', display: 'block', marginBottom: 8, fontWeight: 700, letterSpacing: 1 }}>
                      EMAIL ADDRESS *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="input-field"
                      style={{
                        width: '100%', padding: '14px 16px',
                        background: 'rgba(26,111,255,0.06)',
                        border: '1px solid rgba(26,111,255,0.2)',
                        borderRadius: 10, color: '#fff',
                        fontSize: 14, fontFamily: 'inherit',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div style={{ marginBottom: 20 }}>
                  <label style={{ fontSize: 11, color: '#4a6a8a', display: 'block', marginBottom: 8, fontWeight: 700, letterSpacing: 1 }}>
                    SUBJECT
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="input-field"
                    style={{
                      width: '100%', padding: '14px 16px',
                      background: '#0a1628',
                      border: '1px solid rgba(26,111,255,0.2)',
                      borderRadius: 10, color: '#fff',
                      fontSize: 14, fontFamily: 'inherit',
                      boxSizing: 'border-box',
                    }}
                  >
                    <option value="">Select a subject...</option>
                    <option value="Music Submission">Music Submission</option>
                    <option value="Press & Media">Press and Media</option>
                    <option value="Advertising">Advertising</option>
                    <option value="Partnership">Partnership</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Report an Issue">Report an Issue</option>
                  </select>
                </div>

                {/* Message */}
                <div style={{ marginBottom: 28 }}>
                  <label style={{ fontSize: 11, color: '#4a6a8a', display: 'block', marginBottom: 8, fontWeight: 700, letterSpacing: 1 }}>
                    MESSAGE *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows={6}
                    className="input-field"
                    style={{
                      width: '100%', padding: '14px 16px',
                      background: 'rgba(26,111,255,0.06)',
                      border: '1px solid rgba(26,111,255,0.2)',
                      borderRadius: 10, color: '#fff',
                      fontSize: 14, fontFamily: 'inherit',
                      resize: 'vertical', boxSizing: 'border-box',
                    }}
                  />
                </div>

                <button
                  className="submit-btn"
                  onClick={handleSubmit}
                  disabled={loading}
                  style={{
                    width: '100%', padding: '14px',
                    background: loading ? 'rgba(26,111,255,0.5)' : 'linear-gradient(135deg, #1a6fff, #0a3d9e)',
                    border: 'none', borderRadius: 10,
                    color: '#fff', fontSize: 15, fontWeight: 700,
                    cursor: loading ? 'not-allowed' : 'pointer',
                    fontFamily: 'inherit',
                    boxShadow: '0 4px 20px rgba(26,111,255,0.3)',
                  }}
                >
                  {loading ? 'Sending...' : 'Send Message →'}
                </button>
              </div>
            </div>

            {/* Side Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

              {/* Location */}
              <div style={{
                background: 'linear-gradient(135deg, #0a2a5e, #0d1f42)',
                border: '1px solid rgba(26,111,255,0.3)',
                borderRadius: 20, padding: 28,
              }}>
                <div style={{ fontSize: 11, color: '#1a6fff', letterSpacing: 2, marginBottom: 20, fontWeight: 700 }}>
                  FIND US
                </div>
                {[
                  { icon: '📍', label: 'Location', value: 'Freetown, Sierra Leone' },
                  { icon: '📧', label: 'Email', value: 'hello@zeroentertainment.com' },
                  { icon: '📱', label: 'WhatsApp', value: '+232 XX XXX XXXX' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', gap: 14, marginBottom: 20 }}>
                    <span style={{ fontSize: 20 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontSize: 10, color: '#3a6a9a', letterSpacing: 1, marginBottom: 2 }}>
                        {item.label.toUpperCase()}
                      </div>
                      <div style={{ fontSize: 13, color: '#e8f0ff', fontWeight: 500 }}>
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div style={{
                background: 'rgba(26,111,255,0.05)',
                border: '1px solid rgba(26,111,255,0.12)',
                borderRadius: 20, padding: 28,
              }}>
                <div style={{ fontSize: 11, color: '#1a6fff', letterSpacing: 2, marginBottom: 20, fontWeight: 700 }}>
                  FOLLOW US
                </div>
                {SOCIALS.map(social => (
                  <div key={social.name} className="social-card" style={{
                    display: 'flex', alignItems: 'center', gap: 14,
                    padding: '12px 0',
                    borderBottom: '1px solid rgba(26,111,255,0.08)',
                  }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 10,
                      background: `${social.color}22`,
                      border: `1px solid ${social.color}44`,
                      display: 'flex', alignItems: 'center',
                      justifyContent: 'center', fontSize: 18,
                    }}>
                      {social.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#e8f0ff' }}>
                        {social.name}
                      </div>
                      <div style={{ fontSize: 11, color: '#3a6a9a' }}>
                        {social.handle}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}