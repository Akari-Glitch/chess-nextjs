import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "./components/Navbar";
import { ContentStyles } from "../styles/ContentStyles";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Chess Web</title>
        <meta
          name="description"
          content="App chess made by Atari Dev. Chess was my first game in javascript, so i decided
  to do it again, but now adding a multiplayer mode using a library. I hope you enjoy :) "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ContentStyles>
        <main>
          <Component {...pageProps} />
        </main>
        <footer></footer>
      </ContentStyles>
    </>
  );
}

export default MyApp;
