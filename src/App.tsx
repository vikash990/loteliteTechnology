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
const CorporatePrograms = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Corporate Programs</h1>
    <p className="text-gray-600">Welcome to our Corporate Programs section.</p>
  </div>
);

const MaangCertificates = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">MAANG Certificates</h1>
    <p className="text-gray-600">Explore our MAANG certification programs.</p>
  </div>
);

const ForeignExchange = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Foreign Exchange</h1>
    <p className="text-gray-600">Learn about our foreign exchange opportunities.</p>
  </div>
);

const ForeignDegreePrograms = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Foreign Degree Programs</h1>
    <p className="text-gray-600">Discover our international degree programs.</p>
  </div>
);

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