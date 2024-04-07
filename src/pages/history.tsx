import { Box, Button, Grid, Typography, Container } from "@mui/material";
import Hands from "../assets/jpg/hands.jpg";
import HomeBackground from "../assets/jpg/home.jpg";

import { useTheme } from "@mui/material/styles";

const History = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        position="absolute"
        width="100%"
        sx={{
          zIndex: -1,
        }}
      >
        <img src={HomeBackground} alt="fondo" width="100%" />
      </Box>
      <Grid
        container
        sx={{
          padding: "70px 10px ",
        }}
      >
        <Grid item xs={7}>
          <Box
            sx={{
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                overflow: "hidden",
                border: "10px solid",
                borderColor: theme.palette.primary.main,
                borderRadius: "500px",
                height: "600px",
                width: "600px",
              }}
            >
              <img src={Hands} alt="fondo" width="100%" height="100%" />
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                position: "absolute",
                color: "white",
                top: "80%",
                left: "70%",
              }}
            >
              Historia
            </Typography>
            <Typography
              sx={{
                position: "absolute",
                color: "white",
                top: "93%",
                left: "70%",
                fontWeight: "bold",
              }}
            >
              ANTECEDENTES
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "white", marginTop: "10vh" }}
          >
            La cosecha de los racimos maduros en la Palma Aceitera (Elaeis
            guineensis), genera montos en uso de recursos y costos en el orden
            del 40%.
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          <p>
            Se denota, por tanto, la falta de mediciones a través de indicadores
            que informen sobre el desempeño de las labores de siembra y cosecha
            del rubro en cuestión, reafirmando la importancia que posee el
            recurso humano en los resultados.
          </p>
        </Grid>
        <Grid item xs={6}>
        </Grid>
      <Grid item>
          <p>
            Un equipo de ingenieros industriales se dedicó a investigar en una
            empresa del sector cómo obtener información de rendimientos y
            balance de recursos con modelos que tomaran en cuenta múltiples
            variables a considerar. A partir de allí se inició la recolección de
            data y realización de un estudio de movimientos en el año 2014 que
            ha continuado hasta la actualidad.
          </p>
          <p>
            El estudio iniciado en Guatemala, tuvo como objetivo general aplicar
            a profundidad los enfoques históricos de la Ingeniería Industrial
            (movimientos, tiempos, ergonomía, matemáticas y análisis
            estadístico), al proceso de cosecha de palma, para crear indicadores
            dinámicos de rendimiento y medios para la medición y mejora del
            proceso técnicamente digitalizados, tal que permita ser aplicados a
            plantaciones de diferentes edades, de una manera sencilla, en la
            procura de obtener avances importantes en la eficacia de la mano de
            obra directa, proporcionando a su vez balances de recursos
            utilizados en las labores y así garantizar la rentabilidad de los
            procesos.
          </p>
        </Grid>
      </Grid>
    </>
  );
};

export default History;
