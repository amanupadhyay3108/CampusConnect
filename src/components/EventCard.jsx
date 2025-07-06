import React from 'react'

const EventCard = ({ event }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-semibold text-blue-600 mb-2">{event.name}</h2>
      <p className="text-sm text-gray-500 mb-1">Category: {event.category}</p>
      <p className="text-sm text-gray-500 mb-1">Date: {event.date}</p>
      <p className="text-gray-700 mt-2">{event.description}</p>
    </div>
  )
}

export default EventCard
