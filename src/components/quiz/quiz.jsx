import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import cloud from "./../quiz/assets/cloud.png";
import checkedbox from "./assets/checkedbox.png";
import checked from "./assets/checkbox.png";
import ClearRounded from "@mui/icons-material/ClearRounded";
import { useSelector, useDispatch } from "react-redux";
import "./quiz.css";
import DoneRounded from "@mui/icons-material/DoneRounded";
import {
  addQuiz,
  handCheck,
  handUncheck,
  imageDispatch,
  removeQuiz,
  rmQuiz,
} from "../../redux/quizSlice";
import { TextareaAutosize } from "@mui/material";

const Quiz = () => {
  const quizArray = useSelector((state) => state.quiz.quizs);
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [id, setId] = useState(null);
  const [check, setCheck] = useState(false);
  const [uncheck, setUncheck] = useState(false);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.style.height = "auto";
    inputRef.current.style.height = inputRef.current.scrollHeight + "px";
  }, [input]);

  useEffect(() => {
    if (image) {
      dispatch(imageDispatch({ image: image, id: id }));
      setImage(null);
      setId(null);
    }
  }, [image]);

  const onDrop = useCallback((acceptedFiles) => {
    setImage(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    noClick: true,
  });

  const handleAddQuiz = () => {
    dispatch(
      addQuiz({
        id: quizArray.length < 1 ? 1 : quizArray[quizArray.length - 1].id + 1,

        quiz: "Dust-filter respirators may be used for continuous protection while silica sand is used as the blasting abrasive.",
        image: null,
      })
    );
  };

  const handleRemoveQuiz = (id) => {
    dispatch(rmQuiz(id));
  };

  const handleCheck = (id) => {
    dispatch(handCheck({ id: id }));
  };

  const handleUnCheck = (id) => {
    dispatch(handUncheck({ id: id }));
  };

  return (
    <div className="mid:w-[1105px] mid:h-auto w-full h-auto rounded-md bg-[#FFF] shadow-md p-6">
      <div className="text-[13px] leading-normal font-[600] text-[#616161] mb-1">
        Training quiz
      </div>
      <p className="text-[11px] leading-normal font-[500] text-[#B4B4B4] mb-2">
        Here you can manage the questions by clicking on the “Add Question”
        button and choose from the available types of question. You can add up
        to 100 questions.
      </p>
      <hr className="w-full h-[1px] text-[#EBEBEB] mb-3" />
      {quizArray.length === 0 ? (
        <div className="mid:flex mid:w-[1053px] mid:h-[235px] w-full h-[235px] rounded-md border-[1px] border-[#EBEBEB] bg-[#F8F8F8] flex items-center justify-center text-[24px] text-[#868686]  mb-4 p-5 pl-8 gap-10">
          Add more questions
        </div>
      ) : (
        quizArray.map((item) => (
          <div className="mid:flex mid:w-[1053px] mid:h-auto w-full h-auto rounded-md border-[1px] border-[#EBEBEB] bg-[#F8F8F8] flex-shrink-0 mb-4 p-5 pl-8 gap-10">
            <section className="mid:w-[662px] mid:h-auto w-full h-full gap-10 relative">
              <div className="flex justify-between h-4 items-center w-full mb-3">
                <div className="text-[#313131] text-[15px] font-[700] leading-4">
                  {` Question ${item.id}`}
                </div>
                <button
                  onClick={() => handleRemoveQuiz(item.id)}
                  className="hover:text-red-500 duration-300 text-[#B6B6B6]"
                >
                  <ClearRounded style={{ fontSize: "20px" }} />
                </button>
              </div>
              <div className="p-3 flex items-center w-full mid:h-auto rounded-md flex-shrink-0 border-[1px] border-[#EBEBEB] bg-[#FFF] mb-3">
                <textarea
                  ref={inputRef}
                  onChange={(e) => setInput(e.target.value)}
                  className="text-[12px] leading-normal font-[600] text-[#616161] w-full focus:outline-none h-auto resize-none placeholder:text-[#616161]"
                  placeholder={item.quiz}
                  rows={1}
                />
              </div>
              <div className="w-full h-[37px] rounded-md flex-shrink-0 border-[1px] border-[#EBEBEB] bg-[#FFF] mb-3 flex items-center">
                <section className="p-3 flex items-center justify-between w-full">
                  <span className="text-[12px] leading-normal font-[600] text-[#616161]">
                    True
                  </span>
                  <div className="flex items-center gap-2">
                    <button onClick={() => handleCheck(item.id)}>
                      {item.check ? (
                        <img src={checkedbox} />
                      ) : (
                        <img src={checked} />
                      )}
                    </button>

                    <label className=" cursor-pointer">
                      <img src={cloud} className="h-[17px] w-[24px]" />
                      <input type="file" style={{ display: "none" }} />
                    </label>
                  </div>
                </section>
              </div>
              <div className="w-full h-[37px] rounded-md flex-shrink-0 border-[1px] border-[#EBEBEB] bg-[#FFF] mb-3 flex items-center">
                <section className="p-3 flex items-center justify-between w-full">
                  <span className="text-[12px] leading-normal font-[600] text-[#616161]">
                    False
                  </span>
                  <div className="flex items-center gap-2">
                    <button onClick={() => handleUnCheck(item.id)}>
                      {item.uncheck ? (
                        <img src={checkedbox} />
                      ) : (
                        <img src={checked} />
                      )}
                    </button>

                    <label className=" cursor-pointer ">
                      <img src={cloud} className="h-[17px] w-[24px]" />
                      <input type="file" style={{ display: "none" }} />
                    </label>
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
              {item.image ? (
                <section className="w-full flex justify-center">
                  <img
                    src={URL.createObjectURL(item.image)}
                    className="mid:w-[294px] w-full h-[161px] object-contain"
                  />
                </section>
              ) : (
                <section onDrop={() => setId(item.id)}>
                  <div
                    {...getRootProps()}
                    className="mid:w-[294px] w-full h-[161px] rounded-md border-2 border-dashed flex items-center justify-center flex-col"
                  >
                    <input {...getInputProps()} />
                    <img src={cloud} className="mb-1" />
                    <p className="text-[#B5B5B5] text-[12px] font-[400] leading-4 text-center w-[163px]">
                      Drag and drop your image here Or{" "}
                      <label className="text-[#1B8BCE] hover:underline cursor-pointer">
                        <input
                          type="file"
                          style={{ display: "none" }}
                          onChange={(e) => {
                            setImage(e.target.files[0]);
                          }}
                        />
                        <span onClick={() => setId(item.id)}>
                          {" "}
                          browse files
                        </span>
                      </label>
                    </p>
                  </div>
                </section>
              )}
            </section>
          </div>
        ))
      )}

      <button
        onClick={handleAddQuiz}
        className="w-full h-[40px] bg-[#E1EFFF] text-[#2C8EFF] text-[14px] font-[700] leading-4 flex justify-center rounded-md items-center hover:bg-[#3c97ff] hover:text-white duration-300"
      >
        Add Question +
      </button>
    </div>
  );
};

export default Quiz;
