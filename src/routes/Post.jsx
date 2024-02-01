import blogFetch from "../axios/config"

import { useState, useEffect } from "react"

import { useParams } from "react-router-dom" //pega o id que esta na URL

import './Post.css'

const Post = () => {

    const {id} = useParams();//pegando o id da URL pelo hook useParams, aqui estamos desestruturando

    const [post, setPost] = useState({});

    const getPost = async () => {
        try {

            const response = await blogFetch.get(`/posts/${id}`)
            
            const data = response.data
            setPost(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPost();
    },[])

  return (
    <div className="post-container">
        {!post.title ? (
            <p>Loading</p>
        ) : (
            <div className="post">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        )}
    </div>
  )
}

export default Post