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
            <Flex justify="space-around"  flexDir={{sm: 'column', md: "row"}}>
                <Center flex="5" >
                    <Image 
                        src="/images/terrainCorbeil.jpg"
                        width={{md: "calc(50%)", sm: '100%'}}
                        objectFit="cover"
                />
                </Center>
                {/* <Center flex="1" display={{sm: "none", md: "block"}}><Box  marginTop="-5"><Separator w="9vw"/></Box></Center> */}
                <Center flex="5"><Text color="#fff" >Stade Robinson, Corbeil-Essonnes</Text></Center>
                
            </Flex>
            <Flex justify="space-around"  flexDir={{sm: 'column-reverse', md: "row"}} >
                <Center flex="5"><Text color="#fff" >Ancienne base aérienne 217, Brétigny-sur-orge</Text></Center>
                {/* <Center flex="1" display={{sm: "none", md: "block"}}><Box  marginTop="-5"><Separator w="9vw"/></Box></Center> */}
                <Center flex="5" >
                    <Image 
                        src="/images/entreeClubSmr.png"
                        width={{md: "calc(50%)", sm: '90%'}}
                        objectFit="cover"
                    />
                </Center>
            </Flex>
            
        </VStack>
        <Box display={{sm: 'block', md: "none"}} h="60px"/>
    </Box>
}