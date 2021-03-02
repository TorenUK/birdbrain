import React, { Component } from "react";
import { SpanBannerContainer } from "../SpanBanner/SpanBanner.elements";

// components
import { SmallThumbnailContainer } from "./SmallThumbnail.elements";

import thing from "../../assets/birdbrain-logo.jpg";

export class SmallThumbnail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SmallThumbnailContainer background={thing}></SmallThumbnailContainer>
    );
  }
}

export default SmallThumbnail;
