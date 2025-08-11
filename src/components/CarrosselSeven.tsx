'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Slide = {
  id: string;
  image: string;
  title: string;
};

const data: Slide[] = [
  { id: '1', image: '/assets/image-section7/image-antonioDias.png', title: 'Sócio – Unidade SP (Antonio Dias)' },
  { id: '2', image: '/assets/image-section7/image-andré.png', title: 'Fundador – André' },
  { id: '3', image: '/assets/image-section7/image-radjalma.png', title: 'Fundador – Radjalma' },
  { id: '4', image: '/assets/image-section7/image-jackson.png', title: 'Fundador – Jackson' },
  { id: '5', image: '/assets/image-section7/image-philippe.png', title: 'Fundador – Philippe' },
];

export default function CarrosselSeven() {
  return (
    <div className="w-full px-4 py-6">
      <div className="flex flex-col items-center justify-center">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          className="w-full h-[520]"
          slidesPerView={1.3}
          spaceBetween={12}
          breakpoints={{
            640: { slidesPerView: 2.4, spaceBetween:20  },
            1024: { slidesPerView: 3.4, spaceBetween:20 },
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} aria-label={item.title}>
              <figure className="relative w-full h-full rounded-4xl group overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-104"
                  priority={item.id === '1'}
                />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
