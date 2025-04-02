import * as yup from "yup";

export const registerSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid Email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "password must be more than 6")
    .required("password is required"),
  firstName: yup.string().required("first Name is required"),
  lastName: yup.string().required("last Name is required"),
  phoneNumber: yup.string().required("Phone no is required"),
  gender: yup
    .object()
    .shape({
      label: yup.string().optional(),
      value: yup.string().optional(),
    })
    .optional(),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "password does not match")
    .required("Confirm password is required"),
});
