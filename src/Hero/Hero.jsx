import React from "react";
import heroImg from "C:/Users/Wael/Desktop/Tasks/reactTask/src/assets/Hero Image.png";
export const Hero = () => {
  return (
    <div className="container relative ">
      <img src={heroImg} alt="Hero Photo" className="w-[100%] max-w-[1002px]" />
      <div className="w-[1160px] absolute top-1/2 left-1/7 flex ">
        <div className="w-1/2">
          <h1>Body Mass Index Calculator</h1>
          <p className="w-1/2">
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>

        <div className="w-1/2 bg-amber-200">
          <h2>Enter your details below</h2>

          <div className="flex justify-btween ">

            <div className="flex gap-1 w-1/2">
              <input type="radio" name="d" id="one" checked  className=""/>
              <label htmlFor="one">Metric</label>
            </div>

            <div className="flex gap-1 w-1/2">
              <input type="radio" id="x" name="d" className=""/>
              <label htmlFor="x">Imperial</label>
            </div>

          </div>
          <div className="flex justify-between">
            <div className="flex justify-between w-1/3 border-2 border-gray-600">
              <p>Hieght</p>
              <div className="flex">
                <h3>185</h3>
                <h3 className="text-[#345FF6]">cm</h3>
              </div>
            </div>
            <div className="flex justify-between w-1/3 border-2 border-gray-600">
              <p>Hieght</p>
              <div className="flex ">
                <h3>80</h3>
                <h3 className="text-[#345FF6]">kg</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
