import React from "react";
import {Image} from "@chakra-ui/react";

export const Logo: React.FC = () => {
  return (
    <Image src="/images/logoSMRnoBack.png" alt="nextjs" width={{md: "193px", sm: "85px"}} height={{md: "100px", sm: "45px"}} pos={{sm: "relative"}} top={{sm: "0"}}/>
  );
};
