import Hero from "./sections/hero/Hero";
import SectionOne from "./sections/section1/SectionOne";
import SectionTwo from "./sections/section2/SectionTwo";
import SectionThree from "./sections/section3/SectionThree";
import SectionFour from "./sections/section4/SectionFour";
import SectionFive from "./sections/section5/SectionFive";
import SectionSix from "./sections/section6/SectionSix";
import SectionSeven from "./sections/section7/SectionSeven";

export default function Home() {
  return (
      <div>
        <Hero/>
        <div className="w-full h-[12px] bg-[#D8C484]"></div>
        <SectionOne/>
        <div className="w-full h-[12px] bg-[#D8C484]"></div>
        <SectionTwo/>
        <div className="w-full h-[12px] bg-[#D8C484]"></div>
        <SectionThree/>
        <SectionFour/>
        <SectionFive/>
        <SectionSix/>
        <SectionSeven/>
      </div>
  );
}
