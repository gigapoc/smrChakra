import React from "react";
import {Image} from "@chakra-ui/react";

export const Logo: React.FC = () => {
  return (
    <Image src="/images/logoSMRnoBack.png" alt="nextjs" width={{md: "193", sm: "100"}} height={{md: "100", sm: "70"}}/>
  );
};
