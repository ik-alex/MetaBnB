import React from "react";

const Hero = () => {
  return (
    <section className="container mx-auto max-w-7xl px-6 mt-20">
      <div className="flex flex-col-reverse space-y-4 md:flex-row md:space-y-0 md:space-x-8">
        <div className="flex flex-col space-y-8 md:max-w-1/2">
          <h2 className="text-4xl text-lightBlack font-medium capitalize max-w-md">
            rent a{" "}
            <span className="text-purpleBackground font-bold">place</span> away
            from <br />
            <span className="text-purpleBackground font-bold"> home </span>
            in the{" "}
            <span className="text-purpleBackground font-bold">Metaverse</span>
          </h2>
          <p className="text-lightBlack text-2xl font-md">
            we provide you access to luxury and affordable houses <br /> in the
            metaverse , get a chance to turn your <br /> imagination to reality
            at your comfort zone
          </p>
          <form action="">
            <input
              type="text"
              class="flex-1 p-3 border-2 rounded-l-lg placeholder-greyColor focus:outline-none"
              placeholder="Search for location"
              id="link-input"
            />

            <button class="px-14 py-[14px] text-white bg-purpleBackground rounded-r-lg hover:bg-cyanLight focus:outline-none">
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
