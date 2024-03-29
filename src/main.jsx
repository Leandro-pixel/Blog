import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createHashRouter, RouterProvider, Route} from "react-router-dom"
import ErrorBoundary from './errors/errorboundary.jsx'

import "./index.css"

//pages
import Home from "./routes/Home"
import NewPost from './routes/NewPost'
import Post from './routes/Post'
import Admin from './routes/Admin.jsx'
import EditPosts from './routes/EditPosts.jsx'

const router = createHashRouter ([ //objeto de configuração de roteamento
  //colocar aqui todos os elementos que vão repetir recursos entre os componentes
  {
    element: <App/>,
    children: [ //isso esta interligado com o Link to={`/ ou /new ou /posts, etc...`}
      {
        path: "/Blog", // rota home que carrega todos os posts
        element: <Home/>,
      },
      {
        path: "Blog/new", //a rota new que vai criar os posts depois
        element: <NewPost/>,
      },
      {
        path: "/posts/:id", //para acessar a rota dinâmica de cada post
        element: <Post/> 
      },
      {
        path: "Blog/admin",
        element: <Admin/>
      },
      {
        path: "posts/edit/:id",
        element: <EditPosts/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} >
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
