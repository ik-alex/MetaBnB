import React from "react";

const NavBar = () => {
  return (
    <nav className="relative container mx-auto max-w-[80%] p-6">
      {/* logo&content */}
      <div className="flex items-center justify-between">
        <div className="flex mb-2">
          <img className="pt-1" src="./img/metabnb.svg" alt="" />
        </div>

        {/* nav menu */}
        <div className="hidden text-lightBlack text-xl font-medium space-x-12 lg:flex lists">
          <a href="#" className="leading-12">
            Home
          </a>
          <a href="#" className="cursor-pointer hover">
            Place
          </a>
          <a href="#" className="leading-12">
            NFTS
          </a>
          <a href="#" className="leading-12">
            Community
          </a>
        </div>
        {/* connect wallet */}
        <button className="hidden bg-purpleBackground rounded-lg text-center px-6 py-[10px] text-white lg:block">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
