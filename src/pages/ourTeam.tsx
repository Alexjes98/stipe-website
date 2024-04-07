import { Grid, Typography, Box } from "@mui/material";

import usBackground from "../assets/jpg/us.jpg";

const OurTeam = () => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          width: "100%",
          zIndex: -1,
        }}
      >
        <img src={usBackground} alt="fondo" width="100%" />
      </Box>
      <Grid
        container
        spacing={4}
        sx={{
          paddingTop: "250px",
          paddingX: "50px",
          alignItems: "center",
          marginTop: "10vh",
          height: "auto",
        }}
      >
        <Grid item xs={6}>
          <Box
            sx={{
              position: "relative",
              borderLeft: "2px solid",
              borderBottom: "2px solid",
              height: "200px",
              width: "100%",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                position: "absolute",
                color: "white",
                top: "60%",
                left: "70%",
              }}
            >
              ¿Quienes
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                position: "absolute",
                color: "white",
                top: "75%",
                left: "85%",
              }}
            >
              Somos?
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: "white",
              marginTop: "10vh",
              justifyContent: "center",
            }}
          >
            El objetivo fundamental de Stipe es acercar la ingeniería industrial
            e informática a la agricultura, insertándola a su vez al mundo de la
            digitalización y técnicas de métodos y tiempos de la ingeniería
            industrial, en el sector específico para esta oportunidad de la
            palma aceitera, en razón de la importancia que tiene la mano de obra
            como parte esencial de la sostenibilidad.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              color: "white",
              marginTop: "10vh",
              justifyContent: "center",
            }}
          >
            Stipe nace entonces, de la necesidad de facilitar el trabajo de
            planificación y balance de recursos en el medio, a partir de
            digitalización o transformación de algoritmos generados en el manejo
            de la información del estudio de tiempos nombrado, llevándolo en la
            práctica a una aplicación móvil tanto para teléfonos Android como
            para IOS, además de utilizarse en oficina en página web.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default OurTeam;
