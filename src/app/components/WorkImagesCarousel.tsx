'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import './WorkImagesCarousel.scss';

const images = [
  '/images/works/w1.jpg',
  '/images/works/w2.jpg',
  '/images/works/w3.jpg',
  '/images/works/w4.jpg',
  '/images/works/w6.jpg',
  '/images/works/w7.jpg',
  '/images/works/w8.jpg',
  '/images/works/w9.jpg',
  '/images/works/w10.jpg',
  '/images/works/w11.jpg',
  '/images/works/w12.jpg',
  '/images/works/w13.jpg',
  '/images/works/w14.jpg',
];

export default function WorkImagesCarousel() {
  return (
    <div className="image-carousel">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={15}
        slidesPerView={1.2}
        navigation
        loop
        autoplay={{ delay: 3000 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="carousel-image-wrapper">
              <Image
                src={src}
                alt={`Image ${i + 1}`}
                width={500}
                height={300}
                className="carousel-image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
