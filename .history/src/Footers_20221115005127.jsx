import React from "react";

const Footers = () => {
  return (
    <footer className="bg-black p-6">
      <div className="mx-auto max-w-[90%] px-6 text-white">
        <div className="flex flex-col-reverse items-center space-y-4 md:flex-row md:space-y-0 md:space-x-12">
          <div className="flex flex-col justify-between">
            <img src="/img/footer-logo.svg" alt="" />
            <div className="flex space-x-12 items-center">
              <img src="/img/facebook.svg" alt="facebook" />
              <img src="/img/instagram.svg" alt="instagram" />
              <img src="/img/twitter.svg" alt="twitter" />
            </div>
            <p>© 2022 Metabnb</p>
          </div>
          <div className=""></div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
