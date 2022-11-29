import React, {useEffect, useState} from 'react'
import { createClient } from 'contentful'

export const Post = () => {

  const [blogPosts, setBlogPosts] = useState([])
  const client = createClient({ space: "rel1r5cr8jec", accessToken: "tVcayFPk_LonUobBBVVioj01f9BhBdjwY04vvIVt6Eg" })

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries().then((entries) => {
          console.log(entries)
          setBlogPosts(entries)
        })
      } catch (error) {
        console.log('error')
      }
    } 
    getAllEntries()

  }, [])

  return (
    <div className='container-post'>
      {blogPosts?.items?.map((post) =>
    <div className='post' key={post.sys.id}>
    <a href={`blogDetails/${post.sys.id}`}><img 
      className='postImg'
      src={post.fields.blogImage.fields.file.url}
      alt= {post.fields.blogTitle}
      />
      <div className='postInfo'>
        <span className='postTitle'>
          {post.fields.blogTitle}
        </span>
        <hr />
        <div className='postDate-postAuth'>
        <span className='postAuth'>{post.fields.blogAuthor}</span>
        <span className='postDate'>{post.fields.createdDate}</span>
        </div>
      <p className='postDesc'>
        {post.fields.blogSummary}
      </p>
        </div>
        </a>
    </div>
    )}
    </div>
  )
}
