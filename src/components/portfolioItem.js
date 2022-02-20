import React from "react"

export default function PortfolioItem({ link, image, alt, title }) {
  return (
    <a
      className="portfolio-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="portfolio-image" src={image} alt={alt} />
      {title}
    </a>
  )
}
