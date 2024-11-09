function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to Print Management</h1>
        <p className="mb-6 text-gray-600">
          Skip the queues and easily manage your print jobs online. Track your printing status
          in real-time and get notified when your documents are ready.
        </p>
        <a
          href="/upload"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Start Printing
        </a>
      </div>
    </div>
  )
}

export default HomePage