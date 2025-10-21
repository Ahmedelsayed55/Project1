import React from "react";
import persson from "../assets/Photo.png";
export const Means = () => {
  return (
    <div className="py-50">
      <div className="w-[100%] max-w-[1284px] mx-auto flex flex-col lg:flex-row items-center  ">
        <img src={persson} alt="Person" className="block w-1/1 lg:w-1/2" />
        <div className="flex flex-col gap-5 mt-15 w-1/1 lg:w-1/2 ps-15 lg:ps-27" >
          <h1 className="text-[48px] font-semibold tracking-tight">What your BMI result means</h1>
          <p className="w-[90%]">
            A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
            Maintaining a healthy weight may lower your chances of experiencing
            health issues later on, such as obesity and type 2 diabetes. Aim for
            a nutritious diet with reduced fat and sugar content, incorporating
            ample fruits and vegetables. Additionally, strive for regular
            physical activity, ideally about 30 minutes daily for five days a
            week.
          </p>
        </div>
      </div>
    </div>
  );
};
