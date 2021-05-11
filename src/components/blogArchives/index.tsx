import {Flex, Box, Text, Center, VStack, Link} from "@chakra-ui/react";
import { Button } from "@components/button";

interface Props {
    dates: string[];
    callbackFilterMonth: (date: string) => void;
    resetFilter: () => void;
    isFiltered: boolean
}

export enum Months {
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
  
const Archives: React.FC<any> = ({dates, callbackFilterMonth, resetFilter, isFiltered}: Props) => {
    
    let datesFormatted = dates.map(d => {
        let date = new Date(d);
        return Months[date.getMonth()] + " " + date.getFullYear()
    })

    var occurrences = { };
    for (var i = 0, j = datesFormatted.length; i < j; i++) {
        occurrences[datesFormatted[i]] = (occurrences[datesFormatted[i]] || 0) + 1;
    }
    
    let getUnformatted = (date: string) => Months[date.split(' ')[0]] + " " + date.split(" ")[1]

    return <Flex flexDirection="column" py="2em" h="100%">
        <Center flexGrow={1} display='flex' flexDirection="column">
            <Text color="main.200" fontWeight="bold">Archives</Text>
            <Button visibility={isFiltered?'visible':'hidden'} _hover={{background: "rgba(255,255,255, .5)", color: "main.100"}} onClick={() => resetFilter()}>Tous les articles</Button>
        </Center>
        <VStack flexGrow={9} color="main.200" spacing={5} py="2" align="center" overflow="auto">
            {Object.keys(occurrences).map(o => {
                let nb = occurrences[o];
                return <Button variant="ghost" color="orange.100" _hover={{background: "main.300", color: "main.100"}} onClick={() => callbackFilterMonth(getUnformatted(o))} >{o} ({nb})</Button>
            })}
        </VStack>
    </Flex>
};

export default Archives;