import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import HowItWorksPage from './pages/HowItWorksPage.jsx';
import PricingPage from './pages/PricingPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import './App.css';

function App() {
  return (
    <div className="app-shell">
      <Navigation />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <footer className="app-footer py-5">
        <Container>
          <Footer />
        </Container>
      </footer>
    </div>
  );
}

export default App;
