import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ItemForm from './components/ItemForm';
import SearchPage from './components/SearchPage';
import Footer from './components/Footer';

function App() {
  const [items, setItems] = useState([]);

  const handleSubmitItem = (formData) => {
    const newItem = {
      ...formData,
      id: Date.now(),
      type: window.location.pathname.includes('lost') ? 'lost' : 'found'
    };
    setItems(prev => [...prev, newItem]);
    // In a real app, you would send this to a backend
    console.log('New item submitted:', newItem);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/report-lost"
            element={<ItemForm type="lost" onSubmit={handleSubmitItem} />}
          />
          <Route
            path="/report-found"
            element={<ItemForm type="found" onSubmit={handleSubmitItem} />}
          />
          <Route path="/search" element={<SearchPage items={items} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;