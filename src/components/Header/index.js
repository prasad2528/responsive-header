import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <p className="logo">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave"
      />
      Wave
    </p>
    <ul className="list">
      <li>
        <Link className="item" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="item" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="item" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)
export default Header
