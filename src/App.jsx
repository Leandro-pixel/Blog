import { Outlet } from 'react-router-dom'//esse elemento leva o roteamento que fizemos no main

import Navbar
 from './components/Navbar'

import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <Outlet/>
      </div>
    </div>
  )
}

export default App
