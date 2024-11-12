import { useState } from "react";
import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupsIcon from "@mui/icons-material/Groups";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CarCrashIcon from "@mui/icons-material/CarCrash";
import LogoutIcon from '@mui/icons-material/Logout';
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import { logo } from "../assets";
import useTheme from "../Contexts/theme";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const handleThemeToggle = () => {
    themeMode === "dark" ? lightTheme() : darkTheme();
  };
  const Menus = [
    // { title: "Dashboard", src: <DashboardIcon />, to:"/" },

    {
      title: "Team",
      src: <GroupsIcon />,
      onClick: () => {
        navigate("/team")
      }
    },
    // {
    //   title: "Add Employee",
    //   src: <GroupAddIcon />,
    //   gap: true,
    //   to: "/addTeamMember",
    // },
    {
      title: "Car Inspection",
      src: <CarCrashIcon />,
      gap: false,
      onClick: () => {
        navigate("/inspectionForm")
      }
    },
    {
      title: "Car Inspection List",
      src: <CarCrashIcon />,
      gap: false,
      to: "/inspection",
    },
    {
      title: "View Recent Inspection",
      src: <SavedSearchIcon />,
      gap: false,
      onClick: () => {
        navigate("/viewInspection")
      }
    },
    {
      title: "Log Out",
      src: <LogoutIcon />,
      gap: true,
      to: "/login",
      onClick: () => {
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("userName");
        navigate("/login")
      }
    }
  ];

  return <>
    {(location.pathname !== "/login" && location.pathname !== "/") &&
      <div className="flex font-qanelasRegular mr-8 ">
        <div
          className={` ${open ? "w-72" : "w-20 "
            }  dark:bg-darkModeSidebarBackground bg-lightModeSidebarBackground  h-screen h-100vh p-5 pt-8 relative duration-300`}
        >
          <ChevronLeftIcon
            className={`absolute cursor-pointer -right-4 top-9 w-7 bg-primaryOrange
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
            sx={{ fontSize: "30px" }}
          />
          <div className="flex gap-x-4 items-center">
            <img src={logo} className={`cursor-pointer duration-500 ${open}`} />
          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
                <li
                  key={index}
                  className={`flex rounded-md p-2 cursor-pointer hover:bg-primaryOrange hover:text-black dark:text-black text-white text-gray-300 text-lg items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                    } `}
                  onClick={() => {
                    Menu.onClick();
                  }}
                >
                  {Menu.src}
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {Menu.title}
                  </span>
                </li>
            ))}
          </ul>
          <li
            onClick={handleThemeToggle}
            className={`flex rounded-md p-2 cursor-pointer dark:text-black text-white text-lg items-center gap-x-4 
                dark:hover:bg-[#00d5ff] hover:bg-[#ffda71] hover:text-black`}
          >
            {themeMode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {themeMode === "dark" ? "Dark Theme" : "Light Theme"}
            </span>
          </li>
        </div>
      </div>}
  </>
};
export default Sidebar;
