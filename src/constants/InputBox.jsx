import React from "react";
import { TextField } from "@mui/material";

const InputBox = ({ label, handleBlur, handleChange, value, name, error, helperText, themeMode }) => {
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
        />);
}

export default InputBox;