import React from "react";
import Card from "./Card";

function Collection () {
    return (
        <div className="mx-20 my-14">
            <h1 className="text-4xl font-bold text-center">Inspiration for your next adventure</h1>
            <div className="grid grid-cols-4 gap-6 mt-10">
                    <Card 
                        img="images/card-1.svg"
                    />
                    <Card 
                        img="images/card-2.svg"
                    />
                    <Card 
                        img="images/card-3.svg"
                    />
                    <Card 
                        img="images/card-4.svg"
                    />
                    <Card 
                        img="images/card-5.svg"
                    />
                    <Card 
                        img="images/card-6.svg"
                    />
                    <Card 
                        img="images/card-7.svg"
                    />
                    <Card 
                        img="images/card-8.svg"
                    />
            </div>
        </div>
    )
}

export default Collection;