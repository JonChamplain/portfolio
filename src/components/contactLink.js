import React from "react"

export default function ContactLink({ text, link, linkText }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="text-xl md:text-3xl font-bold font-livvic">
        <span className="text-gray-500">{text}: </span>
        {linkText}
      </div>
    </a>
  )
}
