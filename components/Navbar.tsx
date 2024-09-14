import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CTA } from "./CTA";

export const Navbar = () => {
  return (
    <div className="flex md:justify-between p-8 gap-8 lg:mx-60">
      <Image src="logo.svg" width={150} height={50} alt="CarsSpot Logo" />

      <div className="hidden md:flex md:flex-row md:gap-6 self-center">
        <Link href="#">Galeria zdjęć</Link>
        <Link href="#">FaQ</Link>
      </div>
      <CTA>Zadzwoń do nas</CTA>
    </div>
  );
};
