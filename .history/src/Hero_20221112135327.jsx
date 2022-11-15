import React from "react";

const Hero = () => {
  return (
    <section className="container mx-auto max-w-7xl px-6 mt-20">
      <div className=" flex flex-col-reverse items-center md:flex-row md:space-y-0 md:space-x-8 md:justify-between">
        <div className="flex flex-col items-center space-y-8 md:items-start md:max-w-1/2">
          <h2 className="text-4xl text-lightBlack font-medium capitalize max-w-xl">
            rent a{" "}
            <span className="text-purpleBackground font-bold">place</span> away
            from <br />
            <span className="text-purpleBackground font-bold"> home </span>
            in the
            <span className="text-purpleBackground font-bold">Metaverse</span>
          </h2>
          <p className="text-lightBlack text-2xl font-small text-center md:text-left  max-w-2xl ">
            we provide you access to luxury and affordable houses in the
            metaverse , get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <form action="flex w-full">
            <input
              type="text"
              className=" flex-1 p-3 border-2 rounded-l-lg placeholder-greyColor focus:outline-none"
              placeholder="Search for location"
              id="link-input"
            />

            <button className="px-14 py-[14px] text-white bg-purpleBackground rounded-r-lg focus:outline-none">
              Search
            </button>
          </form>
        </div>
        <div className="flex flex-col md:flex-row md:max-w-1/2">
          <div className="flex">
            <img src="./img/image 4.svg" alt="" />
            <img src="./img/image 3.svg" alt="" />
          </div>
          <div className="flex">
            <img src="./img/image 6.svg" alt="" />
            <img src="./img/image 5.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
