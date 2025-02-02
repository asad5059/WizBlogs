import React, { useEffect, useState } from "react"
import { getAllBlogs } from "../urlDispatcher";
import BlogForm from './components/BlogForm';
import Navbar from './components/Navbar';
import { Container, Card, Button } from 'react-bootstrap';
import './App.css';

const BlogPost = ({ blog }) => (
  <Card className="mb-4 shadow-sm">
    <Card.Body className="p-4 p-md-5">
      <Card.Title as="h2" className="mb-4 fs-1">{blog.title}</Card.Title>
      <Card.Text 
        as="div"
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
      <div className="text-end mt-4 pt-3 border-top">
        <Button variant="outline-primary" size="lg">Read More</Button>
      </div>
    </Card.Body>
  </Card>
);

function App() {
  const [blogs, setBlogs] = useState([]);
  const [showBlogForm, setShowBlogForm] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await getAllBlogs();
      setBlogs(response);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="min-vh-100 bg-light">
      <Navbar onCreateBlogClick={() => setShowBlogForm(true)} />
      
      <Container fluid className="py-4 px-3 px-md-5" style={{ marginTop: '80px', maxWidth: '1400px' }}>
        {showBlogForm ? (
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <h2 className="mb-0">Create New Blog</h2>
              <Button 
                variant="link" 
                className="p-0 fs-4"
                onClick={() => setShowBlogForm(false)}
              >
                ×
              </Button>
            </Card.Header>
            <Card.Body>
              <BlogForm 
                onBlogCreated={(newBlog) => {
                  setBlogs([newBlog, ...blogs]);
                  setShowBlogForm(false);
                }} 
              />
            </Card.Body>
          </Card>
        ) : (
          <div className="blog-list">
            {blogs.map(blog => (
              <BlogPost key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </Container>
    </div>
  )
}

export default App
