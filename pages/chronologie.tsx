import { Box, Container } from "@chakra-ui/layout"

interface Props {

}

const Chronologie : React.FC<Props> = ({}) => {
    return <Box bg="main.100" minH="calc(100vh - 100px)" color="main.200">
        <Container maxW="container.xl" h="calc(100vh - 100px)">
            <iframe className="iFrameChrono"
                    src="https://lucid.app/documents/embeddedchart/71a510e6-7423-4383-a5bb-b558cf320141" id="U_xzvNpQa_j-" />
                    
        </Container>
    </Box>
}

export default Chronologie;