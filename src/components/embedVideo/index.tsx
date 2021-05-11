import { AspectRatio, Box } from '@chakra-ui/react'
import React from 'react'

interface Props {
    height: string;
}

export const EmbedVideo: React.FC<Props> = ({height}) => {

    return <Box h={height} width={"100%"} mt={1}>
        <AspectRatio maxH={height} >
            <video controls autoPlay muted height={height} >
                <source src="videoOut.webm" type="video/webm"/>
            </video>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/qtZ9NxpUN2o?controls=0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe> */}
        </AspectRatio>
    </Box>

}