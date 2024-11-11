import React, { useState, useEffect } from "react";
import Topbar from "./Topbar";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import { Link } from "react-router-dom";
import "./Team.css";
import BasicTable from "./Table";
import { Button } from "flowbite-react";
import { ButtonBase } from "@mui/material";
import TeamMemberModal from "./TeamMemeberModal";
import CircularIndeterminate from "./Loader";

const Team = () => {
  const [employees, setEmployees] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mechanic-on-wheels-backend.vercel.app/team/getTeamData",
          { method: "GET" }
        );
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Topbar title={"Manage Team"} userName={"Wahaj Javed"} />
      <div className="my-6 justify-end">
        {/* <Link to="/addTeamMember"> */}
        <Button
          onClick={() => {
            setOpen(true);
          }}
          className="flex flex-row border px-8 rounded-lg items-center py-2  border-2 border-black dark:border-white font-breulGroteskBold buttonShadow hover:bg-primaryGreen  text-black dark:text-white dark:hover:text-black"
        >
          <GroupsIcon className="mr-2" />
          <h1 className="">Add a Member</h1>
        </Button>
        {/* </Link> */}
      </div>
      {/** TABLE */}
      <div className="mr-8">
        <table className="mt-8  border rounded-lg table-auto w-full text-lg text-center dark:text-white bg-[#102a43]">
          <thead className="uppercase text-black  font-breulGroteskBold ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Emp. No
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Age
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Access Level
              </th>
            </tr>
          </thead>
          {/* <CircularIndeterminate /> */}
          <tbody>
            {employees.map((employee, index) => (
              <tr
                key={employee.id}
                className={`font-qanelasRegular ${
                  (index + 1) % 2 == 0
                    ? "bg-black dark:bg-white text-white dark:text-black rounded-lg"
                    : "bg-white dark:bg-black"
                }`}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  {index + 1}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap"
                >
                  {employee.name}
                </th>
                <td className=" py-2">{employee.email}</td>
                <td className=" py-2">{employee.age}</td>
                <td className=" py-2">{employee.phoneNumber}</td>
                <td className="px-6 py-2">
                  <div
                    className={` items-center text-center py-2 
                                    ${
                                      employee.accessLevel === "admin"
                                        ? " text-primaryGreen"
                                        : employee.accessLevel === "manager"
                                        ? " text-primaryOrange"
                                        : " text-primaryBlue"
                                    }`}
                  >
                    {employee.accessLevel === "admin" && (
                      <AdminPanelSettingsOutlinedIcon />
                    )}
                    {employee.accessLevel === "manager" && (
                      <SecurityOutlinedIcon />
                    )}
                    {employee.accessLevel === "user" && (
                      <LockOpenOutlinedIcon />
                    )}
                    {/* <button disabled={true} className=""> */}
                    {employee.accessLevel}
                    {/* </button> */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <BasicTable /> */}
        <TeamMemberModal open={open} setOpen={setOpen} />
      </div>
    </>
  );
};

export default Team;
