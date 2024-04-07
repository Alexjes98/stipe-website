import { Box, Button, Grid, Typography } from "@mui/material";

import HomeBackground from "../assets/jpg/home.jpg";
import Phone from "../assets/png/presentación-celular-1.png";
import { useTheme } from "@mui/material/styles";
const Home = () => {
  const theme = useTheme();
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
              
            >
              Iniciar
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box
       
      >
        <Grid container>
          <Grid item xs={6}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "black", marginTop: "10vh" }}
            >
              ¿Qué es Stipe?
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
            >
              Stipe es una aplicación que permite a los agricultores de palma
              aceitera llevar un control de sus cultivos de manera eficiente y
              efectiva.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <img src={Phone} alt="" width="100%" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
