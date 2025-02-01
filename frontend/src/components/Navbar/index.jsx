import React from 'react';
import './Navbar.css';

const Navbar = ({ onCreateBlogClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>WizBlogs</h1>
      </div>
      <div className="navbar-menu">
        <button className="create-blog-btn" onClick={onCreateBlogClick}>
          Create A New Blog
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 