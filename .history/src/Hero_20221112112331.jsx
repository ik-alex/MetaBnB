import React from "react";

const Hero = () => {
  return (
    <section className="container mx-auto max-w-7xl px-6 mt-20">
      <div className="flex flex-col-reverse space-y-4 md:flex-row md:space-y-0 md:space-x-8">
        <div className="flex flex-col-4 md:max-w-1/2">
          <p className="text-4xl text-lightBlack font-medium capitalize max-w-md">
            rent a<span className="text-purpleBackground font-bold">place</span>
            away from
            <span className="text-purpleBackground font-bold"> home </span>
            in the
            <span className="text-purpleBackground font-bold">metaverse</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
