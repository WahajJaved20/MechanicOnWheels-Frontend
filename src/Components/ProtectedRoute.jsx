import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useLoading } from "../Contexts/loadingContext";
import { baseUrl } from "../services/http";

const ProtectedRoute = ({ children }) => {
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const isAuthenticated = async () => {
      if (!verified) {
        const result = await fetch(`${baseUrl}/verifyJwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            jwtToken: localStorage.getItem("jwtToken"),
          }),
        }).then((resp) => resp.json());
        console.log(result);
        if (result.type === "Success") {
          setVerified(true);
          return true;
        }
        navigate("/login");
        return false;
      }
    };
    isAuthenticated();
  }, []);
  return <>{verified ? children : <></>}</>;
};

export default ProtectedRoute;
