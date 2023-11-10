import React from "react";
import { useDropzone } from "react-dropzone";
import cloud from "../../quiz/assets/cloud.png";
import cancel from ".././trainging/assets/cancel.png";

const Trainging = () => {
  const { getRootProps, getInputProps } = useDropzone();
  return (
    <div className="mid:w-[213px] h-[311px] w-full rounded-md shadow-md bg-[#FFFFFF]">
      <section className="p-4">
        <div className="text-[#616161] text-[13px] font-[600] leading-normal mb-3">
          Training file
        </div>
        <div
          {...getRootProps()}
          className="mid:w-[174px] w-full h-[94px] rounded-md border-2 border-dashed flex items-center justify-center flex-col mb-2"
        >
          <input {...getInputProps()} />

          <img src={cloud} className="mb-1" />
          <p className="text-[#B5B5B5] text-[12px] font-[400] leading-4 text-center w-[163px]">
            Drag and drop your image here Or{" "}
            <span className="text-[#1B8BCE]">browse files</span>
          </p>
        </div>
        <div className="bg-[#47CA5B] mid:w-[174px] w-full h-[37px] rounded-md flex justify-between items-center p-2 mb-2">
          <section className="text-start text-[#FFFFFF] text-[10px] font-[500] leading-normal">
            <div>Completed</div>
            <p>workingAtHeight.pdf</p>
          </section>
          <button>
            <img src={cancel} />
          </button>
        </div>
        <div className="w-[159px] h-[26px] text-[11px] text-[#B4B4B4] font-[500] leading-normal mb-2">
          *Only Video, PDF and SlideShow files are allowed.
        </div>
        <div className="h-[13px] flex justify-center items-center gap-2">
          <hr className="h-[1px] border-[#EBEBEB] w-[75px]" />
          <span className="text-[#AAAAAA] font-[700] leading-normal text-[11px]">
            OR
          </span>
          <hr className="h-[1px] border-[#EBEBEB] w-[75px]" />
        </div>
        <section className="mid:w-[177px] w-full">
          <div className="text-[#616161] leading-normal text-[13px] font-[600] mb-1">
            Media URL
          </div>
          <div className="mid:w-[177px] w-full h-[30px] rounded-md border-[1px] border-[#DCDCDC] bg-[#FFFFFF] flex items-center pl-2">
            <span className="text-[#BBBBBB] text-[11px] font-[500] leading-normal">
              https://youtu.be/1g4hoZx8-o4
            </span>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Trainging;
