import React from "react";
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"


export default function Home() {
   return (
      <Layout>
         <div className="foreground">
         <div className="top-container">
            <h1>I'm Jon.</h1>
            <p className="subtitle">a web developer</p>
            <StaticImage
               className="jon-character"
               src="../images/jon-character-circle.png"
               alt=""
            />
         </div>
         <div className="text-block">
            <h2>I'm a web developer based in Burlington, Vermont.</h2>
            <br></br>
            <p>
               I'm passionate about building beautiful and functional technology.
            </p>
         </div>      
         </div>
      </Layout>     
   );
}
