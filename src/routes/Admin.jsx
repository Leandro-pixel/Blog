import blogFetch from "../axios/config"

import { useState, useEffect } from "react"

import { Link } from "react-router-dom"

import "./Admin.css"

const Admin = () => {

  const [posts, setPosts] = useState([])

  const getPosts = async() => {

    try {
      const response = await blogFetch.get("/posts" );
        const data = response.data;

        setPosts(data);
    } catch (error) {
      console.log(error);
    }
  }

  const deletePost = async(id) => { //id do post a ser removido
    await blogFetch.delete(`/posts/${id}`)

    const filtredPosts = posts.filter((post) => post.id !== id) //excluindo registro do front (do dom) - retorna todos os posts menos o do id
    setPosts(filtredPosts);
  }

  useEffect (() => {
    getPosts();
  }, [])

  return (
    <div className="admin">
        <h1>Manage Posts</h1>
        {posts.length === 0 ? (
            <p>Loading...</p>
        ) : (
            posts.map((post) => (
                <div className="post" key={post.id}>
                    <h2>{post.title}</h2>
                    <div className="actions">
                        <Link className="btn edit-btn" to={`/posts/edit/${post.id}`} >Edit</Link>
                        <button 
                        className="btn delete-btn"
                        onClick={() => deletePost(post.id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))
        )}
    </div>
  )
}

export default Admin