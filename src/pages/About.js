import React from "react";

// components
import { Navbar, Links, Header, Footer, BasketIcon } from "../components";

import GlobalStyle, {
  TextContainer,
  ImageContainer,
  Title,
  Subtitle,
  TextBody,
  PageContainer,
  ContentContainer,
} from "../globalStyles";

// other
import craftImage from "../assets/craft.webp";

// redux
import { useSelector } from "react-redux";
import { selectBasket } from "../features/basket/basketSlice";

const About = () => {
  const basket = useSelector(selectBasket);

  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Links />
      <Header title="About Us" />
      <PageContainer>
        <ContentContainer>
          <TextContainer>
            {/* <Title>Who We Are</Title> */}
            <Subtitle>Handmade with care</Subtitle>
            <TextBody>
              Bird Brain Gifts is an online store selling gifts for all
              occasions. Offering first-rate handmade products and exceptional
              customer service to shoppers from the comfort of their own homes.
              We started during the 2020 lockdown, having recently lost my job
              and with Christmas looming around the corner I decided to cut the
              costs and go DIY lovingly and sometimes painstakingly making at
              least one part of every gift myself. As I was doing this I found
              my love for crafts and creating items grow and blossom into the
              store you see today! Our online store has since become a great
              place to buy quality gifts that fit any budget. Check it out today
              and make a little independent business jump for joy!
            </TextBody>
          </TextContainer>
          <ImageContainer image={craftImage} />
        </ContentContainer>
      </PageContainer>
      <Footer />
      {basket.length ? <BasketIcon basket={basket} /> : null}
    </div>
  );
};

export default About;
