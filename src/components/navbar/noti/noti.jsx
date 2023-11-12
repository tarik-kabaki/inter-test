import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NotificationsNoneRounded from "@mui/icons-material/NotificationsNoneRounded";

const Noti = () => {
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
        <button className="flex items-center">
          <NotificationsNoneRounded
            style={{ fontSize: "20px" }}
            className="hover:text-orange-500 text-gray-400"
          />
        </button>
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
          <span className="w-[200px]">Exemple</span>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <span>Exemple</span>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <span>Exemple</span>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <span>Exemple</span>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default Noti;
