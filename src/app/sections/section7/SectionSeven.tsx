import CarrosselSeven from '@/components/CarrosselSeven';

export default function SectionSeven() {
  return (
    <section
      className="w-full bg-gradient-to-b from-[#1A2028] to-[#233446] text-white py-20 px-6 sm:px-12 lg:px-16"
      aria-labelledby="section-seven-title"
    >
      <div className="mx-auto max-w-6xl flex flex-col items-center text-center gap-12">
        <h2
          id="section-seven-title"
          style={{ fontFamily: 'AtypDisplayLight' }}
          className="text-xl sm:text-2xl lg:text-3xl font-semibold max-w-4xl leading-snug"
        >
          <span>
            Há <span style={{ fontFamily: 'AtypDisplayBold' }}>20 anos</span> no mercado, a
        </span>
          <span style={{ fontFamily: 'AtypDisplayBold' }}> Pretorian </span>
          <span>
            é referência nacional em contabilidade estratégica e performance financeira para
            instituições reguladas.
          </span>
        </h2>

        <CarrosselSeven />
      </div>
    </section>
  );
}
