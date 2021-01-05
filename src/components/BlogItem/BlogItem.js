import React from "react";

// components
import {
  BlogContainer,
  BlogSection,
  BlogImage,
  BlogTitle,
  BlogDescription,
} from "./BlogItem.elements";

const BlogItem = ({ title, description, image }) => {
  const imageURL = `http://localhost:1337${image.url}`;

  return (
    <>
      <BlogContainer>
        <BlogSection>
          <BlogImage image={imageURL}></BlogImage>
        </BlogSection>
        <BlogSection>
          <BlogTitle>{title}</BlogTitle>
          <BlogDescription>{description}</BlogDescription>
        </BlogSection>
      </BlogContainer>
    </>
  );
};

export default BlogItem;
