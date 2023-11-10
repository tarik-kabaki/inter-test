import React from "react";
import profile from "../../components/navbar/assets/profile.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import inf from "../../components/model/assets/inf.png";
import seetingsIcon from "../../components/model/assets/seetingsIcon.png";
import logoutIcon from "../../components/model/assets/logoutIcon.png";

const Model = () => {
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
        <img src={profile} className="w-[32px] h-[32px]" />
        <section>
          <p className="text-[13px] font-[600] leading-normal text-[#6B6B6B]">
            Blaise Defloo
          </p>
          <p className="text-[11px] font-[500] leading-normal text-[#9F9F9F]">
            Administrator
          </p>
        </section>
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
          <section className="flex flex-col mb-1">
            <span className="text-[#313131] text-[11px] font-[600] leading-normal">
              BESIX Group
            </span>
            <span className="text-[#797979] text-[11px] font-[400] leading-normal">
              besix.group@besix.be
            </span>
          </section>
        </MenuItem>
        <hr className="h-[1px] w-[165px] border-[#EBEBEB] mb-2" />
        <MenuItem onClick={handleClose}>
          <section className="flex flex-col">
            <div className="text-[#313131] text-[13px] font-[400] leading-normal gap-3 flex items-center ">
              <img src={seetingsIcon} />
              Profile settings
            </div>
          </section>
        </MenuItem>
        <MenuItem>
          <div className="text-[#313131] text-[13px] font-[400] leading-normal gap-3 flex items-center">
            <img src={inf} />
            Profile settings
          </div>
        </MenuItem>
        <hr className="h-[1px] w-[165px] border-[#EBEBEB] mb-2" />
        <MenuItem onClick={handleClose}>
          <section className="flex flex-col mb-1">
            <div className="text-[#313131] text-[13px] font-[400] leading-normal gap-3 flex items-center">
              <img src={logoutIcon} />
              Log out
            </div>
          </section>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default Model;

/*

   <div>
      <div
        className="flex items-center gap-2"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img src={profile} className="w-[32px] h-[32px]" />
        <section>
          <p className="text-[13px] font-[600] leading-normal text-[#6B6B6B]">
            Blaise Defloo
          </p>
          <p className="text-[11px] font-[500] leading-normal text-[#9F9F9F]">
            Administrator
          </p>
        </section>
      </div>
    </div>
*/
