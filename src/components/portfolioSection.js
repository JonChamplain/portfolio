import React from "react"
import { PortfolioItem } from "../components"

export default function PortfolioSection({ portfolioRef }) {
  return (
    <section className="flex-column-center" ref={portfolioRef}>
      <p className="subtitle">here are some websites I've worked on</p>
      <PortfolioItem
        link="https://sleepy-anchorage-59081.herokuapp.com/"
        image="/mockblog_thumbnail.jpg"
        alt="mock blog project link"
        text="Mock Blog"
      />
      <PortfolioItem
        link="https://secure-fjord-65417.herokuapp.com/"
        image="/yelpington_thumbnail.jpg"
        alt="yelpington project link"
        text="Yelpington"
      />
      <PortfolioItem
        link="https://stark-plateau-02827.herokuapp.com/"
        image="/triptactoe_thumbnail.jpg"
        alt="trip-tac-toe game link"
        text="Trip-Tac-Toe"
      />
      <PortfolioItem
        link="https://github.com/JonChamplain?tab=repositories"
        image="/github_thumbnail.jpg"
        alt="github link"
        text="Github"
      />
    </section>
  )
}
