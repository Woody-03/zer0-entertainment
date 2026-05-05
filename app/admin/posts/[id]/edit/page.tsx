import { supabaseServer } from '../../../../lib/supabaseServer'
import PostForm from '../../../components/PostForm'

export const dynamic = 'force-dynamic'

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  
  const { data: post, error } = await supabaseServer
    .from('articles')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !post) {
    return (
      <div style={{ padding: 40, color: '#ff8080' }}>
        <h2>Error loading post</h2>
        <p>{error?.message || 'Post not found'}</p>
      </div>
    )
  }

  return <PostForm initialData={post} isEdit={true} />
}
