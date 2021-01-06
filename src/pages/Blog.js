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
    candle: 2.99,
    bag: 7.99,
    chocolate: 10,
  };

  return lookup[item] * qty;
};

// example basket item: qty
const itemArr = [{ candle: 1 }, { bag: 5 }, { chocolate: 10 }];

const totals = [];

// map through the basket
itemArr.map((item) => {
  const obj = Object.keys(item); // item name
  const quantity = item[obj];

  // push price of each item into totals array
  totals.push(priceCheck(obj, quantity));
});

// reduce totals array to final subtotal
const subtotal = totals.reduce((total, amount) => total + amount);

console.log(subtotal, "<---- Order Subtotal");

export default Blog;
