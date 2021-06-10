import React from "react";
import { Container, Flex, Divider, Square, Center } from "@chakra-ui/react";
import { NextSeo } from 'next-seo';


import { TextePresentation } from "@components";
import { EmbedVideo } from "@components/embedVideo";
import { DiscoverClub } from "@components/discoverClub";
import { LieuxDeVols } from "@components/lieuxDeVols";
import { Separator } from "@components/separator";

const Home: React.FC = () => {
  return <>
    <NextSeo
      title="SMR"
      description="Bienvenue sur le site du Sénart Multirotor Racing !"
    />
    <Flex direction="column" minH={{md: "calc(100%-100px)", sm: "calc(100%-50px)"}} bg="main.100">
      <Container maxW="container.xl">
        <EmbedVideo height={{md: "80vh", sm: ""}}/>
        <DiscoverClub h="10vh" />
        <TextePresentation />
        {/* <Center marginBottom="10"><Separator w="70%"/></Center> */}
        <LieuxDeVols/>
      </Container>
    </Flex>
  </>;
};

export default Home;
