import React, { useState } from "react";
import Logo from '../img/logo.png'
import {
  TextField,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

const Admin = () => {
  const [credentials, setCredentials] = useState({
    userId: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Admin Logged In:", credentials);
  };

  return (
    <Container maxWidth="xs">
      <Card sx={{ boxShadow: 3, borderRadius: 3, mt: 10, p: 3 }}>
        <CardContent>
          <div style={{ textAlign: "center", marginBottom: "10px" }}>
            <img
              src={Logo} // Replace with your actual logo path
              alt="Admin Logo"
              style={{ width: "150px" }}
            />
          </div>
          <Typography variant="h5" align="center" gutterBottom>
            Admin Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="User ID"
              name="userId"
              value={credentials.userId}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={credentials.password}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              required
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2, bgcolor: "#070534", color: "white" }}
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Admin;
