

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { assets } from '../assets/assets';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const Hero = () => {
  const slides = [
    {
      
      image: assets.carousel1,
     
    },
    {
     
      image: assets.carousel2,
      
    },
    {
    
      image: assets.carousel3,
      
    },
   
    // Add more slides here if needed
  ];

  return (
    <Swiper
    modules={[Autoplay, Pagination, Navigation]}
    loop={true}
    autoplay={{
      delay: 3000, // Delay in milliseconds
      disableOnInteraction: false, // Keep autoplay even after user interaction
    }}
    pagination={{ clickable: true }}
    navigation
    spaceBetween={20}
    slidesPerView={1}
    className="w-full"
  >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative flex flex-col items-center justify-center h-[400px] sm:h-[500px] bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
          
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
