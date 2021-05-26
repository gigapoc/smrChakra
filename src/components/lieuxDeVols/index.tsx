import React from "react";
import { Box, ListItem, Text, List, ListIcon, Center, Spacer, VStack, Flex, Image } from '@chakra-ui/react';
import { Title } from "@components/title";
import { Separator } from "@components/separator";

interface Props {
    // h: string;
}

export const LieuxDeVols: React.FC<Props> = ({}) => {

    return <Box bg="main.100" my={20} >
        <Center my="10">
            <Title fontSize="1.5em">Nos lieux de vol en Essonne</Title>
        </Center>
        
        {/* <Box my="10" mx="20">
            <Title w="6vw" >En extérieur</Title>
        </Box> */}
        
        <VStack align="stretch" spacing="70px">
        <Flex justify="space-around" height="30vh">
                <Center flex="5" >
                    <Image 
                        src="/images/terrainCorbeil.jpg"
                        width="calc(50%)"
                        objectFit="cover"
                />
                </Center>
                <Center flex="1"><Box  marginTop="-5"><Separator w="9vw"/></Box></Center>
                <Center flex="5"><Text color="#fff" >Stade Robinson, Corbeil-Essonnes</Text></Center>
                
            </Flex>
            <Flex justify="space-around" height="30vh">
                <Center flex="5"><Text color="#fff" >Ancienne base aérienne 217, Brétigny-sur-orge</Text></Center>
                <Center flex="1"><Box  marginTop="-5"><Separator w="9vw"/></Box></Center>
                <Center flex="5" >
                    <Image 
                        src="/images/entreeClubSmr.png"
                        width="calc(50%)"
                        objectFit="cover"
                    />
                </Center>
            </Flex>
            
        </VStack>
    </Box>
}