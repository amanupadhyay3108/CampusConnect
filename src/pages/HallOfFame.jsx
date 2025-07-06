import React from 'react'
import { FaTrophy, FaMedal, FaAward, FaStar } from 'react-icons/fa'

const winners = [
  { id: 1, name: 'Alex Rodriguez', event: 'InnovateTech 2023', year: 2023, position: '1st Place' },
  { id: 2, name: 'Emma Thompson', event: 'DesignCraft Challenge', year: 2023, position: '1st Place' },
  { id: 3, name: 'David Kim', event: 'AI Innovation Summit', year: 2022, position: '1st Place' },
  { id: 4, name: 'Priya Sharma', event: 'InnovateTech 2022', year: 2022, position: '2nd Place' },
  { id: 5, name: 'Marcus Johnson', event: 'CodeMaster Challenge', year: 2023, position: '1st Place' },
  { id: 6, name: 'Sofia Martinez', event: 'Business Plan Competition', year: 2023, position: '3rd Place' },
  { id: 7, name: "Ryan O'Connor", event: 'Web Dev Showdown', year: 2022, position: '2nd Place' },
  { id: 8, name: 'Lily Chen', event: 'Mobile App Challenge', year: 2023, position: '1st Place' },
  { id: 9, name: 'Jordan Taylor', event: 'Robotics Competition', year: 2023, position: '1st Place' },
  { id: 10, name: 'Samantha Lee', event: 'Photography Contest', year: 2022, position: '2nd Place' },
  { id: 11, name: 'Michael Brown', event: 'Debate Championship', year: 2023, position: '3rd Place' },
  { id: 12, name: 'Ashley Wang', event: 'Cultural Fest', year: 2022, position: '1st Place' },
]

const getIcon = (position) => {
  if (position.includes('1st')) return <FaTrophy className="text-yellow-500 text-3xl mb-2" />
  if (position.includes('2nd')) return <FaMedal className="text-gray-500 text-3xl mb-2" />
  if (position.includes('3rd')) return <FaAward className="text-orange-500 text-3xl mb-2" />
  return <FaStar className="text-blue-500 text-3xl mb-2" />
}

const getBorderColor = (position) => {
  if (position.includes('1st')) return 'border-yellow-400'
  if (position.includes('2nd')) return 'border-gray-400'
  if (position.includes('3rd')) return 'border-orange-400'
  return 'border-blue-400'
}

function HallOfFame() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">🏆 Hall of Fame</h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
        {winners.map((winner) => (
          <div
            key={winner.id}
            className={`bg-white border ${getBorderColor(
              winner.position
            )} rounded-lg p-4 text-center shadow transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:scale-105`}
          >
            {getIcon(winner.position)}
            <h3 className="text-lg font-bold text-gray-800">{winner.name}</h3>
            <p className="text-sm text-blue-600 font-medium">{winner.event}</p>
            <p className="text-sm text-gray-600">{winner.year}</p>
            <p className="font-semibold mt-1">{winner.position}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HallOfFame
