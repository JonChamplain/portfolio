import React, { useEffect, useState } from "react"
import { PortfolioItem } from "../components"
import { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/bundle"
import { portfolioData } from "../lib/portfolioData"

export default function PortfolioSection({ portfolioRef }) {
  const [portfolioItems, setPortfolioItems] = useState([])

  useEffect(() => {
    const portfolioItemsArray = portfolioData.map((item) => (
      <SwiperSlide key={item.id}>
        <PortfolioItem
          link={item.link}
          image={item.image}
          alt={item.alt}
          text={item.text}
        />
      </SwiperSlide>
    ))
    setPortfolioItems(portfolioItemsArray)
  }, [])

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
        initialSlide={1}
        breakpoints={{
          750: {
            initialSlide: 3,
            slidesPerView: 3,
          },
        }}
      >
        {portfolioItems}
      </Swiper>
    </section>
  )
}
