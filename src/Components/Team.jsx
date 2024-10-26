import React, { useState, useEffect } from "react";
import Topbar from "./Topbar";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
const Team = () => {
    const [employees, setEmployees] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/team/getTeamData', { method: 'GET' });
                const data = await response.json();
                setEmployees(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [])
    return <>
        <Topbar title={"Manage Team"} userName={"Wahaj Javed"} />
        {/** TABLE */}
        <div className="mr-8">
            <table className="mt-8 rounded-lg table-auto w-full text-lg text-center dark:text-white bg-[#aca7cb]">
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
                <tbody>
                    {employees.map((employee, index) => (
                        <tr key={employee.id} className={`font-qanelasRegular ${(index+1) % 2 == 0 ? "bg-black dark:bg-white text-white dark:text-black rounded-lg": "bg-white dark:bg-black"}`}>
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                {index + 1}
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                {employee.name}
                            </th>
                            <td className="px-6 py-4">
                                {employee.email}
                            </td>
                            <td className="px-6 py-4">
                                {employee.age}
                            </td>
                            <td className="px-6 py-4">
                                {employee.phoneNumber}
                            </td>
                            <td className="px-8 py-4" >
                                <div className={`border rounded-lg items-center text-center py-2 text-black
                                    ${employee.accessLevel === "admin" ? " bg-primaryGreen" :
                                        employee.accessLevel === "manager" ? " bg-primaryOrange" :
                                            " bg-primaryBlue"
                                    }`}>
                                    {employee.accessLevel === "admin" && <AdminPanelSettingsOutlinedIcon />}
                                    {employee.accessLevel === "manager" && <SecurityOutlinedIcon />}
                                    {employee.accessLevel === "user" && <LockOpenOutlinedIcon />}
                                    <button disabled={true} className="">{employee.accessLevel}</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
}

export default Team;