const SectionFive = () => {
  return (
    <div className="w-full bg-gradient-to-t from-[#1A2028] to-[#233446] text-white py-20 px-6 sm:px-12 lg:px-24 flex flex-col items-center text-center gap-24">
      <h2 style={{fontFamily: 'AtypDisplaySemiBold'}} className="text-xl sm:text-2xl lg:text-3xl font-semibold max-w-3xl leading-snug">
        Mais do que uma contabilidade, somos<br />
        um parceiro estratégico de altíssimo<br />
        nível para operações financeiras
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl w-full">
        {/* Card 1 */}
        <div className="flex items-center gap-8 bg-[#1A2A3A] rounded-full px-8 py-4">
          <img src="assets/iconsSection5/image-Olho-section5.png" alt="Visão estratégica" className="w-14 h-auto" />
          <p style={{fontFamily: 'AtypDisplay'}} className="text-xl">Visão estratégica de negócios</p>
        </div>

        {/* Card 2 */}
        <div className="flex items-center gap-8 bg-[#1A2A3A] rounded-full px-8 py-4">
          <img src="assets/iconsSection5/image-gears-section5.png" alt="Integração e eficiência" className="w-14 h-auto" />
          <p style={{fontFamily: 'AtypDisplay'}} className="text-xl">Integração e eficiência</p>
        </div>

        {/* Card 3 */}
        <div className="flex items-center gap-8 bg-[#1A2A3A] rounded-full px-8 py-4">
          <img src="assets/iconsSection5/image-Compliance-section5.png" alt="Compliance" className="w-14 h-auto" />
          <p style={{fontFamily: 'AtypDisplay'}} className="text-xl">Compliance e rastreabilidade</p>
        </div>

        {/* Card 4 */}
        <div className="flex items-center gap-8 bg-[#1A2A3A] rounded-full px-8 py-4">
          <img style={{fontFamily: 'AtypDisplay'}} src="assets/iconsSection5/image-Agilidade-section5.png" alt="Agilidade" className="w-14 h-auto" />
          <p style={{fontFamily: 'AtypDisplay'}} className="text-xl">Agilidade e precisão</p>
        </div>

        {/* Card 5 */}
        <div className="flex items-center gap-8 bg-[#1A2A3A] rounded-full px-8 py-4">
          <img src="assets/iconsSection5/image-Suporte-section5.png" alt="Suporte regulatório" className="w-14 h-auto" />
          <p style={{fontFamily: 'AtypDisplay'}} className="text-xl">Suporte regulatório completo</p>
        </div>

        {/* Card 6 */}
        <div className="flex items-center gap-8 bg-[#1A2A3A] rounded-full px-8 py-4">
          <img src="assets/iconsSection5/image-São Paulo-section5.png" alt="Presença em SP" className="w-14 h-auto" />
          <p style={{fontFamily: 'AtypDisplay'}} className="text-xl">Presença estratégica em São Paulo</p>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
