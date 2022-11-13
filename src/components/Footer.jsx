import React from "react";

function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="mx-20 pt-14 pb-9">
        <div className=" flex justify-between">
          <div>
            <div id="logo" className="w-56">
              <img src="images/logo-2.svg" alt="" />
            </div>
            <div id="socials"></div>
          </div>
          <div className="flex justify-between w-7/12">
            <div className="flex flex-col space-y-3">
              <p>Community</p>
              <a href="/">NFT</a>
              <a href="/">Tokens</a>
              <a href="/">Landlords</a>
              <a href="/">Discord</a>
            </div>
            <div className="flex flex-col space-y-3">
              <p>Places</p>
              <a href="/">Castle</a>
              <a href="/">Farms</a>
              <a href="/">Beach</a>
              <a href="/">Learn more</a>
            </div>
            <div className="flex flex-col space-y-3">
              <p>About us</p>
              <a href="/">Road map</a>
              <a href="/">Creators</a>
              <a href="/">Career</a>
              <a href="/">Contact us</a>
            </div>
          </div>
        </div>
        <div className="">
          <p className="">2022 Metabnb</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
