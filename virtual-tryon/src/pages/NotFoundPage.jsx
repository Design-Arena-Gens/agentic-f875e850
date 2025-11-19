import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className="py-5">
      <Container className="text-center">
        <h1 className="display-3 fw-bold mb-3">404</h1>
        <p className="text-muted mb-4">
          We couldn’t find the look you were searching for. Head back to the showroom and keep exploring outfits.
        </p>
        <Button as={Link} to="/" size="lg">
          Return Home
        </Button>
      </Container>
    </section>
  );
};

export default NotFoundPage;
