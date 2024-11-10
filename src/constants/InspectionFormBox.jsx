import React, { useState } from "react";
import { Grid } from "@mui/material";

const InspectionFormBox = ({ data, handleChange, section }) => {
    return (
        <Grid item xs={12} className="mt-8">
            <div className="min-w-full border border-black border-2">
                <Grid item xs={12} className="">
                    <h1 className="font-breulGroteskBBold text-[40px] justify-center items-center text-center text-white dark:text-black bg-black dark:bg-white">{data.header}</h1>
                </Grid>
                <FieldsMap data={data} handleChange={handleChange} section={section}/>
            </div>
        </Grid>
    )
}

const FieldsMap = ({ data, handleChange, section }) => {
    return (
        <>
            {
                data.fields.map((value, index) => {
                    return (
                        <Grid item xs={12} className="border border-black  border-2 flex flex-row justify-between items-center font-qanelasRegular text-[20px] text-black dark:text-white dark:border-white">
                            <h1 className="ml-4 ">{value.text}</h1>
                            <ColorRadioGroup handleChange={handleChange} section={section} index={index}/>
                        </Grid>
                    )
                })
            }
        </>
    )
}
const ColorRadioGroup = ({handleChange, section, index}) => {
    const [selectedColor, setSelectedColor] = useState(null);

    const options = [
        { id: 'green', color: 'bg-green-500' },
        { id: 'yellow', color: 'bg-yellow-500' },
        { id: 'red', color: 'bg-red-500' },
    ];

    return (
        <div className="flex m-4">
            {options.map((option) => (
                <label key={option.id} className="cursor-pointer">
                    <input
                        type="radio"
                        name="status"
                        checked={selectedColor === option.id}
                        onChange={(e) => {
                            setSelectedColor(option.id);
                            handleChange(section, index+1, option.id);
                        }}
                        className="hidden"
                    />
                    <div
                        className={`w-8 h-8 border-2 flex items-center justify-center ${selectedColor === option.id ? ` border-black` : 'border-gray-300'
                            } ${option.color}`}
                    >
                        {selectedColor === option.id && (
                            <svg
                                className="w-5 h-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                            </svg>
                        )}
                    </div>
                </label>
            ))}
        </div>
    );
};

export {InspectionFormBox, FieldsMap};