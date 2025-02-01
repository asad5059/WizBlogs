import { Navbar as BootstrapNavbar, Container, Button } from 'react-bootstrap';

const Navbar = ({ onCreateBlogClick }) => {
  return (
    <BootstrapNavbar fixed="top" bg="white" className="shadow-sm">
      <Container>
        <BootstrapNavbar.Brand className="fw-bold">WizBlogs</BootstrapNavbar.Brand>
        <Button variant="primary" onClick={onCreateBlogClick}>
          Create A New Blog
        </Button>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar; 