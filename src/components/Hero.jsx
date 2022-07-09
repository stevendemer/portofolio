import { useRef, useState, useEffect } from "react";
import { Box, Text, Flex, Container, Center } from "@chakra-ui/react";
import bgVid from "../assets/bgVideo.mp4";

const Hero = () => {
  const videoRef = useRef();

  const setPlayBack = () => {
    videoRef.current.playbackRate = 0.5;
  };

  const config = {
    textShadow: "0 0 20px black",
    fontWeight: "bold",
    fontSize: "25px",
  };
  return (
    <Box filter="auto" brightness="55%" sx={config}>
      <video ref={videoRef} loop autoPlay muted width="100%" height="100%">
        <source src={bgVid} type="video/mp4" />
        Your browser does not support HTML5 videos.
      </video>
    </Box>
  );
};

export default Hero;
