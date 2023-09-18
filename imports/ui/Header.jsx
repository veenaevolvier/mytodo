import React, { useState } from "react";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

const Header = ({ loggedInUser, onLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="header-mixed">
      <img
        className="header-logo"
        src="/My TO DO.png"
        alt="Example"
      />
      <div className="user-container">
        <img
          className="header-png"
          src="/user 1.png"
          alt="Example"
          onClick={handleClick}
        />
        <Popover
  id={id}
  open={open}
  anchorEl={anchorEl}
  onClose={handleClose}
  anchorOrigin={{
    vertical: "bottom",
    horizontal: "left",
  }}
>
  
  <Typography sx={{ p: 1 }}>
    <div className="user-name-with-line">
      Veena Regikumar
      <hr className="black-line" />
    </div>
    <Button className="color-button" onClick={onLogout} >
      Logout
    </Button>
  </Typography>
</Popover>
</div>
</div>
      
  );
};

export default Header;
