import React from "react";
import { Center, Flex, Box, Spacer, Link, background } from "@chakra-ui/react";

import { Logo } from "@components";
import { SocialNetworks } from "@components/socialNetworks";
import {Menu} from "@components/menu";

interface HeaderProps {
  pages: {
    titre_menu: string;
    url: string;
    order: number;
  }[];
}

export const Header: React.FC<any> = ({pages}: HeaderProps) => {
  return <>
    <Box bg="main.100" position="fixed" width="100vw" h={{md: "100px", sm: "50px"}} transition=".1s" borderBottom={{sm: "1px solid orange", md: "none"}}>
      <Flex  h={{md: "100px", sm: "50px"}} >
        <Spacer flex={0.5} display={{sm: "none", md:"block"}}/>
        <Box flex="5" display={{sm: "none", md:"block"}}>
          <SocialNetworks/>
        </Box>
        <Center flex={{md: 2, sm: 1}} marginTop={{md: "50px", sm: "0"}}>
          <Link href="/" _focus={{border: "none"}}>
            <Logo />
          </Link>
        </Center>
        <Box flex={{md:"5", sm: "1"}} mt={5}>
          <Menu pagesActivites={pages}/>
        </Box>
        <Spacer flex={0.5}/>
      </Flex>
      <Flex>
        <Spacer flex={0.5}/>
        <Box flex={5} height="2px" bg="orange.100" display={{sm: "none", md:"block"}}/>
        <Spacer flex={2}/>
        <Box flex={5} height="2px" bg="orange.100" display={{sm: "none", md:"block"}}/>
        <Spacer flex={0.5}/>
      </Flex>
      <Box display={{sm: "block", md:"none"}} pos="absolute" w="100%" top={"calc(100vh - 49px)"} bg={"main.100"} h={"50px"} borderTop={"1px solid orange"}>
        <SocialNetworks/>
      </Box>
    </Box>
  </>;
};
