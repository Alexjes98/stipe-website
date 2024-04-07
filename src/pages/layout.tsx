import React from "react";
import { Box, Typography, Link, Grid } from "@mui/material";

import { useTheme } from "@mui/material/styles";

import Logo from "../assets/png/logo-stipe-blaco.png";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  return (
    <Box
      id="layout"
      sx={{
        display: "flex",
        flexDirection: "column",        
      }}
    >
      <Grid
        container
        sx={{
          backgroundColor: theme.palette.primary.main,          
          padding: "0 10%",
          height: "13vh",
        }}
      >
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <img src={Logo} alt="Logo" style={{ width: "100px" }} />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row",
          justifyContent: "space-between", width: "100%"
          
         }}>
            <Link
              href="/"
              sx={{
                textDecoration: "none",
              }}
            >
              <Typography variant="h6" sx={{ color: "white" }}>
                Home
              </Typography>
            </Link>
            <Link
              href="/history"
              sx={{
                textDecoration: "none",
              }}
            >
              <Typography variant="h6" sx={{ color: "white" }}>
                Historia
              </Typography>
            </Link>
            <Link
              href="/ourTeam"
              sx={{
                textDecoration: "none",
              }}
            >
              <Typography variant="h6" sx={{ color: "white" }}>
                Nosotros
              </Typography>
            </Link>
            <Link
              href="/study"
              sx={{
                textDecoration: "none",
              }}
            >
              <Typography variant="h6" sx={{ color: "white" }}>
                Estudio
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
      <Box
        id="content"
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
