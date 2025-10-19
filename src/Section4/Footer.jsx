import React from "react";
import age from "../assets/Icon (2).svg";
import muscle from "../assets/Vector.png";
import pregnancy from "../assets/Vector (1).png";
import race from "../assets/Icon (3).svg";
const Footer = () => {
  return (
    <div className="w-[100%] max-w-[1284px] mx-auto flex flex-col gap-10 pb-10">
      <div className="w-[100%] max-w-[961px] ml-auto  ">
        {/* top */}
        <div className="flex gap-10 ">
          <div className="flex flex-col gap-5 w-1/2 max-w-[400px] bg-[##8FAECF40] mt-2 shadow-[0_20px_50px_#8FAECF40] p-5 ">
            <div className="flex gap-2">
              <img src={age} alt="" />
              <h2>Age</h2>
            </div>
            <p className="w-[90%] text-[#5E6E85] tracking-wider">
              In aging individuals, increased body fat and muscle loss may cause
              BMI to underestimate body fat content.
            </p>
          </div>
          <div className="flex flex-col gap-5 w-1/2 max-w-[400px] bg-[##8FAECF40] mt-2 shadow-[0_20px_50px_#8FAECF40] p-5 ">
            <div className="flex gap-2">
              <img src={muscle} alt="" />
              <h2>Muscle</h2>
            </div>
            <p className="w-[90%] text-[#5E6E85] tracking-wider">
              BMI may misclassify muscular individuals as overweight or obese,
              as it doesn't differentiate muscle from fat.
            </p>
          </div>
        </div>
        </div>
      
      
        <div className="w-[100%] max-w-[961px] mr-auto flex flex-col gap-20 ">
        <div className="flex gap-10">
             <div className="flex flex-col gap-5 w-1/2 max-w-[400px] bg-[##8FAECF40] mt-2 shadow-[0_4px_4px_#8FAECF40] p-5 ">
            <div className="flex gap-2">
              <img src={pregnancy} alt="" />
              <h2>Pregnancy</h2>
            </div>
            <p className="w-[90%] text-[#5E6E85] tracking-wider">
              In aging individuals, increased body fat and muscle loss may cause
              BMI to underestimate body fat content.
            </p>
          </div>
          <div className="flex flex-col gap-5 w-1/2 max-w-[400px] bg-[##8FAECF40] mt-2 shadow-[0_4px_4px_#8FAECF40] p-5 ">
            <div className="flex gap-2">
              <img src={race} alt="" />
              <h2>Race</h2>
            </div>
            <p className="w-[90%] text-[#5E6E85] tracking-wider">
              BMI may misclassify muscular individuals as overweight or obese,
              as it doesn't differentiate muscle from fat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
