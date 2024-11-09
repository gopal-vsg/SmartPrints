import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import UploadPage from './pages/UploadPage'
import MyPrintsPage from './pages/MyPrintsPage'
import QueuePage from './pages/QueuePage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/my-prints" element={<MyPrintsPage />} />
          <Route path="/queue" element={<QueuePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App