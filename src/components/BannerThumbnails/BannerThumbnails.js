import React, { Component } from "react";

//components
import { BannerThumbnailsContainer } from "./BannerThumnail.elements";

export class BannerThumbnails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BannerThumbnailsContainer>
        {this.props.children}
      </BannerThumbnailsContainer>
    );
  }
}

export default BannerThumbnails;
