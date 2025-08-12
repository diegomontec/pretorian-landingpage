const SectionSix = () => {
  return (
    <div className="w-full bg-[#1A2028] text-white py-20 px-6 sm:px-12 lg:px-24 flex flex-col items-center text-center gap-16">
      <h2
        style={{ fontFamily: 'AtypDisplaySemiBold' }}
        className="text-xl sm:text-2xl lg:text-3xl font-semibold max-w-3xl"
        id="forms-bitrix"
      >
        Sua empresa está pronta para escalar no mercado financeiro? Fale conosco!
      </h2>

      <div className="w-full max-w-6xl">
        <iframe
          src="https://b24-2u1rlh.bitrix24.site/crm_form_fxs2v/"
          title="Formulário de Contato"
          scrolling="no"
          className="w-full h-[400px] sm:h-[508px] lg:h-[608px] rounded-xl border-none overflow-y-hidden"
          style={{
            backgroundColor: 'transparent',
          }}
        />
      </div>
    </div>
  );
};

export default SectionSix;