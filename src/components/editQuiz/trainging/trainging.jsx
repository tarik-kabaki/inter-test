import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import cloud from "../../quiz/assets/cloud.png";
import cancel from ".././trainging/assets/cancel.png";
import ClearRounded from "@mui/icons-material/ClearRounded";

const Trainging = () => {
  const [pdf, setPdf] = useState(null);
  const [err, setErr] = useState(null);

  const handlePdf = (data) => {
    if (data?.type === "application/pdf" || data?.type === "video/mp4") {
      setErr(null);
      setPdf(data);
    } else {
      setErr("Only Video, PDF and SlideShow files are allowed");
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    // Here is the File Uploaded right here  : acceptedFiles[0].name;
    if (
      acceptedFiles[0].type === "application/pdf" ||
      acceptedFiles[0].type === "video/mp4"
    ) {
      setPdf(acceptedFiles[0]);
      setErr(null);
    } else {
      setErr("Only Video, PDF and SlideShow files are allowed");
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    noClick: true,
  });

  return (
    <div className="mid:w-[213px] h-[311px] w-full rounded-md shadow-md bg-[#FFFFFF]">
      <section className="p-4">
        <div className="text-[#616161] text-[13px] font-[600] leading-normal mb-3">
          Training file
        </div>

        <section>
          <div
            {...getRootProps()}
            className={`mid:w-[174px] w-full ${
              pdf === null ? "h-[135px]" : "h-[94px]"
            }  rounded-md border-2 border-dashed flex items-center justify-center flex-col mb-2`}
          >
            <input {...getInputProps()} />
            <img src={cloud} className="mb-1" />
            <p className="text-[#B5B5B5] text-[11px] font-[400] leading-4 text-center w-[163px]">
              Drag and drop your File here Or{" "}
              <label className="text-[#1B8BCE] hover:underline cursor-pointer">
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) => handlePdf(e.target.files[0])}
                />
                <span> browse files</span>
              </label>
            </p>
            {err ? (
              <div className="text-red-500 text-[10px] font-[400] leading-4 text-center">
                Only JPG, PNG files are allowed
              </div>
            ) : null}
          </div>
        </section>

        {pdf ? (
          <div className="bg-[#47CA5B] mid:w-[174px] w-full h-[37px] rounded-md flex justify-between items-center p-2 mb-2">
            <section className="text-start text-[#FFFFFF] text-[10px] font-[500] leading-normal">
              <div>Completed</div>
              <p>
                {pdf.name.length > 20
                  ? `${pdf.name.slice(0, 20)}...`
                  : pdf.name}
              </p>
            </section>
            <button
              onClick={() => {
                setPdf(null);
                setErr(null);
              }}
              className="rounded-full w-6 h-6 bg-white text-[#B5B5B5] flex items-center justify-center hover:bg-black hover:text-white duration-200"
            >
              <ClearRounded style={{ fontSize: "17px" }} />
            </button>
          </div>
        ) : null}

        <div className="w-[159px] h-[26px] text-[10px] text-[#B4B4B4] font-[500] leading-normal mb-2">
          *Only Video, PDF and SlideShow files are allowed.!
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
            <input
              placeholder="https://youtu.be/1g4hoZx8-o4"
              className="text-[#616161] text-[11px] font-[500] leading-normal w-full placeholder:text-[#BBBBBB] focus:outline-none"
            />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Trainging;
