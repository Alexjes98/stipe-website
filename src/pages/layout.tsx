import React from "react";
import { Box, Typography, Link } from "@mui/material";

import { useTheme } from "@mui/material/styles";

import Logo from "../assets/png/logo-stipe-blaco.png";


const Layout = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  return (
    <Box id="layout" sx={{ flexDirection: "row" }}>
      <Box
        sx={{
          zIndex: 2,
          position: "absolute",
          marginTop: 10,
          top: 0,
          width: "80%",
          padding: "15px 5% 5px 15%",
          justifyContent: "space-between",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <img src={Logo} alt="Logo" style={{ width: "100px" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "50%",
          }}
        >
          <Link>
            <Typography variant="h6" sx={{ color: "white" }}>
              Home
            </Typography>
          </Link>
          <Link>
            <Typography variant="h6" sx={{ color: "white" }}>
              Historia
            </Typography>
          </Link>
          <Link>
            <Typography variant="h6" sx={{ color: "white" }}>
              Nosotros
            </Typography>
          </Link>
          <Link>
            <Typography variant="h6" sx={{ color: "white" }}>
              Estudio
            </Typography>
          </Link>
        </Box>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;
