import { GetServerSideProps } from 'next'
import axios from 'axios';
import { Center } from '@chakra-ui/layout';
const ReactMarkdownWithHtml = require('react-markdown/with-html')
const { connect } = require("../../src/services/connect");

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
      image: ({src, alt}) => {
        return <Center><img src={src} alt={alt} width={"50%"} height={"100%"} className={"image"} /></Center>
      },
      h1: ({value}) => <h1 className={"h1"}>{value}</h1>
    }

    return <Center id="content" bg="main.100" color="main.200" flexDirection="column" pt="20" minH="100vh">
      {/* <h1 className={styles.h1}>{page.titre_menu}</h1> */}
      <ReactMarkdownWithHtml children={page.contenu} renderers={renderers} allowDangerousHtml/>
    </Center>
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

    const regex = /\!\[.*\]\((.*)\)/gm;
    let contenu: string = pages[0].contenu
    contenu = contenu.replace(regex, (a,b) => a.replace(b, process.env.SERVER_URL + b))
    pages[0].contenu = contenu;

    return {
      props: {
        page: pages[0],
      }, // will be passed to the page component as props
    };
}