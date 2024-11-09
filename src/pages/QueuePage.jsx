import { useState } from 'react'

function QueuePage() {
  const [queue, setQueue] = useState([
    { id: 1, token: 'abc123', name: 'Assignment.pdf', specs: '1 copy, Color', status: 'Waiting' },
    { id: 2, token: 'def456', name: 'Report.docx', specs: '2 copies, B&W', status: 'Printing' }
  ])

  const updateStatus = (id, newStatus) => {
    setQueue(queue.map(item => 
      item.id === id ? {...item, status: newStatus} : item
    ))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Print Queue Management</h2>
        <div className="space-y-4">
          {queue.map(item => (
            <div key={item.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-sm text-gray-600">Token: {item.token}</p>
                  <p className="text-sm text-gray-600">{item.specs}</p>
                </div>
                <div className="space-x-2">
                  {item.status === 'Waiting' && (
                    <button
                      onClick={() => updateStatus(item.id, 'Printing')}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      Start Printing
                    </button>
                  )}
                  {item.status === 'Printing' && (
                    <button
                      onClick={() => updateStatus(item.id, 'Ready')}
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                      Mark Complete
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default QueuePage