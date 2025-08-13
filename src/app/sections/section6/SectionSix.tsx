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
          className="w-full overflow-hidden h-[320px] sm:h-[350px] md:h-[400]  rounded-xl border-none"
          scrolling="no"
          style={{
            backgroundColor: 'transparent',
          }}
        />
      </div>
    </div>
  );
};

export default SectionSix;