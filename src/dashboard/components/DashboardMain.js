import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { People, ShoppingCart } from "@mui/icons-material";
import "./DashboardMain.css";

const DashboardMain = () => {
  const stats = [
    { title: "Total Users", count: 3000, icon: <People fontSize="large" /> , color: "#ffb901" },
    { title: "Total Products", count: 150, icon: <ShoppingCart fontSize="large" />, color: "#ffb901" },
  ];

  return (
    <div className="dashboard-main">
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                padding: 2,
                backgroundColor: "#070534",
                color: "#ffb901",
                borderRadius: 3,
                boxShadow: 3,
              }}
            >
              {stat.icon}
              <CardContent>
                <Typography variant="h6" sx={{ color: stat.color}}>{stat.title}</Typography>
                <Typography variant="h4" sx={{ color: stat.color}}>{stat.count}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DashboardMain;
