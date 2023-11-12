import React from "react";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import english from "../../navbar/assets/english.png";
import france from "../../navbar/assets/france.png";
import germany from "../../navbar/assets/germany.png";
import nederlands from "../../navbar/assets/nederlands.png";
import spain from "../../navbar/assets/spain.png";
import { useDispatch, useSelector } from "react-redux";
import { handlePickLangs } from "../../../redux/quizSlice";

const Lang = () => {
  const langus = useSelector((state) => state.quiz.langs);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePickLang = (id) => {
    dispatch(handlePickLangs(id));
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
        {langus.map((item) =>
          item.picked ? <img src={item.image} className="h-5 w-5" /> : null
        )}
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
        {langus.map((item) => (
          <MenuItem onClick={handleClose}>
            <div
              onClick={() => handlePickLang(item.id)}
              className="text-[#313131] text-[12px] leading-normal font-[400] flex items-center gap-2"
            >
              <img src={item.image} className="w-5 h-5" />
              <span>{item.lan}</span>
            </div>
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
};

export default Lang;
