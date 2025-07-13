import React from 'react'
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaGift } from 'react-icons/fa'

const events = [
  {
    name: 'CodeSprint Hackathon',
    date: 'August 10, 2025',
    time: '10:00 AM - 6:00 PM',
    location: 'Auditorium Block A',
    category: 'Hackathon',
    image: '/assets/codesprint.png',
    description: 'A 6-hour hackathon to solve real-world problems with code.',
    prize: '₹15,000 + Internship Opportunities',
  },
  {
    name: 'AlgoRush Coding Contest',
    date: 'August 18, 2025',
    time: '3:00 PM - 5:00 PM',
    location: 'Lab 3, CS Block',
    category: 'Coding Competition',
    image: '/assets/event-algorush.png',
    description: 'Test your DSA skills in this fast-paced solo coding contest.',
    prize: '₹5,000 + Goodies for Top 3',
  },
  {
    name: 'Cultural Fest: Spiritz 2025',
    date: 'August 25, 2025',
    time: '4:00 PM - 9:00 PM',
    location: 'Open Air Stage',
    category: 'Cultural',
    image: '/assets/event-culturalfest.jpg',
    description: 'An evening filled with music, dance, and drama.',
    prize: 'Trophies + Certificate of Excellence',
  },
  {
    name: 'HackX - 24 Hour Hackathon',
    date: 'September 2-3, 2025',
    time: 'Starts 9:00 AM',
    location: 'Main Seminar Hall',
    category: 'Hackathon',
    image: '/assets/event-hackx.jpg',
    description: 'Build innovative projects in teams, mentored by industry experts.',
    prize: '₹25,000 + Amazon Internship Interview',
  },
  {
    name: 'Startup Pitch Day',
    date: 'September 5, 2025',
    time: '2:00 PM - 5:00 PM',
    location: 'Seminar Hall 2',
    category: 'Entrepreneurship',
    image: '/assets/event-startup.jpg',
    description: 'Present your startup ideas to a panel of VCs and mentors.',
    prize: 'Seed Funding up to ₹50,000 + Mentorship',
  },
  {
    name: 'Code-A-Thon | Intercollege Contest',
    date: 'September 15, 2025',
    time: '11:00 AM - 2:00 PM',
    location: 'Online + Onsite Lab 2',
    category: 'Coding Competition',
    image: '/assets/event-codeathon.jpeg',
    description: 'Participate with coders across colleges in this mega challenge.',
    prize: 'Medals + Top Performers get Resume Referrals',
  },
]

function Events() {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">
        Upcoming Campus Events
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="relative group bg-white rounded-xl shadow hover:shadow-md transition duration-300 overflow-hidden"
          >
            {/* Main Image */}
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-48 object-cover"
            />

            {/* Static Details */}
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {event.name}
              </h3>
              <p className="text-sm text-blue-600 mb-2">{event.category}</p>

              <div className="flex items-center text-sm text-gray-600 mb-1">
                <FaCalendarAlt className="mr-2" /> {event.date}
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-1">
                <FaClock className="mr-2" /> {event.time}
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-3">
                <FaMapMarkerAlt className="mr-2" /> {event.location}
              </div>

              <p className="text-gray-700 text-sm mb-3">{event.description}</p>

              {event.prize && (
                <p className="text-sm font-medium text-green-700 flex items-center">
                  <FaGift className="mr-2 text-green-600" /> {event.prize}
                </p>
              )}
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center px-6">
              <h3 className="text-lg font-semibold">{event.name}</h3>
              <p className="text-sm mt-2">{event.description}</p>
              {event.prize && (
                <p className="text-sm mt-3 text-green-300">
                  🎁 {event.prize}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Events
