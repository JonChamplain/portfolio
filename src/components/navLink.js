import React from "react"

export default function NavLink({ text, sectionRef }) {
  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <span
      className="nav-link font-handwriting"
      onClick={() => scrollTo(sectionRef)}
    >
      {text}
    </span>
  )
}
