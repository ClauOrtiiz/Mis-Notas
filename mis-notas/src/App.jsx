import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Init from './pages/init/init';
import Login from './pages/login/login';
import Register from './pages/register/register'
import MisNotas from './pages/misNotas/misNotas'

export default function route() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Init />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/misNotas" element={<MisNotas />} />
        </Routes>
      </Router>
    </div>
  )
}