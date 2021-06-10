import { CheckCircleIcon } from '@chakra-ui/icons';
import { Box, ListItem, Text, List, ListIcon } from '@chakra-ui/react';
import React from 'react';

interface Props {
    // h: string;
}

export const TextePresentation: React.FC<Props> = ({}) => {


    return <Box bg="main.100" color={"main.200"} py={10} >
        <Text>
            Le SMR a été créé en février 2016 avec un objectif simple : <Text color='orange.100' display="inline" fontWeight="bold">promouvoir le pilotage en immersion de multirotors dédiés à la course (FPV Racing)</Text>.
        </Text>
        <Text color="#fff">
            Cette promotion regroupe principalement trois aspects :
        </Text>
        <List px={{md: '40', sm: '0'}} spacing={5} marginTop="10">
            <ListItem>
                <ListIcon as={CheckCircleIcon} color="orange.100" />
                Accueillir les pratiquants quel que soit leur niveau, afin de créer une communauté de pilotes ayant le souhait d'échanger leurs expériences tant sur le pilotage que sur le matériel
            </ListItem>
            <ListItem>
                <ListIcon as={CheckCircleIcon} color="orange.100" />
                Inculquer les bonnes pratiques pour voler dans les meilleures conditions de sécurité pour les biens et les personnes, le tout en accord avec la règlementation 
                (respect de la masse des appareils, respect des fréquences et des puissances d'émission)
            </ListItem>
            <ListItem>
                <ListIcon as={CheckCircleIcon} color="orange.100" />
                Ouvrir l'accès à des lieux d'évolution autorisés par les pouvoirs publics
            </ListItem>
        </List>
    </Box>
}