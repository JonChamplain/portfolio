import Image from "next/image"
import React from "react"

export default function ContactItem({ link, image, alt, text, size }) {
  return (
    <span className="contact-item">
      <a
        className="contact-link flex flex-col"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          width={size === "large" ? 80 : 20}
          height={size === "large" ? 80 : 20}
          className="contact-image"
          src={image}
          alt={alt}
        />
        {text && <span>{text}</span>}
      </a>
    </span>
  )
}
