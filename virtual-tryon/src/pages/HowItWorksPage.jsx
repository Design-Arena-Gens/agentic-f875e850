import { Container, Row, Col, Badge } from 'react-bootstrap';
import { FaMobileAlt, FaCloudUploadAlt, FaUserFriends, FaLaptopCode } from 'react-icons/fa';

const steps = [
  {
    icon: <FaMobileAlt />,
    title: 'Snap or upload a profile',
    description:
      'Our guided capture flow helps shoppers upload front and side imagery, or import from their device gallery securely.',
  },
  {
    icon: <FaCloudUploadAlt />,
    title: 'Auto-fit your products',
    description:
      'VirtuLook maps garment patterns to each avatar. Size recommendations update live as shoppers toggle fit preferences.',
  },
  {
    icon: <FaLaptopCode />,
    title: 'Embed on every channel',
    description:
      'Drop our JavaScript SDK into your ecommerce storefront, mobile app, or pop-up event kiosks with minimal engineering.',
  },
  {
    icon: <FaUserFriends />,
    title: 'Drive social sharing',
    description:
      'Let customers generate share-ready looks and AR stories, amplifying organic reach and boosting referral traffic.',
  },
];

const HowItWorksPage = () => {
  return (
    <section className="py-5">
      <Container>
        <div className="text-center section-heading mb-5">
          <Badge bg="" className="text-uppercase badge-soft mb-3">
            Journey
          </Badge>
          <h2 className="fw-bold">How virtual try-on comes to life</h2>
          <p className="text-muted">
            VirtuLook delivers reliable fit visualization in just four steps, blending advanced computer vision with an
            accessible front-end workflow.
          </p>
        </div>
        <Row className="g-4">
          {steps.map((step) => (
            <Col md={6} key={step.title}>
              <div className="how-step">
                <div className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 text-primary rounded-circle fs-3 mb-4 p-3">
                  {step.icon}
                </div>
                <h4 className="mb-3">{step.title}</h4>
                <p className="text-muted mb-0">{step.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default HowItWorksPage;
