function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Print Management</h1>
        <div className="space-x-4">
          <a href="/" className="text-white hover:text-blue-200">Home</a>
          <a href="/upload" className="text-white hover:text-blue-200">Upload</a>
          <a href="/my-prints" className="text-white hover:text-blue-200">My Prints</a>
          <a href="/queue" className="text-white hover:text-blue-200">Print Queue</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar