import React, { useState, useEffect } from "react";

// components
import { Navbar, Container, Links, Header } from "../components";
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

  console.log(blogs);

  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Links />
      <Header title="Blog" />
      <Container {...blogContainer}>
        {blogs.map((blog) => (
          <h1>{blog.title}</h1>
        ))}
      </Container>
    </div>
  );
};

export default Blog;
