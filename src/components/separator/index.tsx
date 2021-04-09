import { Square } from "@chakra-ui/react";
import React from "react";

interface Props {
    w: string;
}

export const Separator: React.FC<Props> = ({w}) => {
    return <Square w={w} h="2px" bg="orange.100" borderRadius="4px"/>
}