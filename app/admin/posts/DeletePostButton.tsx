'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'

export default function DeletePostButton({ id }: { id: string }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this post?')) return

    setLoading(true)
    const { data: sessionData } = await supabase.auth.getSession()
    const accessToken = sessionData?.session?.access_token

    if (!accessToken) {
      alert('You must be signed in to delete articles.')
      setLoading(false)
      return
    }

    try {
      const res = await fetch(`/api/articles?id=${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      if (!res.ok) throw new Error('Failed to delete')
      router.refresh()
    } catch (err) {
      alert('Failed to delete post.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <button 
      onClick={handleDelete}
      disabled={loading}
      style={{
        background: 'rgba(255,60,60,0.1)', border: '1px solid rgba(255,60,60,0.3)',
        color: '#ff6060', padding: '6px 12px', borderRadius: 8, cursor: loading ? 'not-allowed' : 'pointer',
        fontSize: 12, fontWeight: 700, marginLeft: 12
      }}
    >
      {loading ? '...' : 'Delete'}
    </button>
  )
}
