import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <Container fluid className="px-0">
      <Row className="gy-4">
        <Col lg={4} className="pe-lg-5">
          <h5 className="fw-semibold text-white">VirtuLook</h5>
          <p className="mb-3">
            VirtuLook lets shoppers try outfits digitally before buying. Save time, reduce returns,
            and deliver hyper-personal recommendations across devices.
          </p>
          <div className="d-flex gap-3 fs-4">
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>
        </Col>
        <Col lg={2} md={6}>
          <h6 className="text-uppercase text-white-50">Explore</h6>
          <ul className="list-unstyled d-grid gap-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </Col>
        <Col lg={3} md={6}>
          <h6 className="text-uppercase text-white-50">Resources</h6>
          <ul className="list-unstyled d-grid gap-2">
            <li>
              <a href="https://www.freepik.com" target="_blank" rel="noreferrer">
                Freepik Assets
              </a>
            </li>
            <li>
              <a href="https://www.pexels.com" target="_blank" rel="noreferrer">
                Pexels Imagery
              </a>
            </li>
            <li>
              <a href="https://fontawesome.com" target="_blank" rel="noreferrer">
                Font Awesome Icons
              </a>
            </li>
            <li>
              <a href="https://react-icons.github.io/react-icons" target="_blank" rel="noreferrer">
                React Icons Library
              </a>
            </li>
          </ul>
        </Col>
        <Col lg={3}>
          <h6 className="text-uppercase text-white-50">Stay Updated</h6>
          <p className="mb-3">Join thousands of brands delivering immersive virtual try-on experiences.</p>
          <form className="d-flex flex-column flex-sm-row gap-2">
            <input type="email" className="form-control" placeholder="Email address" required />
            <button type="submit" className="btn btn-primary px-4">
              Subscribe
            </button>
          </form>
        </Col>
      </Row>
      <div className="text-center pt-4 mt-4 border-top border-white-10">
        <small>© {new Date().getFullYear()} VirtuLook. Imagery courtesy of Freepik, Pexels, and Unsplash contributors.</small>
      </div>
    </Container>
  );
};

export default Footer;
