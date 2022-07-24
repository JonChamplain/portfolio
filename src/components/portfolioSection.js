import React from "react"
import { PortfolioItem } from "../components"
import { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/bundle"
import { portfolioItems } from "../lib/portfolioItems"

export default function PortfolioSection({ portfolioRef }) {
  return (
    <section className="" ref={portfolioRef}>
      <p className="subtitle">here are some websites I&apos;ve worked on</p>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={1}
        slidesPerView={1}
        navigation
        centeredSlides={true}
        pagination={{ clickable: true }}
        className="min-w-0"
        roundLengths={true}
        loop={true}
        speed={500}
        breakpoints={{
          620: {
            slidesPerView: 3,
          },
        }}
      >
        {portfolioItems.map((item) => (
          <SwiperSlide key={item.id}>
            <PortfolioItem
              link={item.link}
              image={item.image}
              alt={item.alt}
              text={item.text}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
