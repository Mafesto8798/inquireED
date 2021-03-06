import React from 'react'
import {Link} from 'react-router-dom'
import { useAppSelector,useAppDispatch } from '../../app/hooks'


export const PostsList = () => {
  const posts = useAppSelector(state => state.posts)

  const renderedPosts = posts.posts.map(post => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <Link to={`/posts/${post.id}`} className="button muted-button">
      View Post
      </Link>
    </article>
  ))


  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}