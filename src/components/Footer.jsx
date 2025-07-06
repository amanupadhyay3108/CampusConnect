// src/components/Footer.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* CampusJoin Info */}
        <div>
          <h3 className="text-xl font-bold mb-2 text-blue-400">CampusConnect</h3>
          <p className="text-sm text-gray-300">
            Empowering freshers to explore clubs, events, and opportunities within the college.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/clubs" className="hover:underline">Clubs</Link></li>
            <li><Link to="/events" className="hover:underline">Events</Link></li>
            <li><Link to="/how-to-join" className="hover:underline">How to Join</Link></li>
            <li><Link to="/why-join" className="hover:underline">Why Join</Link></li>
            <li><Link to="/hall-of-fame" className="hover:underline">Hall of Fame</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <p className="text-sm text-gray-300">📧 campusConnect@college.edu</p>
          <p className="text-sm text-gray-300 mt-1"></p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-8">
        © {new Date().getFullYear()} CampusConnect. Made with ❤️ by Aman.
      </div>
    </footer>
  )
}

export default Footer
