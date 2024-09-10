import { Button } from "@mui/material";
import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Button className="w-100">
            <span className="icon">
              <MdDashboard />
            </span>
            Dashboard
            <span className="arrow">
              <FaAngleRight />
            </span>
          </Button>
        </li>
        <li>
          <Button className="w-100">
            <span className="icon">
              <MdProductionQuantityLimits />
            </span>
            Products
            <span className="arrow">
              <FaAngleRight />
            </span>
          </Button>
        </li>
        <li>
          <Button className="w-100">
            <span className="icon">
              <IoCartOutline />
            </span>
            Orders
            <span className="arrow">
              <FaAngleRight />
            </span>
          </Button>
        </li>
        <li>
          <Button className="w-100">
            <span className="icon">
              <IoMdMail />
            </span>
            Messages
            <span className="arrow">
              <FaAngleRight />
            </span>
          </Button>
        </li>
        <li>
          <Button className="w-100">
            <span className="icon">
              <IoIosNotifications />
            </span>
            notifications
            <span className="arrow">
              <FaAngleRight />
            </span>
          </Button>
        </li>
        <li>
          <Button className="w-100">
            <span className="icon">
              <IoIosSettings />
            </span>
            Settings
            <span className="arrow">
              <FaAngleRight />
            </span>
          </Button>
        </li>
        <li>
          <Button className="w-100">
            <span className="icon">
              <MdDashboard />
            </span>
            Dashboard
            <span className="arrow">
              <FaAngleRight />
            </span>
          </Button>
        </li>
        <li>
          <Button className="w-100">
            <span className="icon">
              <MdProductionQuantityLimits />
            </span>
            Products
            <span className="arrow">
              <FaAngleRight />
            </span>
          </Button>
        </li>
        <li>
          <Button className="w-100">
            <span className="icon">
              <IoCartOutline />
            </span>
            Orders
            <span className="arrow">
              <FaAngleRight />
            </span>
          </Button>
        </li>
        <li>
          <Button className="w-100">
            <span className="icon">
              <IoMdMail />
            </span>
            Messages
            <span className="arrow">
              <FaAngleRight />
            </span>
          </Button>
        </li>
        <li>
          <Button className="w-100">
            <span className="icon">
              <IoIosNotifications />
            </span>
            notifications
            <span className="arrow">
              <FaAngleRight />
            </span>
          </Button>
        </li>
        <li>
          <Button className="w-100">
            <span className="icon">
              <IoIosSettings />
            </span>
            Settings
            <span className="arrow">
              <FaAngleRight />
            </span>
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
