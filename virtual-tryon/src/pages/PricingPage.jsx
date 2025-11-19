import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';

const pricingPlans = [
  {
    name: 'Starter',
    price: '$89',
    period: 'per month',
    tagline: 'Perfect for boutiques launching virtual try-ons.',
    features: ['Up to 500 monthly try-ons', 'Drag-and-drop storefront widget', 'Email support', 'Analytics dashboard'],
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$249',
    period: 'per month',
    tagline: 'Grow conversions with automation and personalization.',
    features: [
      'Up to 3,000 monthly try-ons',
      'Personalized outfit bundles',
      'Multi-language localization',
      'Dedicated success manager',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Let’s Talk',
    period: '',
    tagline: 'Global retailers with omnichannel activations.',
    features: [
      'Unlimited try-ons and seats',
      'Custom pipelines and SLAs',
      'SAML SSO and audit logging',
      'On-site activations & AR mirrors',
    ],
    highlighted: false,
  },
];

const PricingPage = () => {
  return (
    <section className="py-5">
      <Container>
        <div className="text-center section-heading mb-5">
          <Badge bg="" className="text-uppercase badge-soft mb-3">
            Plans
          </Badge>
          <h2 className="fw-bold">Flexible pricing that scales with your brand</h2>
          <p className="text-muted">
            Choose a plan that matches your catalog size and campaign ambitions. Every tier includes privacy-first
            infrastructure and responsive support.
          </p>
        </div>
        <Row className="g-4 justify-content-center">
          {pricingPlans.map((plan) => (
            <Col md={6} lg={4} key={plan.name}>
              <Card className={`pricing-card h-100 ${plan.highlighted ? 'border-2 border-primary' : ''}`}>
                <Card.Body className="d-flex flex-column">
                  {plan.highlighted && (
                    <Badge bg="primary" className="align-self-start mb-3">
                      Most Popular
                    </Badge>
                  )}
                  <Card.Title className="fs-3 fw-semibold">{plan.name}</Card.Title>
                  <Card.Text className="text-muted">{plan.tagline}</Card.Text>
                  <div className="display-5 fw-bold mb-3">
                    {plan.price}
                    <span className="fs-6 text-muted ms-2">{plan.period}</span>
                  </div>
                  <ul className="list-unstyled d-grid gap-2 mb-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="d-flex align-items-start gap-2 text-muted">
                        <FaCheck className="text-primary mt-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={plan.highlighted ? 'primary' : 'outline-primary'} className="mt-auto">
                    {plan.highlighted ? 'Start Free Trial' : 'Contact Sales'}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PricingPage;
