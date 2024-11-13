import Topbar from "./Topbar";
import GroupsIcon from "@mui/icons-material/Groups";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import "./Team.css";
import PreviewIcon from "@mui/icons-material/Preview";
import { Button } from "flowbite-react";
import { Box, ButtonBase, Typography } from "@mui/material";
import TeamMemberModal from "./TeamMemeberModal";
import { useEffect, useState } from "react";
import LoadingBackdrop from "./FullLoder";
import { useLoading } from "../Contexts/loadingContext";
const status = {
	green: "Checked",
	yellow: "Future Attention",
	red: "Imediate Attention",
};
const tempData = [
	{
		name: "XYz",
		email: "xyz.com",
		phoneNumber: "03333",
		status: "green",
	},
	{
		name: "XYsz",
		email: "xysz.com",
		phoneNumber: "03333",
		status: "yellow",
	},
	{
		name: "absc",
		email: "xyabcssz.com",
		phoneNumber: "03333",
		status: "red",
	},
];
const InspectionTable = () => {
	const [vehicles, setVehicles] = useState(tempData);
	const [open, setOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState(""); // Holds the value of the search input
	const [originalEmp, setOriginalEmp] = useState([]); // Holds the filtered list of users
	const { startLoading, stopLoading } = useLoading();
	const handleSearchChange = (event) => {
		const query = event.target.value;
		setSearchTerm(query);

		// Filter users by name or email
		const filteredUsers = originalEmp.filter(
			(user) =>
				user.name.toLowerCase().includes(query.toLowerCase()) ||
				user.email.toLowerCase().includes(query.toLowerCase())
		);
		console.log(filteredUsers, query, originalEmp, "filteredUsers");
		setVehicles(query.length === 0 ? originalEmp : filteredUsers); // Update the results
	};

	useEffect(() => {
		const fetchData = async () => {
			startLoading();
			try {
				const response = await fetch(
					"https://mechanic-on-wheels-backend.vercel.app/team/getTeamData",
					{ method: "GET" }
				);
				const data = await response.json();
				stopLoading();
				setVehicles(data);
				//  setOriginalEmp(data);
			} catch (error) {
				stopLoading();
				console.error("Error fetching data:", error);
			}
		};
		fetchData();
	}, []);
	return (
		<>
			<Topbar title={"Manage Vehicle"} userName={"Wahaj Javed"} />
			<div className="m-6 flex justify-between">
				<Link to="/inspectionForm">
					<div>
						<Button
							onClick={() => {
								setOpen(true);
							}}
							className="flex flex-row border px-8 rounded-lg items-center py-2  border-2 border-black dark:border-white font-breulGroteskBold buttonShadow hover:bg-primaryGreen  text-black dark:text-white dark:hover:text-black"
						>
							<GroupsIcon className="mr-2" />
							<h1 className="">Add Inspection</h1>
						</Button>
					</div>
				</Link>
				<div className="  searchShadow justify-start  font-qanelasRegular  px-8 py-2 flex flex-row">
					<SearchIcon className="mr-2 my-2" />
					<input
						className="border-none outline-none bg-white dark:bg-black"
						placeholder="Search by name "
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
									ID
								</th>
								<th scope="col" className="px-6 py-3">
									Name
								</th>

								<th scope="col" className="px-6 py-3">
									Email
								</th>
								<th scope="col" className="px-6 py-3">
									Phone Number
								</th>
								<th scope="col" className="px-6 py-3">
									Status
								</th>
								<th scope="col" className="px-6 py-3">
									View
								</th>
							</tr>
						</thead>
						{vehicles.length > 0 ? (
							<tbody>
								{vehicles.map((vehicle, index) => (
									<tr
										key={vehicle.id}
										className={`font-qanelasRegular ${(index + 1) % 2 == 0
											? "bg-[#2f3349] dark:bg-white text-white dark:text-black rounded-lg"
											: "bg-white   dark:bg-[#2f3349]"
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
											{vehicle.name}
										</th>
										<td className=" py-2">{vehicle.email}</td>
										<td className=" py-2">{vehicle.phoneNumber}</td>
										<td className={` py-2 text-${vehicle.status}`}>
											{status[vehicle.status]}
										</td>
										<td className=" py-2">
											<PreviewIcon />
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
				{/* <BasicTable vehicles={vehicles} /> */}
				<TeamMemberModal open={open} setOpen={setOpen} />
			</Box>
		</>
	);
};

export default InspectionTable;
