import React, { useEffect, useState } from "react";
import CodingLottie from "../Lottie";
import animationData from "../../lottie/404.json";
import {Container} from "react-bootstrap";
import "../../Styles/Home.css";

function NotFound() {
  return (
      <Container style={{background: 'var(--image-gradient), var(--section-background)', backgroundRepeat: 'repeat', backgroundSize: 'cover'}} >
        <CodingLottie animationData={animationData} width={1000} height={814} />
      </Container>
  );
}

export default NotFound