import { Center, Flex } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

export const SocialNetworks: React.FC = () => {

    const iconStyle: React.CSSProperties = {
        fontSize: 22,
        color: "#fff",
        marginRight: "1rem",
        marginLeft: "1rem",
    };

    return (
        <Center bg="main.100" h="100%">
            <Flex >
                <a href="https://www.instagram.com/senartmultirotorracing/" target="_blank" style={iconStyle}>
                    <Image
                    src="/icons/instagram-icon.svg"
                    alt="instagram"
                    width="28"
                    height="29"
                    />
                </a>
                <a
                    href="http://www.facebook.com/senartmultirotorracing"
                    target="_blank"
                    style={iconStyle}
                >
                    <Image
                    src="/icons/facebook-icon.svg"
                    alt="facebook"
                    width="15"
                    height="28"
                    />
                </a>
                <a
                    href="https://www.youtube.com/channel/UC3qX1bKa-A5qpBAVtMZk2Dw"
                    target="_blank"
                    style={iconStyle}
                >
                    <Image
                    src="/icons/youtube-icon.svg"
                    alt="youtube"
                    width="31"
                    height="32"
                    />
                </a>
                <a
                    href="https://discord.gg/pcrYmAr"
                    target="_blank"
                    style={iconStyle}
                >
                    <Image
                    src="/icons/discord-icon.svg"
                    alt="discord"
                    width="35"
                    height="35"
                    />
                </a>
            </Flex>
        </Center>
    )

}