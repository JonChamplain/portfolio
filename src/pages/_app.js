import React from "react"
import Head from "next/head"
import "../styles/global.scss"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jon Russell - A Web Developer</title>
        <meta
          name="description"
          content="I'm a web developer based in Burlington, Vermont"
          lang="en"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="App">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
