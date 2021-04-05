import React from "react";
import { Center, Flex, Box, Spacer, Link } from "@chakra-ui/react";

import { Logo } from "@components";
import { SocialNetworks } from "@components/socialNetworks";
import {Menu} from "@components/menu";

interface HeaderProps {
  pages: {
    titre_menu: string;
    url: string;
    order: number;
  }[];
  isScrolled: boolean;
}

export const Header: React.FC<any> = ({pages, isScrolled}: HeaderProps) => {
  return <Box bg="main.100" position="fixed" width="100vw" h="100px" transition=".2s">
    <Flex  h="100px" >
      <Spacer flex={0.5}/>
      <Box flex="5">
        <SocialNetworks/>
      </Box>
      <Center flex="2">
        <Link href="/" _focus={{border: "none"}}>
          <Logo />
        </Link>
      </Center>
      <Box flex="5">
        <Menu pagesActivites={pages}/>
      </Box>
      <Spacer flex={0.5}/>
    </Flex>
    <Flex>
      <Spacer flex={0.5}/>
      <Box flex={5} height="1px" bg="orange.100"/>
      <Spacer flex={2}/>
      <Box flex={5} height="1px" bg="orange.100" />
      <Spacer flex={0.5}/>
    </Flex>
  </Box>;
};
