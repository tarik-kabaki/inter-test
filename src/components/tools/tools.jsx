import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import info from "./assets/info.png";
import plus from "./assets/plus.png";
import mines from "./assets/mines.png";
import right from "./assets/right.png";
import left from "./assets/left.png";
import "../tools/tools.css";
import { alpha, styled } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import { useDispatch, useSelector } from "react-redux";
import { toolDec, toolInc } from "../../redux/toolsSlice";
import { Scrollbar } from "swiper/modules";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

const Tools = () => {
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

  const dispatch = useDispatch();
  const toolsArray = useSelector((item) => item.tools.toolsArray);
  const handleMines = (id) => {
    dispatch(toolDec(id));
  };

  const handleInc = (id) => {
    dispatch(toolInc(id));
  };

  const swiperRef = useRef();

  return (
    <section className="w-full flex justify-center">
      <div className="w-[80%] flex items-center gap-3">
        <button onClick={() => swiperRef.current?.slidePrev()}>
          <img src={left} />
        </button>
        <Swiper
          slidesPerView={6}
          spaceBetween={1}
          scrollbar={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1500: {
              slidesPerView: 6,
              spaceBetween: 2,
            },
            1470: {
              slidesPerView: 5,
              spaceBetween: 2,
            },
            1065: {
              slidesPerView: 4,
              spaceBetween: 2,
            },

            900: {
              slidesPerView: 3,
              spaceBetween: 2,
            },
            650: {
              slidesPerView: 2,
            },
            450: {
              slidesPerView: 1,
            },
            200: {
              slidesPerView: 1,
            },
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Scrollbar, Navigation]}
          className="mySwiper mb-5"
        >
          {toolsArray.map((item) => (
            <SwiperSlide className="mt-5">
              <div className="w-[178px] h-[158px] rounded-md bg-[#FFF] shadow-md p-2">
                <img src={info} className="mb-1 w-[16px] h-[16px]" />
                <div className="flex justify-center">
                  <section className="w-[153px] h-[110px] flex items-center flex-col">
                    <img src={item.image} className="w-[32px] h-[35px] mb-2" />
                    <span className="text-[#313131] text-[12px] font-[600] leading-normal mb-5">
                      {item.name}
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
            </SwiperSlide>
          ))}
        </Swiper>
        <button onClick={() => swiperRef.current?.slideNext()}>
          <img src={right} />
        </button>
      </div>
    </section>
  );
};

export default Tools;
