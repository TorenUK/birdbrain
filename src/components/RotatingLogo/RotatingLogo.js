import React, { useEffect, useState } from "react";

// components
import { LogoDiv } from "./RotatingLogo.elements";

// other
import gsap from "gsap";

const RotatingLogo = () => {
  let tl = gsap.timeline({
    defaults: {
      duration: 85,
      repeat: -1,
      transformOrigin: "center",
    },
  });

  useEffect(() => {
    tl.fromTo("#logoDiv", { rotate: -360 * 10 }, { rotate: 0 });
  }, []);

  return <LogoDiv id="logoDiv" />;
};

export default RotatingLogo;
