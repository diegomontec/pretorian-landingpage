'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
  { id: '1', image: '/assets/image-section7/image-antonioDias.png', title: 'Sócio Unidade SP' },
  { id: '2', image: '/assets/image-section7/image-andré.png', title: 'Fundador André' },
  { id: '3', image: '/assets/image-section7/image-radjalma.png', title: 'Fundador Radjalma' },
  { id: '4', image: '/assets/image-section7/image-jackson.png', title: 'Fundador Jackson' },
  { id: '5', image: '/assets/image-section7/image-philippe.png', title: 'Fundador Philippe' },
];

const CarrosselSeven = () => {
  return (
    <div className="w-full bg-[#1A2028] text-white py-20 px-4 sm:px-12 lg:px-24">
      <h2
        style={{ fontFamily: 'AtypDisplayLight' }}
        className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center max-w-3xl mx-auto"
      >
        Com <strong style={{ fontFamily: 'AtypDisplayBold' }}>20 anos</strong> de mercado, a <strong style={{ fontFamily: 'AtypDisplayBold' }}>Pretorian</strong> é referência nacional em contabilidade estratégica e performance financeira para instituições reguladas.
      </h2>

      <div className="flex flex-col items-center justify-center gap-8 mt-12">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{
            dynamicBullets: true,
          }}
          loop
          className="w-full"
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} className="flex justify-center">
              <div className="relative w-[260px] h-[385px] sm:w-[300px] sm:h-[400px] rounded-xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CarrosselSeven;
