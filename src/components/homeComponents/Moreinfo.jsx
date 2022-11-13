import React from "react";

function Moreinfo () {
    return(
        <div className="bg-primary px-20 pt-28 pb-20 flex justify-between">
            <div className="space-y-12 w-2/6">
                <h1 className="text-4xl font-bold text-white">Metabnb NFTs</h1>
                <p className="text-white tex-lg">Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs give our customers access to loads of our exclusive services.</p>
                <button className="bg-white rounded-lg px-6 py-2 text-primary text-sm">Learn more</button>
            </div>
            <div className="w-3/6">
                <img src="images/3-images.svg" alt=""/>
            </div>
        </div>
    );
}

export default Moreinfo;