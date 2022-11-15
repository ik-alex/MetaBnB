import React from "react";

const NavBar = () => {
  return (
    <nav className="container mx-auto p-6">
      {/* logo&content */}
      <div className="flex items-center justify-between">
        <div className="flex mb-2">
          <img src="./img/navHouse.jpg" alt="" />
          <img className="pt-1" src="./img/metabnb.svg" alt="" />
        </div>

        {/* nav menu */}
        <div className="hidden text-lightBlack text-xl font-medium space-x-10 md:flex md:block">
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
        {/* connect wallet */}
        <a className="hidden bg-purpleBackground rounded-lg px-8 py-4 text-white md:block">
          Connect Wallet
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
