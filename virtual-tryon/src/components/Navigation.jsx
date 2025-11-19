import { useState } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FaRocket } from 'react-icons/fa';

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded((prev) => !prev);
  const handleSelect = () => setExpanded(false);

  return (
    <header className="shadow-sm bg-white">
      <Navbar expand="lg" expanded={expanded} variant="light" className="py-3">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-semibold text-uppercase d-flex align-items-center gap-2">
            <span className="badge badge-soft px-3 py-2">AI</span>
            <span>Virtual Try-On</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" onClick={handleToggle} />
          <Navbar.Collapse id="main-nav" className="mt-3 mt-lg-0">
            <Nav className="me-auto" onSelect={handleSelect}>
              <Nav.Link as={NavLink} to="/" end>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/gallery">
                Gallery
              </Nav.Link>
              <Nav.Link as={NavLink} to="/how-it-works">
                How it Works
              </Nav.Link>
              <Nav.Link as={NavLink} to="/pricing">
                Pricing
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            <div className="d-flex gap-2">
              <Button variant="outline-primary" as={Link} to="/gallery" className="hero-cta">
                Browse Fits
              </Button>
              <Button variant="primary" className="d-flex align-items-center gap-2 hero-cta" as={Link} to="/how-it-works">
                <FaRocket />
                Get Started
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navigation;
