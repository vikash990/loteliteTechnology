import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Page Components
import Home from './pages/Home';
import CorporatePrograms from './pages/CorporatePrograms';
import MaangCertificates from './pages/MaangCertificates';
import ForeignExchange from './pages/ForeignExchange';
import ForeignDegreePrograms from './pages/ForeignDegreePrograms';
import Contact from './pages/ContactUs';
import Career from './pages/Career';
import UniversityPartnerProgram from './pages/UniversityPartnerProgram';
import CorporatePartnerProgram from './pages/CorporatePartnerProgram';
import ITServices from './pages/ITServices';

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
          <Route path="/university-partner-program" element={<UniversityPartnerProgram />} />
          <Route path="/corporate-partner-program" element={<CorporatePartnerProgram />} />
          <Route path="/it-services" element={<ITServices />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/career" element={<Career />} />
        </Routes>
       
        <Footer />
      </div>
    </Router>
  );
}

export default App;