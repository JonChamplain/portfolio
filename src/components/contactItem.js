import Image from "next/image"
import React from "react"

export default function ContactItem({ link, image, alt }) {
  return (
    <span className="contact-item">
      <a
        className="contact-link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          width={20}
          height={20}
          className="contact-image"
          src={image}
          alt={alt}
        />
      </a>
    </span>
  )
}
