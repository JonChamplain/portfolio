import Image from "next/image"
import React from "react"

export default function AboutSection({ aboutRef }) {
  return (
    <section
      className="container mx-auto flex-column-center px-8 pt-8"
      ref={aboutRef}
    >
      <h1 className="font-handwriting mt-10">I&apos;m Jon.</h1>
      <p className="subtitle">a web developer</p>
      <div className="mb-24">
        <Image
          width={261}
          height={261}
          src={"/jon-character-circle.png"}
          alt="profile"
        />
      </div>

      <div className="text-block">
        <p>I&apos;m a web developer based in Burlington, Vermont.</p>
        <br />
        <p>I love building beautiful and functional technology.</p>
      </div>
    </section>
  )
}
