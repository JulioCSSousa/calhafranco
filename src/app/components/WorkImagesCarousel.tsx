'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import './WorkImagesCarousel.scss';

const images:Array<string> = []
for(let i=1; i<46; i++){
  images[i] =  `/images/works/w${i}.jpg`
}

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
