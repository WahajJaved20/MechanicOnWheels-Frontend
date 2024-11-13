import React, { useState } from "react";
import useTheme from "../Contexts/theme";
import Topbar from "./Topbar";
import { Box, Button, Divider, Grid } from "@mui/material";
import { inspectionSchema, initialValues } from "../constants/inspectionScheme";
import { Formik, Form } from "formik";
import InputBox from "../constants/InputBox";
import { InspectionFormBox, FieldsMap } from "../constants/InspectionFormBox";
import { batteryFields, brakeFields, interiorExteriorFields, optionValues, underHoodFields, underVehicleFields } from "../constants/inspectionFields";
import RichTextEditor from "./RichTextEditor";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import LoadingBackdrop from "./FullLoder";
import { useLoading } from "../Contexts/loadingContext";

const InspectionForm = () => {
    const [preInspectionReport, setPreInspectionReport] = useState();
    const [postInspectionReport, setPostInspectionReport] = useState();
    const [values, setValues] = useState(optionValues);
    const { startLoading, stopLoading } = useLoading();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChanges = (section, key, event) => {
        setValues({
            ...values,
            [section]: {
                ...values[section],
                [key]: event
            }
        });
    };
    const handleFormSubmit = async (val) => {
        startLoading();
        const form = {
            customerName: val.customerName,
            mileage: val.mileage,
            yearMakeModel: val.yearMakeModel,
            contact: val.contact,
            ro: val.ro,
            vin: val.vin,
            license: val.license,
            email: val.email,
            serviceDate: val.serviceDate,
            servicedAt: val.servicedAt,
            nextService: val.nextService,
            interiorExteriorFields: values["interiorExteriorFields"],
            batteryFields: values["batteryFields"],
            underHoodFields: values["underHoodFields"],
            underVehicleFields: values["underVehicleFields"],
            brakeFields: values["brakeFields"],
            preInspectionReport: preInspectionReport,
            postInspectionReport: postInspectionReport
        }
        const result = await fetch(`https://mechanic-on-wheels-backend.vercel.app/inspection/addNewInspection`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': localStorage.getItem("jwtToken")
            },
            body: JSON.stringify(form)
        }).then((resp) => resp.json());
        if (result.type === "Success") {
            toast.success('Inspection Successfully Added');
            stopLoading();
            navigate('/');
        } else {
            stopLoading();
            toast.error(result.message);
        }
    }
    const { themeMode } = useTheme();
    return <>
        <Topbar title={"Multi Point Inspection Form"} userName={"Wahaj Javed"} />
        <Formik
            initialValues={initialValues}
            validationSchema={inspectionSchema}
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
                    <Grid container spacing={2} >
                        <Grid item xs={4}>
                            <InputBox
                                label={"NAME"}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                value={values.customerName}
                                name={"customerName"}
                                error={!!touched.customerName && !!errors.customerName}
                                themeMode={themeMode}
                                helperText={touched.customerName && errors.customerName}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <InputBox
                                label={"MILEAGE"}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                value={values.mileage}
                                name={"mileage"}
                                error={!!touched.mileage && !!errors.mileage}
                                themeMode={themeMode}
                                helperText={touched.mileage && errors.mileage}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <InputBox
                                label={"YEAR/MAKE/MODEL"}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                value={values.yearMakeModel}
                                name={"yearMakeModel"}
                                themeMode={themeMode}
                                error={!!touched.yearMakeModel && !!errors.yearMakeModel}
                                helperText={touched.yearMakeModel && errors.yearMakeModel}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <InputBox
                                label={"RO#"}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                value={values.ro}
                                name={"ro"}
                                themeMode={themeMode}
                                error={!!touched.ro && !!errors.ro}
                                helperText={touched.ro && errors.ro}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <InputBox
                                label={"Vin"}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                value={values.vin}
                                name={"vin"}
                                error={!!touched.vin && !!errors.vin}
                                themeMode={themeMode}
                                helperText={touched.vin && errors.vin}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <InputBox
                                label={"License"}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                value={values.license}
                                name={"license"}
                                themeMode={themeMode}
                                error={!!touched.license && !!errors.license}
                                helperText={touched.license && errors.license}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <InputBox
                                label={"Email"}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                value={values.email}
                                name={"email"}
                                themeMode={themeMode}
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <InputBox
                                label={"Contact #"}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                value={values.contact}
                                name={"contact"}
                                themeMode={themeMode}
                                error={!!touched.contact && !!errors.contact}
                                helperText={touched.contact && errors.contact}
                            />
                        </Grid>
                        <Grid item xs={9}>
                            <ColorCheckboxes />
                        </Grid>
                        <Grid item xs={12}>
                            <Divider color={`${themeMode === "light" ? "black" : "white"}`} sx={{ height: '5px', borderRadius: '5px' }} />
                        </Grid>
                        <InspectionFormBox data={interiorExteriorFields} handleChange={handleChanges} section={"interiorExteriorFields"} />
                        <InspectionFormBox data={batteryFields} handleChange={handleChanges} section={"batteryFields"} />
                        <InspectionFormBox data={underHoodFields} handleChange={handleChanges} section={"underHoodFields"} />
                        <InspectionFormBox data={underVehicleFields} handleChange={handleChanges} section={"underVehicleFields"} />
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
                            <FieldsMap data={brakeFields} handleChange={handleChanges} section={"brakeFields"} />
                        </Grid>
                        <Grid item xs={12} className="mt-8">
                            <Grid item xs={12} className="">
                                <h1 className="font-breulGroteskBBold text-[40px] justify-center items-center text-center text-white dark:text-black bg-black dark:bg-white">PRE INSPECTION REPORT</h1>
                            </Grid>
                            <RichTextEditor content={preInspectionReport} setContent={setPreInspectionReport} themeMode={themeMode} />
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
                                label={"SERVICE DATE"}
                                handleChange={handleChange}
                                value={values.serviceDate}
                                name={"serviceDate"}
                                themeMode={themeMode}
                                error={!!touched.serviceDate && !!errors.serviceDate}
                                helperText={touched.serviceDate && errors.serviceDate}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <InputBox
                                label={"SERVICED AT (In KMs)"}
                                handleChange={handleChange}
                                value={values.servicedAt}
                                name={"servicedAt"}
                                themeMode={themeMode}
                                error={!!touched.servicedAt && !!errors.servicedAt}
                                helperText={touched.servicedAt && errors.servicedAt}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <InputBox
                                label={"NEXT DUE AT (In KMs)"}
                                handleChange={handleChange}
                                value={values.nextService}
                                name={"nextService"}
                                themeMode={themeMode}
                                error={!!touched.nextService && !!errors.nextService}
                                helperText={touched.nextService && errors.nextService}
                            />
                        </Grid>
                        <Grid item xs={12} className="mt-8">
                            <Grid item xs={12} className="">
                                <h1 className="font-breulGroteskBBold text-[40px] justify-center items-center text-center text-white dark:text-black bg-black dark:bg-white">POST INSPECTION REPORT</h1>
                            </Grid>
                            <RichTextEditor content={postInspectionReport} setContent={setPostInspectionReport} themeMode={themeMode} />
                        </Grid>
                    </Grid>
                    <Box display="flex" justifyContent="end" mt="20px">
                        <Button type="submit" variant="contained" sx={{
                            bgcolor: "#9fe96e",
                            color: "black",
                            fontFamily: "qanelasRegular"
                        }}>
                            Add Record
                        </Button>
                    </Box>
                </Form>
            )}
        </Formik>
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





export default InspectionForm;