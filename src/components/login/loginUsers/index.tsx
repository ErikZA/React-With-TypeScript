import React from "react";
import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";

import { Container, Typography, TextField, Button } from "@material-ui/core";

interface FormValues {
  email: string;
  password: string;
}

interface MyFormProps {
  initialEmail?: string;
  initialPassword?: string;
}

const InnerForm = (props: FormikProps<FormValues>) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props;

  return (
    <>
      <Container component="main" maxWidth="lg">
        <div className="mt-0 mt-md-0">
          <div className="text-center">
            <Typography className="mt-3" component="h1" variant="h6">
              My Party
            </Typography>
            <Typography component="p" variant="subtitle1">
              Sign in to your account to continue
            </Typography>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <TextField
                type="email"
                variant="outlined"
                margin="normal"
                fullWidth
                label="Email"
                name="email"
                helperText={errors.email && touched.email && errors.email}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </div>
            <div className="mt-4">
              <TextField
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                label="Password"
                name="password"
                helperText={
                  errors.password && touched.password && errors.password
                }
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </div>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              color="primary"
              size="large"
              className="mb-3 mb-md-4 mt-4"
              disabled={
                isSubmitting ||
                !!(errors.email && touched.email) ||
                !!(errors.password && touched.password)
              }
            >
              Sign in
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
};

const LoginUsers = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => ({
    email: props.initialEmail || "",
    password: props.initialPassword || "",
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string().email("Email not valid").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Min 5 character"),
  }),

  handleSubmit(
    { email, password }: FormValues,
    { props, setSubmitting, setErrors }
  ) {
    console.log(email, password);
  },
})(InnerForm);

export default LoginUsers;
