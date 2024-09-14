import type { Metadata } from "next";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import { Navbar } from "@/components/Navbar";
import { Roboto_Flex } from "next/font/google";
import { bebas_neue } from "./font";

const roboto_flex = Roboto_Flex({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${roboto_flex.className} antialiased overflow-x-auto w-full`}
      >
        <Navbar />
        {children}
        <footer className="bg-darkbg text-white">
          <div className="flex gap-14 px-10 flex-col md:flex-row xl:px-64 py-28 items-center justify-between">
            <div className="flex flex-col max-w-xl gap-y-4">
              <h1 className={`${bebas_neue.className} text-2xl`}>
                Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit
                nulla commodo.
              </h1>
              <h2 className="text-sm">
                Mauris varius ipsum mauris, rutrum lobortis magna efficitur a.
                Donec egestas, nisl vehicula feugiat ornare, diam turpis
                efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et
                [...]
              </h2>
              <div>
                <button className="flex gap-2 border-b-[1px] py-2 border-white">
                  Rozwiń
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 13 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8.44461L1.07955 7.35086L5.58239 11.8537L5.58239 0.191772L7.14489 0.191773L7.14489 11.8537L11.6335 7.35086L12.7273 8.44461L6.36364 14.8083L0 8.44461Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex flex-col max-w-xl gap-y-4">
              <h1 className={`${bebas_neue.className} text-2xl`}>
                Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit
                nulla commodo.
              </h1>
              <h2 className="text-sm">
                Mauris varius ipsum mauris, rutrum lobortis magna efficitur a.
                Donec egestas, nisl vehicula feugiat ornare, diam turpis
                efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et
                [...]
              </h2>
              <div>
                <button className="flex gap-2 border-b-[1px] py-2 border-white">
                  Rozwiń
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 13 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 8.44461L1.07955 7.35086L5.58239 11.8537L5.58239 0.191772L7.14489 0.191773L7.14489 11.8537L11.6335 7.35086L12.7273 8.44461L6.36364 14.8083L0 8.44461Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between py-6 border-t-[1px] border-white">
            <span className="flex px-10 lg:px-64 py-6 w-full justify-between">
              <div>Cars Spot</div>
              <div className="underline">Polityka prywatności</div>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
