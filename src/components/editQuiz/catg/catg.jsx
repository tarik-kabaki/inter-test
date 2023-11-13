import React, { useState } from "react";
import security from "../assets/security.png";
import Arrow from "../assets/Arrow.png";
import blueicon from "../assets/blueicon.png";
import Vector from "../assets/Vector.png";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../catg/catg.css";

const Catg = () => {
  const [valid, setValid] = React.useState();
  const [topic, setTopic] = React.useState();
  const [category, setCategory] = React.useState();
  const [depart, setDepart] = React.useState();
  const [func, setFunc] = React.useState();
  const [assing, setAssing] = React.useState();
  const [trainigns, setTrainigns] = React.useState(null);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event) => {
    setValid(event.target.value);
    setTopic(event.target.value);
    setCategory(event.target.value);
    setAssing(event.target.value);
    setDepart(event.target.value);
    setFunc(event.target.value);
  };

  const handleTrainigns = (event) => {
    setTrainigns(event.target.value);
  };

  return (
    <div className="mid:w-[532px] xsmall:w-[330px] mobile:w-[450px] h-[311px] rounded-md shadow-md bg-[#FFFFFF] mid:p-6 p-5 mid:mb-0 mb-5">
      <section className="flex gap-3 mb-3">
        <section className="flex">
          <div className="mid:w-[156px] mobile:w-[120px] xsmall:w-[90px] h-[61px]">
            <section className="flex items-center justify-between p-1">
              <span className="mid:text-[12px] xsmall:text-[9px] font-[600] leading-normal text-[#616161]">
                Category
              </span>
              <button className="mid:text-[12px] mobile:text-[12px] xsmall:text-[9px] font-[600] leading-normal text-[#2C8EFF] hover:text-blue-300 duration-200">
                Add new +
              </button>
            </section>
            <FormControl>
              <Select
                defaultValue={10}
                value={category}
                onChange={handleChange}
                style={{
                  fontSize: "12px",
                  color: "#313131",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
                className="cat"
              >
                <MenuItem value={10} className="input-text">
                  <section className="flex items-center gap-2">
                    <img src={security} className="w-[16px] h-[16px]" />
                    <span className="text-[#313131] mid:text-[12px] mobile:text-[12px] xsmall:text-[9px] font-[600] leading-normal">
                      Safety
                    </span>
                  </section>
                </MenuItem>
                <MenuItem value={20} className="input-text">
                  <section className="flex items-center gap-2">
                    <img src={security} className="w-[18px] h-[18px]" />
                    <span className="text-[#313131] mid:text-[12px] mobile:text-[12px] xsmall:text-[9px] font-[600] leading-normal">
                      Safety 2
                    </span>
                  </section>
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </section>
        <section className="flex">
          <div className="mid:w-[196px] mobile:w-[170px] xsmall:w-[110px] h-[61px]">
            <section className="flex items-center justify-between p-1">
              <span className="mid:text-[12px] mobile:text-[12px] xsmall:text-[9px] font-[600] leading-normal text-[#616161]">
                Topic
              </span>
              <button className="mid:text-[12px] mobile:text-[12px] xsmall:text-[9px] font-[600] leading-normal text-[#2C8EFF] hover:text-blue-300 duration-200">
                Add new +
              </button>
            </section>

            <FormControl>
              <Select
                defaultValue={10}
                value={topic}
                onChange={handleChange}
                style={{
                  fontSize: "12px",
                  color: "#313131",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
                className="topi"
              >
                <MenuItem value={10} className="input-text">
                  <section className="flex items-center gap-2">
                    <img src={blueicon} className="w-[18px] h-[18px]" />
                    <span className="text-[#313131] mid:text-[12px] mobile:text-[12px] xsmall:text-[9px] font-[600] leading-normal">
                      VCA
                    </span>
                  </section>
                </MenuItem>
                <MenuItem value={20} className="input-text">
                  <section className="flex items-center gap-2">
                    <img src={blueicon} className="w-[18px] h-[18px]" />
                    <span className="text-[#313131] mid:text-[12px] mobile:text-[12px] xsmall:text-[9px] font-[600] leading-normal">
                      VCA 2
                    </span>
                  </section>
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </section>
        <section className="flex">
          <div className="mid:w-[104px] mobile:w-[104px] xsmall:w-[70px] h-[61px]">
            <section className="flex p-1">
              <span className="mid:text-[12px] mobile:text-[12px] xsmall:text-[9px] font-[600] leading-normal text-[#616161]">
                Valid For
              </span>
            </section>
            <FormControl>
              <Select
                defaultValue={10}
                value={valid}
                onChange={handleChange}
                style={{
                  fontSize: "12px",
                  color: "#313131",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
                className="vali"
              >
                <MenuItem value={10} className="input-text">
                  1 year
                </MenuItem>
                <MenuItem value={20} className="input-text">
                  2 year
                </MenuItem>
                <MenuItem value={30} className="input-text">
                  3 year
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </section>
      </section>
      <div className="flex gap-3 mb-2">
        <section className="flex">
          <div className="mid:w-[301px] mobile:w-[240px] xsmall:w-[165px] h-[61px]">
            <section className="flex items-center justify-between p-1">
              <span className="mid:text-[12px] mobile:text-[12px] xsmall:text-[9px] font-[600] leading-normal text-[#616161]">
                Training
              </span>
            </section>

            {trainigns ? (
              <div className="w-full h-[36px] flex items-center  justify-between p-2 rounded-md bg-[#FFFFFF] border-[#DCDCDC] border-[1px] ">
                <span className="flex items-center gap-2">
                  <span className="text-[#313131] mid:text-[12px] mobile:text-[12px] xsmall:text-[9px] font-[600] leading-normal">
                    {trainigns}
                  </span>
                </span>
                <section className="flex items-center gap-3 ">
                  <img src={blueicon} />
                  <button
                    onClick={() => setTrainigns(null)}
                    className=" hover:opacity-50 duration-200"
                  >
                    <img src={Vector} />
                  </button>
                </section>
              </div>
            ) : (
              <FormControl>
                <Select
                  defaultValue={"Working at height"}
                  value={trainigns}
                  onChange={handleTrainigns}
                  style={{
                    fontSize: "12px",
                    color: "#313131",
                    fontWeight: "600",
                    lineHeight: "normal",
                  }}
                  className="train"
                >
                  <MenuItem value={"Working at height"} className="input-text">
                    <div className="w-full h-[36px] flex items-center justify-between rounded-md  ">
                      <span className="flex items-center gap-2">
                        <span className="text-[#313131] mid:text-[12px] mobile:text-[12px] xsmall:text-[9px] font-[600] leading-normal">
                          Working at height
                        </span>
                      </span>
                      <section className="flex items-center gap-3 ">
                        <img src={blueicon} />
                      </section>
                    </div>
                  </MenuItem>
                  <MenuItem
                    value={"Working at height 2"}
                    className="input-text"
                  >
                    <div className="w-full h-[36px] flex items-center justify-between  rounded-md  ">
                      <span className="flex items-center gap-2">
                        <span className="text-[#313131] mid:text-[12px] mobile:text-[12px] xsmall:text-[9px] font-[600] leading-normal">
                          Working at height 2
                        </span>
                      </span>
                      <section className="flex items-center gap-3 ">
                        <img src={blueicon} />
                      </section>
                    </div>
                  </MenuItem>
                </Select>
              </FormControl>
            )}
          </div>
        </section>
        <section className="flex">
          <div className="mid:w-[167px] mobile:w-[160px] xsmall:w-[120px] h-[61px]">
            <section className="flex items-center justify-between p-1">
              <span className="mid:text-[12px] mobile:text-[12px] xsmall:text-[9px] font-[600] leading-normal text-[#616161]">
                Assign To
              </span>
            </section>

            <FormControl>
              <Select
                defaultValue={10}
                value={assing}
                onChange={handleChange}
                style={{
                  fontSize: "12px",
                  color: "#313131",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
                className="ass"
              >
                <MenuItem value={10} className="input-text">
                  <section className="flex items-center gap-2">
                    <span className="text-[#313131] mid:text-[12px] mobile:text-[12px] xsmall:text-[9px] font-[600] leading-normal">
                      Internal workers
                    </span>
                  </section>
                </MenuItem>
                <MenuItem value={20} className="input-text">
                  <section className="flex items-center gap-2">
                    <span className="text-[#313131] mid:text-[12px] mobile:text-[12px] xsmall:text-[9px] font-[600] leading-normal">
                      Internal workers 2
                    </span>
                  </section>
                </MenuItem>
                <MenuItem value={30} className="input-text">
                  <section className="flex items-center gap-2">
                    <span className="text-[#313131] mid:text-[12px] mobile:text-[12px] xsmall:text-[9px] font-[600] leading-normal">
                      Internal workers 3
                    </span>
                  </section>
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </section>
      </div>
      <div className="flex gap-3">
        <section>
          <section className="flex mb-2 relative">
            <button className="mid:w-[167px] mobile:w-[167px] xsmall:w-[120px] h-[58px]">
              <section className="flex items-center justify-between p-1">
                <span className="mid:text-[12px] mobile:text-[12px] xsmall:text-[9px] font-[600] leading-normal text-[#616161]">
                  Departments
                </span>
                <button className="text-[10px] font-[600] leading-normal text-[#B8B8B8]">
                  Optional
                </button>
              </section>
              <FormControl>
                <Select
                  defaultValue={10}
                  value={depart}
                  onChange={handleChange}
                  style={{
                    fontSize: "12px",
                    color: "#313131",
                    fontWeight: "600",
                    lineHeight: "normal",
                  }}
                  className="dept"
                >
                  <MenuItem value={10} className="input-text">
                    <section className="flex items-center gap-2">
                      <span className="text-[#888888] mid:text-[12px] mobile:text-[12px] xsmall:text-[9px] font-[400] leading-normal italic">
                        Internal workers
                      </span>
                    </section>
                  </MenuItem>
                  <MenuItem value={20} className="input-text">
                    <section className="flex items-center gap-2">
                      <span className="text-[#888888] mid:text-[12px] mobile:text-[12px] xsmall:text-[9px] font-[400] leading-normal italic">
                        Internal workers 2
                      </span>
                    </section>
                  </MenuItem>
                </Select>
              </FormControl>
            </button>
          </section>
          <section className="flex">
            <div className="mid:w-[167px] mobile:w-[167px] xsmall:w-[120px] h-[58px]">
              <section className="flex items-center justify-between p-1">
                <span className="mid:text-[12px] mobile:text-[12px] xsmall:text-[9px] font-[600] leading-normal text-[#616161]">
                  Functions
                </span>
                <button className="text-[10px] font-[600] leading-normal text-[#B8B8B8]">
                  Optional
                </button>
              </section>

              <FormControl>
                <Select
                  defaultValue={10}
                  value={func}
                  onChange={handleChange}
                  style={{
                    fontSize: "12px",
                    color: "#313131",
                    fontWeight: "600",
                    lineHeight: "normal",
                  }}
                  className="dept"
                >
                  <MenuItem value={10} className="input-text">
                    <section className="flex items-center gap-2">
                      <span className="text-[#888888] mid:text-[12px] mobile:text-[12px] xsmall:text-[9px] font-[400] leading-normal italic">
                        Select departments
                      </span>
                    </section>
                  </MenuItem>
                  <MenuItem value={20} className="input-text">
                    <section className="flex items-center gap-2">
                      <span className="text-[#888888] mid:text-[12px] mobile:text-[12px] xsmall:text-[9px] font-[400] leading-normal italic">
                        Select departments 2
                      </span>
                    </section>
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </section>
        </section>
        <section className="flex">
          <div className="mid:w-[304px] mobile:w-[235px] xsmall:w-[165px] h-[127px]">
            <section className="flex items-center justify-between p-1">
              <span className="mid:text-[12px] mobile:text-[12px] xsmall:text-[9px] font-[600] leading-normal text-[#616161]">
                Functions
              </span>
              <button className="text-[10px] font-[600] leading-normal text-[#B8B8B8]">
                Optional
              </button>
            </section>
            <textarea
              placeholder="Type here.."
              className="w-full h-[102px] max-h-[102px] rounded-md bg-[#FFFFFF] border-[#DCDCDC] border-[1px] text-[12px] italic font-[400] leading-normal p-2 focus:outline-none"
            ></textarea>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Catg;

/*     <div className="w-full h-[36px] flex items-center  justify-between p-2 rounded-md bg-[#FFFFFF] border-[#DCDCDC] border-[1px] ">
              <span className="flex items-center gap-2">
                <span className="text-[#313131] mid:text-[12px] mobile:text-[12px] xsmall:text-[9px] font-[600] leading-normal">
                  Working at height
                </span>
              </span>
              <section className="flex items-center gap-3 ">
                <img src={blueicon} />
                <button>
                  <img src={Vector} />
                </button>
              </section>
            </div> */
