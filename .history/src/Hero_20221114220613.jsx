import React from "react";

const Hero = () => {
  return (
    <>
      <section className="container mx-auto max-w-[90%] px-6 mt-20 mb-20">
        <div className=" flex flex-col-reverse items-center md:flex-row md:space-y-0 md:space-x-8 md:justify-between">
          <div className="flex flex-col items-center space-y-8 md:items-start md:max-w-1/2">
            <h2 className="text-4xl text-lightBlack mt-16 font-medium capitalize max-w-2xl md:max-w-md md:mt-0">
              rent a{" "}
              <span className="text-purpleBackground font-bold">place</span>{" "}
              away from <br />
              <span className="text-purpleBackground font-bold"> home </span>
              in the{" "}
              <span className="text-purpleBackground font-bold">Metaverse</span>
            </h2>
            <p className="text-lightBlack text-2xl font-small text-center md:text-left  max-w-2xl ">
              we provide you access to luxury and affordable houses in the
              metaverse , get a chance to turn your imagination to reality at
              your comfort zone
            </p>
            <div className="inputs">
              <input
                type="text"
                // className=" w-[85%] p-3 border-2 rounded-l-md placeholder-greyColor focus:outline-none"
                placeholder="Search for location"
              />
              <input
                // className="px-14 py-[14px] text-white bg-purpleBackground rounded-r-md focus:outline-none"
                type="submit"
                value="Search"
              />
            </div>
          </div>
          <div className="flex space-x-4 md:max-w-1/2">
            <img src="/img/hero-section.svg" alt="" />
          </div>
        </div>
      </section>
      <section className="bg-purpleBackground px-24 py-4 mb-20">
        {/* LOGO-LABEL */}
        <div className="flex flex-col space-y-8 items-center md:flex-row md:space-y-0 md:justify-between md:items-center md:spaxe-x-8">
          <img src="/img/mb-token.svg" alt="token" />
          <img src="/img/metamask.svg" alt="metamask" />
          <img src="/img/opensea.svg" alt="opensea" />
        </div>
        {/*  */}
      </section>

      {/* Inspirations */}
      <section>
        <div className="container mx-auto text-center">
          <h1 className="font-bold text-5xl text-lightBlack mb-20">
            Inspiration for your next adventure
          </h1>
        </div>
      </section>

      <section className="container mx-auto max-w-[90%] px-6">
        <div className="">
          <div className="card">
            <img src="/img/Frame 151(1).svg" alt="desertKing" />
            <span>
              <p>Desert King</p>
              <p>1MBT per night</p>
            </span>
            <span>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </span>
            <img src="/assets/star.svg" alt="rating" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
