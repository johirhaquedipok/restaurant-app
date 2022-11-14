import React from "react";
import Delivery from "../assets/img/delivery.png";
import heroBg from "../assets/img/heroBg.png";
import { heroData } from "../utils/data";
const MainContainer = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 md: gap-2">
        <div className="py-2 flex flex-col item-start justify-center flex-1 md:items-center">
          <div className="flex items-center justify-center gap-2 bg-orange-100 rounded-full px-2 py-1">
            <p className="text-base text-orange-500 font-semibold">
              Bike Delivery
            </p>
            <div className="w-10 h-10 rounded-full bg-white overflow-hidden drop-shadow-xl">
              <img
                src={Delivery}
                alt="delivery"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div>
            {" "}
            <p className="text-[2.5rem] font-bold tracking-wide text-headingColor">
              The Fastest Delivery in{" "}
              <span className="text-orange-600 text-[3rem]">Your City</span>
            </p>
            <p className="text-base text-textColor text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              voluptatibus voluptates quod sunt amet architecto? Modi, illo
              obcaecati at veniam qui a minima, ut totam nam aspernatur
              quibusdam facilis cum!
            </p>
            <button className="bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto">
              Order Now
            </button>
          </div>
        </div>

        <div className="py-2 flex-1 flex items-center relative">
          <img
            src={heroBg}
            alt="heroBg"
            className="ml-auto h-420 w-full lg:h-650 lg:w-auto"
          />
          <div className="w-full h-full absolute top-0 left-0 flex flex-col  items-center justify-center px-32 py-4 flex-wrap gap-2">
            {heroData &&
              heroData.map((item, indx) => (
                <div
                  key={item.descrp + indx}
                  className="w-190 min-w-[190px] p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col justify-center items-center"
                >
                  <img src={item.imageSrc} alt="ig" className="w-40 -mt-20" />
                  <p className="text-lg text-semibold text-textColor mt-4">
                    {item.name}
                  </p>
                  <p className="text-sm text-lightTextGray font-semibold">
                    {item.descrp}
                  </p>
                  <p className="text-sm text-lightTextGray font-semibold">
                    <span className="text-xs text-red-600">$</span>
                    {item.price}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContainer;
