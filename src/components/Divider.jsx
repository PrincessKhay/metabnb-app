import React from "react";

function Divider () {
    return(
        <div className=" bg-primary ">
            <div className="mx-28 py-2 flex justify-between">

              <div className="w-52 flex items-center">
                <img src="images/mb-token.svg" alt="" className="w-8"/>
                <p className="text-token text-2xl font-bold tracking-wide">MBToken</p>
              </div>
              <div className="w-52 flex items-center space-x-2">
                <img src="images/white-metamask.svg" alt="" className="w-7"/>
                <p className="text-token text-xl tracking-wider">METAMASK</p>
              </div>
              <div className="w-52 flex items-center space-x-2">
                <img src="images/opensea.svg" alt="" className="w-7"/>
                <p className="text-white text-2xl font-bold tracking-tight">OpenSea</p>
              </div>
            </div>
        </div>
    );
}

export default Divider;