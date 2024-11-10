import * as yup from "yup";

const phoneRegExp =
	/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
	fullName: yup.string().required("Full Name is Required"),
	email: yup.string().email("Invalid Email").required("Email is Required"),
	password: yup.string().required("Password is Required"),
	contact: yup
		.string()
		.matches(phoneRegExp, "Phone number is not valid")
		.required("Phone Number is Required"),
	age: yup.string().required("Age is Required"),
	accessLevel: yup.string().required("Required")

});
const initialValues = {
	fullName: "",
	email: "",
	contact: "",
	age: "",
	password: "",
	accessLevel: "user"
};

export {phoneRegExp, checkoutSchema, initialValues}