import React from 'react'
import { Navbar } from "../components/Navbar";
import { Footer } from "../pages/sections/Footer";
import { HeaderSingleBlog } from "../components/HeaderSingleBlog";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
export const SinglePost = () => {
  return (
    <>
          <Navbar></Navbar>
          <HeaderSingleBlog title="Titlul blog exemplu despre sala" subtitle="Subtitlu blog exemplu despre sala"></HeaderSingleBlog>
      
      <div className='singlePost'>
        
        <div className='singlePostEdit'>
          <FontAwesomeIcon icon={ faPenSquare } className="singlePostIcon"/>
          <FontAwesomeIcon icon={ faTrash } className="singlePostIcon"/>
        </div>
        <div className='singlePostInfo'>
          <span className='singlePostAuthos'>Autor: <b>Razvan</b></span>
          <span className='singlePostAuthos'> 1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
          lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
          lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
          lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
          lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
          lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
          lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
          lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
          lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
          lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
          lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
          lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
          lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
          lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
        </p>
      </div>
      <Footer></Footer>
    </>
  )
}
