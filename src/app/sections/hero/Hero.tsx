import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-[#0F1926] overflow-hidden">
      {/* Background pattern (se necessário) */}
      <Image
        src="/assets/bg-image-hero.png"
        alt="Fundo Hero"
        fill
        className="object-cover"
        priority
      />

      {/* Conteúdo centralizado */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 gap-10 z-10">
        {/* Logo horizontal */}
        <div className="relative w-[340px] sm:w-[500px] h-14 sm:h-16">
          <Image
            src="/assets/image-pretorian-hero.png" 
            alt="Logo Pretorian"
            fill
            className="object-contain"
          />
        </div>

        <div className="flex flex-col gap-8 sm:gap-12 md:gap-16">
          <h1
            className="text-white text-2xl sm:text-3xl md:text-4xl leading-snug max-w-2xl"
            style={{ fontFamily: "AtypDisplayBold" }}
          >
            Serviços contábeis especializados para o mercado financeiro
          </h1>

          {/* Botão */}
          <a href="#forms-bitrix">
            <button
              style={{ fontFamily: "AtypDisplay" }}
              className="bg-[#e0c578] text-[#0F1926] cursor-pointer font-semibold text-base sm:text-lg px-8 py-4 rounded-full hover:brightness-110 transition-all"
            >
              Agendar reunião
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
