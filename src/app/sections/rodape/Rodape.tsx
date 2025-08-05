import Image from "next/image";

const Rodape = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#1A2028] to-[#233446] text-white py-24 px-6 sm:px-12 lg:px-24 flex flex-col sm:flex-row items-center justify-center text-center gap-2 sm:gap-4">
      
      {/* Logo */}
      <div className="relative w-20 h-16 sm:w-28 sm:h-24">
        <Image
          src="/assets/icon-image-pretorian.png"
          alt="Ícone Pretorian"
          fill
          className="object-contain"
        />
      </div>

      {/* Texto */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
        <p
          style={{ fontFamily: 'AtypDisplaySemiBold' }}
          className="text-3xl sm:text-5xl mb-6"
        >
          pretorian
        </p>
        <p
          style={{ fontFamily: 'AtypDisplayLight' }}
          className="text-lg sm:text-3xl mb-3 text-[#d4b866] tracking-widest"
        >
          asset
        </p>
      </div>
    </div>
  );
};

export default Rodape;
