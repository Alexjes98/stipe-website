import React from "react";
import { Box } from "@mui/material";
const PageContainer = ({ children} :  { children: React.ReactNode } ) => {
  return (
    <Box
      id="page-container"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px 5px 30px 5px",
      }}
    >
      {children}
    </Box>
  );
};

export default PageContainer;
