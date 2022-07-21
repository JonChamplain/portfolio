import React from "react"

export default function PortfolioItem({ link, image, alt, text }) {
  return (
    <a
      className="portfolio-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="portfolio-image mb-3" src={image} alt={alt} />
      {/* {text} */}
    </a>
  )
}
