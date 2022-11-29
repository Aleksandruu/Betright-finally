import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons';

export const WriteBlog = () => {
  return (
    <>
    <div className='write'>
        <form className='writeForm'>
          <img className='writeImg' src='https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt=''></img>
          <div className='writeForm'>
            <div className='writeFormGroup'>
              <label htmlFor='fileInput'>
              <FontAwesomeIcon icon={ faAdd } className="wrightIcon"/>
              </label>
              <input type="file" id="fileInput" style={{ display: "none" }}></input>
              <input type="text" placeholder='Title' className='writeInput' autoFocus={true}></input>
            </div>
            <div className='writeFormGroup'>
              <textarea placeholder='Scrie un blog...' type="text" className='writeInput writeText'></textarea>
            </div>
            <button className='writeSubmit'>Posteaza</button>
          </div>
        </form>
    </div>
    </>
  )
}
