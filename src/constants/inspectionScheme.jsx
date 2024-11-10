import * as yup from "yup";
import { phoneRegExp } from "./userSchema";


const inspectionSchema = yup.object().shape({
    customerName: yup.string().required("Customer Name is Required"),
    mileage: yup.number(),
    yearMakeModel: yup.string(),
    contact: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Phone Number is Required"),
    ro: yup.string(),
    vin: yup.string(),
    license: yup.string().required("License # is Required"),
    email: yup.string().email("Invalid Email").required("Email is Required"),
    serviceDate: yup.date(),
    servicedAt: yup.number(),
    nextService: yup.number(),
});

const initialValues = {
    customerName: "",
    mileage: 0,
    yearMakeModel: "",
    contact: "",
    ro: "",
    vin: "",
    license: "",
    email: "",
    serviceDate: "",
    servicedAt: 0,
    nextService: 0,
}

export {inspectionSchema, initialValues};