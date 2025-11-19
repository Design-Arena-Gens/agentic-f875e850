import { Container, Row, Col, Button, Badge, Card } from 'react-bootstrap';
import { FaCameraRetro, FaMagic, FaShieldAlt, FaSmileBeam } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <section className="hero-section">
        <Container>
          <Row className="align-items-center gy-5">
            <Col lg={6}>
              <div className="hero-card">
                <Badge bg="" className="text-uppercase badge-soft mb-3">
                  Virtual Dressing Rooms
                </Badge>
                <h1 className="display-5 fw-bold mb-3">
                  Try outfits digitally with photorealistic results in seconds.
                </h1>
                <p className="fs-5 text-muted mb-4">
                  VirtuLook blends AI body mapping with authentic fabric simulation to help your shoppers
                  experiment with styles, sizes, and fits anywhere, anytime.
                </p>
                <div className="d-flex flex-wrap gap-3 hero-cta">
                  <Button as={Link} to="/how-it-works" variant="primary" size="lg">
                    Explore Features
                  </Button>
                  <Button as={Link} to="/pricing" variant="outline-primary" size="lg">
                    View Pricing
                  </Button>
                </div>
                <div className="d-flex gap-4 mt-5 flex-wrap">
                  <div>
                    <h3 className="fw-semibold mb-1">98%</h3>
                    <p className="text-muted mb-0">Fit confidence uplift</p>
                  </div>
                  <div>
                    <h3 className="fw-semibold mb-1">35%</h3>
                    <p className="text-muted mb-0">Return rate reduction</p>
                  </div>
                  <div>
                    <h3 className="fw-semibold mb-1">24/7</h3>
                    <p className="text-muted mb-0">Try-on availability</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <img
                src="https://images.pexels.com/photos/7679460/pexels-photo-7679460.jpeg"
                alt="Woman testing outfits in a digital mirror experience"
                className="w-100 gallery-image"
              />
              <small className="d-block text-center text-muted mt-2">
                Imagery courtesy of Ron Lach via Pexels
              </small>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <div className="text-center mx-auto section-heading mb-5">
            <Badge bg="" className="text-uppercase badge-soft mb-3">
              Why VirtuLook
            </Badge>
            <h2 className="fw-bold">Convert inspiration into confident purchases</h2>
            <p className="text-muted">
              We fuse cutting-edge body scanning, cloth simulation, and real-time personalization for the most
              accurate virtual try-on experiences on web and mobile.
            </p>
          </div>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="feature-card h-100 p-3">
                <Card.Body>
                  <FaCameraRetro className="fs-1 text-primary mb-3" />
                  <Card.Title>Instant Uploads</Card.Title>
                  <Card.Text className="text-muted">
                    Customers upload or snap a photo and get a posture-aware avatar in under 10 seconds.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="feature-card h-100 p-3">
                <Card.Body>
                  <FaMagic className="fs-1 text-primary mb-3" />
                  <Card.Title>AI Fabric Mapping</Card.Title>
                  <Card.Text className="text-muted">
                    Photoreal draping with reflective highlights and texture detail for every cloth input.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="feature-card h-100 p-3">
                <Card.Body>
                  <FaShieldAlt className="fs-1 text-primary mb-3" />
                  <Card.Title>Privacy Safe</Card.Title>
                  <Card.Text className="text-muted">
                    SOC2-aligned infrastructure with automatic anonymization and secure deletion controls.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="feature-card h-100 p-3">
                <Card.Body>
                  <FaSmileBeam className="fs-1 text-primary mb-3" />
                  <Card.Title>Post-Purchase Delight</Card.Title>
                  <Card.Text className="text-muted">
                    Offer tailor-made recommendations and full-look styling to increase repeat visits.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
