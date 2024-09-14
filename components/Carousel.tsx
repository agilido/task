"use client";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const photos = ["/cars/1.png", "/cars/2.png", "/cars/3.png"];

export const Carousel = () => {
  return (
    <section className="pb-[2rem]">
      <div className="py-10 lg:mx-auto max-w-[18rem] md:max-w-[44rem] lg:max-w-screen-xl 2xl:max-w-screen-2xl mx-[1.5rem]">
        <Swiper
          modules={[Pagination]}
          loop={false}
          slidesPerView={2.1}
          pagination={{
            clickable: true,
          }}
          grabCursor={true}
          className="!pb-24"
          breakpoints={{
            320: {
              slidesPerView: 1.1,
              spaceBetween: 5,
            },
            425: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2.1,
              spaceBetween: 48,
            },
          }}
        >
          {photos.map((src, idx) => {
            return (
              <SwiperSlide key={src}>
                <img src={src} alt="image" key={idx} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
