import React from "react";

function Divider () {
    return(
        <div className=" bg-primary ">
            <div className="mx-28 flex justify-between">

              <div className="flex items-center">
                <img src="images/mb-token.svg" alt="" />
                <p className="text-white">MBToken</p>
              </div>
              <div className="flex items-center">
                <img src="images/white-metamask.svg" alt=""/>
                <p className="text-white">METAMASK</p>
              </div>
              <div className="flex items-center">
                <img src="images/opensea.svg" alt=""/>
                <p className="text-white">OpenSea</p>
              </div>
            </div>
        </div>
    );
}

export default Divider;