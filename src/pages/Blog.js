import React, { useState, useEffect } from "react";

// components
import {
  Navbar,
  Links,
  Header,
  BlogItem,
  Footer,
  BasketIcon,
} from "../components";

import GlobalStyle, { PageContainer } from "../globalStyles";

// other
import axios from "axios";

// redux
import { useSelector } from "react-redux";
import { selectBasket } from "../features/basket/basketSlice";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const basket = useSelector(selectBasket);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://birdbrain.herokuapp.com/blogs")
      .then((response) => {
        setBlogs(response.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Links />
      <Header title={loading ? 'loading blogs...' : 'Blogs'} />
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
      {basket.length ? <BasketIcon basket={basket} /> : null}
    </>
  );
};

export default Blog;
