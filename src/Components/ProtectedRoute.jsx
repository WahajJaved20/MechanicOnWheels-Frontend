import React from "react";
import { Navigate } from "react-router-dom";
import LoginPage from "./LoginPage";


const ProtectedRoute = ({ children }) => {
    const isAuthenticated = async () => {
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
            return true;
        }
        return false;
    }
  return isAuthenticated() ? children : <LoginPage />;
};

export default ProtectedRoute;
