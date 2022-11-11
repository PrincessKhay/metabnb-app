import React from "react";

function Divider () {
    return(
        <div className=" bg-primary ">
            <div className="mx-28 flex justify-between">

              <div className="flex">
                <img src="images/mb-token.svg" alt=""/>
                <p>MBToken</p>
              </div>
              <div className="flex">
                <img src="images/white-metamask.svg" alt=""/>
                <p>METAMASK</p>
              </div>
              <div className="flex">
                <img src="images/opensea.svg" alt=""/>
                <p>OpenSea</p>
              </div>
            </div>
        </div>
    );
}

export default Divider;