import React from "react"
import { PortfolioItem } from "../components"
import { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/bundle"

export default function PortfolioSection({ portfolioRef }) {
  return (
    <section className="" ref={portfolioRef}>
      <p className="subtitle">here are some websites I've worked on</p>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        className="min-w-0"
      >
        <SwiperSlide>
          <PortfolioItem
            link="https://sleepy-anchorage-59081.herokuapp.com/"
            image="/mockblog_thumbnail.jpg"
            alt="mock blog project link"
            text="Mock Blog"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioItem
            link="https://secure-fjord-65417.herokuapp.com/"
            image="/yelpington_thumbnail.jpg"
            alt="yelpington project link"
            text="Yelpington"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioItem
            link="https://stark-plateau-02827.herokuapp.com/"
            image="/triptactoe_thumbnail.jpg"
            alt="trip-tac-toe game link"
            text="Trip-Tac-Toe"
          />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioItem
            link="https://github.com/JonChamplain?tab=repositories"
            image="/github_thumbnail.jpg"
            alt="github link"
            text="Github"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
