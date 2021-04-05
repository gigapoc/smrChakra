import { Flex, Link, Stack } from "@chakra-ui/layout";
import { Center, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const MenuLink = ({children}) => {
    return <Link _hover={{
        textDecoration: 'none',
        color: useColorModeValue('orange.100', 'white'),
      }}
      fontWeight='700'>
          {children}
    </Link>;
}

export const Menu: React.FC = () => {


    return <Center color="main.200">
        <Stack direction="row" spacing={20}>

            <MenuLink>ACTIVITÉS</MenuLink>
            <MenuLink>CLUB</MenuLink>
            <MenuLink>BLOG</MenuLink>

        </Stack>
    </Center>


}