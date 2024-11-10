import React from "react";
import { TextField } from "@mui/material";

const InputBox = ({ label, handleBlur, handleChange, value, name, error, helperText, themeMode, disabled }) => {
    return (
        <TextField
            fullWidth
            variant="outlined"
            type="text"
            label={label}
            onBlur={handleBlur}
            onChange={handleChange}
            value={value}
            name={name}
            error={error}
            helperText={helperText}
            disabled={disabled}
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
               
  "& .MuiInputBase-input.Mui-disabled": { WebkitTextFillColor: `${themeMode === "dark" ? "white" : "black"}`, },


            }}
        />);
}

export default InputBox;