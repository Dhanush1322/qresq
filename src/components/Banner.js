import React from "react";
import { Box, Typography, Button, Container, Stack } from "@mui/material";
import Appstore from "../assets/appstore.png";
import Playstore from "../assets/playstore.png";

function Banner() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #ffb901, #070534)", // Attractive gradient
        color: "white",
        minHeight: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 20px",
        borderRadius: "12px",
      }}
    >
      <Container>
        <Typography
          variant="h3"
          fontWeight="bold"
          mb={2}
          sx={{ fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" } }} // Adjust text size for mobile
        >
          Simplifies Emergency
        </Typography>
        <Typography
          variant="h6"
          sx={{
            opacity: 0.8,
            mb: 3,
            fontSize: { xs: "1rem", sm: "1.2rem" }, // Adjust for mobile
          }}
        >
          Get instant access to emergency services at your fingertips.
        </Typography>

        {/* Buttons Section - Stack on mobile */}
        <Stack
          direction={{ xs: "column", sm: "row" }} // Column layout for mobile
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          {/* Google Play Store Button */}
          <Button
            href="https://play.google.com/store/apps/details?id=com.yourapp"
            target="_blank"
            variant="contained"
            sx={{
              backgroundColor: "#0F9D58",
              "&:hover": { backgroundColor: "#0c7c46" },
              borderRadius: "8px",
              padding: "10px 20px",
              fontWeight: "bold",
              width: { xs: "100%", sm: "auto" }, // Full width on mobile
            }}
          >
            <img
              src={Playstore}
              alt="Google Play"
              style={{ height: "40px", marginRight: "8px" }}
            />
            Get it on Google Play
          </Button>

          {/* Apple App Store Button */}
          <Button
            href="https://apps.apple.com/us/app/yourapp/id123456789"
            target="_blank"
            variant="contained"
            sx={{
              backgroundColor: "#000",
              "&:hover": { backgroundColor: "#222" },
              borderRadius: "8px",
              padding: "10px 20px",
              fontWeight: "bold",
              width: { xs: "100%", sm: "auto" }, // Full width on mobile
            }}
          >
            <img
              src={Appstore}
              alt="App Store"
              style={{ height: "40px", marginRight: "8px" }}
            />
            Download on the App Store
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default Banner;
