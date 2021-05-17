import React, {useState} from "react";
import { ChakraProvider, Flex, Box } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import "@styles/global.scss";
import "@styles/page.scss";
import "@styles/fullcalendar.scss";
import "@fontsource/quicksand/400.css"
import "@fontsource/quicksand/600.css"
import { Header } from "@components/header";
import axios from "axios";
const { connect } = require("../src/services/connect");
import 'focus-visible/dist/focus-visible'
import Head from "next/head"
// import "@fullcalendar/common/main.min.css";
// import "@fullcalendar/daygrid/main.min.css";

interface AppProps {
  Component: React.ComponentClass;
  pageProps: any;
  pages: {
    titre_menu: string;
    url: string;
    contenu: string;
    order: number;
  }[];
}



function MyApp({ Component, pageProps, pages }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>{Component.name}</title>
    </Head>
    <ChakraProvider theme={theme}>
      <Flex direction="column" minH="100vh">
        <Box position="relative" top="100px" bg="main.100">
          <Component {...pageProps} />
        </Box>
        <Header pages={pages} />
      </Flex>
    </ChakraProvider>
  </>;
}

MyApp.getInitialProps = async () => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  // const appProps = await App.getInitialProps(appContext);
  //Connect
  const jwt = await connect();
  let pages = await axios
    .get(process.env.SERVER_URL + "/pages", {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then((value) => {
      return value.data;
    })
    .catch((e) => {
      console.log("E", e);
    });


  return { pages }
}

export default MyApp;
