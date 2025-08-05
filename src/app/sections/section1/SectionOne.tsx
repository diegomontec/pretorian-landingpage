import Image from "next/image";

const SectionOne = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Fundo mobile */}
      <div className="absolute inset-0 sm:hidden">
        <Image
          src="/assets/bg-image-section1.png"
          alt="Fundo Mobile"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Layout desktop com 2 imagens */}
      <div className="hidden sm:flex w-full h-full">
        <div className="w-1/2 h-full relative">
          <Image
            src="/assets/bg-image2-section1.png"
            alt="Fundo esquerdo"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="w-1/2 h-full relative">
          <Image
            src="/assets/bg-image-section1.png"
            alt="Fundo direito"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Conteúdo posicionado na metade direita */}
      <div className="absolute right-0 top-0 h-full w-full sm:w-1/2 flex items-center px-6 sm:px-12 lg:px-24 z-10 text-white">
        <div className="w-full max-w-xl flex flex-col gap-12 text-left">
          
          {/* Logo */}
          <div className="flex flex-col items-center">
            <div className="relative w-20 h-16 sm:w-28 sm:h-24">
              <Image
                src="/assets/icon-image-pretorian.png"
                alt="Ícone Pretorian"
                fill
                className="object-contain"
              />
            </div>
            <p style={{ fontFamily: 'AtypDisplaySemiBold' }} className="text-3xl sm:text-5xl">
              pretorian
            </p>
            <p
              style={{ fontFamily: 'AtypDisplayLight' }}
              className="text-lg sm:text-3xl text-[#d4b866] tracking-widest"
            >
              asset
            </p>
          </div>

          {/* Texto */}
          <p
            style={{ fontFamily: 'AtypDisplay' }}
            className="text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed"
          >
            Unimos a força de uma empresa que já impactou mais de <strong>R$ 2 bilhões</strong> em operações no Brasil,
            com a inteligência operacional de quem vive e entende o que é <strong>escalar negócios</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
