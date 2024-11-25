import React, { useState, useEffect } from "react";
import Topbar from "./Topbar";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import SearchIcon from "@mui/icons-material/Search";
import "./Team.css";
import { Button } from "flowbite-react";
import { Box, ButtonBase, Typography } from "@mui/material";
import TeamMemberModal from "./TeamMemeberModal";
import { useLoading } from "../Contexts/loadingContext";

const Team = () => {
  const [employees, setEmployees] = useState([]);
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { startLoading, stopLoading } = useLoading();
  const [originalEmp, setOriginalEmp] = useState([]); // Holds the filtered list of users

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchTerm(query);

    // Filter users by name or email
    const filteredUsers = originalEmp.filter(
      (user) =>
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase())
    );
    setEmployees(query.length === 0 ? originalEmp : filteredUsers); // Update the results
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        startLoading();
        const response = await fetch(
          "https://mechanic-on-wheels-backend.vercel.app/team/getTeamData",
          { method: "GET" }
        );
        const data = await response.json();
        setEmployees(data);
        setOriginalEmp(data);
        stopLoading();
      } catch (error) {
        console.error("Error fetching data:", error);
        stopLoading();
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Topbar title={"Manage Team"} userName={"Wahaj Javed"} />
      <div className="m-6 flex justify-between">
        {/* <Link to="/addTeamMember"> */}
        <div>
          <Button
            onClick={() => {
              setOpen(true);
            }}
            className="flex flex-row border px-8 rounded-lg items-center py-2  border-2 border-black dark:border-white font-breulGroteskBold buttonShadow hover:bg-primaryGreen  text-black dark:text-white dark:hover:text-black"
          >
            <GroupsIcon className="mr-2" />
            <h1 className="">Add a Member</h1>
          </Button>
        </div>
        <div className="  searchShadow justify-start  font-qanelasRegular  px-8 py-2 flex flex-row">
          <SearchIcon className="mr-2 my-2" />
          <input
            className="border-none outline-none bg-white dark:bg-black"
            placeholder="Search by name or email"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      {/** TABLE */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
        className="mr-8"
      >
        <Box>
          <table className="mt-8  border rounded-lg table-auto w-full text-lg text-center dark:text-white bg-[#102a43]">
            <thead
              className="uppercase   font-breulGroteskBold "
              style={{ color: "#c1c8ce" }}
            >
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
            {employees.length > 0 ? (
              <tbody>
                {employees.map((employee, index) => (
                  <tr
                    key={employee.id}
                    className={`font-qanelasRegular ${
                      (index + 1) % 2 == 0
                        ? "bg-[#2f3349] dark:bg-white text-white dark:text-black rounded-lg"
                        : "bg-white   dark:bg-[#2f3349]"
                    }`}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap"
                    >
                      {employee.id}
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
            ) : (
              <tbody>
                <tr>
                  <td colSpan={6} className="noData">
                    No Data Available
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </Box>
        {/* <BasicTable employees={employees} /> */}
        <TeamMemberModal open={open} setOpen={setOpen} />
      </Box>
    </>
  );
};

export default Team;
