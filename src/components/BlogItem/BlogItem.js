import React from "react";

// components
import {
  BlogContainer,
  BlogSection,
  BlogImage,
  BlogLinks,
  BlogLink,
} from "./BlogItem.elements";
import { TextBody, Title } from "../../globalStyles";

// other
import InstagramIcon from "@material-ui/icons/Instagram";

const BlogItem = ({ title, description, image, igLink }) => {
  return (
    <>
      <BlogContainer>
        <BlogSection>
          <BlogImage imageURL={image.url}></BlogImage>
        </BlogSection>
        <BlogSection>
          <Title>{title}</Title>
          <TextBody>{description}</TextBody>
          <BlogLinks>
            <BlogLink target="blank" rel="noreferrer" href={igLink}>
              <InstagramIcon />
            </BlogLink>
          </BlogLinks>
        </BlogSection>
      </BlogContainer>
    </>
  );
};

export default BlogItem;
