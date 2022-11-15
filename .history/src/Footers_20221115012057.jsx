import React from "react";

const Footers = () => {
  return (
    <footer className="bg-deepBlack p-6">
      <div className="mx-auto max-w-[90%] px-6 text-white">
        <div className="flex flex-col-reverse items-center space-y-4 md:flex-row md:space-y-0 md:space-x-12">
          <div className="flex flex-col space-y-12 items-center md:items-start md:w-1/2">
            <img src="/img/footer-logo.svg" alt="" />
            <div className="flex space-x-12 items-center">
              <img src="/img/facebook.svg" alt="facebook" />
              <img src="/img/instagram.svg" alt="instagram" />
              <img src="/img/twitter.svg" alt="twitter" />
            </div>
            <p>© 2022 Metabnb</p>
          </div>
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:justify-between md:md:w-1/2">
            <div className="">
              <h5>Community</h5>
              <div className="flex flex-col space-y-4">
                <a>NFT</a>
                <a>Tokens</a>
                <a>Landlords</a>
                <a>Discord</a>
              </div>
            </div>

            <div className="">
              <h5>Places</h5>
              <div className="flex flex-col space-y-4">
                <a>Castle</a>
                <a>Farms</a>
                <a>Beach</a>
                <a>Learn more</a>
              </div>
            </div>

            <div className="">
              <h5>About us</h5>
              <div className="flex flex-col space-y-4">
                <a>Road map</a>
                <a>Creators</a>
                <a>Career</a>
                <a>Contact us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
