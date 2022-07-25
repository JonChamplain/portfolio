import React from "react"
import { PortfolioItem } from "../components"
import { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/bundle"
import { portfolioItems } from "../lib/portfolioItems"

export default function PortfolioSection({ portfolioRef }) {
  return (
    <section className="mb-20 lg:mb-48" ref={portfolioRef}>
      <p className="subtitle">Here are some websites I&apos;ve worked on:</p>
      <Swiper
        centeredSlides={true}
        className="min-w-0"
        loop={true}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        roundLengths={true}
        spaceBetween={1}
        speed={500}
        slidesPerView={1}
        breakpoints={{
          750: {
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
