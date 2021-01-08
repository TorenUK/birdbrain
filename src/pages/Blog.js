import React, { useState, useEffect } from "react";

// components
import { Navbar, Links, Header, BlogItem, Footer } from "../components";

import GlobalStyle, { PageContainer } from "../globalStyles";

// other
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("https://birdbrain.herokuapp.com/blogs")
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Links />
      <Header title="Blog" />
      <PageContainer>
        {blogs.map((blog, idx) => (
          <BlogItem
            key={idx}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            igLink={blog.link}
          />
        ))}
      </PageContainer>
      <Footer />
    </>
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
