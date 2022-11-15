import React from "react";

const NavBar = () => {
  return (
    <nav className="px-6 mt-10">
      <div className="container mx-auto flex  justify-between font-bold py-4">
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
        <div className="flex items-center justify-between  leading-[24.98px] text-lightBlack  font-medium">
          <div className="">
            <a href="#" className="cursor-pointer hover">
              Home
            </a>
          </div>
          <div className="">
            <a href="#" className="cursor-pointer hover">
              Place To Stay
            </a>
          </div>
          <div className="">
            <a href="#" className="cursor-pointer hover">
              NFTS
            </a>
          </div>
          <div className="">
            <a href="#" className="cursor-pointer hover">
              Community
            </a>
          </div>
        </div>
        {/* connect wallet */}
        <button className="bg-purpleBackground rounded-md px-6 py-2 text-white">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
