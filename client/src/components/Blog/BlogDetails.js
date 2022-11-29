import React, {useState, useEffect} from 'react'
import { Navbar } from "../Navbar";
import { Footer } from '../../pages/sections/Footer';
import { HeaderSingleBlog } from "../HeaderSingleBlog";
import { createClient } from 'contentful'
import {useParams} from 'react-router-dom'

const BlogDetails = () => {

  const [singleBlogPost, setSingleBlogPost] = useState([])

  const [blogPosts, setBlogPosts] = useState([])
  const client = createClient({ space: "rel1r5cr8jec", accessToken: "tVcayFPk_LonUobBBVVioj01f9BhBdjwY04vvIVt6Eg" })

  const { id } = useParams()

  useEffect(() => {
    const getEntryById = async () => {
      try {
        await client.getEntry(id).then((entries) => {
          console.log(entries)
          setSingleBlogPost(entries)
        })
      } catch (error) {
        console.log(error)
      }
    }

    getEntryById();
  }, [])

  console.log(singleBlogPost)
  return (
    <>
    <Navbar></Navbar>
    <div className='header-single-blog'>
      <img src={singleBlogPost?.fields?.blogImage?.fields?.file?.url} />
    </div>

<div className='singlePost'>
<h1>{singleBlogPost?.fields?.blogTitle}</h1>
  <p className='singlePostDesc'>
    {singleBlogPost?.fields?.postContent}
  </p>
  <div className='postDate-postAuth'>
    <span className='postAuth'>{singleBlogPost?.fields?.blogAuthor}</span>
    <span className='postDate'>{singleBlogPost?.fields?.createdDate}</span>
  </div>
</div>
<Footer></Footer>
</>
  )
}

export default BlogDetails