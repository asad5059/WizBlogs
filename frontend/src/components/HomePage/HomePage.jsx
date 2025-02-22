import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";

import { getAllBlogs } from "../../config/urlDispatcher";
import Navbar from "./Navbar";
import BlogForm from "../BlogForm";

import './index.css';
import BlogPost from "../BlogPost";

const HomePage = () => {
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
    );
};

export default HomePage;