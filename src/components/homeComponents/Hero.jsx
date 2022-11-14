import React from "react";

function Hero() {
  return (
    <div className="m-20 flex flex-col md:flex-row justify-between md:space-x-14">
      <div
        id="text_div"
        className="md:w-7/12 w-2/5 flex-col space-y-10 md:mt-7"
      >
        <div>
          <h1 className="text-6xl tracking-tight font-medium text-center md:text-left">
            Rent a <span className="span">Place</span> away from{" "}
            <span className="span">Home</span> in the{" "}
            <span className="span">Metaverse</span>
          </h1>
        </div>
        <div>
          <p className="w-11/12 text-base md:text-xl leading-8 font-normal break-words text-center md:text-left">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
        </div>
        <div>
          <form className="flex">
            <input
              type="text"
              placeholder="Search for location"
              className="w-96 p-3 bg-input border border-solid border-bordercolor rounded-l-lg placeholder-placeholdertext placeholder-opacity-50 text-sm focus:outline-none focus:border-primary"
            />
            <button className="w-56 bg-primary text-white text-base rounded-r-lg">
              Search
            </button>
          </form>
        </div>
      </div>
      <div id="pictures_div" className="mt-12 md:mt-4 md:w-4/12">
        <img src="images/4-images.svg" alt="" />
      </div>
    </div>
  );
}

export default Hero;
