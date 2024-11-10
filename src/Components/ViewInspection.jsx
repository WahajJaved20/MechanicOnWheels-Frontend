import React, { useEffect, useState } from "react";
import useTheme from "../Contexts/theme";
import Topbar from "./Topbar";
import { Box, Button, Divider, Grid } from "@mui/material";
import InputBox from "../constants/InputBox";
import { InspectionFormBox, FieldsMap } from "../constants/InspectionFormBox";
import { batteryFields, brakeFields, interiorExteriorFields, optionValues, underHoodFields, underVehicleFields } from "../constants/inspectionFields";
import RichTextEditor from "./RichTextEditor";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const InspectionForm = () => {
    const [values, setValues] = useState({
        customerName: "",
        mileage: "",
        yearMakeModel: "",
        contact: "",
        ro: "",
        vin: "",
        license: "",
        email: "",
        serviceDate: "",
        servicedAt: "",
        nextService: "",
        preInspectionReport: "",
        postInspectionReport: "",
        interiorExteriorFields: {
            1:"",
            2:"",
            3:"",
            4:""
        },
        batteryFields: {
            1:""
        },
        underHoodFields: {
            1:"",
            2:"",
            3:"",
            4:"",
            5:"",
            6:"",
            7:"",
            8:"",
            9:"",
            10:"",
            11:"",
            12:"",
            13:""
        },
        underVehicleFields: {
            1:"",
            2:"",
            3:"",
            4:"",
            5:"",
        },
        brakeFields: {
            1:"",
            2:"",
            3:"",
            4:""
        }
    });
    const navigate = useNavigate();


    useEffect(() => {
        const getData = async () => {
            const result = await fetch(`https://mechanic-on-wheels-backend.vercel.app/inspection/getRecentInspection`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'Authorization': localStorage.getItem("jwtToken")
                },
            }).then((resp) => resp.json());
            setValues(result.ss);
            console.log(result)
        }
        getData();
    }, [])
    const { themeMode } = useTheme();
    return <>
        <Topbar title={"View Inspection Form"} userName={"Wahaj Javed"} />
        <div className="mt-8 mr-8 mb-8">
        <Grid container spacing={2} >
            <Grid item xs={4}>
                <InputBox
                    disabled={true}
                    label={"NAME"}
                    value={values.customerName}
                    name={"customerName"}
                    themeMode={themeMode}
                />
            </Grid>
            <Grid item xs={4}>
                <InputBox
                    disabled={true}
                    label={"MILEAGE"}
                    value={values.mileage}
                    name={"mileage"}
                    themeMode={themeMode}
                />
            </Grid>
            <Grid item xs={4}>
                <InputBox
                    disabled={true}
                    label={"YEAR/MAKE/MODEL"}
                    value={values.yearMakeModel}
                    name={"yearMakeModel"}
                    themeMode={themeMode}
                />
            </Grid>
            <Grid item xs={3}>
                <InputBox
                    disabled={true}
                    label={"RO#"}
                    value={values.ro}
                    name={"ro"}
                    themeMode={themeMode}
                />
            </Grid>
            <Grid item xs={3}>
                <InputBox
                    disabled={true}

                    label={"Vin"}
                    value={values.vin}
                    name={"vin"}
                    themeMode={themeMode}
                />
            </Grid>
            <Grid item xs={3}>
                <InputBox
                    disabled={true}
                    label={"License"}
                    value={values.license}
                    name={"license"}
                    themeMode={themeMode}
                />
            </Grid>
            <Grid item xs={3}>
                <InputBox
                    disabled={true}
                    label={"Email"}
                    value={values.email}
                    name={"email"}
                    themeMode={themeMode}
                />
            </Grid>
            <Grid item xs={3}>
                <InputBox
                    disabled={true}
                    label={"Contact #"}
                    value={values.contact}
                    name={"contact"}
                    themeMode={themeMode}
                />
            </Grid>
            <Grid item xs={9}>
                <ColorCheckboxes />
            </Grid>
            <Grid item xs={12}>
                <Divider color={`${themeMode === "light" ? "black" : "white"}`} sx={{ height: '5px', borderRadius: '5px' }} />
            </Grid>
            <ColorRadioGroup data={interiorExteriorFields} colors={values.interiorExteriorFields} />
            <ColorRadioGroup data={batteryFields} colors={values.batteryFields} />
            <ColorRadioGroup data={underHoodFields} colors={values.underHoodFields} />
            <ColorRadioGroup data={underVehicleFields} colors={values.underVehicleFields} />

            <Grid item xs={12} className="mt-8">
                <div className="min-w-full border border-black dark:border-white border-2">
                    <Grid item xs={12} className="">
                        <h1 className="font-breulGroteskBBold text-[40px] justify-center items-center text-center text-white dark:text-black bg-black dark:bg-white">BRAKES</h1>
                    </Grid>
                    <Grid item xs={12} className="">
                        <h1 className="font-breulGroteskBBold text-[40px] justify-center items-center text-center text-black dark:text-white">BRAKE PADS - SHOES</h1>
                    </Grid>

                </div>
                <div className="border border-black dark:border-white border-2">
                    <Grid item xs={12} className="flex flex-row items-center">
                        <div className="p-4 m-2 border border-black border-2 bg-green-500"></div>
                        <h1 className="font-breulGroteskBBold text-[20px] justify-center items-center text-center text-black dark:text-white">{"Over 5mm (Disk) or 2mm (Drum)"}</h1>
                    </Grid>
                    <Grid item xs={12} className="flex flex-row items-center">
                        <div className="p-4 m-2 border border-black border-2 bg-yellow-500"></div>
                        <h1 className="font-breulGroteskBBold text-[20px] justify-center items-center text-center text-black dark:text-white">{"3.5mm (Disk) or 1.01-2mm (Drum)"}</h1>
                    </Grid>
                    <Grid item xs={12} className="flex flex-row items-center">
                        <div className="p-4 m-2 border border-black border-2 bg-red-500"></div>
                        <h1 className="font-breulGroteskBBold text-[20px] justify-center items-center text-center text-black dark:text-white">{"Less than 3mm (Disk) or 1mm (Drum)"}</h1>
                    </Grid>
                </div>
                <ColorRadioGroup data={brakeFields} colors={values.brakeFields} />
            </Grid>
            <Grid item xs={12} className="mt-8">
                <Grid item xs={12} className="">
                    <h1 className="font-breulGroteskBBold text-[40px] justify-center items-center text-center text-white dark:text-black bg-black dark:bg-white">PRE INSPECTION REPORT</h1>
                </Grid>
                <RichTextEditor content={values.preInspectionReport} themeMode={themeMode} disabled={true} />
            </Grid>
            <Grid item xs={12} className="mt-8">
                <div className="border border-black border-2">
                    <Grid item xs={12} className="">
                        <h1 className="font-breulGroteskBBold text-[40px] justify-center items-center text-center text-white dark:text-black bg-black dark:bg-white">NEXT SERVICE DUE</h1>
                    </Grid>

                </div>
            </Grid>
            <Grid item xs={4}>
                <InputBox
                    disabled={true}

                    label={"SERVICE DATE"}
                    value={values.serviceDate}
                    name={"serviceDate"}
                    themeMode={themeMode}
                />
            </Grid>
            <Grid item xs={4}>
                <InputBox
                    disabled={true}
                    label={"SERVICED AT (In KMs)"}
                    value={values.servicedAt}
                    name={"servicedAt"}
                    themeMode={themeMode}
                />
            </Grid>
            <Grid item xs={4}>
                <InputBox
                    disabled={true}
                    label={"NEXT DUE AT (In KMs)"}
                    value={values.nextService}
                    name={"nextService"}
                    themeMode={themeMode}
                />
            </Grid>
            <Grid item xs={12} className="mt-8">
                <Grid item xs={12} className="">
                    <h1 className="font-breulGroteskBBold text-[40px] justify-center items-center text-center text-white dark:text-black bg-black dark:bg-white">POST INSPECTION REPORT</h1>
                </Grid>
                <RichTextEditor content={values.postInspectionReport} themeMode={themeMode} disabled={true} />
            </Grid>
        </Grid>
        </div>
    </>
}


const ColorCheckboxes = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const options = [
        { id: 'green', color: "bg-green-500", label: 'CHECKED AND OK' },
        { id: 'yellow', color: "bg-yellow-500", label: 'FUTURE ATTENTION' },
        { id: 'red', color: "bg-red-500", label: 'IMMEDIATE ATTENTION' },
    ];

    return (
        <div className="flex gap-4 items-center justify-center mt-8 font-qanelasRegular text-black dark:text-white">
            {options.map((option) => (
                <label key={option.id} className="flex items-center cursor-pointer">
                    <input
                        type="radio"
                        name="status"
                        checked={selectedOption === option.id}
                        onChange={() => setSelectedOption(option.id)}
                        className="hidden"
                    />
                    <div
                        className={`w-6 h-6 ${option.color}`}
                    ></div>
                    <span className={`ml-2 ${option.id === selectedOption ? "" : ""}`}>{option.label}</span>
                </label>
            ))}
        </div>
    );
};
const ColorRadioGroup = ({ data, colors }) => {
    const options = [
        { id: 'green', color: 'bg-green-500' },
        { id: 'yellow', color: 'bg-yellow-500' },
        { id: 'red', color: 'bg-red-500' },
    ];

    return (
        <Grid item xs={12} className="mt-8">
            <div className="min-w-full border border-black border-2">
                <Grid item xs={12} className="">
                    <h1 className="font-breulGroteskBBold text-[40px] justify-center items-center text-center text-white dark:text-black bg-black dark:bg-white">{data.header}</h1>
                </Grid>
                {
                    data.fields.map((value, index) => {
                        return (
                            <Grid item xs={12} className="border border-black  border-2 flex flex-row justify-between items-center font-qanelasRegular text-[20px] text-black dark:text-white dark:border-white">
                                <h1 className="ml-4 ">{value.text}</h1>
                                <div className="flex m-4">
                                    {options.map((option) => {
                                        const selectedColor = colors[index+1]
                                        return (<>
                                            <label key={option.id} className="cursor-pointer">
                                                <input
                                                    disabled={true}
                                                    type="radio"
                                                    name="status"
                                                    checked={selectedColor === option.id}
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
                                        </>)

                                    })}
                                </div>
                            </Grid>
                        )
                    })
                }
            </div>
        </Grid>

    );
};




export default InspectionForm;