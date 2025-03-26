import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Show from './pages/Show'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/items/:id" element={<Show />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
