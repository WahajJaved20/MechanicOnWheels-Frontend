import React from "react";
import Topbar from "./Topbar";
import { Box, Button, TextField, Select, InputLabel, MenuItem } from "@mui/material";
import { checkoutSchema, initialValues } from "../constants/userSchema";
import { Formik, Form } from "formik";
import useTheme from "../Contexts/theme";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const TeamMemberFormPage = () => {
    const { themeMode } = useTheme();
    const navigate = useNavigate();
    const handleFormSubmit = async (values) => {
        const result = await fetch(`http://localhost:3000/employee/addNewEmployee`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': localStorage.getItem("jwtToken")
            },
            body: JSON.stringify({
                name: values.fullName,
                email: values.email,
                password: values.password,
                accessLevel: values.accessLevel,
                age: values.age,
                phoneNumber: values.contact
            }),
        }).then((resp) => resp.json());
        if (result.type === "Success") {
            toast.success('Employee Successfully Added');
            // setLoading(false);
            navigate('/team');
        } else {
            toast.error(result.message);
        }
        console.log(values);
    };
    return (
        <>
            <Topbar title={"Add Team Member"} userName={"Wahaj Javed"} />
            <Box m="20px" className="text-lg p-8 rounded-lg">
                <Formik
                    initialValues={initialValues}
                    validationSchema={checkoutSchema}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleBlur,
                        handleChange,
                    }) => (
                        <Form onSubmit={(e) => {
                            e.preventDefault();
                            handleFormSubmit(values);
                        }}>
                            <Box
                                display="grid"
                                gap="30px"
                                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            >
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    type="text"
                                    label="Full Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.fullName}
                                    name="fullName"
                                    error={!!touched.fullName && !!errors.fullName}
                                    helperText={touched.fullName && errors.fullName}
                                    sx={{
                                        gridColumn: "span 4",
                                        '& .MuiOutlinedInput-root': {
                                            borderBottom: `4px solid ${themeMode === "dark" ? "white" : "black"}`,
                                            color: `${themeMode === "dark" ? "white" : "black"}`,
                                            fontFamily: "qanelasRegular"
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: `${themeMode === "dark" ? "white" : "black"}`,
                                            fontFamily: "qanelasRegular",
                                            fontSize: "20px"
                                        },
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    type="text"
                                    label="Email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.email}
                                    name="email"
                                    error={!!touched.email && !!errors.email}
                                    helperText={touched.email && errors.email}
                                    sx={{
                                        gridColumn: "span 4",
                                        '& .MuiOutlinedInput-root': {
                                            borderBottom: `4px solid ${themeMode === "dark" ? "white" : "black"}`,
                                            color: `${themeMode === "dark" ? "white" : "black"}`,
                                            fontFamily: "qanelasRegular"
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: `${themeMode === "dark" ? "white" : "black"}`,
                                            fontFamily: "qanelasRegular",
                                            fontSize: "20px"
                                        },
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    type="text"
                                    label="Password"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.password}
                                    name="password"
                                    error={!!touched.password && !!errors.password}
                                    helperText={touched.password && errors.password}
                                    sx={{
                                        gridColumn: "span 4",
                                        '& .MuiOutlinedInput-root': {
                                            borderBottom: `4px solid ${themeMode === "dark" ? "white" : "black"}`,
                                            color: `${themeMode === "dark" ? "white" : "black"}`,
                                            fontFamily: "qanelasRegular"
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: `${themeMode === "dark" ? "white" : "black"}`,
                                            fontFamily: "qanelasRegular",
                                            fontSize: "20px"
                                        },
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    type="text"
                                    label="Contact Number"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.contact}
                                    name="contact"
                                    error={!!touched.contact && !!errors.contact}
                                    helperText={touched.contact && errors.contact}
                                    sx={{
                                        gridColumn: "span 4",
                                        '& .MuiOutlinedInput-root': {
                                            borderBottom: `4px solid ${themeMode === "dark" ? "white" : "black"}`,
                                            color: `${themeMode === "dark" ? "white" : "black"}`,
                                            fontFamily: "qanelasRegular"
                                            
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: `${themeMode === "dark" ? "white" : "black"}`,
                                            fontFamily: "qanelasRegular",
                                            fontSize: "20px"
                                        },
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    type="text"
                                    label="Age"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.age}
                                    name="age"
                                    error={!!touched.age && !!errors.age}
                                    helperText={touched.age && errors.age}
                                    sx={{
                                        gridColumn: "span 4",
                                        '& .MuiOutlinedInput-root': {
                                            borderBottom: `4px solid ${themeMode === "dark" ? "white" : "black"}`,
                                            color: `${themeMode === "dark" ? "white" : "black"}`,
                                            fontFamily: "qanelasRegular"
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: `${themeMode === "dark" ? "white" : "black"}`,
                                            fontFamily: "qanelasRegular",
                                            fontSize: "20px"
                                        },
                                    }}
                                />
                                <InputLabel className="font-qanelasRegular"
                                    id="access" sx={{
                                        color: `${themeMode === "dark" ? "white" : "black"}`,
                                        fontFamily: "qanelasRegular",
                                        fontSize: "20px"
                                    }}>Access Level</InputLabel>
                                <Select
                                    defaultValue="User"
                                    helperText={touched.age && errors.age}
                                    value={values.accessLevel}
                                    fullWidth
                                    variant="outlined"
                                    type="text"
                                    sx={{
                                        gridColumn: "span 4",
                                        '& .MuiOutlinedInput-root': {
                                            borderBottom: `4px solid ${themeMode === "dark" ? "white" : "black"}`,
                                            color: `${themeMode === "dark" ? "white" : "black"}`,
                                            fontFamily: "qanelasRegular"
                                        },

                                        '& .MuiInputLabel-root': {
                                            color: `${themeMode === "dark" ? "white" : "black"}`,
                                            fontFamily: "qanelasRegular",
                                            fontSize: "20px"
                                        },
                                        '& .MuiSelect-select': {
                                            color: `${themeMode === "light" ? "white" : "black"}`,
                                            bgcolor: `${themeMode === "dark" ? "white" : "black"}`
                                        },
                                        '& .MuiSelect-iconOutlined': {
                                            color: `${themeMode === "light" ? "white" : "black"}`,
                                        },
                                        '& .Mui-focused': {
                                            bgcolor: "red"
                                        }
                                    }}
                                    label="accessLevel"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    name="accessLevel"
                                >
                                    <MenuItem sx={{
                                        color: `${themeMode === "dark" ? "black" : "white"}`,
                                        bgcolor: `${themeMode === "light" ? "black" : "white"}`,

                                        '&:hover': {
                                            bgcolor: `${themeMode === "dark" ? "black" : "white"}`,
                                            color: `${themeMode === "light" ? "black" : "white"}`,
                                        },
                                        "&.Mui-selected": {
                                            bgcolor: "#9fe96e",
                                            color: "black"
                                        },
                                        fontFamily: "qanelasRegular"
                                    }} value={"admin"} >Admin</MenuItem>
                                    <MenuItem sx={{
                                        color: `${themeMode === "dark" ? "black" : "white"}`,
                                        bgcolor: `${themeMode === "light" ? "black" : "white"}`,
                                        '&:hover': {
                                            bgcolor: `${themeMode === "dark" ? "black" : "white"}`,
                                            color: `${themeMode === "light" ? "black" : "white"}`,
                                        },
                                        "&.Mui-selected": {
                                            bgcolor: "#9fe96e",
                                            color: "black"
                                        },
                                        fontFamily: "qanelasRegular"
                                    }} value={"manager"}>Manager</MenuItem>

                                    <MenuItem sx={{
                                        color: `${themeMode === "dark" ? "black" : "white"}`,
                                        bgcolor: `${themeMode === "light" ? "black" : "white"}`,
                                        '&:hover': {
                                            bgcolor: `${themeMode === "dark" ? "black" : "white"}`,
                                            color: `${themeMode === "light" ? "black" : "white"}`,
                                        },
                                        "&.Mui-selected": {
                                            bgcolor: "#9fe96e",
                                            color: "black"
                                        },
                                        fontFamily: "qanelasRegular"
                                    }} value={"user"}>User</MenuItem>
                                </Select>
                            </Box>
                            <Box display="flex" justifyContent="end" mt="20px">
                                <Button type="submit" variant="contained" sx={{
                                    bgcolor: "#9fe96e",
                                    color: "black",
                                    fontFamily: "qanelasRegular"
                                }}
                                disabled={errors.accessLevel || errors.age || errors.contact || errors.email || errors.fullName || errors.password}>
                                    Create New User
                                </Button>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </Box>
        </>)
}

export default TeamMemberFormPage;