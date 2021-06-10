import { Box, Center, Square } from "@chakra-ui/react";
import { Separator } from "@components/separator";
import React from "react";

interface Props {
    // w: string;
    fontSize: string;
}

export const Title: React.FC<Props> = ({children, fontSize}) => {
    return <Box color="main.200" fontWeight="bold"  fontSize={fontSize}>
        <Center>{children}</Center>
        <Center><Separator w="70%"/></Center>
    </Box>
}