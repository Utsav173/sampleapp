import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({title}) => {
  return (
    <div>
      <div>
        welcome {title}
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/addtodo">addTodo</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;