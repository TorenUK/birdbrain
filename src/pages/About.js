import React from "react";

// components
import { Navbar, Container, Links, Header } from "../components";
import {
  ImageContainer,
  LargeImage,
  LargeTextContainer,
} from "../globalStyles";
import GlobalStyle from "../globalStyles";

// other
import { aboutContainer } from "../components/data/container";

const About = () => {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Links />
      <Header title="About Us" />
      <Container {...aboutContainer}>
        <ImageContainer>
          <LargeImage src="https://static.wixstatic.com/media/8a7fdb5e5e14471dbd2c447053bb7bcd.jpg/v1/fill/w_699,h_820,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/8a7fdb5e5e14471dbd2c447053bb7bcd.webp" />
        </ImageContainer>
        <LargeTextContainer>
          <h2>Handmade with care</h2>
          <p>
            Bird Brain Gifts is an online store selling gifts for all occasions.
            Offering first-rate handmade products and exceptional customer
            service to shoppers from the comfort of their own homes. We started
            during the 2020 lockdown, having recently lost my job and with
            Christmas looming around the corner I decided to cut the costs and
            go DIY lovingly and sometimes painstakingly making at least one part
            of every gift myself. As I was doing this I found my love for crafts
            and creating items grow and blossom into the store you see today!
            Our online store has since become a great place to buy quality gifts
            that fit any budget. Check it out today and make a little
            independent business jump for joy!
          </p>
        </LargeTextContainer>
      </Container>
    </div>
  );
};

export default About;
