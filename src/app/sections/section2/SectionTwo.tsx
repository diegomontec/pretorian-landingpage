import Image from "next/image";

const SectionTwo = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col sm:flex-row bg-[#223145]">
      
      {/* Lado esquerdo com conteúdo */}
      <div className="w-full sm:w-1/2 flex items-center justify-center px-6 sm:px-12 lg:px-24 py-12 sm:py-0">
        <div className="w-full max-w-xl flex flex-col items-center gap-12 text-center">
          
          {/* Título e ícone */}
          <div className="flex items-center justify-center gap-3">
            <h2 style={{ fontFamily: 'AtypDisplayBold' }} className="text-[#e0c578] text-3xl sm:text-4xl">
              Nossos Impactos
            </h2>
            <Image
              src="/assets/icone-alvo-section2.png"
              alt="Ícone Alvo"
              width={80}
              height={80}
            />
          </div>

          {/* Bloco de dados */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-white">
            <div className="flex flex-col gap-2">
              <h2 style={{ fontFamily: 'AtypDisplaySemiBold' }} className="text-3xl text-[#e0c578]">+500</h2>
              <h3 style={{ fontFamily: 'AtypDisplaySemiBold' }} className="text-lg">Empresas atendidas</h3>
              <p style={{ fontFamily: 'AtypDisplayLight' }} className="text-sm">em todas as regiões do Brasil de diferentes portes e segmentos</p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 style={{ fontFamily: 'AtypDisplaySemiBold' }} className="text-3xl text-[#e0c578]">+6.500</h2>
              <h3 style={{ fontFamily: 'AtypDisplaySemiBold' }} className="text-lg">Colaboradores Gerenciados</h3>
              <p style={{ fontFamily: 'AtypDisplayLight' }} className="text-sm">registrados diretamente por nossos clientes</p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 style={{ fontFamily: 'AtypDisplaySemiBold' }} className="text-3xl text-[#e0c578]">+2 bilhões</h2>
              <p style={{ fontFamily: 'AtypDisplayLight' }} className="text-sm">de Reais em riqueza produzidos por nossa carteira de clientes</p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 style={{ fontFamily: 'AtypDisplaySemiBold' }} className="text-3xl text-[#e0c578]">+20 milhões</h2>
              <p style={{ fontFamily: 'AtypDisplayLight' }} className="text-sm">recuperados em tributos pagos indevidamente por empresas do Brasil inteiro</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lado direito com imagem: oculto no mobile */}
      <div className="hidden sm:block w-1/2 h-full relative">
        <Image
          src="/assets/bg-image-section2.png"
          alt="Fundo direito"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l to-transparent" />
      </div>
    </div>
  );
};

export default SectionTwo;
