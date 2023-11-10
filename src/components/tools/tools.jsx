import React from "react";
import dice from "./assets/dice.png";
import done from "./assets/done.png";
import figure from "./assets/figure.png";
import time from "./assets/time.png";
import wbecam from "./assets/wbecam.png";
import zone from "./assets/zone.png";
import info from "./assets/info.png";
import plus from "./assets/plus.png";
import mines from "./assets/mines.png";
import check from "./assets/check.png";
import right from "./assets/right.png";
import left from "./assets/left.png";

const toolsArray = [
  {
    id: 1,
    type: dice,
    val: "10",
    str: true,
  },
  {
    id: 2,
    type: time,
    val: "45s",
    str: true,
  },
  {
    id: 3,
    type: done,
    val: "80%",
    str: true,
  },
  {
    id: 4,
    type: wbecam,
    val: check,
    str: false,
  },
  {
    id: 5,
    type: zone,
    val: "30min",
    str: true,
  },
  {
    id: 6,
    type: figure,
    val: "3",
    str: true,
  },
];

const Tools = () => {
  return (
    <section>
      <div className="flex items-center gap-5">
        <button>
          <img src={left} />
        </button>
        <section className="flex items-center justify-center flex-wrap gap-2 mb-5">
          {toolsArray.map((item) => (
            <div className="w-[178px] h-[158px] rounded-md bg-[#FFF] shadow-md p-2">
              <img src={info} className="mb-1 w-[16px] h-[16px]" />
              <div className="flex justify-center">
                <section className="w-[153px] h-[110px] flex items-center flex-col">
                  <img src={item.type} className="w-[32px] h-[35px] mb-2" />
                  <span className="text-[#313131] text-[12px] font-[600] leading-normal mb-5">
                    Random questions
                  </span>
                  {item.str ? (
                    <div className="flex items-center justify-center gap-2">
                      <button className="text-[#C8C8C8] bg-[#F1F1F1] h-[30px] w-[34px] rounded-md flex justify-center items-center">
                        <img src={mines} />
                      </button>
                      <div className="w-[76px] h-[30px] border-[1px] border-[#2C8EFF] rounded-md flex items-center justify-center ">
                        <span className="text-[#2C8EFF] leading-normal text-[14px] font-[600]">
                          {item.str ? item.val : <img src={item.val} />}
                        </span>
                      </div>
                      <button className="text-[#C8C8C8] bg-[#F1F1F1] h-[30px] w-[34px] rounded-md flex justify-center items-center">
                        <img src={plus} />
                      </button>
                    </div>
                  ) : (
                    <button>
                      <img src={item.val} />
                    </button>
                  )}
                </section>
              </div>
            </div>
          ))}
        </section>
        <button>
          <img src={right} />
        </button>
      </div>
      <div className="w-full h-[4px] bg-[#E1EBF0] flex justify-end mb-5 rounded-lg">
        <div className="w-[70%] h-[4px] bg-[#2C8EFF] rounded-lg"></div>
      </div>
    </section>
  );
};

export default Tools;
