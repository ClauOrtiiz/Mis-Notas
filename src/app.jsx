import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Init from './pages/init/init';
import Register from './pages/register/register';
import MisNotas from './pages/misNotas/misNotas';
import './app.css';

export default function route() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Init />} />
          <Route path="/register" element={<Register />} />
          <Route path="/misNotas" element={<MisNotas />} />
        </Routes>
      </Router>
    </div>
  )
}