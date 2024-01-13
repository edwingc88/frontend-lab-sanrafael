import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

import Home from '../src/pages/Home'
import Register from '../src/pages/Register'
import Login from '../src/pages/Login'
import Dashboard from '../src/pages/Dashboard'

function App () {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
