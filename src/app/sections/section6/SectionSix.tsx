const SectionSix = () => {
  return (
    <div className="w-full bg-[#1A2028] h-full text-white py-20 px-6 flex flex-col items-center text-center gap-16">
      <h2
        style={{ fontFamily: 'AtypDisplaySemiBold' }}
        className="text-xl sm:text-2xl lg:text-3xl font-semibold max-w-3xl"
        id="forms-bitrix"
      >
        Sua empresa está pronta para escalar no mercado financeiro? Fale conosco!
      </h2>

      <div className="w-full bg-[#272c2f] max-w-6xl">
        <iframe
          src="https://b24-2u1rlh.bitrix24.site/crm_form_fxs2v/"
          title="Formulário de Contato"
          className="w-full overflow-hidden h-[470] sm:-[480] md:h-[510] lg:h-[547]  rounded-xl border-none"
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