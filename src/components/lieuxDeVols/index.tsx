import React from "react";
import { Box, ListItem, Text, List, ListIcon, Center, Spacer, VStack, Flex, Image } from '@chakra-ui/react';
import { Title } from "@components/title";
import { Separator } from "@components/separator";

interface Props {
    h: string;
}

export const LieuxDeVols: React.FC<Props> = ({h}) => {

    return <Box bg="main.100" h={h}>
        <Center my="10">
            <Title w="15vw">Nos lieux de vol en Essonne</Title>
        </Center>
        
        <Box my="10" mx="20">
            <Title w="6vw" >En extérieur</Title>
        </Box>
        
        <VStack align="stretch" spacing="70px">
            <Flex justify="space-around" height="30vh">
                <Center flex="5"><Text color="#fff" >Ancienne base aérienne 217, Brétigny-sur-orge</Text></Center>
                <Center flex="1"><Box  marginTop="-5"><Separator w="9vw"/></Box></Center>
                <Center flex="5" >
                    <Image 
                        src="/entreeClubSmr.png"
                        width="calc(50%)"
                        objectFit="cover"
                    />
                </Center>
            </Flex>
            <Flex justify="space-around" height="30vh">
                <Center flex="5" >
                    <Image 
                        src="/terrainCorbeil.jpg"
                        width="calc(50%)"
                        objectFit="cover"
                />
                </Center>
                <Center flex="1"><Box  marginTop="-5"><Separator w="9vw"/></Box></Center>
                <Center flex="5"><Text color="#fff" >Terrain de Corbeil-Essonnes</Text></Center>
                
            </Flex>
        </VStack>
    </Box>
}