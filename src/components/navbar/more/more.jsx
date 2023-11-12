import React from "react";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-bootstrap";

const More = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <div
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        className="flex items-center gap-2 cursor-pointer"
      >
        <li className="hover:text-[#2C8EFF] duration-300 flex items-center">
          <button className="flex items-center gap-1">
            More <KeyboardArrowDown style={{ fontSize: "19px" }} />
          </button>
        </li>
      </div>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <NavLink className="flex flex-col mb-1 text-[#999999] text-[14px] leading-normal font-[600]">
            {" "}
            Exemple
          </NavLink>
        </MenuItem>
        <hr className="h-[1px] w-[165px] border-[#EBEBEB] mb-2 " />
        <MenuItem>
          <NavLink className="flex flex-col mb-1 text-[#999999] text-[14px] leading-normal font-[600]">
            {" "}
            Exemple
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink className="flex flex-col mb-1 text-[#999999] text-[14px] leading-normal font-[600]">
            {" "}
            Exemple
          </NavLink>
        </MenuItem>
        <hr className="h-[1px] w-[165px] border-[#EBEBEB] mb-2" />
        <MenuItem>
          <NavLink className="flex flex-col mb-1 text-[#999999] text-[14px] leading-normal font-[600]">
            {" "}
            Exemple
          </NavLink>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default More;
