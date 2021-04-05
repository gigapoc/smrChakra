import React from "react";
import { Spacer, Flex } from "@chakra-ui/react";

import { Header, Main, Cards, Footer } from "@components";

const Home: React.FC = () => {
  return (
    <Flex direction="column" minH="calc(100%-100px)">
      <Main />
      <Cards />
      <Spacer />
    </Flex>
  );
};

export default Home;
