import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import LoadingBackdrop from "./FullLoder";
import { useLoading } from "../Contexts/loadingContext";

const ProtectedRoute = ({ children }) => {
    const {startLoading, stopLoading} = useLoading();
    const isAuthenticated = async () => {
        startLoading();
        const navigate = useNavigate();
        const result = await fetch(
            `https://mechanic-on-wheels-backend.vercel.app/verifyJwt`,
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    jwtToken: localStorage.getItem("jwtToken")
                }),
            }
        ).then((resp) => resp.json());
        console.log(result);
        if (result.type === "Success") {
            stopLoading();
            return true;
        }
        stopLoading();
        navigate("/login");
        return false;
    }
    return <>{isAuthenticated() ? children : <></>}</>
};

export default ProtectedRoute;
