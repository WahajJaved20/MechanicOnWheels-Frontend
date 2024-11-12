import * as yup from "yup";

const loginSchema = yup.object().shape({
	email: yup.string().email("Invalid Email").required("Email is Required"),
	password: yup.string().required("Password is Required"),

});
const initialValues = {
	email: "",
	password: "",
};

export {loginSchema, initialValues}