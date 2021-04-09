import React from "react";
import { Spacer, Flex, Divider, Square, Center } from "@chakra-ui/react";

import { TextePresentation } from "@components";
import { EmbedVideo } from "@components/embedVideo";
import { DiscoverClub } from "@components/discoverClub";
import { LieuxDeVols } from "@components/lieuxDeVols";
import { Separator } from "@components/separator";

const Home: React.FC = () => {
  return (
    <Flex direction="column" minH="calc(100%-100px)" bg="main.100">
      <EmbedVideo height="80vh"/>
      <DiscoverClub h="10vh" />
      <TextePresentation h="40vh"/>
      <Center marginBottom="10"><Separator w="70%"/></Center>
      <LieuxDeVols h="100vh"/>
    </Flex>
  );
};

export default Home;
