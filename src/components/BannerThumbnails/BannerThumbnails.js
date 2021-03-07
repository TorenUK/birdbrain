import React, { Component } from "react";

//components
import { BannerThumbnailsContainer } from "./BannerThumnail.elements";

export class BannerThumbnails extends Component {
  state = {
    hello: true,
  };

  render() {
    return (
      <BannerThumbnailsContainer>
        {this.props.children}
      </BannerThumbnailsContainer>
    );
  }
}

export default BannerThumbnails;
