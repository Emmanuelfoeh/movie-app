import React from "react";
import Search from "../Search/Search";

type Props = {};

//

/*
background-image: linear-gradient(to right, rgba(var(--tmdbDarkBlue), 0.8) 0%, rgba(var(--tmdbDarkBlue), 0) 100%), url(/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/8bcoRX3hQRHufLPSDREdvr3YMXx.jpg);

*/

function HeroSection({}: Props) {
  return (
    <section className="h-[40dvh] text-white p-5 bg-[#01537b] xl:w-100 2xl:mx-auto  2xl:max-w-7xl">
      <h1 className="font-bold text-[4rem]">welcome.</h1>
      <p className="font-bold text-[2rem]">Millions of movies, TV shows and people to discover. Explore now.</p>

      <Search/>
    </section>
  );
}

export default HeroSection;
