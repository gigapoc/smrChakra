import { GetServerSideProps } from 'next'
import axios from 'axios';
import { Box, Text, Container, Center } from '@chakra-ui/layout';
import { Article } from 'pages/blog';
import { Image } from '@chakra-ui/image';
const ReactMarkdownWithHtml = require('react-markdown/with-html')
const { connect } = require("../../src/services/connect");

interface ArticleProps {
  article: Article;
}

export default function BlogArticle({article}: ArticleProps) {
    const renderers = {
      image: ({src, alt}) => {
        return <Image src={src} alt={alt} width={"50%"} height={"100%"} maxH="500px" objectFit="contain" className={"image"} />
      },
      h1: ({value}) => <h1 className={"h1"}>{value}</h1>
    }

    return <Container maxW="container.xl">
        <Center><Text color="main.300" fontWeight="bold" pt="20" fontSize="2xl">{article.title}</Text></Center>
        <Box id="content" bg="main.100" color="main.200" flexDirection="column" pt="20" minH="100vh">
            {/* <h1 className={styles.h1}>{Article.titre_menu}</h1> */}
            <ReactMarkdownWithHtml children={article.texte} renderers={renderers} allowDangerousHtml/>
        </Box>
    </Container>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    //Connect
    const jwt = await connect();
    let articles = await axios
      .get(process.env.SERVER_URL + "/blog-posts/" + context.params.article, {
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

    const regex = /\!\[.*\]\((.*)\)/gm;
    let contenu: string = articles.texte
    contenu = contenu.replace(regex, (a,b) => a.replace(b, process.env.SERVER_URL + b))
    articles.texte = contenu;

    return {
      props: {
        article: articles,
      }, // will be passed to the Article component as props
    };
}