import React from "react";
import { useDropzone } from "react-dropzone";
import cloud from "../../quiz/assets/cloud.png";

const ImageUpload = () => {
  const { getRootProps, getInputProps } = useDropzone();
  return (
    <div className="mid:w-[329px] h-[311px] w-full w-full rounded-md shadow-md bg-[#FFFFFF] mid:mb-0 mb-5">
      <section className="p-4">
        <div className="text-[#616161] leading-normal text-[13px] font-[600] mb-3">
          Image
        </div>
        <div
          {...getRootProps()}
          className="mid:w-[294px] h-[202px] w-full rounded-md border-2 border-dashed flex items-center justify-center flex-col"
        >
          <input {...getInputProps()} />

          <img src={cloud} className="mb-1" />
          <p className="text-[#B5B5B5] text-[12px] font-[400] leading-4 text-center w-[163px]">
            Drag and drop your image here Or{" "}
            <span className="text-[#1B8BCE]">browse files</span>
          </p>
        </div>
      </section>
      <span className="text-[#B4B4B4] font-[600] leading-normal text-[11px] flex justify-center">
        *Only JPG, PNG files are allowed. Image must be less than 2 MB
      </span>
    </div>
  );
};

export default ImageUpload;
