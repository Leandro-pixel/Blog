import blogFetch from '../axios/config'

import { useState, useEffect } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

const EditPosts = () => {

    const navigate = useNavigate()

    const [title, setTitle] = useState()
    const [body, setBody] = useState()

    const {id} = useParams()

    const getPost = async () => {
        try {

            const response = await blogFetch.get(`/posts/${id}`)
            
            const data = response.data
            setTitle(data.title)
            setBody(data.body)
        } catch (error) {
            console.log(error)
        }
    }

    const editPost = async(e) => {

        e.preventDefault()

        const post = {title, body, userId: 1}

        await blogFetch.put(`/posts/${id}`, {
            body: post,
        })

    }

    useEffect(() => {
        getPost();
    },[])

  return (
    <div className="new-post">
    <h2>Editing: {title}</h2>
    <form onSubmit={(e) => editPost(e)}>
      <div className="form-control">
        <label htmlFor="title">Title:</label>
        <input 
        type="text" 
        name='title' 
        id='title'
        placeholder='Type a title' 
        onChange={(e) => setTitle(e.target.value)}
        value={title || ""}
        />
      </div>
      <div className="form-control">
        <label htmlFor="body">Content:</label>
        <textarea 
        name="body" 
        id="body" 
        placeholder='Type content'
        onChange={(e) => setBody(e.target.value)}
        value={body || ""}
        ></textarea>
      </div>
      <input type="submit" value="Edit Post" className='btn' />
    </form>
  </div>
  )
}

export default EditPosts