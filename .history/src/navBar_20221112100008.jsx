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
