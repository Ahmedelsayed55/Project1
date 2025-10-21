import React from "react";
import heroImg from "../assets/HeroImage.png";
import icon from "../assets/Icon.svg";

export const Hero = () => {
  return (
    <div
      className="  py-50 "
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
        backgroundPosition: "top center",
      }}
    >
      {/* <img src={heroImg}
        alt="Hero Photo"
        className="w-[100%] max-w-[1202px] h-auto lg:h-[737px]"
      /> */}
      <div className="container relative  max-w-[1284px] flex flex-col lg:flex-row mx-auto gap-10 lg:gap-0 items-center flex-wrap">
        <img src={icon} alt="" className="absolute left-0 -top-30" />
        <div className="w-[90%] lg:w-1/2 flex flex-col gap-10">
          <h1 className="text-[2em] lg:text-[4em] font-bold  ">
            Body Mass Index Calculator
          </h1>
          <p className="text-[1rem] text-center lg:text-left lg:text-[1.3rem] text-gray-600">
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>

        <div className=" w-[90%] lg:w-1/2 bg-white rounded-3xl  shadow-[0_4px_20px_rgba(0,0,0,0.25)] flex flex-col gap-7 p-10">
          <h2 className="text-2xl font-semibold">Enter your details below</h2>

          <div className="flex justify-between ">
            <div className="flex gap-3 w-1/2">
              <input
                type="radio"
                name="d"
                id="one"
                defaultChecked
                className="w-5"
              />
              <label htmlFor="one">Metric</label>
            </div>

            <div className="flex gap-3 w-1/2">
              <input type="radio" id="x" name="d" className="w-5" />
              <label htmlFor="x">Imperial</label>
            </div>
          </div>

          <div className="flex justify-between gap-5">
            <div className="flex justify-between w-1/2 border-2 p-3 rounded-lg border-gray-600">
              <p>Hieght</p>
              <div className="flex gap-1">
                <h3>185</h3>
                <h3 className="text-[#345FF6]">cm</h3>
              </div>
            </div>
            <div className="flex justify-between w-1/2 border-2 p-3 rounded-lg border-gray-600">
              <p>Hieght</p>
              <div className="flex gap-1">
                <h3>80</h3>
                <h3 className="text-[#345FF6]">kg</h3>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-3 lg:gap-20 bg-[#345FF6] px-3 lg:px-9 py-6 rounded lg:rounded-r-[999px] ">
            <div className="flex flex-col gap-3 text-white">
              <p className="text-sm text-nowrap lg:text-lg">
               Your BMI is...
              </p>
              <h2 className="text-3xl lg:text-6xl font-semibold">23.4</h2>
            </div>
            <p className="text-white  text-sm lg:text-lg ">
              Your BMI suggests you’re a healthy weight. Your ideal weight is
              between <span className="font-semibold">63.5kgs</span> -
              <span className="font-semibold">85.2kgs</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
