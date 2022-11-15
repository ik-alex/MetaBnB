import React from "react";

const NavBar = () => {
  return (
    <nav className="container mx-auto p-6">
      <div className=" flex items-center justify-between">
        {/* logo&content */}
        <div className="flex items-center justify-between">
          <div className="flex items-center mb-2">
            <img src="./img/navHouse.jpg" alt="" />
            <img className="pt-1" src="./img/metabnb.svg" alt="" />
          </div>
          {/* nav menu */}
          <div className="hidden text-lightBlack text-xl font-medium md:flex-row md:block md:items-center md:space-x-10 ">
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
        <a className="hidden bg-purpleBackground rounded-lg px-8 py-4 text-white md:block">
          Connect Wallet
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
