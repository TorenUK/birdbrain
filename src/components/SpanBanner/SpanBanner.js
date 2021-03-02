import React from "react";

// components
import { SpanBannerContainer } from "./SpanBanner.elements";

class SpanBanner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }

  render() {
    return <SpanBannerContainer>hi this a span banner</SpanBannerContainer>;
  }
}

export default SpanBanner;
