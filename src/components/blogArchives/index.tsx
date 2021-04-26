import {Flex, Box, Text, Center, VStack, Link} from "@chakra-ui/react";
import { Button } from "@components/button";

interface Propx {
    dates: string[];
    callbackFilterMonth: (date: string) => void;
}

enum Months {
    janvier,
    février,
    mars,
    avril,
    mai,
    juin,
    juillet,
    août,
    septembre,
    octobre,
    novembre,
    décembre
}
  
const Archives: React.FC<any> = ({dates, callbackFilterMonth}: Propx) => {
    
    let datesFormatted = dates.map(d => {
        let date = new Date(d);
        return Months[date.getMonth()] + " " + date.getFullYear()
    })
    
    var occurrences = { };
    for (var i = 0, j = datesFormatted.length; i < j; i++) {
        occurrences[datesFormatted[i]] = (occurrences[datesFormatted[i]] || 0) + 1;
    }
    
    let getUnformatted = (date: string) => Months[date.split(' ')[0]]

    return <Flex flexDirection="column" py="2em" h="100%">
        <Center flexGrow={1}>
            <Text color="main.200" fontWeight="bold">Archives</Text>
        </Center>
        <VStack flexGrow={9} color="main.200" spacing={5} py="10" align="center" overflow="auto">
            {Object.keys(occurrences).map(o => {
                let nb = occurrences[o];
                return <Button variant="ghost" color="orange.100" _hover={{background: "main.300", color: "main.100"}} onClick={() => callbackFilterMonth(getUnformatted(o))} >{o} ({nb})</Button>
            })}
        </VStack>
    </Flex>
};

export default Archives;