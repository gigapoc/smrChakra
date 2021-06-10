import { Image } from "@chakra-ui/image"
import { Box, Grid, Center, Link, Text, Container } from "@chakra-ui/layout"
import { NextSeo } from 'next-seo';

interface Props {
    
}

const Partenaires: React.FC<Props> = () => {
    return <>
        <NextSeo
        title="Nos partenaires"
        description="Découvrez nos partenaires !"
        />
        <Box bg="main.100" minH="calc(100vh - 100px)">
            <Container maxW="container.xl">
            <Center py="7%" flexDirection="column">
                <Text color="main.200" pb="10">Merci à tous nos partenaires</Text>
                <Grid templateColumns={{sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4,1fr)"}} 
                        gap={20}
                        h="70%"
                        >
                    
                    <Center>
                        <Link href="https://www.corbeil-essonnes.fr/">
                            <Image src="/images/Logo_Corbeil-Essonnes.png" w="200px"/>
                        </Link>
                    </Center>

                    <Center>
                        <Link href="https://www.grandparissud.fr/">
                            <Image src="/images/gps.png" w="200px"/>
                        </Link>
                    </Center>

                    <Center>
                        <Link href="https://www.bretigny91.fr/">
                            <Image src="/images/LOGO-BRETIGNY.png" w="200px"/>
                        </Link>
                    </Center>

                    <Center>
                        <Link href="https://www.coeuressonne.fr/">
                            <Image src="/images/logo_coeuressone.png" w="200px"/>
                        </Link>
                    </Center>
                    
                    <Center>
                        <Link href="https://www.essonne.fr/">
                            <Image src="/images/Logo_Essonne.jpg" w="200px"/>
                        </Link>
                    </Center>

                    

                    <Center>
                        <Link href="https://dronesparisregion.com/">
                            <Image src="/images/logo-cluster-drones.png" w="200px"/>
                        </Link>
                    </Center>

                    

                    

                    

                    <Center>
                        <Link href="https://www.ffam.asso.fr/">
                            <Image src="/images/logoFFAM.png" w="200px"/>
                        </Link>
                    </Center>

                    <Center>
                        <Link href="http://lamif.ffam.asso.fr/">
                            <Image src="/images/logo-LAM-IF.png" w="200px"/>
                        </Link>
                    </Center>
                </Grid>
            </Center>
            </Container>
            
        </Box>
        <Box display={{sm: "block", md: 'none'}} h={"70px"}/>
    </>
}

export default Partenaires;