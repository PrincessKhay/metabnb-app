import React from "react";
import Card from "../components/Card";
import Categories from "../components/placesComponents/Categories";

const images = [
  "images/card-5.png",
  "images/card-6.png",
  "images/card-7.png",
  "images/card-8.png",
  "images/card-1.png",
  "images/card-2.png",
  "images/card-3.png",
  "images/card-4.png",
  "images/card-9.png",
  "images/card-10.png",
  "images/card-11.png",
  "images/card-12.png",
  "images/card-13.png",
  "images/card-14.png",
  "images/card-15.png",
  "images/card-16.png",
];

function Places() {
  return (
    <div>
      <Categories />
      <div className="mx-20 my-14">
        <div className="grid xsx:grid-cols-1 lgx:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image) => {
            return <Card img={image} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Places;
