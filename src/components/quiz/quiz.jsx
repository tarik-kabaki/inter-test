import React from "react";
import { useDropzone } from "react-dropzone";
import cloud from "./../quiz/assets/cloud.png";
import checkedbox from "./assets/checkedbox.png";
import checked from "./assets/checkbox.png";

const quizArray = [
  {
    id: 1,
    quistion: 1,
    quiz: "Dust-filter respirators may be used for continuous protection while silica sand is used as the blasting abrasive.",
  },
  {
    id: 2,
    quistion: 1,
    quiz: "Dust-filter respirators may be used for continuous protection while silica sand is used as the blasting abrasive.",
  },
];

const Quiz = () => {
  const { getRootProps, getInputProps } = useDropzone();
  return (
    <div className="mid:w-[1105px] mid:h-[642px] w-full h-auto rounded-md bg-[#FFF] shadow-md p-6">
      <div className="text-[13px] leading-normal font-[600] text-[#616161] mb-1">
        Training quiz
      </div>
      <p className="text-[11px] leading-normal font-[500] text-[#B4B4B4] mb-2">
        Here you can manage the questions by clicking on the “Add Question”
        button and choose from the available types of question. You can add up
        to 100 questions.
      </p>
      <hr className="w-full h-[1px] text-[#EBEBEB] mb-3" />
      {quizArray.map((item) => (
        <div className="mid:flex mid:w-[1053px] mid:h-[235px] w-full h-auto rounded-md border-[1px] border-[#EBEBEB] bg-[#F8F8F8] flex-shrink-0 mb-4 p-5 pl-8 gap-10">
          <section className="mid:w-[662px] mid:h-[190px] w-full h-full gap-10  relative">
            <div className="flex justify-between h-4 items-center w-full mb-3">
              <div className="text-[#313131] text-[15px] font-[700] leading-4">
                {` Question ${item.quistion}`}
              </div>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.00076 8.47107L9.88473 12.4477C10.2744 12.8497 10.5279 12.8538 10.9246 12.4477L11.7039 11.6496C12.0857 11.2589 12.1115 11.0024 11.7039 10.585L7.59193 6.37552L11.7043 2.16605C12.0894 1.77041 12.0969 1.50341 11.7043 1.10102L10.925 0.303378C10.5207 -0.110632 10.271 -0.0915067 9.88511 0.303378L6.00076 4.27997L2.11679 0.303753C1.73091 -0.0911317 1.48115 -0.110257 1.07689 0.303753L0.297626 1.1014C-0.0953839 1.50378 -0.0882587 1.77079 0.297626 2.16642L4.4096 6.37552L0.297626 10.585C-0.110009 11.0024 -0.0882587 11.2589 0.297626 11.6496L1.07652 12.4477C1.4699 12.8538 1.72341 12.8497 2.11642 12.4477L6.00076 8.47107Z"
                    fill="#C7C7C7"
                  />
                </svg>
              </button>
            </div>
            <div className=" p-3 w-full mid:h-[46px] rounded-md flex-shrink-0 border-[1px] border-[#EBEBEB] bg-[#FFF] mb-3">
              <p className="text-[12px] leading-normal font-[600] text-[#616161]">
                {item.quiz}
              </p>
            </div>
            <div className="w-full h-[37px] rounded-md flex-shrink-0 border-[1px] border-[#EBEBEB] bg-[#FFF] mb-3 flex items-center">
              <section className="p-3 flex items-center justify-between w-full">
                <span className="text-[12px] leading-normal font-[600] text-[#616161]">
                  True
                </span>
                <div className="flex items-center gap-2">
                  <button>
                    <img src={checked} className="h-[26px] w-[26px]" />
                  </button>
                  <button>
                    <img src={cloud} className="h-[17px] w-[24px]" />
                  </button>
                </div>
              </section>
            </div>
            <div className="w-full h-[37px] rounded-md flex-shrink-0 border-[1px] border-[#EBEBEB] bg-[#FFF] mb-3 flex items-center">
              <section className="p-3 flex items-center justify-between w-full">
                <span className="text-[12px] leading-normal font-[600] text-[#616161]">
                  False
                </span>
                <div className="flex items-center gap-2">
                  <button>
                    <img src={checkedbox} className="h-[26px] w-[26px]" />
                  </button>
                  <button>
                    <img src={cloud} className="h-[17px] w-[24px]" />
                  </button>
                </div>
              </section>
            </div>
          </section>
          <section className="mid:w-[294px] h-[186px] w-full relative">
            <div className="flex justify-between h-4 items-center w-full mb-3">
              <span className="text-[#616161] text-[13px] font-[600] leading-noraml">
                Question Image
              </span>
              <span className="text-[#B6B6B6] text-[12px] leading-normal font-[500]">
                Optional
              </span>
            </div>
            <div
              {...getRootProps()}
              className="mid:w-[294px] w-full h-[161px] rounded-md border-2 border-dashed flex items-center justify-center flex-col"
            >
              <input {...getInputProps()} />

              <img src={cloud} className="mb-1" />
              <p className="text-[#B5B5B5] text-[12px] font-[400] leading-4 text-center w-[163px]">
                Drag and drop your image here Or{" "}
                <span className="text-[#1B8BCE]">browse files</span>
              </p>
            </div>
          </section>
        </div>
      ))}
      <button className="w-full h-[40px] bg-[#E1EFFF] text-[#2C8EFF] text-[14px] font-[700] leading-4 flex justify-center rounded-md items-center hover:bg-[#3c97ff] hover:text-white duration-300">
        Add Question +
      </button>
    </div>
  );
};

export default Quiz;
