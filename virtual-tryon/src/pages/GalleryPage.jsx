import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

const galleryItems = [
  {
    title: 'Evening Luxe Edit',
    description: 'Metallic satin gowns with volumetric light simulation and fluid fabric folds.',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
    credit: 'Photo by freestocks on Unsplash',
  },
  {
    title: 'Everyday Streetwear',
    description: 'Layered denim, cargo jackets, and sneakers produced with dynamic occlusion.',
    image: 'https://images.unsplash.com/photo-1503342452485-86b7f54527dd?auto=format&fit=crop&w=1200&q=80',
    credit: 'Photo by Joshua Rawson-Harris on Unsplash',
  },
  {
    title: 'Resort-Ready Looks',
    description: 'Flowy linens and prints with sun-kissed lighting for summer retail campaigns.',
    image: 'https://images.unsplash.com/photo-1509324924958-d7d4fe8f3c11?auto=format&fit=crop&w=1200&q=80',
    credit: 'Photo by Roland Denes on Unsplash',
  },
  {
    title: 'Athleisure Essentials',
    description: 'Body-contoured sportswear with matte moisture-wicking materials.',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80',
    credit: 'Photo by Scott Webb on Unsplash',
  },
  {
    title: 'Heritage Tailoring',
    description: 'Wool and tweed ensembles rendered with thread-level detail.',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1200&q=80',
    credit: 'Photo by Felipe Vieira on Unsplash',
  },
  {
    title: 'Festival Capsule',
    description: 'Bold patterns plus AR makeup overlays for immersive festival drops.',
    image: 'https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?auto=format&fit=crop&w=1200&q=80',
    credit: 'Photo by Kris Atomic on Unsplash',
  },
];

const GalleryPage = () => {
  return (
    <section className="py-5">
      <Container>
        <div className="text-center section-heading mb-5">
          <Badge bg="" className="text-uppercase badge-soft mb-3">
            Showcase
          </Badge>
          <h2 className="fw-bold">Virtual try-on gallery</h2>
          <p className="text-muted">
            Explore sample renders across categories. Each outfit is generated from product photography combined
            with AI-driven fabric simulation to match the shopper’s silhouette.
          </p>
        </div>
        <Row className="g-4">
          {galleryItems.map((item) => (
            <Col md={6} lg={4} key={item.title}>
              <Card className="feature-card h-100 overflow-hidden">
                <div className="ratio ratio-4x3">
                  <img src={item.image} alt={item.title} className="w-100 h-100 object-fit-cover" />
                </div>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text className="text-muted">{item.description}</Card.Text>
                  <small className="text-muted">{item.credit}</small>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default GalleryPage;
