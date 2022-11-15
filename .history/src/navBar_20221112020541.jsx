import React from "react";

const NavBar = () => {
  return (
    <nav className="px-12 mt-10">
      <div className="container mx-auto flex justify-between font-bold py-4">
        {/* logo&content */}
        <div className="flex space-x-1 items-center">
          <div className="">
            <img src="./img/navHouse.jpg" alt="" />
          </div>
          <div className="pt-1">
            <img src="./img/metabnb.svg" alt="" />
          </div>
        </div>
        {/* nav menu */}
        <div className="flex items-center space-x-12 pt-2 leading-[24.98px] text-lightBlack font-bold">
          <a href="#" className="">
            Home
          </a>
          <a href="#" className="cursor-pointer hover">
            Place To Stay
          </a>
          <a href="#" className="">
            NFTS
          </a>
          <a href="#" className="">
            Community
          </a>
        </div>
        {/* connect wallet */}
        <button className="bg-purpleBackground rounded-lg mt-1 px-6 py-4 text-white">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
