import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/swiper.scss";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>();
  const [mainSwiper, setMainSwiper] = useState<SwiperCore | null>();

  // useEffect(() => {
  //   console.log(thumbsSwiper);

  //   if (thumbsSwiper && mainSwiper) mainSwiper.thumbs.swiper = thumbsSwiper;
  //   console.log(mainSwiper);
  //   thumbsSwiper?.update();
  //   mainSwiper?.update();
  // }, [thumbsSwiper, mainSwiper]);

  const slides = [];
  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img
          src={`https://picsum.photos/id/${i + 1}/500/300`}
          style={{ listStyle: "none" }}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }

  const thumbs = [];
  for (let i = 0; i < 5; i += 1) {
    thumbs.push(
      <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: "none" }}>
        <img
          src={`https://picsum.photos/id/${i}/163/100`}
          alt={`Thumbnail ${i}`}
        ></img>
      </SwiperSlide>
    );
  }

  return (
    <div>
      {/* <Swiper
        id="thumbs"
        spaceBetween={5}
        slidesPerView={3}
        onInit={(swiper) => console.log(swiper)}
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
      >
        {thumbs}
      </Swiper>

      <Swiper
        id="main"
        thumbs={{ swiper: thumbsSwiper }}
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
        onInit={(swiper) => setMainSwiper(swiper)}
        onSlideChange={(swiper) => {
          console.log("Slide index changed to: ", swiper.activeIndex);
          if (thumbsSwiper) thumbsSwiper.activeIndex = swiper.activeIndex;
        }}
      >
        {slides}
      </Swiper> */}
      <h2>Gallery</h2>
    </div>
  );
};

export default Gallery;
