import React, { useState, useEffect } from 'react'
import{ db }from '../firebase'
import { collection, addDoc } from 'firebase/firestore'

const JoinForm = ({ clubName, clubCategory, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    collegeId: '',
    department: '',
    experience: '',
    achievement: '',
  })

  // Optional: Warn in console if props are missing
  useEffect(() => {
    if (!clubName || !clubCategory) {
      console.warn('⚠️ clubName or clubCategory is missing in JoinForm', {
        clubName,
        clubCategory,
      })
    }
  }, [clubName, clubCategory])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await addDoc(collection(db, 'club_joins'), {
        ...formData,
        clubName: clubName || 'Unnamed Club',
        clubCategory: clubCategory || 'General',
        timestamp: new Date(),
      })
      alert(`Your request to join ${clubName} has been submitted!`)
      onClose()
    } catch (error) {
      console.error('❌ Error submitting form:', error.message, error)
      alert('There was an error submitting the form: ' + error.message)
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-blue-600 mb-5">
          Join {clubName || 'Club'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email ID
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* College ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              College ID
            </label>
            <input
              type="text"
              name="collegeId"
              placeholder="College Roll Number"
              value={formData.collegeId}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Department
            </label>
            <input
              type="text"
              name="department"
              placeholder="e.g., Computer Science"
              value={formData.department}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Experience Level in {clubCategory || 'Selected Domain'}
            </label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Experience Level</option>
              <option value={`Fresher in ${clubCategory || 'Selected Domain'}`}>
                Fresher in {clubCategory || 'Selected Domain'}
              </option>
              <option value={`Learner in ${clubCategory || 'Selected Domain'}`}>
                Learner in {clubCategory || 'Selected Domain'}
              </option>
              <option value={`Proficient in ${clubCategory || 'Selected Domain'}`}>
                Proficient in {clubCategory || 'Selected Domain'}
              </option>
              <option value={`Advanced in ${clubCategory || 'Selected Domain'}`}>
                Advanced in {clubCategory || 'Selected Domain'}
              </option>
            </select>
          </div>

          {/* Achievements */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Achievements (Optional)
            </label>
            <input
              type="text"
              name="achievement"
              placeholder="e.g., Winner of Codefest 2024"
              value={formData.achievement}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-medium transition"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  )
}

export default JoinForm
