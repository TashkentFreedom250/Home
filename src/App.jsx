import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Program from './pages/Program'

export default function App() {
  return (
    <BrowserRouter basename="/home">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/program" element={<Program />} />
      </Routes>
    </BrowserRouter>
  )
}
