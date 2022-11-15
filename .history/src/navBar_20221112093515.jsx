import React from "react";

const NavBar = () => {
  return (
    <nav className="px-6 mt-10">
      <div className="container mx-auto flex font-bold py-4 md:flex-row md:items-center md:justify-between">
        {/* logo&content */}
        <div className="flex items-center justify-between pb-2 ">
          <div className="flex">
            <img src="./img/navHouse.jpg" alt="" />
            <img className="pt-1" src="./img/metabnb.svg" alt="" />
          </div>
          {/* nav menu */}
          <div className="hidden text-lightBlack text-xl font-medium md:flex-row md:block md:items-center md:space-x-10">
            <a href="#" className="leading-12">
              Home
            </a>
            <a href="#" className="cursor-pointer hover">
              Place To Stay
            </a>
            <a href="#" className="leading-12">
              NFTS
            </a>
            <a href="#" className="leading-12">
              Community
            </a>
          </div>
        </div>
        {/* connect wallet */}
        <div className="hidden md:block">
          <button className="bg-purpleBackground rounded-lg px-8 py-4 text-white">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
