import React from "react";

import data from "../data";

export default function SectionThird() {
  console.log(data); 

  return (
    <div className="w[100%] max-w-[1284px] items-center  mx-auto flex flex-wrap justify-center lg:justify-between py-20 ">
      {data.map((item, index) => (
        <div
          key={index}
          className="w-2xs bg-white rounded-xl p-4"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-15 h-15 mb-4"
          />
          <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
          <p className="text-gray-600 text-sm w-[80%]">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

 
