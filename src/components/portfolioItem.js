import React from "react"
import Image from "next/image"

export default function PortfolioItem({ link, image, alt, text }) {
  return (
    <a
      className="portfolio-link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        className="portfolio-image mb-3"
        layout="intrinsic"
        width={1000}
        height={500}
        src={image}
        alt={alt}
      />
      <span className="text-gray-600">{text}</span>
    </a>
  )
}
