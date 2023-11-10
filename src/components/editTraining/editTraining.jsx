import { Container } from "@mui/material";
import React from "react";

const EditTraining = () => {
  return (
    <div className="flex items-center justify-between mid:w-[1102px] w-full pt-8">
      <span className="mid:text-[18px] mobile:text-[14px] xsmall:text-[8px] leading-normal font-[600] text-[#7C7C7C]">
        Edit Training “Working At Height”
      </span>
      <section className="flex items-center mid:gap-7 gap-5">
        <button className="mid:text-[13px] mobile:text-[13px] xsmall:text-[8px] font-[700] leading-normal text-[#B5B5B5] hover:text-blue-500 duration-200">
          Cancel
        </button>
        <button className="mid:w-[147px] mid:h-[38px] mobile:w-[120px] mobile:h-[38px] xsmall:w-[80px] flex items-center justify-center xsmall:h-[30px] rounded-md bg-[#EB7421] hover:bg-orange-400 duration-200">
          <span className="mid:text-[14px] mobile:text-[14px] xsmall:text-[10px] font-[700] leading-normal text-[#FFF]">
            {" "}
            Update & Save
          </span>
        </button>
      </section>
    </div>
  );
};

export default EditTraining;
