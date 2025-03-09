import React from 'react';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import MainSection from './components/MainSection';
import Services from './components/Services';
import Quotes from './components/Quotes';
import Differentiators from './components/Differentiators';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SubHeader />
      <MainSection />
      <Services />
      <Quotes />
      <Differentiators />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;