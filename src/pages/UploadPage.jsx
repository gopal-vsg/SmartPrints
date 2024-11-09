import { useState } from 'react'

function UploadPage() {
  const [formData, setFormData] = useState({
    copies: 1,
    isColor: false,
    isDoubleSided: false,
    orientation: 'portrait'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Generate random token
    const token = Math.random().toString(36).substr(2, 9)
    alert(`Document submitted! Your token is: ${token}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Upload Document</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2">Document</label>
            <input
              type="file"
              accept=".pdf,.docx"
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-2">Number of Copies</label>
            <input
              type="number"
              min="1"
              value={formData.copies}
              onChange={(e) => setFormData({...formData, copies: e.target.value})}
              className="w-full border p-2 rounded"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.isColor}
                onChange={(e) => setFormData({...formData, isColor: e.target.checked})}
                className="mr-2"
              />
              Color Print
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.isDoubleSided}
                onChange={(e) => setFormData({...formData, isDoubleSided: e.target.checked})}
                className="mr-2"
              />
              Double-sided
            </label>
          </div>

          <div>
            <label className="block mb-2">Orientation</label>
            <select
              value={formData.orientation}
              onChange={(e) => setFormData({...formData, orientation: e.target.value})}
              className="w-full border p-2 rounded"
            >
              <option value="portrait">Portrait</option>
              <option value="landscape">Landscape</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Submit Print Job
          </button>
        </form>
      </div>
    </div>
  )
}

export default UploadPage