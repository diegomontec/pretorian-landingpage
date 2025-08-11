import Carrossel from "@/components/Carrossel";

const SectionThree = () => {
  return (
    <div className=" bg-gradient-to-b from-[#1A2028] to-[#233446] text-white ">
      <div className="sm:max-w-7xl mx-auto flex flex-col items-center py-20 px-6 sm:px-12 lg:px-24 text-center gap-10">
        
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
        <div className="w-full max-w-2xl flex justify-center">
          <a
            href="#forms-bitrix"
            className="bg-[#e0c578] text-[#0F1926] cursor-pointer text-base sm:text-xl px-3 sm:px-8 py-4 rounded-full hover:brightness-110 transition"
            style={{fontFamily: 'AtypDisplaySemiBold'}}
          >
            Entre em contato com um especialista
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
