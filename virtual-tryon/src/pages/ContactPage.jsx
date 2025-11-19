import { Container, Row, Col, Form, Button, Badge } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <section className="py-5">
      <Container>
        <div className="text-center section-heading mb-5">
          <Badge bg="" className="text-uppercase badge-soft mb-3">
            Contact
          </Badge>
          <h2 className="fw-bold">Let’s launch your virtual fitting room</h2>
          <p className="text-muted">
            Share your goals, catalog size, and timeline. Our retail specialists will personalize a rollout plan within
            one business day.
          </p>
        </div>
        <Row className="g-4 align-items-center">
          <Col lg={6}>
            <div className="contact-card">
              <Form>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group controlId="contactName">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" placeholder="Alex Morgan" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="contactEmail">
                      <Form.Label>Work Email</Form.Label>
                      <Form.Control type="email" placeholder="you@brand.com" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="contactCompany">
                      <Form.Label>Company</Form.Label>
                      <Form.Control type="text" placeholder="VirtuStyle" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="contactRole">
                      <Form.Label>Role</Form.Label>
                      <Form.Select defaultValue="">
                        <option value="" disabled>
                          Select role
                        </option>
                        <option>Founder / C-Level</option>
                        <option>Ecommerce Lead</option>
                        <option>Product Manager</option>
                        <option>Retail Operations</option>
                        <option>Other</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group controlId="contactMessage">
                      <Form.Label>Goals</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Tell us about your catalog, timelines, and KPIs."
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
                  <Button type="submit" size="lg">
                    Request Demo
                  </Button>
                  <Button variant="outline-primary" size="lg">
                    Download Deck
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
          <Col lg={6}>
            <div className="d-grid gap-4">
              <div className="p-4 bg-white rounded-4 shadow-sm">
                <div className="d-flex gap-3 align-items-start">
                  <span className="text-primary fs-3">
                    <FaPhoneAlt />
                  </span>
                  <div>
                    <h5 className="mb-1">Talk to us</h5>
                    <p className="text-muted mb-0">+1 (415) 555-0198 · Mon – Fri, 9am – 6pm PST</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white rounded-4 shadow-sm">
                <div className="d-flex gap-3 align-items-start">
                  <span className="text-primary fs-3">
                    <FaEnvelope />
                  </span>
                  <div>
                    <h5 className="mb-1">Partnerships</h5>
                    <p className="text-muted mb-0">partnerships@virtulook.ai</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white rounded-4 shadow-sm">
                <div className="d-flex gap-3 align-items-start">
                  <span className="text-primary fs-3">
                    <FaMapMarkerAlt />
                  </span>
                  <div>
                    <h5 className="mb-1">Experience lab</h5>
                    <p className="text-muted mb-0">575 Market Street, San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactPage;
