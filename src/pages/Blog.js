import React, { useState, useEffect } from "react";

// components
import { Navbar, Container, Links, Header, BlogItem } from "../components";

import GlobalStyle from "../globalStyles";

// other
import { blogContainer } from "../components/data/container";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/blogs")
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Links />
      <Header title="Blog" />
      <Container {...blogContainer}>
        {blogs.map((blog) => (
          <BlogItem
            title={blog.title}
            description={blog.description}
            image={blog.image}
          />
        ))}
      </Container>
    </div>
  );
};

export default Blog;
