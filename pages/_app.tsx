import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from 'react'
import Head from 'next/head'
import Header from "./component/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>OralDent - Fogászat - Pomáz</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
