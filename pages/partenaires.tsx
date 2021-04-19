import { Image } from "@chakra-ui/image"
import { Box, Grid, Center, Link } from "@chakra-ui/layout"

interface Props {
    
}

const Partenaires: React.FC<Props> = () => {
    return <Box bg="main.100" minH="calc(100vh - 100px)">
        <Center minH="100%">
            <Grid templateColumns="repeat(4, 1fr)" 
                    gap={5}
                    py="10"
                    >
                <Center>
                    <Link href="https://www.grandparissud.fr/">
                        <Image src="/images/gps.png" w="100%"/>
                    </Link>
                </Center>

                <Center>
                    <Link href="https://www.coeuressonne.fr/">
                        <Image src="/images/logo_coeuressone.png"/>
                    </Link>
                </Center>

                <Center>
                    <Link href="https://dronesparisregion.com/">
                        <Image src="/images/logo-cluster-drones.png"/>
                    </Link>
                </Center>

                <Center>
                    <Link href="https://www.bretigny91.fr/">
                        <Image src="/images/LOGO-BRETIGNY.png"/>
                    </Link>
                </Center>

                <Center>
                    <Link href="https://www.corbeil-essonnes.fr/">
                        <Image src="/images/Logo_Corbeil-Essonnes.png"/>
                    </Link>
                </Center>

                <Center>
                    <Link href="https://www.essonne.fr/">
                        <Image src="/images/Logo_Essonne.jpg"/>
                    </Link>
                </Center>

                <Center>
                    <Link href="https://www.ffam.asso.fr/">
                        <Image src="/images/logoFFAM.png"/>
                    </Link>
                </Center>

                <Center>
                    <Link href="http://lamif.ffam.asso.fr/">
                        <Image src="/images/logo-LAM-IF.png"/>
                    </Link>
                </Center>
            </Grid>
        </Center>
    </Box>
}

export default Partenaires;