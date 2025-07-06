import React from 'react'
import {
  FaUsers,
  FaTrophy,
  FaCalendarCheck,
  FaLightbulb,
  FaHandshake,
  FaChartLine,
} from 'react-icons/fa'

const benefits = [
  {
    title: 'Discover Your Passion',
    icon: <FaLightbulb className="text-3xl text-yellow-500 mb-4" />,
    description: 'Join clubs that match your interests – whether it’s coding, dance, debates, or robotics. Discover what excites you most.',
  },
  {
    title: 'Boost Your Skills',
    icon: <FaChartLine className="text-3xl text-blue-600 mb-4" />,
    description: 'Clubs offer hands-on experience in real projects, improving your technical, creative, and leadership skills.',
  },
  {
    title: 'Build Strong Connections',
    icon: <FaUsers className="text-3xl text-green-600 mb-4" />,
    description: 'Meet like-minded peers, mentors, and seniors. Build a strong network for support, learning, and collaboration.',
  },
  {
    title: 'Gain Recognition',
    icon: <FaTrophy className="text-3xl text-orange-500 mb-4" />,
    description: 'Win competitions, get featured in the hall of fame, and add achievements to your resume with pride.',
  },
  {
    title: 'Stay Updated on Events',
    icon: <FaCalendarCheck className="text-3xl text-purple-600 mb-4" />,
    description: 'Never miss out on hackathons, workshops, or cultural fests. Everything is in one place with CampusJoin.',
  },
  {
    title: 'Seamless Participation',
    icon: <FaHandshake className="text-3xl text-pink-500 mb-4" />,
    description: 'Join clubs and register for events directly through the platform. Simple. Fast. Hassle-free.',
  },
]

function WhyJoin() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-blue-700 mb-2">Why Join CampusConnect?</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          CampusConnect is more than a platform — it’s your gateway to explore, participate, and grow
          during your college life.
        </p>
      </div>

      {/* Benefit Cards */}
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow hover:shadow-md transition duration-300 p-6 text-center"
          >
            {item.icon}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-14">
        <p className="text-lg text-gray-700 mb-4">Ready to unlock the best of your college life?</p>
        <a
          href="/clubs"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
        >
          Explore Clubs
        </a>
      </div>
    </div>
  )
}

export default WhyJoin
