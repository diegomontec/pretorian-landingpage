const SectionSix = () => {
  return (
    <div className="w-full bg-[#1A2028] text-white py-20 px-6 sm:px-12 lg:px-24 flex flex-col items-center text-center gap-20">
      <h2
        style={{ fontFamily: 'AtypDisplayBold' }}
        className="text-xl sm:text-2xl lg:text-3xl font-semibold max-w-3xl"
      >
        Fale conosco e transforme sua <br />
        contabilidade em estratégia
      </h2>

      <div className="w-full max-w-6xl">
        <iframe
          src="https://b24-2u1rlh.bitrix24.site/crm_form_p6tlw/"
          title="Formulário de Contato"
          className="w-full h-[400px] sm:h-[509px] lg:h-[609px] rounded-xl border-none overflow-hidden"
          style={{
            backgroundColor: 'transparent',
          }}
        />
      </div>
    </div>
  );
};

export default SectionSix;