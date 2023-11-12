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
import More from "./more/more";
import NotificationsNoneRounded from "@mui/icons-material/NotificationsNoneRounded";
import Lang from "./lang/lang";
import Noti from "./noti/noti";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleNav } from "../../redux/toolsSlice";

const Navbar = () => {
  const navLogs = useSelector((state) => state.tools.navLogs);
  const dispatch = useDispatch();
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

  const handleNavs = (item) => {
    dispatch(handleNav({ link: item.link }));
  };

  return (
    <div className="nav-container">
      <Container maxWidth="xl">
        <div className="nav-wrapper mid:container mid:md">
          <section>
            <img
              src={logo}
              className="mid:w-[150px] mid:h-[45px] w-[80px] h-[25px]"
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
            {navLogs?.map((item) => (
              <ul className="flex items-center gap-8 nav-menu">
                <li
                  onClick={() => handleNavs(item)}
                  className="
                 cursor-pointer"
                >
                  <span className={`${item.active ? "text-blue-500" : ""}`}>
                    {item.link === "More" ? <More /> : item.link}
                  </span>
                </li>
              </ul>
            ))}
          </section>
          <section className="mid:flex  items-center gap-6  hidden">
            <Noti />
            <Lang />
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

              {navLogs?.map((item) => (
                <ul className="text-[#3a3a3a] text-[24px] leading-normal font-[700] p-10">
                  <li
                    onClick={() => handleNavs(item)}
                    className="
                 cursor-pointer "
                  >
                    <span
                      className={`${
                        item.active
                          ? "text-blue-500 flex items-center gap-3"
                          : "flex items-center gap-3"
                      }`}
                    >
                      {item.link === "More" ? <More /> : item.link}
                    </span>
                  </li>
                </ul>
              ))}

              <section className="flex items-center gap-7 p-5">
                <Model />

                <Lang />
                <button className="flex items-center ">
                  <NotificationsNoneRounded
                    className="text-[#888888] hover:text-orange-500"
                    style={{ fontSize: "24px" }}
                  />
                </button>
              </section>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
