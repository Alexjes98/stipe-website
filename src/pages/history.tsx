import { Box, Grid, Typography } from "@mui/material";

import Hands from "../assets/jpg/hands.jpg";
import HomeBackground from "../assets/jpg/home.jpg";
import Worker from "../assets/png/3.png";
import TableImg from "../assets/png/table.png";

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
        spacing={4}
        sx={{
          padding: "70px 50px ",
          alignItems: "center",
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
                height: "500px",
                width: "500px",
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
                left: "50%",
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
            sx={{
              fontWeight: "bold",
              color: "white",
              marginTop: "10vh",
              justifyContent: "center",
            }}
          >
            La cosecha de los racimos maduros en la Palma Aceitera (Elaeis
            guineensis), genera montos en uso de recursos y costos en el orden
            del 40%.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={4}
        sx={{
          padding: "70px 50px ",
          alignItems: "center",
          marginTop: "10vh",
        }}
      >
        <Grid item xs={9}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              marginTop: "5vh",
              color: theme.palette.primary.main,
              textAlign: "justify",
            }}
          >
            Se denota, por tanto, la falta de mediciones a través de indicadores
            que informen sobre el desempeño de las labores de siembra y cosecha
            del rubro en cuestión, reafirmando la importancia que posee el
            recurso humano en los resultados.
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <img src={Worker} alt="worker" width="100%" />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            justifyContent: "start",
            alignItems: "center",
            display: "flex",
          }}
        >
          <img src={TableImg} alt="table" width="90%" />
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              textAlign: "justify",
              color: theme.palette.primary.main,
            }}
          >
            Un equipo de ingenieros industriales se dedicó a investigar en una
            empresa del sector cómo obtener información de rendimientos y
            balance de recursos con modelos que tomaran en cuenta múltiples
            variables a considerar. A partir de allí se inició la recolección de
            data y realización de un estudio de movimientos en el año 2014 que
            ha continuado hasta la actualidad.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              marginTop: "5vh",
              color: theme.palette.primary.main,
            }}
          >
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
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default History;
