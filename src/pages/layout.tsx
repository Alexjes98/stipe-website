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
      >
        <Grid
          item
          xs={6}
          sx={{
            backgroundColor: theme.palette.primary.main,    
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            paddingLeft: "50px",
            paddingBottom: "10px",
          }}
        >
          <img src={Logo} alt="Logo" style={{ width: "100px" }} />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            backgroundColor: theme.palette.primary.main,    
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingRight: "50px",
            paddingBottom: "10px",
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
