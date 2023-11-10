import React, { useState } from "react";
import security from "../assets/security.png";
import Arrow from "../assets/Arrow.png";
import blueicon from "../assets/blueicon.png";
import Vector from "../assets/Vector.png";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Catg = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="mid:w-[532px] xsmall:w-[330px] mobile:w-[450px]  h-[311px] rounded-md shadow-md bg-[#FFFFFF] mid:p-6 p-5 mid:mb-0 mb-5">
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

            <div className="Model-List">
              <button
                className="w-full h-[36px] flex items-center  justify-between p-2 rounded-md bg-[#FFFFFF] border-[#DCDCDC] border-[1px]"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <section className="flex items-center gap-2">
                  <img src={security} className="w-[18px] h-[18px]" />
                  <span className="text-[#313131] mid:text-[12px] mobile:text-[12px] xsmall:text-[9px] font-[600] leading-normal">
                    Safety
                  </span>
                </section>
                <img src={Arrow} />
              </button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <section className="flex items-center gap-2 w-[120px]">
                    <span className="text-[#313131] text-[12px] font-[600] leading-normal">
                      Exemple
                    </span>
                  </section>
                </MenuItem>
              </Menu>
            </div>
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
            <div className="Model-List">
              <button
                className="w-full h-[36px] flex items-center  justify-between p-2 rounded-md bg-[#FFFFFF] border-[#DCDCDC] border-[1px]"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <section className="flex items-center gap-2">
                  <img src={blueicon} className="w-[18px] h-[18px]" />
                  <span className="text-[#313131] mid:text-[12px] mobile:text-[12px] xsmall:text-[9px] font-[600] leading-normal">
                    VCA
                  </span>
                </section>
                <img src={Arrow} />
              </button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  {" "}
                  <section className="flex items-center gap-2 w-[120px]">
                    <span className="text-[#313131] text-[12px] font-[600] leading-normal">
                      Exemple
                    </span>
                  </section>
                </MenuItem>
              </Menu>
            </div>
          </div>
        </section>
        <section className="flex">
          <div className="mid:w-[104px] mobile:w-[104px] xsmall:w-[70px] h-[61px]">
            <section className="flex p-1">
              <span className="mid:text-[12px] mobile:text-[12px] xsmall:text-[9px] font-[600] leading-normal text-[#616161]">
                Valid For
              </span>
            </section>
            <div className="Model-List">
              <button
                className="w-full h-[36px] flex items-center  justify-between p-2 rounded-md bg-[#FFFFFF] border-[#DCDCDC] border-[1px]"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <section className="flex items-center gap-2">
                  <span className="text-[#313131] mid:text-[12px] mobile:text-[12px] xsmall:text-[9px] font-[600] leading-normal">
                    year 1
                  </span>
                </section>
                <img src={Arrow} />
              </button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  {" "}
                  <section className="flex items-center gap-2 w-[120px]">
                    <span className="text-[#313131] text-[12px] font-[600] leading-normal">
                      Exemple
                    </span>
                  </section>
                </MenuItem>
              </Menu>
            </div>
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

            <div className="w-full h-[36px] flex items-center  justify-between p-2 rounded-md bg-[#FFFFFF] border-[#DCDCDC] border-[1px] ">
              <span className="flex items-center gap-2">
                <span className="text-[#313131] mid:text-[12px] mobile:text-[12px] xsmall:text-[9px] font-[600] leading-normal">
                  Working at height
                </span>
              </span>
              <section className="flex items-center gap-3 ">
                <img src={blueicon} />

                <button>
                  {" "}
                  <img src={Vector} />
                </button>
              </section>
            </div>
          </div>
        </section>
        <section className="flex">
          <div className="mid:w-[167px] mobile:w-[160px] xsmall:w-[120px] h-[61px]">
            <section className="flex items-center justify-between p-1">
              <span className="mid:text-[12px] mobile:text-[12px] xsmall:text-[9px] font-[600] leading-normal text-[#616161]">
                Assign To
              </span>
            </section>
            <div className="Model-List">
              <button
                className="w-full h-[36px] flex items-center  justify-between p-2 rounded-md bg-[#FFFFFF] border-[#DCDCDC] border-[1px]"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <section className="flex items-center gap-2">
                  <span className="text-[#313131] mid:text-[12px] mobile:text-[12px] xsmall:text-[9px] font-[600] leading-normal">
                    Internal workers
                  </span>
                </section>
                <img src={Arrow} />
              </button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  {" "}
                  <section className="flex items-center gap-2 w-[120px]">
                    <span className="text-[#313131] text-[12px] font-[600] leading-normal">
                      Exemple
                    </span>
                  </section>
                </MenuItem>
              </Menu>
            </div>
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
              <div className="Model-List">
                <button
                  className="w-full h-[36px] flex items-center  justify-between p-2 rounded-md bg-[#FFFFFF] border-[#DCDCDC] border-[1px]"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <section className="flex items-center gap-2">
                    <span className="text-[#888888] mid:text-[12px] mobile:text-[12px] xsmall:text-[9px] font-[400] leading-normal italic">
                      Internal workers
                    </span>
                  </section>
                  <img src={Arrow} />
                </button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    {" "}
                    <section className="flex items-center gap-2 w-[120px]">
                      <span className="text-[#313131] text-[12px] font-[600] leading-normal">
                        Exemple
                      </span>
                    </section>
                  </MenuItem>
                </Menu>
              </div>
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
              <div className="Model-List">
                <button
                  className="w-full h-[36px] flex items-center  justify-between p-2 rounded-md bg-[#FFFFFF] border-[#DCDCDC] border-[1px]"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <section className="flex items-center gap-2">
                    <span className="text-[#888888] mid:text-[12px] mobile:text-[12px] xsmall:text-[9px] font-[400] leading-normal italic">
                      Select departments
                    </span>
                  </section>
                  <img src={Arrow} />
                </button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    {" "}
                    <section className="flex items-center gap-2 w-[120px]">
                      <span className="text-[#313131] text-[12px] font-[600] leading-normal">
                        Exemple
                      </span>
                    </section>
                  </MenuItem>
                </Menu>
              </div>
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
              className="w-full h-[102px] rounded-md bg-[#FFFFFF] border-[#DCDCDC] border-[1px] text-[12px] italic font-[400] leading-normal p-2 focus:outline-none"
            ></textarea>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Catg;
