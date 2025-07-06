import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Clubs', path: '/clubs' },
    { name: 'Events', path: '/events' },
    { name: 'Why Join', path: '/why-join' },
    { name: 'Hall of Fame', path: '/hall-of-fame' },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          <Link to="/">CampusConnect</Link>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `hover:text-blue-600 transition font-medium ${
                  isActive ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-700'
                }`
              }
            >
              {name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-white shadow-sm">
          {navLinks.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block py-1 text-base transition ${
                  isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                }`
              }
            >
              {name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
