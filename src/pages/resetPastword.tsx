import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import React, { useState } from "react";

import { resetPassword } from "../api/api";

const ResetPassword: React.FC = () => {
  const theme = useTheme();
  let location = useLocation();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const data = location.search.substring(6);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      password !== confirmPassword ||
      password === "" ||
      confirmPassword === ""
    ) {
      setPasswordError(true);
      return;
    }

    const result = await resetPassword(data, password);
    
    if (result) {
      alert("Password reset successfully");
    } else {
      alert("Error resetting password Token expired");
    }

    // Reset the form
    setPassword("");
    setConfirmPassword("");
    setPasswordError(false);
  };

  return (
    <>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          color: `${theme.palette.primary.main}`,
          textAlign: "center",
        }}
      >
        Reset Password
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "600px",
        }}
      >
        <Container component="main" maxWidth="xs">
          <div>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="password"
                  label="New password"
                  name="password"
                  autoComplete="password"
                  onChange={handlePasswordChange}
                  value={password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="password-confirm"
                  label="Confirm new password"
                  name="password"
                  autoComplete="password"
                  onChange={handleConfirmPasswordChange}
                  value={confirmPassword}
                />
              </Grid>
              {passwordError && (
                <Grid item xs={12}>
                  <Typography variant="body2" color="error">
                    {password === "" || confirmPassword === ""
                      ? "Password is required"
                      : passwordError
                      ? "Passwords do not match"
                      : ""}
                  </Typography>
                </Grid>
              )}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Reset Password
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ResetPassword;
