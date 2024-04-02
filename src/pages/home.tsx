import { Box, Button, Grid, Typography, Container } from "@mui/material";

import HomeBackground from "../assets/jpg/home.jpg";
import Phone from "../assets/png/presentación-celular-1.png";

const Home = () => {
  return (
    <Box
      sx={{
        margin: 0,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          zIndex: -1,
        }}
      >
        <img src={HomeBackground} alt="fondo" width="100%" />
      </Box>
      <Box
        sx={{
          width: "100%",
          paddingTop: "30vh",
          paddingLeft: "10vw",
          marginBottom: "60vh",
        }}
      >
        <Grid container>
          <Grid item xs={6}>
            <Typography
              variant="h1"
              sx={{ fontWeight: "bold", color: "white", marginTop: "10vh" }}
            >
              Stipe
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Aplicación desarrollada para el mejoramiento y rendimiento
              efectivo de los procesos de palma aceitera
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Button
              variant="contained"
              sx={{
                marginTop: "10vh",
                width: "40%",
                fontWeight: "bold",
              }}
            >
              Iniciar
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Box>
          <img src={Phone} alt="" width="100%" />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
