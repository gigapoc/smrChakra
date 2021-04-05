import React from "react";
import { Center, Flex, Box, Spacer } from "@chakra-ui/react";

import { Logo } from "@components";
import { SocialNetworks } from "@components/socialNetworks";
import {Menu} from "@components/menu";
import { SP } from "next/dist/next-server/lib/utils";

export const Header: React.FC = () => {
  return <Box bg="main.100">
    <Flex height="100px">
      <Spacer flex={0.5}/>
      <Box flex="5">
        <SocialNetworks/>
      </Box>
      <Center flex="2">
        <Logo />
      </Center>
      <Box flex="5">
        <Menu />
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
