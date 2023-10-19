import React from "react";
import { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

function Hero() {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-52 ">
        <p className="text-xl font-montserrat text-coral-red">
          Unsere Sommerkollektionen
        </p>
        <h1 className="mt-10 font-palanquin text-[86px] max-sm:text-[36px] max-sm:leading-[42px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 ">
            Die Neue Ankunft
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Puma</span> Schuhe
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Entdecken Sie stilvolle Puma Neuheiten, Qualität, Komfort und
          Innovation für Ihr aktives Leben.
        </p>
        <Button label="Jetzt kaufen" iconUrl={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16 ">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold ">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="relative flex-1 flex justify-center items-center 
        xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center"
      >
        <img
          src={bigShoeImg}
          alt="Shuhe Kolletion Photo"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%]  max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setbigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
