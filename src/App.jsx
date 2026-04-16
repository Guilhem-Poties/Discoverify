import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage.jsx'
import RandomTrack from './pages/RandomTrack.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/random" element={<RandomTrack />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
