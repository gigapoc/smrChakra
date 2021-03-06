import {  ChevronDownIcon } from "@chakra-ui/icons";
import { Center, Flex, Text } from "@chakra-ui/layout";
import React from "react";

interface Props {
    h: string;
}

export const DiscoverClub: React.FC<Props> = ({h}) => {
    return <Flex direction="column" bg="main.100" color="main.200" h={h} display={{sm: "none", md: "block"}}>
            <Center paddingTop="5" >
                <Text textAlign="center" color="orange.100">Découvrir le club</Text>
            </Center>
            <Center>
                <ChevronDownIcon color="orange.100" className="bounce"/>
            </Center>
            
        </Flex>
} 