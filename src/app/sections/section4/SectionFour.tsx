import Image from "next/image";

const SectionFour = () => {
  return (
    <div className="relative w-full min-h-[500px] sm:min-h-screen bg-[#0F1926] overflow-hidden flex items-center justify-center px-10 py-24 sm:px-12 lg:px-24">
      
      {/* Imagem de fundo com logos embutidas */}
      <Image
        src="/assets/bg-image-section4.png"
        alt="Fundo da seção com logos"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Conteúdo sobreposto */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 w-full">
        
        {/* Bloco com imagem e texto */}
        <div className="relative w-full max-w-2xl  shadow-xl rounded-4xl overflow-hidden">
          
          {/* Imagem do CEO */}
          <Image
            src="/assets/image-ceo-section4.png"
            alt="Antônio Dias"
            width={600}
            height={800}
            className="w-full h-auto object-cover sm:h-[600px] "
            priority
          />

          {/* Texto sobreposto — apenas no desktop */}
          <div className="hidden sm:block absolute bottom-6 text-center left-1/2 -translate-x-1/2 bg-[#0F1926]/90 text-white rounded-2xl px-6 py-4 text-sm sm:text-[20px] leading-relaxed w-[90%] sm:w-[80%] max-w-2xl shadow-md">
            <p style={{fontFamily:'AtypDisplay'}}>
              Sob a visão e experiência de <strong>Antonio Dias</strong>, que soma mais de 15 anos em multinacionais
              e BPOs estratégicos, traz para a Pretorian Asset uma contabilidade inovadora e
              superior para o mercado financeiro e capitais.
            </p>
          </div>
        </div>

        {/* Texto fora da imagem — apenas no mobile */}
        <div className="sm:hidden bg-[#111827] sm:text-2xl text-white rounded-2xl px-6 py-4 leading-relaxed w-full max-w-xl shadow-md">
          <p>
            Sob a visão e experiência de <strong>Antônio Dias</strong>, que soma mais de 15 anos em multinacionais
            e BPOs estratégicos, traz para a Pretorian Asset uma contabilidade inovadora e
            superior para o setor financeiro.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
