import React from "react";

function Hero () {
    return (
        <div className="m-20 flex flex-col sm:flex-row justify-between">
            <div id="text_div" className="w-7/12 flex-col space-y-7">
                <div>
                    <h1 className="text-6xl tracking-tight font-bold">Rent a <span className="span">Place</span> away from <span className="span">Home</span> in the <span className="span">Metaverse</span></h1>
                </div>
                <div>
                    <p className="w-11/12 text-2xl leading-8 font-normal break-words">we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                </div>
                <div>
                    <form className="flex">
                        <input type="text" placeholder="Search for location" className="w-96 p-3 bg-input border border-solid border-bordercolor rounded-l-lg placeholder-placeholdertext placeholder-opacity-50 text-sm focus:outline-none focus:border-primary"/>
                        <button className="w-56 bg-primary text-white text-base rounded-r-lg">Search</button>
                    </form>
                </div>
            </div>
            <div id="pictures_div" className="flex gap-2 relative">
                {/* <div className="absolute left-0 top-24 "> */}
                <div>
                    <div className="">
                        <img src="images/image-1.svg" alt=""/>
                    </div>
                    <div className="">
                        <img src="images/image-2.svg" alt=""/>
                    </div>
                </div>
                <div className="">
                    <div>
                        <img src="images/image-3.svg" alt=""/>
                    </div>
                    <div>
                        <img src="images/image-4.svg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;