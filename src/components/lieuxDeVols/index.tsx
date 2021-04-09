import React from "react";
import { Box, ListItem, Text, List, ListIcon, Center, Spacer, VStack, Flex } from '@chakra-ui/react';
import { Title } from "@components/title";
import { Separator } from "@components/separator";
import Image from "next/image";

interface Props {
    h: string;
}

export const LieuxDeVols: React.FC<Props> = ({h}) => {

    return <Box bg="main.100" h={h}>
        <Center>
            <Title w="15vw">Nos lieux de vol en Essonne</Title>
        </Center>
        
        <Title w="6vw">En extérieur</Title>
        <VStack align="stretch" spacing="10px">
            <Flex justify="space-around">
                <Center flex="5"><Text color="#fff" >Acienne base aérienne 217, Brétigny-sur-orge</Text></Center>
                <Box flex="1" marginTop="10"><Separator w="9vw"/></Box>
                <Center flex="5">
                    <Image 
                        src="/entreeClubSmr.png"
                        width="100%"
                        height="100%"
                    />
                </Center>
            </Flex>
        </VStack>
    </Box>
}