import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import Logo from '../img/logo.png';
import { TextField, Button, Container, Typography, Card, CardContent, CircularProgress, Dialog, DialogTitle, DialogContent, DialogActions, Box } from "@mui/material";
import Swal from "sweetalert2";

const Admin = () => {
  const [credentials, setCredentials] = useState({ userId: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const navigate = useNavigate(); // ✅ Initialize useNavigate for page redirection

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
  
    try {
      const response = await fetch("http://qrr.eu-4.evennode.com/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.userId,
          password: credentials.password,
        }),
      });
  
      const data = await response.json();
      setLoading(false);
  
      if (data.success) {
        localStorage.setItem("authToken", data.result.authToken);
        Swal.fire({
          title: "Success!",
          text: "Login Successful!",
          icon: "success",
          timer: 2000,
          showConfirmButton: false
        });
  
        setTimeout(() => {
          navigate("/DashboardPage");
        }, 2000);
      } else {
        Swal.fire({
          title: "Error!",
          text: data.result.MESSAGE || "Login failed! Please check your credentials.",
          icon: "error",
        });
      }
    } catch (error) {
      setLoading(false);
      Swal.fire({
        title: "Error!",
        text: "An error occurred. Please try again.",
        icon: "error",
      });
      console.error("Login Error:", error);
    }
  };
  
  return (
    <Container maxWidth="xs">
      <Card sx={{ boxShadow: 3, borderRadius: 3, mt: 10, p: 3 }}>
        <CardContent>
          <div style={{ textAlign: "center", marginBottom: "10px" }}>
            <img src={Logo} alt="Admin Logo" style={{ width: "150px" }} />
          </div>
          <Typography variant="h5" align="center" gutterBottom>
            Admin Login
          </Typography>
          {error && <Typography color="error" align="center">{error}</Typography>}
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
              disabled={loading} // Disable button when loading
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Success/Error Popup */}
      <Dialog open={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <DialogTitle>Message</DialogTitle>
        <DialogContent>
          <Box sx={{ width: "350px", height: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Typography sx={{ color: popupMessage.includes("Successful") ? "green" : "red", textAlign: "center" }}>
              {popupMessage}
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsPopupOpen(false)} color="primary">OK</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Admin;
