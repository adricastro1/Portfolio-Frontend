import './Header.css'
import { useRef } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { HashLink as Link } from 'react-router-hash-link'

function Header() {

  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav")
  }

  return (
    <header className='Header'>
      <nav ref={navRef}>
        <Link to="#home" smooth onClick={() => showNavbar()}>
          <h3>HOME</h3>
        </Link>

        <Link to="#about" smooth onClick={() => showNavbar()}>
          <h3>ABOUT</h3>
        </Link>

        <Link to="#projects" smooth onClick={() => showNavbar()}>
          <h3>PROJECTS</h3>
        </Link>

        <Link to="#tech" smooth onClick={() => showNavbar()}>
          <h3>TECHNOLOGIES</h3>
        </Link>

        <Link to="#contact" smooth onClick={() => showNavbar()}>
          <h3>CONTACT INFO</h3>
        </Link>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <FaTimes/>
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
  );
}

export default Header;
