import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import cloud from "../../quiz/assets/cloud.png";

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    // Here is the File Uploaded right here  : acceptedFiles[0].name;
    setImage(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    noClick: true,
  });

  return (
    <div className="mid:w-[329px] h-[311px] w-full  rounded-md shadow-md bg-[#FFFFFF] mid:mb-0 mb-5">
      <section className="p-4">
        <div className="text-[#616161] leading-normal text-[13px] font-[600] mb-3">
          Image
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
              <p className="text-[#B5B5B5] text-[12px] font-[400] leading-4 text-center w-[163px]">
                Drag and drop your image here Or{" "}
                <label className="text-[#1B8BCE] hover:underline cursor-pointer">
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                  <span> browse files</span>
                </label>
              </p>
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
