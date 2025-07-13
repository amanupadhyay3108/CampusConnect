// src/pages/Home.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import clubImg from '/assets/Clubs.jpg'
import eventImg from '/assets/events.jpeg'
import fameImg from '/assets/halloffame.jpeg'

const Home = () => {
  return (
    <div className="text-gray-800">
      {/* Hero */}
      <section className="relative w-full h-screen">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/assets/camp.png')" }}
  ></div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Text Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
    <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to CampusConnect</h1>
    <p className="text-lg sm:text-xl max-w-2xl mx-auto">
      Your one-stop platform to discover college clubs, events, competitions, and past achievements.
    </p>
    <Link
      to="/clubs"
      className="inline-block mt-6 bg-white text-blue-700 font-semibold py-2 px-5 rounded hover:bg-blue-100 transition"
    >
      Explore Clubs
    </Link>
  </div>
</section>


      {/* Features */}
      <section className="py-16 px-4 max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        {/* Clubs */}
        <Link to="/clubs" className="bg-white rounded-lg shadow hover:shadow-lg transition">
          <img src={clubImg} alt="Clubs" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-5">
            <h3 className="text-xl font-bold mb-2 text-blue-700">College Clubs</h3>
            <p className="text-sm text-gray-600">
              Explore all the active clubs in your college and discover how to become a part of them.
            </p>
          </div>
        </Link>

        {/* Events */}
        <Link to="/events" className="bg-white rounded-lg shadow hover:shadow-lg transition">
          <img src={eventImg} alt="Events" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-5">
            <h3 className="text-xl font-bold mb-2 text-green-700">Competitions & Hackathons</h3>
            <p className="text-sm text-gray-600">
              Stay updated with ongoing events, hackathons, coding contests, and competitions.
            </p>
          </div>
        </Link>

        {/* Hall of Fame */}
        <Link to="/hall-of-fame" className="bg-white rounded-lg shadow hover:shadow-lg transition">
          <img src={fameImg} alt="Hall of Fame" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-5">
            <h3 className="text-xl font-bold mb-2 text-purple-700">Hall of Fame</h3>
            <p className="text-sm text-gray-600">
              Meet the students who made the college proud by winning national-level competitions.
            </p>
          </div>
        </Link>
      </section>

      {/* Why Join */}
      <section className="bg-blue-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-800">Why Join Campus Activities?</h2>
        <ul className="max-w-3xl mx-auto text-left list-disc space-y-3 text-gray-700 text-lg">
          <li>Boost your skills by joining domain-specific clubs</li>
          <li>Grow your network and collaborate with like-minded students</li>
          <li>Enhance your resume through achievements and event participation</li>
          <li>Represent your college and win prizes, internships, and recognition</li>
        </ul>
      </section>
    </div>
  )
}

export default Home
