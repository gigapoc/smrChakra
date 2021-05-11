import {Box, Container, Flex, Grid, GridItem} from '@chakra-ui/react'
import { GetServerSideProps } from 'next';
import Archives from '@components/blogArchives'
import axios from "axios";
import { useState } from 'react';
import BlogPreview from '@components/blogPreview';
import Pagination from "@choc-ui/paginator";
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
    views: number;
}

interface Props {
    articles: Article[];
}

const ARTICLES_PER_PAGE = 4;

const Blog: React.FC<Props> = ({articles}) => {

    function paginate(array, page_size, page_number) {
        // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
        return array.slice((page_number - 1) * page_size, page_number * page_size);
    }

    let [page, setPage] = useState(1);

    let [arts, setArts] = useState(paginate(articles.sort((a, b) => {if (new Date(a.dateArticle).getTime() > new Date(b.dateArticle).getTime()) return -1; return 1}), ARTICLES_PER_PAGE, page));
    let [isArtsFiltered, setIsArtsFiltered] = useState(false)
    
    let callbackFilterMonth = (date: string) => {
        let month = +date.split(' ')[0]
        let year = +date.split(' ')[1]
        let arts = articles.filter(a => new Date(a.dateArticle).getMonth() === month && new Date(a.dateArticle).getFullYear() === year).sort((a, b) => {if (new Date(a.dateArticle).getTime() > new Date(b.dateArticle).getTime()) return -1; return 1})
        
        setArts(arts)
        setPage(1);
        setIsArtsFiltered(true);
    }

    let unfilterArts = () => {
        let arts = articles.sort((a, b) => {if (new Date(a.dateArticle).getTime() > new Date(b.dateArticle).getTime()) return -1; return 1})
        setArts(arts);
        setIsArtsFiltered(false);
        setPage(1);
    }

    // let nbRows = ARTICLES_PER_PAGE / 2;

    return <Box bg="main.100" minH="calc(100vh - 100px)" h="calc(100vh - 100px)">
        <Container h="100%" maxW="container.xl">
            <Flex h="90%" w="full">
                <Flex flexGrow={8} w="full" flexDir="column">
                    <Grid templateRows={"repeat(2, 1fr)"}
                            templateColumns="repeat(2, 1fr)"
                            // h="100%"
                            gap={6}
                            p={6}
                            py={30}
                            flexGrow={8}
                            >
                        {paginate(arts, ARTICLES_PER_PAGE, page).map(a => (
                            <GridItem><BlogPreview article={a}/></GridItem>
                        ))}
                    </Grid>
                    <Flex flexGrow={1} w="full" alignItems="center" justifyContent="center">
                        <Pagination 
                            paginationProps={{ display: "flex" }}
                            defaultCurrent={1}
                            colorScheme="yellow"
                            current={page}
                            total={((isArtsFiltered ? arts.length : articles.length) / ARTICLES_PER_PAGE) * 10}
                            onChange={(page) => {setPage(page); setArts(articles.sort((a, b) => {if (new Date(a.dateArticle).getTime() > new Date(b.dateArticle).getTime()) return -1; return 1}))}}
                        />
                    </Flex>
                    
                </Flex>
                <Box flexGrow={2}>
                    <Archives dates={articles.map(a => a.dateArticle)} callbackFilterMonth={callbackFilterMonth} resetFilter={unfilterArts} isFiltered={isArtsFiltered} />
                </Box>
            </Flex>
        </Container>
        {/* <Container>
            
        </Container> */}
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