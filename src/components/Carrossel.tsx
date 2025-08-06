'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
  { id: '1', image: '/assets/image-carrossel/image-1-AAI.png', title: 'slide1'},
  { id: '2', image: '/assets/image-carrossel/image-2-corretora.png', title: 'slide2'},
  { id: '3', image: '/assets/image-carrossel/image-3-adminis.png', title: 'slide3'},
  { id: '4', image: '/assets/image-carrossel/image-4-banco.png', title: 'slide4'},
  { id: '5', image: '/assets/image-carrossel/image-5-gestora.png', title: 'slide5'},
  { id: '6', image: '/assets/image-carrossel/image-6-corretora.png', title: 'slide6'},
]
const Carrossel = () => {
  return (
    <div className="w-full px-4 py-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{
          dynamicBullets: true,
        }}
        loop
        className="w-full h-[300px]"
        slidesPerView={1}
        spaceBetween={1}
        breakpoints={{
          320: {
            slidesPerView:1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-[300px] rounded-xl overflow-hidden group">
              <Image
                src={item.image}
                alt={`Imagem ${item.id}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrossel;
