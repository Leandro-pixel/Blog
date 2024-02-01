import { useState, useEffect } from "react"
import blogFetch from "../axios/config"

import { Link } from "react-router-dom"

import './Home.css'

const Home = () => {

  const [posts, setPosts] = useState([])

  const getPosts = async() => {

    try {
      const response = await blogFetch.get("/posts" );
      //graças ao config.js para o axios quando quisermos acessar alguma end point só precisamos a nomeclatura dela no caso é /posts
        const data = response.data;

        setPosts(data);
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => { //para controlar a execução do componente
    getPosts();

  }, [])
  return (
    <div className="home">
      <h1>Lasts Posts</h1>
      {posts.length === 0 ? (<p>Loading...</p>) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link 
            to={`/posts/${post.id}`} 
            className="btn"
            /*criando uma rota unica pra cada post*/
            >
              Read more
            </Link>
          </div>
        ))
      )}

    </div>
  )
}

export default Home