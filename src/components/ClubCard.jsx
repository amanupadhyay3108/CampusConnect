import React, { useState } from 'react'
import JoinForm from './JoinForm'

const ClubCard = ({ club }) => {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-semibold text-blue-600 mb-2">{club.name}</h2>
      <p className="text-sm text-gray-500 mb-1">Category: {club.category}</p>
      <p className="text-gray-700 mb-4">{club.description}</p>
      <button
        className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
        onClick={() => setShowForm(true)}
      >
        Join Now
      </button>

      {showForm && (
        // <JoinForm clubName={club.name} onClose={() => setShowForm(false)} />
        <JoinForm
  clubName={club.name}
  clubCategory={club.category} // ✅ THIS MUST BE PASSED!
  onClose={() => setShowForm(false)}
/>
      )}
    </div>
  )
}

export default ClubCard
