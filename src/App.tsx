import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Footer from './components/Footer';

// Page Components
import Home from './pages/Home';
import CorporatePrograms from './pages/CorporatePrograms';
import MaangCertificates from './pages/MaangCertificates';
import ForeignExchange from './pages/ForeignExchange';
import ForeignDegreePrograms from './pages/ForeignDegreePrograms';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        {/* <SubHeader /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/corporate-programs" element={<CorporatePrograms />} />
          <Route path="/maang-certificates" element={<MaangCertificates />} />
          <Route path="/foreign-exchange" element={<ForeignExchange />} />
          <Route path="/foreign-degree-programs" element={<ForeignDegreePrograms />} />
        </Routes>
       
        <Footer />
      </div>
    </Router>
  );
}

export default App;