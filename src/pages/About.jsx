// src/pages/About.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="text-gray-800">

      {/* Hero Section */}
    <section
  className="bg-cover bg-center text-white py-20 px-6 text-center relative"
  style={{
    backgroundImage: "url('/assets/campusjoin.jpg')",
  }}
>
  <div className="bg-black bg-opacity-50 absolute inset-0"></div>

  <div className="relative z-10 max-w-3xl mx-auto">
    <h1 className="text-4xl sm:text-5xl font-bold mb-4">About CampusConnect</h1>
    <p className="text-lg sm:text-xl">
      Empowering students by bridging the gap between passion and opportunity through clubs,
      events, and communities.
    </p>
  </div>
</section>


      {/* Mission & Vision */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">🎯 Our Mission</h2>
            <p className="text-gray-700 text-lg">
              Our mission is to empower freshers and students by making college opportunities more visible and accessible — from joining dynamic clubs to participating in career-defining competitions.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-green-700 mb-4">🚀 Our Vision</h2>
            <p className="text-gray-700 text-lg">
              We envision a connected campus where every student finds their passion, enhances their skills, and achieves excellence through collaboration and co-curricular involvement.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-blue-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">🔍 What You Can Explore</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white shadow rounded-lg p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-indigo-700">College Clubs</h3>
            <p>Know about all active clubs and how to join them directly through the platform.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-green-700">Competitions</h3>
            <p>Stay informed on upcoming hackathons, tech events, and cultural competitions.</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Hall of Fame</h3>
            <p>Get inspired by seniors who achieved great things representing the college.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">✨ Ready to Get Involved?</h2>
        <p className="text-lg mb-6 text-gray-700">
          Discover your interests, build your profile, and contribute to something amazing on campus.
        </p>
        {/* <a
          href="/clubs"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition font-medium"
        >
          Explore Clubs Now
        </a> */}
         <Link
          to="/clubs"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition font-medium"
        >
          Explore Clubs Now
         </Link>
      </section>
    </div>
  )
}

export default About
