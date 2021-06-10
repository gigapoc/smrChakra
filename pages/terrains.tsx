import { WarningTwoIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Box, Center, Container, Flex, Text, VStack } from "@chakra-ui/layout"
import { Title } from "@components/title";
import { NextSeo } from 'next-seo';

interface Props {

}

const Terrains: React.FC<Props> = ({}) => {

    return <>
        <NextSeo
        title="Les terrains du SMR"
        description="Découvrez nos terrains d'entraînement !"
        />
        <Box bg="main.100" minH="calc(100vh - 100px)" color="main.200">
            <Container maxW="container.xl">
                <Center m='auto' my={10} p={2} pt={5} border="2px solid orange" borderRadius="2xl" textAlign="center" flexDirection="column" w="50%" >
                    <WarningTwoIcon w="30px" h="30px" color='main.300' mb={5}/>
                    <Text fontSize="md" fontWeight="bold">
                        L'accès aux terrains est strictement réservé aux membres du club.
                        <br/>
                        Si vous désirez nous rendre visite, veuillez appeler le président du club au 06.73.50.68.84
                    </Text>
                </Center>
                <VStack spacing="90px" mb={40}>
                    
                    <Box w="100%">
                        <Center><Title fontSize="2xl">Corbeil-Essonnes</Title></Center>
                        <Flex flexDirection="row" mx={10} mt={10}>
                            <Box flexGrow={1} w="50%">
                                {/* <Image 
                                    src="/images/entreeClubSmr.png"
                                    w="450px"
                                /> */}
                                <div className="divEmbed1">
                                    <div id="canvasfor-googlemap">
                                        <iframe src="https://www.google.com/maps/embed/v1/place?q=48.600883,+2.455222&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&zoom=13" />
                                    </div>
                                </div>
                            </Box>
                            <Box flexGrow={1} ml={10} my='auto' w="50%">
                                <Text textAlign="left" >

                                    Stade Robinson
                                    <br/>
                                    91100 Corbeil-Essonnes
                                    <br/>
                                    <br/>
                                    Accès: D26, N7
                                    <br/>
                                    <br/>
                                    48°36'03.2"N 2°27'18.8"E
                                    <br/>
                                    48.600883, 2.455222

                                </Text>
                            </Box>
                        </Flex>
                    </Box>

                    <Box w="100%">
                        <Center><Title fontSize="2xl">Brétigny-sur-Orge (terrain secondaire)</Title></Center>
                        <Flex flexDirection="row" mx={10} mt={10}>
                            <Box flexGrow={1} mr={10} my='auto' w="50%">
                                <Text textAlign="right" >

                                    Base Aérienne 217
                                    <br/>
                                    91220 Brétigny-sur-orge
                                    <br/>
                                    <br/>
                                    Accès: D19, sortie Brétigny centre / IRBA
                                    <br/>
                                    <br/>
                                    48°35'29.1"N 2°19'42.7"E
                                    <br/>
                                    48.591428, 2.328534

                                </Text>
                            </Box>
                            <Box flexGrow={1} w="50%">
                                {/* <Image 
                                    src="/images/entreeClubSmr.png"
                                    w="450px"
                                /> */}
                                <div className="divEmbed1">
                                    <div id="canvasfor-googlemap">
                                        <iframe src="https://www.google.com/maps/embed/v1/place?q=48.591428,+2.328534&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&zoom=13" />
                                    </div>
                                </div>
                            </Box>
                        </Flex>
                    </Box>
                    
                </VStack>
            </Container>
        </Box>
    </>
}

export default Terrains;