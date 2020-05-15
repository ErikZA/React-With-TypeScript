import React from "react";

import { Container, Typography, TextField, Button } from "@material-ui/core";

const LoginUsers: React.FC = () => {
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
          <div className="mt-4">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="emailUser"
            />
          </div>
          <div className="mt-4">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="passwordUser"
            />
          </div>
          <Button
            type="button"
            variant="contained"
            fullWidth
            color="primary"
            size="large"
            className="mb-3 mb-md-4 mt-4"
          >
            Sign in
          </Button>
        </div>
      </Container>
    </>
  );
};

export default LoginUsers;
