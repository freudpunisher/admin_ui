import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/fullstack-ecommerce-main/images/logo1.png";
import profil from "../../assets/images/fullstack-ecommerce-main/images/01.webp";
import Button from "@mui/material/Button";
import { MdMenuOpen } from "react-icons/md";
import SearchBox from "../searchBox";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import Divider from "@mui/material/Divider";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";

import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { FaShieldAlt } from "react-icons/fa";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationsDrop, setnotificationsDrop] = useState(null);
  const open = Boolean(anchorEl);
  const openNotifications = Boolean(notificationsDrop);
  const handleOpenMyAccDr = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosenMyAccDr = () => {
    setAnchorEl(null);
  };

  const handleOpennotificationsDrop = () => {
    setnotificationsDrop(true);
  };
  const handleClosenotificationsDrop = () => {
    setnotificationsDrop(false);
  };

  return (
    <>
      <header className="d-flex align-items-center ">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center w-100">
            {/* logo wrap */}
            <div className="col-sm-2 part1">
              <Link to={"/"} className="d-flex align-items-center logo">
                <img src={logo} alt="" />
                <span className="ml-2">AccessData</span>
              </Link>
              {/* button of sidebar */}
            </div>
            <div className="col-sm-3 d-flex align-items-center part2 pl-4">
              <Button className="rounded-circle mr-3">
                <MdMenuOpen />
              </Button>
              <SearchBox />
            </div>
            <div className="col-sm-7 d-flex align-items-center justify-content-end part3 pl-4">
              <Button className="rounded-circle mr-3">
                <MdOutlineLightMode />
              </Button>
              {/* <Button className="rounded-circle mr-3">
                <MdMenuOpen />
              </Button> */}
              <Button className="rounded-circle mr-3">
                <IoCartOutline />
              </Button>

              <Button className="rounded-circle mr-3">
                <MdOutlineMailOutline />
              </Button>
              <div className="dropdownWrapper position-relative">
                <Button
                  className="rounded-circle mr-3"
                  onClick={handleOpennotificationsDrop}
                >
                  <FaRegBell />
                </Button>
                <Menu
                  anchorEl={notificationsDrop}
                  className="notifications"
                  id="notifications"
                  open={openNotifications}
                  onClose={handleClosenotificationsDrop}
                  onClick={handleClosenotificationsDrop}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <div className="head pl-3 pb-0">
                    <h4>notifications (14)</h4>
                  </div>
                  <Divider className="mb-3" />
                  <MenuItem onClick={handleClosenotificationsDrop}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    My notifications
                  </MenuItem>

                  <MenuItem onClick={handleClosenotificationsDrop}>
                    <div className="d-flex align-items-center">
                      <span className="rounded-circle">
                        <img src={profil} alt="" />
                      </span>
                    </div>
                  </MenuItem>
                </Menu>
              </div>
              <div className="myAccWrapper">
                <Button
                  className="myAcc d-flex align-items-center"
                  onClick={handleOpenMyAccDr}
                >
                  <div className="userImg">
                    <span className="rounded-circle">
                      <img src={profil} alt="" className="rounded-circle" />
                    </span>
                  </div>
                  <div className="userInfo">
                    <h4>MUGISHA</h4>
                    <p>@developer</p>
                  </div>
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClosenMyAccDr}
                  onClick={handleClosenMyAccDr}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={handleClosenMyAccDr}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    My account
                  </MenuItem>

                  <MenuItem onClick={handleClosenMyAccDr}>
                    <ListItemIcon>
                      <FaShieldAlt />
                    </ListItemIcon>
                    Reset Password
                  </MenuItem>
                  <MenuItem onClick={handleClosenMyAccDr}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
