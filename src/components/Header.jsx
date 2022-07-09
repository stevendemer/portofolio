import {
  Flex,
  Container,
  Center,
  Spacer,
  Button,
  Heading,
  Text,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useColorMode } from "@chakra-ui/react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const config = {
    fontStyle: "italic",
    opacity: "0.7",
    fontSize: "2.2rem",
    fontFamily: "heading",
    width: "70vw",
    paddingTop: "15px",
    height: "auto",
  };

  return (
    <>
      <Flex
        justify="space-between"
        align="center"
        color="#FFF5EE"
        filter="auto"
        p={8}
        zIndex="1100"
        position="absolute"
        width="100vw"
        opacity="0.9"
        fontWeight="700"
      >
        <Heading
          as="h2"
          paddingLeft={["2rem", "0"]}
          fontFamily="logo"
          size={["xl", "2xl"]}
        >
          <Link to="/">Stef Savov</Link>
        </Heading>
        <Flex
          sx={{
            fontSize: "1.4rem",
          }}
          display={{ base: "none", md: "flex" }}
        >
          <Link style={{ marginRight: "22px" }} to="/projects">
            Projects
          </Link>
          <Link style={{ marginRight: "12rem" }} to="/contact">
            Contact me
          </Link>
        </Flex>
      </Flex>
      <Container
        position="absolute"
        zIndex="1500"
        color="white"
        top="40vh"
        left="45vw"
        transform="translate(-50%, -50%)"
      >
        <Flex
          display={{ base: "none", md: "flex" }}
          justify="center"
          align="center"
          direction="column"
        >
          <Text sx={config}>Hi, i am Steven and i am a web developer</Text>
          <Text sx={config}>Bringing the solution to your problems</Text>
        </Flex>
      </Container>
    </>
  );
};

export default Header;
