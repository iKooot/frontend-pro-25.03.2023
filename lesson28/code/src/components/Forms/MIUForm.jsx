import { Box, Button, Container, TextField } from "@mui/material";
import { useFormik } from "formik";
import { singInScheme } from "../../services/formData.js";

export function MIUForm() {
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: { email: "", password: "" },
      onSubmit: (values, { resetForm, setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values));
          resetForm();
          setSubmitting(false);
        }, 500);
      },
      validationSchema: singInScheme,
    });

    console.log(dirty)
  return (
    <Container>
      <Box componennt="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          margin="normal"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          margin="normal"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
        />
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          margin="normal"
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
}
