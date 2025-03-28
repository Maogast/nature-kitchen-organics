import React from "react";

interface BlogPostProps {
  title: string;
  content: string;
  author: string;
  date: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, content, author, date }) => {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p>{content}</p>
      <p>
        <small>
          By {author} on {date}
        </small>
      </p>
    </div>
  );
};

export default BlogPost;