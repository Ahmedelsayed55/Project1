import React from "react";
import icon from "../assets/Icon (1).svg";
const FourthSection = () => {
  return (
    <div>
      <div className="w-[100%] max-w-[1284px] items-center mx-auto flex flex-col lg:flex-row flex-wrap gap-20 py-20 ">
        <div className="w-[90%] lg:w-1/2 flex flex-col gap-5">
          <h1 className="text-[48px] font-semibold tracking-tight ">Limitations of BMI</h1>
          <p className="w-[85%] tracking-wider text-[#5E6E85]">
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </div>
        <div className="flex flex-col gap-5 flex-wrap max-w-[365px] bg-[##8FAECF40] mt-2 shadow-[0_50px_50px_#8FAECF40] p-5 ">
          <div className="flex gap-2">
            <img src={icon} alt="" />
            <h2>Gender</h2>
          </div>
          <p className="w-[80%] text-[#5E6E85] tracking-wider">
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
