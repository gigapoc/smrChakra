import { Box, Center, Square } from "@chakra-ui/react";
import { Separator } from "@components/separator";
import React from "react";

interface Props {
    w: string;
}

export const Title: React.FC<Props> = ({children, w}) => {
    return <Box color="main.200" fontWeight="bold" w={w} >
        <Center>{children}</Center>
        <Center><Separator w="70%"/></Center>
    </Box>
}