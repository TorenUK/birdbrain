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
        {blogs.map((blog, idx) => (
          <BlogItem
            key={idx}
            title={blog.title}
            description={blog.description}
            image={blog.image}
          />
        ))}
      </Container>
    </div>
  );
};

const priceCheck = (item, qty) => {
  const lookup = {
    uid1: 2.99,
    uid2: 7.99,
    uid3: 10,
  };

  return lookup[item] * qty;
};

const itemArr = [{ uid1: 3 }, { uid2: 5 }, { uid3: 1 }];

const totals = [];

itemArr.map((item) => {
  let obj = Object.keys(item);
  let quantity = item[obj];

  totals.push(priceCheck(obj, quantity));
});

const subtotal = totals.reduce((total, amount) => total + amount);

console.log(subtotal, "<---- Order Subtotal");

export default Blog;
