import React from "react"

export default function AboutSection({ aboutRef }) {
  return (
    <section
      className="container mx-auto flex-column-center px-8 pt-8"
      ref={aboutRef}
    >
      <h1 className="mt-10">I&apos;m Jon.</h1>
      <p className="subtitle">a web developer</p>
      <img className="mb-24" src={"/jon-character-circle.png"} alt="profile" />
      <div className="text-block">
        <p>I&apos;m a web developer based in Burlington, Vermont.</p>
        <br />
        <p>
          I&apos;m passionate about building beautiful and functional technology.
        </p>
      </div>
    </section>
  )
}
