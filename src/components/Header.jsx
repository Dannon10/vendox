import { useState, useEffect, useRef } from 'react'
import { HiOutlineShoppingCart, HiOutlineUser } from 'react-icons/hi'
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleDropdown = () => {
    setIsMenuOpen(prevState => !prevState);
};

const handleClickOutside = (event) => {
  if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
      setIsMenuOpen(false);
  }
};

const handleLinkClick = () => {
  setIsMenuOpen(false);
};

useEffect(() => {
  document.addEventListener('click', handleClickOutside);
  return () => {
      document.removeEventListener('click', handleClickOutside);
  };
}, []);

  return (
    <header className='head'>
      <nav className="navbar">
        <div className="mobile-navbar hidden">

        <div className="menu-toggle" ref={buttonRef}>
          <FiMenu onClick={() => setIsMenuOpen(!isMenuOpen)}  className='btn-menu'/>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'nav-open' : ''}`} ref={dropdownRef}>
          <ul>
            <Link to='/' onClick={handleLinkClick}><li className="nav-link">Home</li> </Link>
            <Link 
            to='/'
            state={{ scrollToCategory: true}}
            onClick={handleLinkClick}>
            <li className="nav-link">Categories</li>
            </Link>
            <li className="nav-link">About</li> 
            <li className="nav-link">Contact Us</li> 
          </ul>
        </div>
        </div>

        
        <div className="logo">
          <h1>Vendox</h1>
        </div>

        <div className='web-navbar'>
          <ul className='web-navbar-lists'>
            <Link to='/' onClick={handleLinkClick}>
            <li className="nav-link">Home</li> 
            </Link>
            <Link 
            to='/'
            state={{ scrollToCategory: true}}
            onClick={handleLinkClick}
            >
            <li className="nav-link">Categories</li>
            </Link>
            <li className="nav-link">About</li> 
            <li className="nav-link">Contact Us</li> 
          </ul>
        </div>


        <div className="search-bar">
          <input type="text" placeholder="Search" className="search" />
        </div>

        <div className="icons">
            <Link to='/cart'><HiOutlineShoppingCart className=" nav-icon cart" /></Link>
          <HiOutlineUser className="nav-icon user" />
        </div>

      </nav>
    </header>
  )
}