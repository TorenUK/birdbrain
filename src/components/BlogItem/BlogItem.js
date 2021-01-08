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
  console.log(image.url);

  return (
    <>
      <BlogContainer>
        <BlogSection>
          <BlogImage imageURL={image.url}></BlogImage>
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
