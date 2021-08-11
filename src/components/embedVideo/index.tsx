import { AspectRatio, Box, ResponsiveValue } from '@chakra-ui/react'
import React from 'react'
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

interface Props {
    height: string | ResponsiveValue<any>;
}

export const EmbedVideo: React.FC<Props> = ({height}) => {

    return <Box h={height} width={"100%"} mt={1}>
        <AspectRatio maxH={height} >
            <BrowserView>
                <video controls autoPlay muted loop height={height} >
                    <source src={"https://assets.senart-multirotor-racing.com/raider.mp4"} type="video/mp4"/>
                </video>
            </BrowserView>
            <MobileView>
                <video controls autoPlay muted height={height} >
                    <source src={"https://assets.senart-multirotor-racing.com/output_star_wars.webm"} type="video/webm"/>
                </video>
            </MobileView>
            
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/qtZ9NxpUN2o?controls=0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe> */}
        </AspectRatio>
    </Box>

}