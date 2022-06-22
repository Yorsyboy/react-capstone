import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Breeds from './pages/Breeds';
import Details from './pages/Details';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/" element={<Breeds />} />
          <Route path="/details" element={<Details />} />
          <Route path="*" element={<Breeds />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
