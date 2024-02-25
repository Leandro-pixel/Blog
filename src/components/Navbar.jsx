import { Link } from "react-router-dom"

import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className='navbar'>
        <h2>
           <Link to={`Blog/`}>Blog</Link>
        </h2>
        <ul>
            <li>
            <Link to={`Blog/`}>Home</Link>
            </li>
        
            <li>
            <Link to={`Blog/new`} className="new-btn">
                New post
            </Link>
            </li>
            <li>
            <Link to={`Blog/admin`}>
                Management
            </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar