import Image from "next/image";

const SectionTwo = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="relative w-full h-full flex flex-col sm:flex-row z-0">
        {/* Lado esquerdo: imagem de fundo (esconde no mobile) */}
        <div className="w-full sm:w-1/2 h-full relative">
          <div className="w-full bg-gradient-to-b from-[#1A2028] to-[#233446] text-white py-20 px-6 sm:px-12 lg:px-24">
            <Image
              src="/assets/bg-image2-section2.png"
              alt="Fundo esquerdo"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white sm:px-16 gap-12 md:px-28 z-10">
              <div className="flex items-center justify-center gap-4" >
                <h2 style={{fontFamily:'AtypDisplayBold'}} className="text-amber-50 text-3xl sm:text-4xl">Nossos Impactos</h2>
                <Image
                  src="/assets/icone-alvo-section2.png"
                  alt="Ícone Alvo"
                  width={120}
                  height={120}
                />
              </div>
              <div>
                <div>
                  <div>
                    <h2>+500</h2>
                    <h3>Empresas atendidas</h3>
                    <p>em todas as regiões do Brasil de diferentes portes e segmentos</p>
                  </div>

                  <div>
                    <h2>+6.500</h2>
                    <h3>Colaborabores Gerenciados</h3>
                    <p>Colaboradores registrados diretamente por nossos clientes</p>
                  </div>
                </div>

                <div>
                  <div>
                    <h2>+2 bilhões</h2>
                    <p>de Reais em riqueza produzidos por nossa carteira de clientes</p>
                  </div>

                  <div>
                    <h2>+20 milhões</h2>
                    <p>Recuperaos em Tributos peagos indevidamente por empresas do Brasil inteiro</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Lado direito: imagem + texto */}
        <div className="w-full sm:w-1/2 h-full relative">
          <Image
            src="/assets/bg-image-section2.png"
            alt="Fundo direito"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
