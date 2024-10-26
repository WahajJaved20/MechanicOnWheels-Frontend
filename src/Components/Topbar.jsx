import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import "./Topbar.css"
const Topbar = ({ title, userName }) => {
    return (
        <div className="flex justify-between items-center mr-8 text-black dark:text-white border-b-2 border-black p-4" id="nav">
            <h1 className=" mt-4 font-breulGroteskBold text-[60px]">
                {title}
            </h1>
            <div className="searchShadow justify-start border border-b-2 border-black dark:border-[#848492] font-qanelasRegular rounded-3xl px-8 py-2 flex flex-row">
                <SearchIcon className="mr-2"/>
                <input placeholder="Search" className="border-none outline-none bg-white dark:bg-black"/>
            </div>
            <div className="flex flex-row items-center ">
            <h1 className="mr-2 font-qanelasRegular text-[20px] ">
                {userName}
            </h1>
            <AccountCircleIcon sx={{fontSize:"50px"}}/>
            </div>
        </div>
    )
}

export default Topbar;