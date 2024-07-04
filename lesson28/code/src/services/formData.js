import * as yup from "yup";

export const singInScheme = yup.object().shape({
  email: yup
    .string()
    .required("This field is required!")
    .email("This field mut to be valid email."),
  password: yup
    .string()
    .required("This field is required!")
    .min(6, "Password must to be latest 6 characters")
    .max(12, "Password must to be exceed 6 characters"),
});
