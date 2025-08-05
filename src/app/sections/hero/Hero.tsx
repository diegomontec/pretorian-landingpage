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
            src="/assets/image-pretorian-hero.png" // ajuste para o logo horizontal como na imagem
            alt="Logo Pretorian"
            fill
            className="object-contain"
          />
        </div>

        <div className="flex flex-col gap-18" >
          <h1
            className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug max-w-xl"
            style={{ fontFamily: "AtypDisplay" }}
          >
            Serviços contábeis <br /> especializados para <br /> o mercado financeiro
          </h1>

          {/* Botão */}
          <a href="#forms-bitrix">
            <button

              style={{ fontFamily: "AtypDisplay" }}
              className="bg-[#e0c578] text-[#0F1926] cursor-pointer font-semibold text-base sm:text-lg px-6 py-3 rounded-full hover:brightness-110 transition"
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
