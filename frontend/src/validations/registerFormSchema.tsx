import * as yup from "yup";


export const emailRegex = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/
const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{9,14}?$/;
const nameReg = /^[a-zA-Z ]{1,30}$/;

const aadharRegex = /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/

const RegisterValidationSchema = yup.object().shape({
    email: yup
        .string()
        .trim()
        .required("Please enter email.")
        .matches(emailRegex, "Please Enter Valid Email Address")
    ,
    password: yup.string().trim().required("Please enter password."),

    username: yup.string().trim().required("Please enter username")
        .max(30, "Only 30 characters allowed")
   ,
    // address: yup.string().trim().required("Please enter address")
    //     .required("Please enter address")    ,
    // mobile: yup
    //     .string()
    //     .trim().required("Please enter mobile number.")
    //     .matches(phoneRegExp, "Mobile number is not valid."),
  
    password_confirmation: yup
    .string()
    .required("Please enter confirm password")
    .oneOf([yup.ref("password"), ""], "Passwords must match"),


});

export default RegisterValidationSchema;
