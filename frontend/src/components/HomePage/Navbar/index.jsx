import { Navbar as BootstrapNavbar, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import './index.css';

const Navbar = ({ onCreateBlogClick }) => {
  return (
    <BootstrapNavbar fixed="top" bg="white" className="shadow-sm">
      <Container>
        <BootstrapNavbar.Brand className="fw-bold">
          <div className="icon-container">
            <div className="favicon">
              <FontAwesomeIcon icon={faBlog} />
            </div>
            <div>
              WizBlogs
            </div>
          </div>
        </BootstrapNavbar.Brand>
        <Button variant="primary" onClick={onCreateBlogClick}>
          Create A New Blog
        </Button>
      </Container>
    </BootstrapNavbar>
  );
};

Navbar.propTypes = {
  onCreateBlogClick: PropTypes.func.isRequired,
};

export default Navbar; 
