import React, { useState, useEffect } from "react";
const NavBar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const handleClick = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <nav className="relative container mx-auto max-w-[90%] p-6">
      {/* logo&content */}
      <div className="fixedHeader active flex items-center justify-between">
        <div className="flex mb-2">
          <img className="pt-1" src="./img/metabnb.svg" alt="" />
        </div>

        {/* nav menu */}
        <div className="hidden text-lightBlack text-xl font-medium space-x-12 lg:flex lists">
          <a href="#" className="leading-12">
            Home
          </a>
          <a href="#" className="cursor-pointer hover">
            Place to stay
          </a>
          <a href="#" className="leading-12">
            NFTs
          </a>
          <a href="#" className="leading-12">
            Community
          </a>
        </div>
        {/* connect wallet */}
        <button className="hidden bg-purpleBackground rounded-lg text-center px-6 py-[10px] text-white lg:block">
          Connect Wallet
        </button>
        {/* Hamburger menu */}
        <button
          id="menu-btn"
          className={`z-30  block lg:hidden focus:outline-none hamburger ${
            hamburgerOpen && "open"
          }`}
          onClick={handleClick}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {/* mobile menu */}
      <div
        id="menu"
        className={`fixed  inset-0 z-20 flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-lightBlack ${
          hamburgerOpen ? "" : "hidden"
        }`}
      >
        <div className="w-full py-3 text-center">
          <a href="#features" class="block hover:text-softRed">
            Features
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a href="#download" class="block hover:text-softRed">
            Download
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a href="#faq" class="block hover:text-softRed">
            Faq
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a href="#" class="block hover:text-softRed">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
