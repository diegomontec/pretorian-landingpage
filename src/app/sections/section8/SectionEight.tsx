const SectionEight = () => {
  return (
    <div className="w-full bg-[#1A2028] text-white py-20 px-6 sm:px-12 lg:px-64 flex flex-col items-center justify-center gap-32">
      
      {/* Missão e Visão */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 w-full">
        <div className="text-left flex flex-col gap-4 flex-1">
          <p style={{ fontFamily: 'AtypDisplayBold' }} className="text-xl sm:text-2xl">Missão</p>
          <div className="w-16 h-[2px] bg-[#e0c578]" />
          <p className="text-base sm:text-xl" style={{ fontFamily: 'AtypDisplayLight' }}>
            Ajudar nossos clientes a prosperar por meio de soluções contábeis estratégicas, impactando
            positivamente seus resultados e contribuindo para o desenvolvimento da sociedade.
          </p>
        </div>

        <div className="text-left flex flex-col gap-4 flex-1">
          <p style={{ fontFamily: 'AtypDisplayBold' }} className="text-xl sm:text-2xl">Visão</p>
          <div className="w-16 h-[2px] bg-[#e0c578]" />
          <p className="text-base sm:text-xl" style={{ fontFamily: 'AtypDisplayLight' }}>
            Transformar 1.000 empresas em negócios prósperos até 2030, promovendo crescimento sustentável com excelência técnica e inovação.
          </p>
        </div>
      </div>

      {/* Valores com GRID */}
      <div className="flex flex-col gap-12 text-white">
        <p style={{ fontFamily: 'AtypDisplayBold' }} className="text-2xl sm:text-3xl">Valores</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full max-w-3xl">
          <div className="w-full border border-[#e0c578] px-8 py-2 text-base sm:text-xl rounded-4xl text-center">
            <p style={{ fontFamily: 'AtypDisplayLight' }}>+ Transparência</p>
          </div>
          <div className="w-full border border-[#e0c578] px-8 py-2 text-base sm:text-xl rounded-4xl text-center">
            <p style={{ fontFamily: 'AtypDisplayLight' }}>+ Comprometimento</p>
          </div>
          <div className="w-full border border-[#e0c578] px-8 py-2 text-base sm:text-xl rounded-4xl text-center">
            <p style={{ fontFamily: 'AtypDisplayLight' }}>+ Alta performance</p>
          </div>
          <div className="w-full border border-[#e0c578] px-8 py-2 text-base sm:text-xl rounded-4xl text-center">
            <p style={{ fontFamily: 'AtypDisplayLight' }}>+ Especialização</p>
          </div>
          <div className="w-full border border-[#e0c578] px-8 py-2 text-base sm:text-xl rounded-4xl text-center">
            <p style={{ fontFamily: 'AtypDisplayLight' }}>+ Inovação</p>
          </div>
          <div className="w-full border border-[#e0c578] px-8 py-2 text-base sm:text-xl rounded-4xl text-center">
            <p style={{ fontFamily: 'AtypDisplayLight' }}>+ Responsabilidade</p>
          </div>
        </div>
      </div>

      {/* Botão */}
      <a href="https://pretorian.net.br/">
        <button
          style={{ fontFamily: "AtypDisplay" }}
          className="bg-[#e0c578] text-[#0F1926] cursor-pointer font-semibold text-base sm:text-lg px-6 py-3 rounded-full hover:brightness-110 transition"
        >
          Acesse o site da Pretorian Contabilidade
        </button>
      </a>
    </div>
  );
};

export default SectionEight;
