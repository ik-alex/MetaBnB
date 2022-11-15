import React from "react";

const Footers = () => {
  return (
    <footer className="bg-deepBlack p-6 ">
      <div className="mx-auto max-w-[90%] px-6 py-4 text-white">
        <div className="flex flex-col-reverse items-center space-y-4 md:flex-row md:space-y-0 md:space-x-12">
          <div className="flex flex-col space-y-16 items-center mt-12 md:mt-0 md:items-start md:w-1/4">
            <img src="/img/footer-logo.svg" alt="" />
            <div className="flex space-x-12 items-center">
              <img src="/img/facebook.svg" alt="facebook" />
              <img src="/img/instagram.svg" alt="instagram" />
              <img src="/img/twitter.svg" alt="twitter" />
            </div>
            <p>© 2022 Metabnb</p>
          </div>
          <div className="flex flex-col space-y-12 md:flex-row md:space-y-0 md:justify-between md:md:w-3/4 md:justify-items-start">
            <div className="">
              <h5 className="mb-4">Community</h5>
              <div className="flex flex-col space-y-2 items-center">
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
