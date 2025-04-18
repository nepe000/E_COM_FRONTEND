import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png.jpg"
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Overlay */}
      <div className="absolute insert-0 bg-black/30 z-10" />

      {/* content */}
      <div className="absolute top-1/3 z-50 max-w-[700px] px-4">
        <div className=" tracking-wider">
          <p className="font-bold tracking-wider text-black text-2xl md:text-3xl max-w-2xl mb-6">
            Discover Deals. Elevate Style. Shop the Smart Way with CartNDart.
          </p>
        </div>
        <button className="px-6 py-3 bg-blue-600 font-bold uppercase text-white rounded-2xl hover:bg-blue-500 transition-all duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
