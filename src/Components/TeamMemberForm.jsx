import React from "react";
import Topbar from "./Topbar";
import {
  Box,
  Button,
  Select,
  InputLabel,
  MenuItem,
  Typography,
} from "@mui/material";
import { checkoutSchema, initialValues } from "../constants/userSchema";
import { Formik, Form } from "formik";
import useTheme from "../Contexts/theme";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import InputBox from "../constants/InputBox";

const TeamMemberFormPage = () => {
  const { themeMode } = useTheme();
  const navigate = useNavigate();
  const authToken = localStorage.getItem("jwtToken");
  const handleFormSubmit = async (values) => {
    const result = await fetch(
      `https://mechanic-on-wheels-backend.vercel.app/employee/addNewEmployee`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          authToken: authToken,
          name: values.fullName,
          email: values.email,
          password: values.password,
          accessLevel: values.accessLevel,
          age: values.age,
          phoneNumber: values.contact,
        }),
      }
    ).then((resp) => resp.json());
    if (result.type === "Success") {
      toast.success("Employee Successfully Added");
      // setLoading(false);
      navigate("/team");
    } else {
      toast.error(result.message);
    }
  };
  return (
    <>
      {/* <Topbar title={"Add Team Member"} userName={"Wahaj Javed"} /> */}
      <Typography>
        <h1>Add New Member</h1>
      </Typography>
      <Box>
        <Formik
          validateOnBlur={true}
          validateOnChange={true}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
        >
          {({ values, errors, touched, handleBlur, handleChange, dirty }) => (
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                handleFormSubmit(values);
              }}
            >
              <Box
                display="grid"
                gap="20px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              >
                <InputBox
                  label={"Full Name"}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  value={values.fullName}
                  name={"fullName"}
                  error={!!touched.fullName && !!errors.fullName}
                  helperText={touched.fullName && errors.fullName}
                  themeMode={themeMode}
                />
                <InputBox
                  label={"Email"}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  themeMode={themeMode}
                />
                <InputBox
                  label="Password"
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  value={values.password}
                  name="password"
                  error={!!touched.password && !!errors.password}
                  themeMode={themeMode}
                  helperText={touched.password && errors.password}
                />
                <InputBox
                  label="Contact Number"
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  value={values.contact}
                  name="contact"
                  error={!!touched.contact && !!errors.contact}
                  themeMode={themeMode}
                  helperText={touched.contact && errors.contact}
                />
                <InputBox
                  type="number"
                  label="Age"
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  value={values.age}
                  name="age"
                  error={!!touched.age && !!errors.age}
                  themeMode={themeMode}
                  helperText={touched.age && errors.age}
                />
                <InputLabel
                  className="font-qanelasRegular"
                  id="access"
                  sx={{
                    color: `${themeMode === "dark" ? "white" : "#102a43"}`,
                    fontFamily: "qanelasRegular",
                    fontSize: "20px",
                  }}
                >
                  Access Level
                </InputLabel>
                <Select
                  defaultValue="User"
                  helperText={touched.age && errors.age}
                  value={values.accessLevel}
                  fullWidth
                  variant="outlined"
                  type="text"
                  sx={{
                    gridColumn: "span 4",
                    "& .MuiOutlinedInput-root": {
                      borderBottom: `4px solid ${
                        themeMode === "dark" ? "white" : "#102a43"
                      }`,
                      color: `${themeMode === "dark" ? "white" : "#102a43"}`,
                      fontFamily: "qanelasRegular",
                    },

                    "& .MuiInputLabel-root": {
                      color: `${themeMode === "dark" ? "white" : "#102a43"}`,
                      fontFamily: "qanelasRegular",
                      fontSize: "20px",
                    },
                    "& .MuiSelect-select": {
                      color: `${themeMode === "light" ? "white" : "#102a43"}`,
                      bgcolor: `${themeMode === "dark" ? "white" : "#102a43"}`,
                    },
                    "& .MuiSelect-iconOutlined": {
                      color: `${themeMode === "light" ? "white" : "#102a43"}`,
                    },
                    "& .Mui-focused": {
                      bgcolor: "red",
                    },
                  }}
                  label="accessLevel"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="accessLevel"
                >
                  <MenuItem
                    sx={{
                      color: `${themeMode === "dark" ? "#102a43" : "white"}`,
                      bgcolor: `${themeMode === "light" ? "#102a43" : "white"}`,

                      "&:hover": {
                        bgcolor: `${
                          themeMode === "dark" ? "#102a43" : "white"
                        }`,
                        color: `${themeMode === "light" ? "#102a43" : "white"}`,
                      },
                      "&.Mui-selected": {
                        bgcolor: "#9fe96e",
                        color: "#102a43",
                      },
                      fontFamily: "qanelasRegular",
                    }}
                    value={"admin"}
                  >
                    Admin
                  </MenuItem>
                  <MenuItem
                    sx={{
                      color: `${themeMode === "dark" ? "#102a43" : "white"}`,
                      bgcolor: `${themeMode === "light" ? "#102a43" : "white"}`,
                      "&:hover": {
                        bgcolor: `${
                          themeMode === "dark" ? "#102a43" : "white"
                        }`,
                        color: `${themeMode === "light" ? "#102a43" : "white"}`,
                      },
                      "&.Mui-selected": {
                        bgcolor: "#9fe96e",
                        color: "#102a43",
                      },
                      fontFamily: "qanelasRegular",
                    }}
                    value={"manager"}
                  >
                    Manager
                  </MenuItem>

                  <MenuItem
                    sx={{
                      color: `${themeMode === "dark" ? "#102a43" : "white"}`,
                      bgcolor: `${themeMode === "light" ? "#102a43" : "white"}`,
                      "&:hover": {
                        bgcolor: `${
                          themeMode === "dark" ? "#102a43" : "white"
                        }`,
                        color: `${themeMode === "light" ? "#102a43" : "white"}`,
                      },
                      "&.Mui-selected": {
                        bgcolor: "#9fe96e",
                        color: "#102a43",
                      },
                      fontFamily: "qanelasRegular",
                    }}
                    value={"user"}
                  >
                    User
                  </MenuItem>
                </Select>
              </Box>
              <Box display="flex" justifyContent="end" mt="20px">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    bgcolor: "#102a43",
                    color: "white",
                    fontFamily: "qanelasRegular",
                  }}
                  disabled={
                    errors.accessLevel ||
                    errors.age ||
                    errors.contact ||
                    errors.email ||
                    errors.fullName ||
                    errors.password
                  }
                >
                  Create New User
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default TeamMemberFormPage;
