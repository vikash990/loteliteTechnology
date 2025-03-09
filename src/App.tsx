import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import MainSection from './components/MainSection';
import Services from './components/Services';
import Quotes from './components/Quotes';
import Differentiators from './components/Differentiators';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

// Page Components
import CorporatePrograms from './pages/CorporatePrograms';
import MaangCertificates from './pages/MaangCertificates';
import ForeignExchange from './pages/ForeignExchange';
import ForeignDegreePrograms from './pages/ForeignDegreePrograms';

const Home = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Welcome to Lotlite</h1>
    <p className="text-gray-600">Your gateway to global education and professional development.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <SubHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/corporate-programs" element={<CorporatePrograms />} />
          <Route path="/maang-certificates" element={<MaangCertificates />} />
          <Route path="/foreign-exchange" element={<ForeignExchange />} />
          <Route path="/foreign-degree-programs" element={<ForeignDegreePrograms />} />
        </Routes>
        <MainSection />
        <Services />
        <Quotes />
        <Differentiators />
        <Testimonials />
        <ContactForm />
        <Footer />
      </div>
    </Router>
  );
}

export default App;