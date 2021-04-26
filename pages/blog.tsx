import {Box, Container, Flex, Grid, GridItem} from '@chakra-ui/react'
import { GetServerSideProps } from 'next';
import Archives from '@components/blogArchives'
import axios from "axios";
import { useState } from 'react';
import BlogPreview from '@components/blogPreview';
const { connect } = require("../src/services/connect");


interface ImageFormat {
    width: number;
    height: number;
    url: string;
}

export interface Article {
    id: number,
    title: string;
    texte: string;
    dateArticle: string;
    published_at: string;
    apercu: {
        id: number;
        url: string;
        alternativeText: string;
        caption: string;
        width: number;
        height: number;
        formats: {
            thumbnail: ImageFormat;
            large: ImageFormat;
            medium: ImageFormat;
            small: ImageFormat;
        }
    }
}

interface Props {
    articles: Article[];
}

const Blog: React.FC<Props> = ({articles}) => {

    let [arts, setArts] = useState(articles);
    
    let callbackFilterMonth = (month: number) => {
        setArts(articles.filter(a => new Date(a.dateArticle).getMonth() === month))
    }

    return <Box bg="main.100" minH="calc(100vh - 100px)" h="calc(100vh - 100px)">
        <Container h="100%" maxW="container.xl">
            <Flex h="100%">
            <Box flexGrow={8} border="1px solid blue">
                <Grid templateRows="repeat(3, 1fr)"
                        templateColumns="repeat(2, 1fr)"
                        h="100%"
                        gap={6}>
                    {arts.map(a => (
                        <GridItem><BlogPreview article={a}/></GridItem>
                    ))}
                </Grid>
            </Box>
            <Box flexGrow={2}>
                <Archives dates={articles.map(a => a.dateArticle)} callbackFilterMonth={callbackFilterMonth}/>
            </Box>
                
            </Flex>
        </Container>
        
    </Box>

}

export const getServerSideProps: GetServerSideProps = async (context) => {
    //Connect
    const jwt = await connect();
    let articles = await axios
      .get(process.env.SERVER_URL + "/blog-posts", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then((value) => {
        // console.log('VALUE DATA', value.data)
        return value.data;
      })
      .catch((e) => {
        console.log("E", e);
      });
      
    return {
        props: {
            articles
        }
    }
}

export default Blog;