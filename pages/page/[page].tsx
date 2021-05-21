import { GetServerSideProps } from 'next'
import axios from 'axios';
import { Center, Box, Container } from '@chakra-ui/layout';
const { connect } = require("../../src/services/connect");
import { NextSeo } from 'next-seo';

interface PageProps {
  page: {
    titre_menu: string;
    url: string;
    order: number;
    contenu: string;
  };
}

export default function Page({page}: PageProps) {
    const renderers = {
      h1: ({value}) => <h1 className={"h1"}>{value}</h1>
    }

    return <>
      <NextSeo
      title={page.titre_menu}
      description="Toutes les dates clés du Sénart Multirotor Racing !"
      />
      <Container maxW="container.xl" bg="main.100">
        <Box id="content" bg="main.100" color="main.200" flexDirection="column" pt="20" minH="100vh">
          {/* <h1 className={styles.h1}>{page.titre_menu}</h1> */}
          <div dangerouslySetInnerHTML={{__html: page.contenu}} className="ck-content" />
        </Box>
      </Container>
    </>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    //Connect
    const jwt = await connect();
    let pages = await axios
      .get(process.env.SERVER_URL + "/pages/" + context.params.page, {
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

    const regex = /src=\"([^http].*?)\"/gm;
    let contenu: string = pages[0].contenu
    contenu = contenu.replace(regex, (a,b) => {console.log('a', a, b); return a.replace(b, process.env.SERVER_URL + b)})
    pages[0].contenu = contenu;

    return {
      props: {
        page: pages[0],
      }, // will be passed to the page component as props
    };
}