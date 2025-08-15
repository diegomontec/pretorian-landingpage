import { Forms } from '@/app/sections/section6/Forms';

export default function SectionSix() {
  return (
    <section className="w-full bg-[#1A2028] text-white">
      <div
        className="
          mx-auto
          w-full
          max-w-[1200px]
          px-4
          sm:px-6
          lg:px-8
          py-14
          sm:py-16
          lg:py-20
          flex
          flex-col
          items-center
          gap-10
          text-center
        "
      >
        <h2
          className="
            max-w-3xl
            text-2xl
            sm:text-3xl
            lg:text-4xl
            font-semibold
            leading-tight
          "
          id="forms-bitrix"
          style={{ fontFamily: 'AtypDisplaySemiBold' }}
        >
          Sua empresa está pronta para escalar no mercado financeiro? Fale conosco!
        </h2>

        {/* Card do form responsivo */}
        <div
          className="
            w-full
            max-w-2xl
            p-4
            sm:p-6
            md:p-8
            overflow-hidden
          "
        >
          <Forms />
        </div>
      </div>
    </section>
  );
}
