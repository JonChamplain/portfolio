import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

export default function Work() {
   return (
     <Layout>
       <div className="foreground">
         <div className="top-container">
           <h1>Work</h1>
           <p className="subtitle">here's some stuff I've done</p>
         </div>
         <div>
           <ul className="portfolio-list-grid">
             <li className="portfolio-list-item">
               <a
                 className="portfolio-list-link"
                 href="https://sleepy-anchorage-59081.herokuapp.com/"
               >
                 <StaticImage
                   className="portfolio-list-image"
                   src="../images/mockblog_thumbnail.jpg"
                   alt="mock blog project link"
                 />
                 Mock Blog
               </a>
             </li>
             <li className="portfolio-list-item">
               <a
                 className="portfolio-list-link"
                 href="https://secure-fjord-65417.herokuapp.com/"
               >
                 <StaticImage
                   className="portfolio-list-image"
                   src="../images/yelpington_thumbnail.jpg"
                   alt="yelpington project link"
                 />
                 Yelpington
               </a>
             </li>
             <li className="portfolio-list-item">
               <a
                 className="portfolio-list-link"
                 href="https://stark-plateau-02827.herokuapp.com/"
               >
                 <StaticImage
                   className="portfolio-list-image"
                   src="../images/triptactoe_thumbnail.jpg"
                   alt="trip-tac-toe game link"
                 />
                 Trip-Tac-Toe
               </a>
             </li>
             <li className="portfolio-list-item">
               <a
                 className="portfolio-list-link"
                 href="https://github.com/JonChamplain?tab=repositories"
               >
                 <StaticImage
                   className="portfolio-list-image"
                   src="../images/github_thumbnail.jpg"
                   alt="github page link"
                 />
                 GitHub
               </a>
             </li>
           </ul>
         </div>
       </div>
     </Layout>
   );
}
