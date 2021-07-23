import React from 'react'
import { useAppSelector,useAppDispatch } from '../../app/hooks'

export const PostsList = () => {
  const posts = useAppSelector(state => state.posts)

  const renderedPosts = posts.posts.map(post => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
    </article>
  ))

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}