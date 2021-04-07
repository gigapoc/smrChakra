import React from "react";
import { Spacer, Flex } from "@chakra-ui/react";

import { Header, Main, Cards, Footer } from "@components";
import { EmbedVideo } from "@components/embedVideo";
import { DiscoverClub } from "@components/discoverClub";

const Home: React.FC = () => {
  return (
    <Flex direction="column" minH="calc(100%-100px)">
      <EmbedVideo height="80vh"/>
      <DiscoverClub h="10vh" />
      <Cards />
      <Spacer />
    </Flex>
  );
};

export default Home;
