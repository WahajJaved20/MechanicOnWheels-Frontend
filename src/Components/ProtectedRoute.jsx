import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import LoadingBackdrop from "./FullLoder";

const ProtectedRoute = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const isAuthenticated = async () => {
        setIsLoading(true);
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
            setIsLoading(false);
            return true;
        }
        setIsLoading(false);
        navigate("/login");
        return false;
    }
    return <>
        {isLoading ? <LoadingBackdrop /> : <>
            {isAuthenticated() ? children : <></>}
        </>}
    </>;
};

export default ProtectedRoute;
