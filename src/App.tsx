import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Service from './pages/Service/Service';
import Quotation from './pages/Quotation/Quotation';
import Blog from './pages/Blog/Blog';
import ErrorPage from './pages/Error/ErrorPage';
import './assets/styles/global.css';
import './assets/styles/variables.css';

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/quotation" element={<Quotation />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

