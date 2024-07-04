// import { useForm, useInput } from "./BaseForm.hooks.js";
//
// export function BaseForm() {
//   const {
//     value: nameValue,
//     onChangeHandler: nameChangeHandler,
//     error: nameError,
//     touched: nameTouched,
//     onFocsHandler: nameFocsHandler,
//   } = useInput(/^\w+$/, "Name is invalid");
//
//   // { [name]: { value: string, touched: boolean, error: string | null } }
//   const { disabled, onSubmitHandler } = useForm({
//     value: nameValue,
//     error: nameError,
//     touched: nameTouched,
//   });
//
//   return (
//     <form onSubmit={onSubmitHandler}>
//       <input
//         type="text"
//         name="email"
//         value={nameValue}
//         onChange={nameChangeHandler}
//         onFocus={nameFocsHandler}
//       />
//       {nameError && nameTouched && <p>{nameError}</p>}
//       <input type="password" name="password" />
//       <button disabled={disabled}>Submit</button>
//     </form>
//   );
// }

import {ErrorMessage, Field, Formik} from "formik";

export function BaseForm() {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, formikHelpers) => {
        setTimeout(() => {
          console.log(JSON.stringify(values));
          formikHelpers.resetForm();
          formikHelpers.setSubmitting(false);
        }, 500);
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required!";
        } else if (!/^\w+$/i.test(values.email)) {
          errors.email = "Invalid email";
        }

        return errors;
      }}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        handleBlur,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {/*  <Field*/}
          {/*      type="text"*/}
          {/*      name="email"*/}
          {/*  />*/}
          {errors.email && touched.email && (
            <p style={{ color: "red" }}>{errors.email}</p>
          )}
          {/*<ErrorMessage name="email" />*/}
          {/*<input type="password" name="password" />*/}
          <Field type="password" name="password" />
          <button disabled={isSubmitting}>Submit</button>
        </form>
      )}
    </Formik>
  );
}
