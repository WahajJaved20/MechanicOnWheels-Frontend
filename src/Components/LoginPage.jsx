import React from "react";
import { loginBg } from "../assets"
import { Box, TextField, Typography, Button } from "@mui/material";
import InputBox from "../constants/InputBox";
import { loginSchema, initialValues } from "../constants/loginSchema";
import useTheme from "../Contexts/theme";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
    const { themeMode } = useTheme();
    const navigate = useNavigate();
    const handleFormSubmit = async (values) => {
        const result = await fetch(
            `https://mechanic-on-wheels-backend.vercel.app/login`,
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    email: values.email,
                    password: values.password,
                }),
            }
        ).then((resp) => resp.json());
        if (result.type === "Success") {
            toast.success("Successfully Logged In");
            localStorage.setItem("jwtToken", result.token);
            localStorage.setItem("userName", result.name);
            navigate("/team");
        } else {
            toast.error(result.message);
        }
    }
    return (
        <div className="flex min-h-screen bg-[#f8f8f5]">
            <div className="hidden md:flex md:w-3/4 bg-cover bg-center" style={{ backgroundImage: `url(${loginBg})` }}>
            </div>
            <div className="flex flex-col justify-center items-center w-full md:w-1/4 p-8">
                <Box className="w-full max-w-md">
                    <h1 className=" mt-4 font-breulGroteskBold text-[40px] text-center font-bold">Mechanic On Wheels</h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={loginSchema}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleBlur,
                            handleChange,
                        }) => (
                            <Form
                                className="m-8"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleFormSubmit(values);
                                }}>
                                <InputBox
                                    label={"EMAIL"}
                                    handleBlur={handleBlur}
                                    handleChange={handleChange}
                                    value={values.email}
                                    name={"email"}
                                    error={!!touched.email && !!errors.email}
                                    themeMode={themeMode}
                                    helperText={touched.email && errors.email}
                                />
                                <div className="mt-8"></div>
                                <InputBox
                                    label={"PASSWORD"}
                                    handleBlur={handleBlur}
                                    handleChange={handleChange}
                                    value={values.password}
                                    name={"password"}
                                    error={!!touched.password && !!errors.password}
                                    themeMode={themeMode}
                                    helperText={touched.password && errors.password}
                                />
                                <Box display="flex" justifyContent="end" mt="20px">
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{
                                            bgcolor: "#102a43",
                                            color: "white",
                                            fontFamily: "qanelasRegular",
                                        }}
                                    >
                                        Login
                                    </Button>
                                </Box>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </div>
        </div>
    );
}

export default LoginPage;