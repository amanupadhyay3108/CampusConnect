import React from 'react'

const WinnerCard = ({ winner }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 flex gap-4 items-center hover:shadow-lg transition">
      <img
        src={winner.image}
        alt={winner.name}
        className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
      />
      <div>
        <h3 className="text-xl font-semibold text-blue-700">{winner.name}</h3>
        <p className="text-sm text-gray-600">{winner.event} • {winner.year}</p>
        <p className="text-gray-700 font-medium">{winner.position}</p>
      </div>
    </div>
  )
}

export default WinnerCard
