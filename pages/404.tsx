import { Button } from "@chakra-ui/button";
import { Box, Center, Container, Link, Text } from "@chakra-ui/layout"

const FourOFour: React.FC = () => {
    return <Box bg="main.100" minH="calc(100vh - 100px)">
        {/* <Container maxW="container.sm"  */}
            <Center flexDirection="column" m="auto" w="40%" h="calc(100vh - 100px)" color="main.200">
                <Text fontSize="2xl" fontWeight="bold">404</Text>
                <Text>Oups, cette page n'existe pas !</Text>
                <Button onClick={() => window.location.href="/"} variant="ghost" _hover={{color: "main.100", bg: "main.200"}}>Retour à l'acceuil</Button>
            </Center>
            
        {/* </Container> */}
    </Box>
}

export default FourOFour;