import {
  Text,
  Heading,
  Flex,
  Container,
  Center,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

const Carousel = () => {
  const config = {
    width: "100vw",
    height: "100vh",
  };

  const tabConfig = {
    display: "flex",
    justifyContent: "space-around",
    width: "100vw",
    height: "100vh",
    paddingLeft: "25px",
    background: "black",
    alignItems: "center",
  };
  return (
    <Flex sx={config} justify="center" align="baseline">
      <Tabs
        size="md"
        sx={tabConfig}
        variant="soft-rounded"
        background="#1E90FF"
      >
        <TabList>
          <Tab>Netflix Clone</Tab>
          <Tab>E Shop</Tab>
          <Tab>Discord Bot</Tab>
          <Tab>Tesla Clone</Tab>
        </TabList>
      </Tabs>
    </Flex>
  );
};

export default Carousel;
