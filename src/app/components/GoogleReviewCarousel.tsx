'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './GoogleReviewCarousel.scss';

const reviews = [
  {
    name: 'Edinei Izidoro',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjWbzWYzsLsyh4OkkJRhKF4_GZUQGG3xtAgpvkcMcYNrKi3kt13vyw=w60-h60-p-rp-mo-br100',
    rating: 5,
    comment: 'Serviço muito bem feito e ótima qualidade, recomendo!!',
    date: 'Jan, 2024',
  },
  {
    name: 'Matheus Bernardo',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjXkTUsd_lkH-ApPxUMi-cLdHO_f9GRglrXc_8pIEwT6-5mYrJBl=w60-h60-p-rp-mo-br100',
    rating: 5,
    comment: 'Produtos de qualidade e pode ter certeza que confiabilidade tem de sobra.',
    date: 'Jan 2024',
  },
  {
    name: 'Diego Teodoro Silva',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjWGsyJBg01cML251EhfF-uNiAsmBAV3qKbPU_h61PWB6FjlF-FaYg=w60-h60-p-rp-mo-ba3-br100',
    rating: 5,
    comment: 'Excelente serviço, atendimento e pontualidade. Extremamente profissionais. Recomendadííííssssiiiimo.',
    date: 'Jan 2024',
  },
  {
    name: 'Leandro olegario oficial',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjWEOGWo2IKIKwfB5spc8y2gPS_05i8TqkIszc9lYG4pKIdgI4yM=w60-h60-p-rp-mo-br100',
    rating: 5,
    comment: 'Melhor qualidade da cidade, ótima estrutura, e o melhor serviço à disposição da população',
    date: 'Jan 2024',
  },
  {
    name: 'Alyne De Paula',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjVXsl5O7VV4Ar1NZumKuQSOoUVRimbjWyzIfGY44MszCdVoR7UW=w60-h60-p-rp-mo-br100',
    rating: 5,
    comment: 'Ótimo atendimento, material e serviços de ótima qualidade!!',
    date: 'Jan 2024',
  },
  {
    name: 'livia ramos',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjUGBIs3Q7tsqSkHFx9JdVWuUQjHIozgD0Jf9H9Vxky-lWW9JXc=w60-h60-p-rp-mo-br100',
    rating: 5,
    comment: 'Excelente trabalho e profissional!Super indico e recomendo! 🙏🏼',
    date: 'Jan 2024',
  },
];

export default function GoogleReviewCarousel() {
  return (
    <div className="review-carousel">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1.2}
        navigation
        loop
        autoplay={{ delay: 4000 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="review-card">
              <div className="review-header">
                <img src={review.avatar} alt={review.name} className="avatar" />
                <div>
                  <p className="name">{review.name}</p>
                  <p className="stars">{'⭐'.repeat(review.rating)}</p>
                </div>
              </div>
              <p className="comment">{review.comment}</p>
              <p className="date">{review.date}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
