import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

function ChangePasswordForm() {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (passwords.newPassword !== passwords.confirmPassword) {
      setError("New Password and Confirm Password do not match!");
      return;
    }

    console.log("Password Updated:", passwords);
    alert("Password changed successfully!");
  };

  return (
    <Container maxWidth="sm" sx={{ ml: { xs: 0, md: 32 } }}>
      <Card sx={{ boxShadow: 3, borderRadius: 3, mt: 10, mb: 10, p: 3 }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Change Password
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Current Password"
              name="currentPassword"
              type="password"
              value={passwords.currentPassword}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              label="New Password"
              name="newPassword"
              type="password"
              value={passwords.newPassword}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={passwords.confirmPassword}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              required
            />
            {error && (
              <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2, backgroundColor: "#070534", "&:hover": { backgroundColor: "#050422" } }}
            >
              Change Password
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ChangePasswordForm;
