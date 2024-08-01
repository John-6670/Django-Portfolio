import React from "react";
import Lottie from "react-lottie";

const CodingLottie = ({ animationData, height, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
      <div>
        <Lottie
            isClickToPauseDisabled={true}
            options={defaultOptions}
            height={height}
            width={width}
        />
      </div>
  );
};

export default CodingLottie;