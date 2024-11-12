import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
const columns = [
  "EMP NO.",
  "NAME",
  "EMAIL",
  "AGE",
  "PHONE NUMBER",
  "ACCESS LEVEL",
];
const BasicTable = ({ employees }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="mt-8  border rounded-lg table-auto w-full text-lg text-center dark:text-white bg-[#102a43]">
          <TableRow>
            {columns.map((col, i) => (
              <TableCell
                align="center"
                key={i}
                style={{
                  color: "#c1c8ce",
                  textTransform: "uppercase",
                  fontFamily: "breulGroteskBold",
                  fontSize: 15,
                }}
              >
                {col}
              </TableCell>
            ))}{" "}
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              className={`font-qanelasRegular ${
                (index + 1) % 2 == 0
                  ? "bg-[#2f3349] dark:bg-white text-white dark:text-black rounded-lg"
                  : "bg-white   dark:bg-[#2f3349]"
              }`}
            >
              <TableCell
                align="center"
                className="px-6 py-4 font-medium whitespace-nowrap"
                component="th"
                scope="row"
              >
                {index + 1}
              </TableCell>
              <TableCell
                className="px-6 py-4 font-medium whitespace-nowrap"
                align="center"
              >
                {row.name}
              </TableCell>
              <TableCell
                align="center"
                className="px-6 py-4 font-medium whitespace-nowrap"
              >
                {row.email}
              </TableCell>
              <TableCell
                className="px-6 py-4 font-medium whitespace-nowrap"
                align="center"
              >
                {row.age}
              </TableCell>
              <TableCell
                className="px-6 py-4 font-medium whitespace-nowrap"
                align="center"
              >
                {row.phoneNumber}
              </TableCell>
              <TableCell
                className="px-6 py-4 font-medium whitespace-nowrap"
                align="center"
              >
                <div
                  className={` items-center text-center py-2 
                                    ${
                                      row.accessLevel === "admin"
                                        ? " text-primaryGreen"
                                        : row.accessLevel === "manager"
                                        ? " text-primaryOrange"
                                        : " text-primaryBlue"
                                    }`}
                >
                  {row.accessLevel === "admin" && (
                    <AdminPanelSettingsOutlinedIcon />
                  )}
                  {row.accessLevel === "manager" && <SecurityOutlinedIcon />}
                  {row.accessLevel === "user" && <LockOpenOutlinedIcon />}
                  {/* <button disabled={true} className=""> */}
                  {row.accessLevel}
                  {/* </button> */}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
