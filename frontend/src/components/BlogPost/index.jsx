import { Button, Card } from "react-bootstrap";
import PropTypes from 'prop-types';

import './index.css';

const BlogPost = ({ blog }) => {

    return (

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
}

BlogPost.propTypes = {
    blog: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
    }).isRequired
}

export default BlogPost;
