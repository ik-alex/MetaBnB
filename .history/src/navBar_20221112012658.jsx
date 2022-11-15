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
      </div>
    </nav>
  );
};

export default NavBar;
