import { useState } from 'react'

function MyPrintsPage() {
  const [prints] = useState([
    { id: 1, token: 'abc123', name: 'Assignment.pdf', status: 'Waiting', specs: '1 copy, Color' },
    { id: 2, token: 'def456', name: 'Report.docx', status: 'Printing', specs: '2 copies, B&W' },
    { id: 3, token: 'ghi789', name: 'Thesis.pdf', status: 'Ready', specs: '1 copy, Double-sided' }
  ])

  const getStatusColor = (status) => {
    switch (status) {
      case 'Waiting': return 'bg-yellow-200 text-yellow-800'
      case 'Printing': return 'bg-blue-200 text-blue-800'
      case 'Ready': return 'bg-green-200 text-green-800'
      default: return 'bg-gray-200 text-gray-800'
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">My Print Jobs</h2>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Refresh
          </button>
        </div>
        <div className="space-y-4">
          {prints.map(print => (
            <div key={print.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold">{print.name}</h3>
                  <p className="text-sm text-gray-600">Token: {print.token}</p>
                  <p className="text-sm text-gray-600">{print.specs}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(print.status)}`}>
                  {print.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyPrintsPage