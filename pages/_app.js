/*!

=========================================================
* NextJS Material Kit PRO v1.3.1 based on Material Kit PRO - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit PRO React v1.8.0
=========================================================

* Product Page: https://novellogiks.com/product/ct-novel-logiks
* Copyright 2022 Sunil (https://novellogiks.com)

* Coded by Sunil

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";

import PageChange from "/components/PageChange/PageChange.js";
import "../styles/scss/witty-geek-bytes.scss";
import "/styles/css/react-demo.css";
import "animate.css/animate.min.css";

let theme = createTheme({
  components: {
    MuiSelect: {
      defaultProps: {
        variant: "standard",
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: "#fff !important",
          },
        },
      },
    },
    // MuiTypography: {
    //   h1: {
    //     fontSize: 53,
    //     [theme.breakpoints.down("sm")]: {
    //       fontSize: 40,
    //     },
    //   },
    // },
  },
});

theme = createTheme(theme, {
  MuiTypography: {
    h1: {
      fontSize: '2.5rem',
      [theme.breakpoints.down("sm")]: {
        fontSize: '1.5rem',
      },
    },
  },
});

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

export default class MyApp extends App {
  
  componentDidMount() {
    let comment = document.createComment(`

=========================================================
* NextJS Material Kit PRO v1.3.1 based on Material Kit PRO - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit PRO React v1.8.0
=========================================================

* Product Page: https://novellogiks.com/product/novel-logiks
* Copyright 2022 Sunil (https://novellogiks.com)

* Coded by Sunil

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

`);
  
    document.insertBefore(comment, document.documentElement);
  }
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await MyApp.getInitialProps(ctx);
    }
    
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    
    return (
      <React.Fragment>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {/* <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE" /> */}
          <title>Witty Geek Bytes | Learn. Build. Get Mentored. Succeed</title>
        </Head>
        <ThemeProvider theme={theme}>
          <StyledEngineProvider injectFirst>
            <Component {...pageProps} />
          </StyledEngineProvider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
