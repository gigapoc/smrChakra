import { Center, Flex, Image, Link } from "@chakra-ui/react";
import React from "react";

export const SocialNetworks: React.FC = () => {

    const iconStyle: React.CSSProperties = {
        fontSize: 22,
        color: "#fff",
        marginRight: "1rem",
        marginLeft: "1rem"
    };

    return (
        <Center bg="main.100" h="100%">
            <Flex >
                <Link href="https://www.instagram.com/senartmultirotorracing/" target="_blank" style={iconStyle} >
                    <Image
                        src="/icons/instagram-icon.svg"
                        // alt="instagram"
                        width="28px"
                        height="29px"
                        className={"hoverIcon"}
                    />
                </Link>
                <a
                    href="http://www.facebook.com/senartmultirotorracing"
                    target="_blank"
                    style={iconStyle}
                >
                    <Image
                    src="/icons/facebook-icon.svg"
                    // alt="facebook"
                    width="15px"
                    height="28px"
                    />
                </a>
                <a
                    href="https://www.youtube.com/channel/UC3qX1bKa-A5qpBAVtMZk2Dw"
                    target="_blank"
                    style={iconStyle}
                >
                    <Image
                    src="/icons/youtube-icon.svg"
                    // alt="youtube"
                    width="31px"
                    height="32px"
                    />
                </a>
                <a
                    href="https://discord.gg/pcrYmAr"
                    target="_blank"
                    style={iconStyle}
                >
                    <Image
                    src="/icons/discord-icon.svg"
                    // alt="discord"
                    width="35px"
                    height="35px"
                    />
                </a>


                <a
                    href="https://www.thingiverse.com/smracing/designs"
                    target="_blank"
                    style={iconStyle}
                    
                >
                    <Image
                    src="/icons/thingiverse.png"
                    // alt="thingiverse"
                    width="35px"
                    height="35px"
                    />
                </a>
            </Flex>
        </Center>
    )

}