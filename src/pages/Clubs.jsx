import React, { useState } from 'react'
import JoinForm from '../components/JoinForm'

const clubsData = [
  {
    name: 'Code Warriors',
    category: 'Technical',
    description: 'A community of passionate coders and developers building real-world apps.',
    image: '/assets/code-club.png',
  },
  {
    name: 'Artistry Hub',
    category: 'Cultural',
    description: 'A platform for dancers, musicians, and artists to showcase their talent.',
    image: '/assets/culture-club.png',
  },
  {
    name: 'Debate & MUN',
    category: 'Literary',
    description: 'Hone your speaking, debating, and diplomacy skills through MUN events.',
    image: '/assets/mun-club.png',
  },
  {
    name: 'Startup Incubator',
    category: 'Entrepreneurship',
    description: 'For budding entrepreneurs to brainstorm, pitch, and grow startup ideas.',
    image: '/assets/startup-club.png',
  },
  {
    name: 'Lens & Frame',
    category: 'Media',
    description: 'A visual storytelling club for photography and filmmaking enthusiasts.',
    image: '/assets/media-club.png',
  },
  {
    name: 'AI & ML Circle',
    category: 'Technical',
    description: 'Dive deep into the world of artificial intelligence and machine learning.',
    image: '/assets/ai-club.png',
  },
  {
    name: 'EcoVerse',
    category: 'Social/Environment',
    description: 'Spreading awareness about sustainability and eco-friendly living.',
    image: '/assets/eco-club.png',
  },
  {
    name: 'Robotics & Innovation Lab',
    category: 'Technical',
    description: 'Design, build, and innovate using circuits, sensors, and mechanical parts.',
    image: '/assets/robotics-club.png',
  },
]

function Clubs() {
  const [selectedClub, setSelectedClub] = useState(null)

  const openJoinForm = (club) => setSelectedClub(club)
  const closeJoinForm = () => setSelectedClub(null)

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen px-4 sm:px-8 py-10">
      <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-12">
        🌟 Explore Campus Clubs
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {clubsData.map((club) => (
          <div
            key={club.name}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col overflow-hidden border border-gray-100"
          >
            {/* Image */}
            <div className="w-full h-40 overflow-hidden">
              <img
                src={club.image}
                alt={club.name}
                className="w-full h-full object-cover rounded-t-2xl"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{club.name}</h3>

                <span className="inline-block text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded-full mt-1 mb-2">
                  {club.category} Club
                </span>

                <p className="text-gray-600 text-sm leading-relaxed">{club.description}</p>
              </div>

              <button
                onClick={() => openJoinForm(club)}
                className="mt-5 bg-blue-600 text-white w-full py-2 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Join Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedClub && (
        <JoinForm
          clubName={selectedClub.name}
          clubCategory={selectedClub.category}
          onClose={closeJoinForm}
        />
      )}
    </div>
  )
}

export default Clubs
