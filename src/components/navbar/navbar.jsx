import React, { useState } from "react";
import "./navbar.css";
import logo from "../navbar/assets/logo.png";
import english from "../navbar/assets/english.png";
import france from "../navbar/assets/france.png";
import germany from "../navbar/assets/germany.png";
import nederlands from "../navbar/assets/nederlands.png";
import spain from "../navbar/assets/spain.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Container } from "@mui/material";
import Model from "../model/model";
import Menus from "@mui/icons-material/Menu";
import Clear from "@mui/icons-material/Clear";
import SpaceDashboard from "@mui/icons-material/SpaceDashboard";
import Psychology from "@mui/icons-material/Psychology";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menu, setMenu] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="nav-container">
      <Container maxWidth="xl">
        <div className="nav-wrapper mid:container mid:md">
          <section>
            <img
              src={logo}
              className="mid:w-[150px] mid:h-[45px] w-[100px] h-[30px]"
            />
          </section>
          <section className="mid:flex items-center gap-5 mid:visible hidden">
            <div className="nav-search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                className="w-[15px] h-[15px]"
              >
                <path
                  d="M14.7536 13.5706L11.9212 10.7465C12.835 9.58229 13.3309 8.14459 13.329 6.66452C13.329 5.3464 12.9382 4.05789 12.2059 2.96191C11.4736 1.86594 10.4327 1.01173 9.21492 0.507309C7.99714 0.00288761 6.65713 -0.129092 5.36434 0.12806C4.07155 0.385212 2.88404 1.01995 1.952 1.952C1.01995 2.88404 0.385212 4.07155 0.12806 5.36434C-0.129092 6.65713 0.00288761 7.99714 0.507309 9.21492C1.01173 10.4327 1.86594 11.4736 2.96191 12.2059C4.05789 12.9382 5.3464 13.329 6.66452 13.329C8.14459 13.3309 9.58229 12.835 10.7465 11.9212L13.5706 14.7536C13.6481 14.8317 13.7402 14.8936 13.8417 14.9359C13.9432 14.9782 14.0521 15 14.1621 15C14.2721 15 14.381 14.9782 14.4825 14.9359C14.584 14.8936 14.6761 14.8317 14.7536 14.7536C14.8317 14.6761 14.8936 14.584 14.9359 14.4825C14.9782 14.381 15 14.2721 15 14.1621C15 14.0521 14.9782 13.9432 14.9359 13.8417C14.8936 13.7402 14.8317 13.6481 14.7536 13.5706ZM1.66613 6.66452C1.66613 5.67593 1.95928 4.70955 2.50851 3.88757C3.05774 3.06558 3.83838 2.42493 4.75172 2.04661C5.66506 1.6683 6.67007 1.56931 7.63966 1.76218C8.60925 1.95504 9.49988 2.43109 10.1989 3.13013C10.898 3.82916 11.374 4.71979 11.5669 5.68938C11.7597 6.65898 11.6607 7.66399 11.2824 8.57732C10.9041 9.49066 10.2635 10.2713 9.44148 10.8205C8.6195 11.3698 7.65311 11.6629 6.66452 11.6629C5.33887 11.6629 4.06751 11.1363 3.13013 10.1989C2.19275 9.26154 1.66613 7.99018 1.66613 6.66452Z"
                  fill="#BEBEBE"
                />
              </svg>
              <input placeholder="Quick search ..." className="nav-input" />
            </div>
            <ul className="flex items-center gap-8 nav-menu">
              <li>
                <button>Dashboard</button>
              </li>
              <li className="text-[#2C8EFF]">
                <button>Trainings</button>
              </li>
              <li>
                <button>Users</button>
              </li>
              <li>
                <button>
                  More <KeyboardArrowDown />
                </button>
              </li>
            </ul>
          </section>
          <section className="mid:flex items-center gap-7  hidden">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="19"
                viewBox="0 0 15 19"
                fill="none"
              >
                <path
                  d="M13.075 12.6562V12.677L13.0896 12.6916L14.95 14.552V15.4187H0.05V14.552L1.91036 12.6916L1.925 12.677V12.6562V7.96875C1.925 5.09878 3.45165 2.72334 6.10532 2.09239L6.14375 2.08326V2.04375V1.40625C6.14375 0.655739 6.74949 0.05 7.5 0.05C8.25051 0.05 8.85625 0.655739 8.85625 1.40625V2.04375V2.08329L8.89472 2.0924C11.5576 2.72333 13.075 5.10801 13.075 7.96875V12.6562ZM11.25 13.6438H11.3V13.5938V7.96875C11.3 6.79644 10.9431 5.72974 10.2886 4.95523C9.63337 4.17991 8.68189 3.7 7.5 3.7C6.31811 3.7 5.36663 4.17991 4.71142 4.95523C4.05689 5.72974 3.7 6.79644 3.7 7.96875V13.5938V13.6438H3.75H11.25ZM9.32432 16.4562C9.29759 17.437 8.48692 18.2313 7.5 18.2313C6.51308 18.2313 5.70241 17.437 5.67568 16.4562H9.32432Z"
                  fill="#A4A4A4"
                  stroke="white"
                  stroke-width="0.1"
                />
              </svg>
            </button>

            <div>
              <img
                className=" cursor-pointer"
                src={english}
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              />

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose} className="gap-2">
                  <img src={english} />
                  <span className="text-[#313131] text-[12px] leading-normal font-[400]">
                    English (US)
                  </span>
                </MenuItem>
                <MenuItem onClick={handleClose} className="gap-2">
                  <img src={france} />
                  <span className="text-[#ADADAD] text-[12px] leading-normal font-[400]">
                    Français (FR)
                  </span>
                </MenuItem>
                <MenuItem onClick={handleClose} className="gap-2">
                  <img src={nederlands} />
                  <span className="text-[#ADADAD] text-[12px] leading-normal font-[400]">
                    Nederlands (NL)
                  </span>
                </MenuItem>
                <MenuItem onClick={handleClose} className="gap-2">
                  <img src={spain} />
                  <span className="text-[#ADADAD] text-[12px] leading-normal font-[400]">
                    Español (ES)
                  </span>
                </MenuItem>
                <MenuItem onClick={handleClose} className="gap-2">
                  <img src={germany} />
                  <span className="text-[#ADADAD] text-[12px] leading-normal font-[400]">
                    Deutsch (DE)
                  </span>
                </MenuItem>
              </Menu>
            </div>
            <Model />
          </section>

          <button
            className="mid:hidden visible text-[black] "
            onClick={handleMenu}
          >
            <Menus />
          </button>
          <div
            className={`w-[300px] h-full fixed z-10 right-0 bottom-0 bg-[#ececec] ${
              menu ? " duration-500" : "translate-x-[400px] duration-500"
            } `}
          >
            <section>
              <div className="p-5 flex items-center gap-3" onClick={handleMenu}>
                <div className="p-2 rounded-full bg-red-500 hover:bg-black hover:text-white duration-300 cursor-pointer">
                  <Clear />
                </div>
              </div>
              <div className="p-5">
                {" "}
                <div className="w-full flex items-center gap-3 p-4 bg-[#F6F6F6] rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    className="w-[15px] h-[15px]"
                  >
                    <path
                      d="M14.7536 13.5706L11.9212 10.7465C12.835 9.58229 13.3309 8.14459 13.329 6.66452C13.329 5.3464 12.9382 4.05789 12.2059 2.96191C11.4736 1.86594 10.4327 1.01173 9.21492 0.507309C7.99714 0.00288761 6.65713 -0.129092 5.36434 0.12806C4.07155 0.385212 2.88404 1.01995 1.952 1.952C1.01995 2.88404 0.385212 4.07155 0.12806 5.36434C-0.129092 6.65713 0.00288761 7.99714 0.507309 9.21492C1.01173 10.4327 1.86594 11.4736 2.96191 12.2059C4.05789 12.9382 5.3464 13.329 6.66452 13.329C8.14459 13.3309 9.58229 12.835 10.7465 11.9212L13.5706 14.7536C13.6481 14.8317 13.7402 14.8936 13.8417 14.9359C13.9432 14.9782 14.0521 15 14.1621 15C14.2721 15 14.381 14.9782 14.4825 14.9359C14.584 14.8936 14.6761 14.8317 14.7536 14.7536C14.8317 14.6761 14.8936 14.584 14.9359 14.4825C14.9782 14.381 15 14.2721 15 14.1621C15 14.0521 14.9782 13.9432 14.9359 13.8417C14.8936 13.7402 14.8317 13.6481 14.7536 13.5706ZM1.66613 6.66452C1.66613 5.67593 1.95928 4.70955 2.50851 3.88757C3.05774 3.06558 3.83838 2.42493 4.75172 2.04661C5.66506 1.6683 6.67007 1.56931 7.63966 1.76218C8.60925 1.95504 9.49988 2.43109 10.1989 3.13013C10.898 3.82916 11.374 4.71979 11.5669 5.68938C11.7597 6.65898 11.6607 7.66399 11.2824 8.57732C10.9041 9.49066 10.2635 10.2713 9.44148 10.8205C8.6195 11.3698 7.65311 11.6629 6.66452 11.6629C5.33887 11.6629 4.06751 11.1363 3.13013 10.1989C2.19275 9.26154 1.66613 7.99018 1.66613 6.66452Z"
                      fill="#BEBEBE"
                    />
                  </svg>
                  <input placeholder="Quick search ..." className="nav-input" />
                </div>
              </div>
              <ul className="text-[#3a3a3a] text-[24px] leading-normal font-[700] p-10">
                <li className="mb-10">
                  <button className="flex items-center gap-3">
                    <SpaceDashboard style={{ fontSize: 30 }} />
                    Dashboard
                  </button>
                </li>
                <li className="text-[#2C8EFF] mb-10">
                  <button className="flex items-center gap-3">
                    <Psychology style={{ fontSize: 30 }} />
                    Trainings
                  </button>
                </li>
                <li className="mb-10">
                  <button className="flex items-center gap-3">
                    <AccountCircle style={{ fontSize: 30 }} />
                    Users
                  </button>
                </li>
                <li className="">
                  <button className="flex items-center gap-3">
                    <MoreHoriz style={{ fontSize: 30 }} />
                    More
                  </button>
                </li>
              </ul>

              <section className="flex items-center gap-7 p-5">
                <Model />

                <div>
                  <img
                    className=" cursor-pointer"
                    src={english}
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  />

                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose} className="gap-2">
                      <img src={english} />
                      <span className="text-[#313131] text-[12px] leading-normal font-[400]">
                        English (US)
                      </span>
                    </MenuItem>
                    <MenuItem onClick={handleClose} className="gap-2">
                      <img src={france} />
                      <span className="text-[#ADADAD] text-[12px] leading-normal font-[400]">
                        Français (FR)
                      </span>
                    </MenuItem>
                    <MenuItem onClick={handleClose} className="gap-2">
                      <img src={nederlands} />
                      <span className="text-[#ADADAD] text-[12px] leading-normal font-[400]">
                        Nederlands (NL)
                      </span>
                    </MenuItem>
                    <MenuItem onClick={handleClose} className="gap-2">
                      <img src={spain} />
                      <span className="text-[#ADADAD] text-[12px] leading-normal font-[400]">
                        Español (ES)
                      </span>
                    </MenuItem>
                    <MenuItem onClick={handleClose} className="gap-2">
                      <img src={germany} />
                      <span className="text-[#ADADAD] text-[12px] leading-normal font-[400]">
                        Deutsch (DE)
                      </span>
                    </MenuItem>
                  </Menu>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="19"
                  viewBox="0 0 15 19"
                  fill="none"
                >
                  <path
                    d="M13.075 12.6562V12.677L13.0896 12.6916L14.95 14.552V15.4187H0.05V14.552L1.91036 12.6916L1.925 12.677V12.6562V7.96875C1.925 5.09878 3.45165 2.72334 6.10532 2.09239L6.14375 2.08326V2.04375V1.40625C6.14375 0.655739 6.74949 0.05 7.5 0.05C8.25051 0.05 8.85625 0.655739 8.85625 1.40625V2.04375V2.08329L8.89472 2.0924C11.5576 2.72333 13.075 5.10801 13.075 7.96875V12.6562ZM11.25 13.6438H11.3V13.5938V7.96875C11.3 6.79644 10.9431 5.72974 10.2886 4.95523C9.63337 4.17991 8.68189 3.7 7.5 3.7C6.31811 3.7 5.36663 4.17991 4.71142 4.95523C4.05689 5.72974 3.7 6.79644 3.7 7.96875V13.5938V13.6438H3.75H11.25ZM9.32432 16.4562C9.29759 17.437 8.48692 18.2313 7.5 18.2313C6.51308 18.2313 5.70241 17.437 5.67568 16.4562H9.32432Z"
                    fill="#A4A4A4"
                    stroke="white"
                    stroke-width="0.1"
                  />
                </svg>
              </section>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
