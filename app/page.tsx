import Image from "next/image";
import { bebas_neue, roboto_condensed } from "./font";
import { CTA } from "@/components/CTA";
import { Carousel } from "@/components/Carousel";

export default function Home() {
  return (
    <div className="grid min-h-screen pt-8 xl:pt-28 px-8 xl:px-60 overflow-x-clip">
      <main className="flex flex-col gap-8 sm:items-start">
        <div className="flex flex-col gap-8 xl:pb-64">
          <h1
            className={`${bebas_neue.className} text-4xl lg:text-7xl xl:leading-[84px]`}
          >
            SPRZEDAJEMY SAMOCHODY <br /> Z EUROPY
          </h1>
          <h2 className={`${roboto_condensed.className}`}>
            Kup komfortowy pojazd, aby każda podróż <br /> była wyjątkowym
            przeżyciem.
          </h2>
          <div className="flex gap-2 md:gap-6 pb-32 md:pb-64">
            <CTA>Zobacz zdjęcia</CTA>
            <CTA outlined>Zobacz zdjęcia</CTA>
          </div>
          <Image
            src="/road.png"
            className="absolute right-52 top-0 -z-20"
            alt="Two lines as symbol of a road"
            width={700}
            height={700}
          />
          <Image
            src="/cars.png"
            className="absolute -right-0 top-96 -z-10"
            alt="Cars next to each other"
            width={1300}
            height={500}
          />
        </div>
        <div>
          <div className="">
            <h1 className={`${roboto_condensed.className} text-accent text-xl`}>
              Prezentacja firmy
            </h1>
            <h2
              className={`${bebas_neue.className} text-3xl md:text-[40px] pb-4`}
            >
              ZOBACZ NASZĄ GALERIĘ ZDJĘĆ
            </h2>
          </div>
          <div className="flex gap-8 md:gap-12 font-semibold">
            <button className="border-b-[1px] border-accent text-accent">
              Samochody osobowe
            </button>
            <button className="border-b-[1px] border-transparent">
              Samochody dostawcze
            </button>
          </div>

          <Carousel />
        </div>
      </main>
    </div>
  );
}
