import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import cloud from "../../quiz/assets/cloud.png";
import ClearRounded from "@mui/icons-material/ClearRounded";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [err, setRrr] = useState(null);

  const verifyImage = (data) => {
    if (data?.size < 2065856) {
      if (data?.type === "image/png" || data?.type === "image/jpeg") {
        setImage(data);
        setRrr(null);
      } else {
        setRrr("File not supported");
      }
    } else {
      setRrr("File not supported");
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    // Here is the File Uploaded right here  : acceptedFiles[0].name;
    if (
      acceptedFiles[0].type === "image/png" ||
      acceptedFiles[0].type === "image/jpeg"
    ) {
      setImage(acceptedFiles[0]);
      setRrr(null);
    } else {
      setRrr("Only JPG, PNG files are allowed");
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    noClick: true,
  });

  return (
    <div className="mid:w-[329px] h-[311px] w-full  rounded-md shadow-md bg-[#FFFFFF] mid:mb-0 mb-5">
      <section className="p-4">
        <div className="text-[#616161] leading-normal text-[13px] font-[600] mb-3 flex justify-between">
          <span>Image</span>
          {image ? (
            <button
              className="text-[#8b8b8b] hover:text-red-500 duration-200"
              onClick={() => {
                setImage(null);
                setRrr(null);
              }}
            >
              <ClearRounded style={{ fontSize: "20px" }} />
            </button>
          ) : null}
        </div>
        {image ? (
          <section className="w-full flex justify-center">
            <img
              src={URL.createObjectURL(image)}
              className="mid:w-[294px] h-[202px] object-contain"
            />
          </section>
        ) : (
          <section>
            <div
              {...getRootProps()}
              className="mid:w-[294px] h-[202px] w-full rounded-md border-2 border-dashed flex items-center justify-center flex-col"
            >
              <input {...getInputProps()} />
              <img src={cloud} className="mb-1" />
              <p className="text-[#B5B5B5] text-[12px] font-[400] leading-4 text-center w-[163px] mb-2">
                Drag and drop your image here Or{" "}
                <label className="text-[#1B8BCE] hover:underline cursor-pointer">
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={(e) => verifyImage(e.target.files[0])}
                  />
                  <span> browse files</span>
                </label>
              </p>
              {err ? (
                <div className="text-red-500 text-[12px] font-[400] leading-4 text-center">
                  Only JPG, PNG files are allowed
                </div>
              ) : null}
            </div>
          </section>
        )}
      </section>
      <span className="text-[#B4B4B4] font-[600] leading-normal text-[11px] flex justify-center">
        *Only JPG, PNG files are allowed. Image must be less than 2 MB
      </span>
    </div>
  );
};

export default ImageUpload;
