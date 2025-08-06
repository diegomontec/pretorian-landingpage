import Image from "next/image";

const SectionSeven = () => {
    return (
        <div className="w-full bg-[#1A2028] text-white py-20 px- sm:px-12 lg:px-24 flex flex-col items-center text-center gap-20">
            <h2
                style={{ fontFamily: 'AtypDisplayLight' }}
                className="text-xl sm:text-2xl lg:text-3xl font-semibold max-w-3xl"
            >
                Com <strong style={{ fontFamily: 'AtypDisplayBold' }}>20 anos</strong> de mercado, a <strong style={{ fontFamily: 'AtypDisplayBold' }}>Pretorian</strong> é referência nacional em contabilidade estratégica e performance financeira para instituições reguladas.
            </h2>

            <div className="flex flex-col items-center justify-center gap-8">
                <Image
                    src="/assets/image-section7/image-antonioDias.png"
                    alt="Sócio Unidade SP"
                    width={260}
                    height={3850}
                    className=""
                />

                <div className="flex flex-col sm:flex-row gap-4">
                    <Image
                        src="/assets/image-section7/image-andré.png"
                        alt="Fundador André"
                        width={260}
                        height={180}
                    />
                    <Image
                        src="/assets/image-section7/image-radjalma.png"
                        alt="Fundador Radjalma"
                        width={260}
                        height={180}
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Image
                        src="/assets/image-section7/image-jackson.png"
                        alt="Fundador Jackson"
                        width={260}
                        height={180}
                    />
                    <Image
                        src="/assets/image-section7/image-philippe.png"
                        alt="Fundador Philippe"
                        width={260}
                        height={180}
                    />
                </div>
            </div>
        </div>
    );
};

export default SectionSeven;
