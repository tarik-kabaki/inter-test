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
import { alpha, styled } from "@mui/material/styles";
import { green, grey, pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import { useDispatch, useSelector } from "react-redux";
import { toolDec, toolInc } from "../../redux/toolsSlice";

const PinkSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: green[400],
    "&:hover": {
      backgroundColor: alpha(green[400], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: green[400],
  },
}));

const label = { inputProps: { "aria-label": "Color switch demo" } };

const Tools = () => {
  const dispatch = useDispatch();
  const toolsArray = useSelector((item) => item.tools.toolsArray);
  const handleMines = (id) => {
    dispatch(toolDec(id));
  };

  const handleInc = (id) => {
    dispatch(toolInc(id));
  };

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
                  <img src={item.image} className="w-[32px] h-[35px] mb-2" />
                  <span className="text-[#313131] text-[12px] font-[600] leading-normal mb-5">
                    Random questions
                  </span>

                  {item.type === "check" ? (
                    <div className="w-[76px] h-[30px] rounded-md flex items-center justify-center ">
                      <span className="text-[#2C8EFF] leading-normal text-[14px] font-[600]">
                        {item.type === "check" ? (
                          <PinkSwitch {...label} defaultChecked />
                        ) : (
                          item.val + item.type
                        )}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => handleMines(item.id)}
                        className="text-[#C8C8C8] bg-[#F1F1F1] h-[30px] w-[34px] rounded-md flex justify-center items-center"
                      >
                        <img src={mines} />
                      </button>

                      <div className="w-[76px] h-[30px] border-[1px] border-[#2C8EFF] rounded-md flex items-center justify-center ">
                        <span className="text-[#2C8EFF] leading-normal text-[14px] font-[600]">
                          {item.type === "check" ? (
                            <PinkSwitch {...label} defaultChecked />
                          ) : (
                            item.val + item.type
                          )}
                        </span>
                      </div>
                      <button
                        onClick={() => handleInc(item.id)}
                        className="bg-[#F1F1F1] h-[30px] w-[34px] rounded-md flex justify-center items-center"
                      >
                        <img src={plus} />
                      </button>
                    </div>
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
