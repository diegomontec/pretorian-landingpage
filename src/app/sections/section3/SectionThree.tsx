import Carrossel from "@/components/Carrossel";

const SectionThree = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#1A2028] to-[#233446] text-white py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-10">
        
        {/* Título e subtítulo */}
        <div className="flex flex-col gap-6 max-w-3xl">
          <h2 style={{fontFamily: 'AtypDisplaySemiBold'}} className="sm:text-left text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
            A inteligência da operação começa com estratégia e se concretiza com uma execução contábil e financeira de ponta a ponta
          </h2>
          <p style={{fontFamily: 'AtypDisplay'}} className="sm:text-left text-white/80 mt-4 text-sm sm:text-xl">
            Um portfólio de serviços completos desenhados para atender a alta exigência do mercado financeiro.
          </p>
        </div>

        {/* Carrossel de ícones (cards) */}
        <div className="w-full">
          <Carrossel />
        </div>

        {/* Botão */}
        <div>
          <a
            href="https://wa.me/5515997705571"
            className="bg-[#e0c578] text-[#0F1926] font-semibold text-base sm:text-lg px-6 py-3 rounded-full transition duration-300 hover:brightness-110"
            style={{fontFamily: 'AtypDisplay'}}
          >
            Entre em contato pelo WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
