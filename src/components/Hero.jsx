import React from "react";

function Hero () {
    return (
        <div className="m-20 flex flex-col sm:flex-row">
            <div id="text_div">
                <div>
                    <h1 className="text-xl">Rent a <span className="text-primary">Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1>
                </div>
                <div>
                    <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                </div>
                <div>
                    <form className="flex">
                        <input type="text" placeholder="Search for location"/>
                        <button>Search</button>
                    </form>
                </div>
            </div>
            <div id="pictures_div" className="flex gap-2">
                <div className="">
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