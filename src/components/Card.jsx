import React from "react";

function Card (props) {
    return (
        <div >
          <div className="p-3.5 bg-collection_bg border border-solid border-collection rounded-2xl">
            <div className="mb-4">
                <img src={props.img} alt="" />
            </div>
            <div className="flex justify-between mb-2">
                <p className="small_text">Desert king</p>
                <p className="small_text font-bold">1MBT per night</p>
            </div>
            <div className="flex justify-between mb-2">
                <p className="small_text">2345km away</p>
                <p className="small_text">available for 2weeks stay</p>
            </div>
            <div>
                <img src="" alt="star"/>
            </div>
          </div>
        </div>
    )
}

export default Card;