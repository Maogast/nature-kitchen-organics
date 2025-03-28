import React from "react";
import BlogPost from "../components/BlogPost";
import '../styles/components.css'; // Import the CSS file

const blogPosts = [
  {
    id: 1,
    title: "The Benefits of Organic Spices",
    content: "Organic spices offer numerous health benefits...",
    author: "Sylvester Okeno",
    date: "March 24, 2025",
  },
  {
    id: 2,
    title: "Sustainable Farming Practices",
    content: "Sustainable farming is essential for the environment...",
    author: "Jocylne",
    date: "March 20, 2025",
  },
  // Add more blog posts as needed
];

const BlogPage: React.FC = () => {
  return (
    <div className="blog-page">
      <div className="blog-content">
        <h1>Our Blog</h1>
        {blogPosts.map((post) => (
          <BlogPost key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;