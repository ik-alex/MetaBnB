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
          <p className="text-lightBlack">
            we provide you access to luxury and affordable houses <br /> in the
            metaverse , get a chance to turn your <br /> imagination to reality
            at your comfort zone
          </p>
          <form action="">
            <input
              type="text"
              class="flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none"
              placeholder="Shorten a link here"
              id="link-input"
            />

            <button class="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2">
              Shorten It!
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;