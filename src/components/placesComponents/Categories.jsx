import React from "react";

function Categories() {
  return (
    <div className="flex mx-20 mt-20 justify-between">
      <ul className="flex space-x-10">
        <li>Restaurant</li>
        <li>Cottage</li>
        <li>Castle</li>
        <li>fantast city</li>
        <li>beach</li>
        <li>Cabins</li>
        <li>Off-grid</li>
        <li>Farm</li>
      </ul>
      <button className=" inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        Location
      </button>
    </div>
  );
}

export default Categories;
