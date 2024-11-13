import React from "react";
import { Navigate } from "react-router-dom";

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
        if (result.type === "Success") {
            return true;
        }
        return false;
    }
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
