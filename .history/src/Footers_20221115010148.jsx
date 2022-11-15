import React from "react";

const Footers = () => {
  return (
    <footer className="bg-deepBlack p-6">
      <div className="mx-auto max-w-[90%] px-6 text-white">
        <div className="flex flex-col-reverse items-center space-y-4 md:flex-row md:space-y-0 md:space-x-12">
          <div className="flex flex-col space-y-12 items-center md:items-start">
            <img src="/img/footer-logo.svg" alt="" />
            <div className="flex space-x-12 items-center">
              <img src="/img/facebook.svg" alt="facebook" />
              <img src="/img/instagram.svg" alt="instagram" />
              <img src="/img/twitter.svg" alt="twitter" />
            </div>
            <p>© 2022 Metabnb</p>
          </div>
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:justify-between">
            <div className="footer-link">
              <h5>Community</h5>
              <ul>
                <li>NFT</li>
                <li>Tokens</li>
                <li>Landlords</li>
                <li>Discord</li>
              </ul>
            </div>

            <div className="footer-link">
              <h5>Places</h5>
              <ul>
                <li>Castle</li>
                <li>Farms</li>
                <li>Beach</li>
                <li>Learn more</li>
              </ul>
            </div>

            <div className="footer-link">
              <h5>About us</h5>
              <ul>
                <li>Road map</li>
                <li>Creators</li>
                <li>Career</li>
                <li>Contact us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
