import React from "react";

// components
import {
  BlogContainer,
  BlogSection,
  BlogImage,
  BlogTitle,
  BlogDescription,
} from "./BlogItem.elements";
import { TextBody, Title } from "../../globalStyles";

const BlogItem = ({ title, description, image }) => {
  const imageURL = `https://birdbrain.herokuapp.com${image.url}`;

  return (
    <>
      <BlogContainer>
        <BlogSection>
          <BlogImage imageURL={imageURL}></BlogImage>
        </BlogSection>
        <BlogSection>
          <Title>{title}</Title>
          <TextBody>{description}</TextBody>
        </BlogSection>
      </BlogContainer>
    </>
  );
};

export default BlogItem;
