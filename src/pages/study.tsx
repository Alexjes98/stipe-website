import { Grid, Box, Typography } from "@mui/material";

import StudyBackground from "../assets/png/study.png";
import Chapia from "../assets/png/6.png";

import { useTheme } from "@mui/material/styles";

const Study = () => {
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
        <img src={StudyBackground} alt="fondo" width="100%" />
      </Box>
      <Grid
        container
        sx={{
          padding: "70px 50px ",
          alignItems: "center",
        }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: "start",
              
            }}
          >
            Estudios de Tiempos y Movimientos
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ paddingTop: "30px", paddingX: " 50px ", alignItems: "center" }}
      >
        <Grid item xs={5}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              textAlign: "justify",
            }}
          >
            Luego de comenzar la producción de fruta madura, en el año 2014, una
            empresa productora de Palma Aceitera ubicada en los Departamentos de
            Alta Verapaz y Petén en Guatemala con siembras no realizadas
            estrictamente con diseño, aborda el proceso de cosecha de sus
            producciones y el tamaño de sus siembras con mucha variabilidad,
            aplicando estudios de tiempos y movimientos, conducidos por
            Ingenieros Industriales,
          </Typography>
        </Grid>
        <Grid item xs={7}></Grid>
      </Grid>
      <Grid
        container
        sx={{ paddingTop: "20px", paddingX: "50px", alignItems: "center" }}
      >
        <Grid item xs={6}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              textAlign: "justify",
            }}
          >
            Se obtendrían entonces las expresiones matemáticas y la metodología
            que permitieran aplicar la planificación de producción en ingeniería
            industrial para manejar, de manera más eficiente, los recursos, así
            como reducir y controlar los costos.
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
          <img src={Chapia} alt="chapia" width="auto" />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={4}
        sx={{ paddingTop: "70px", paddingX: "50px", alignItems: "center" }}
      >
        <Grid item xs={6}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              textAlign: "justify",
              color: theme.palette.primary.main,
            }}
          >
            Los resultados del estudio de movimientos y tiempos de la cosecha,
            así como los análisis estadísticos y matemáticos, sirvieron para
            generar algoritmos y ecuaciones que explican su comportamiento en
            diversos momentos estacionales y de edades; siendo digitalizados en
            hojas de Excel, que posteriormente se tradujeron en una aplicación
            (App) que permitiera el uso directamente en el campo, utilizando
            como medio los teléfonos inteligentes.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              textAlign: "justify",
              color: theme.palette.primary.main,
            }}
          >
            El aprovechamiento de los algoritmos de tiempos y movimientos,
            sumado al Censo de Fruta Madura permiten planificar el Tamaño y la
            Cantidad de Equipos en forma diaria, con lo cual se puede establecer
            la meta diaria, con mayor exactitud y aprovechamiento de los
            recursos humanos y equipos o animales.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          paddingTop: "70px",
          paddingBottom: "30px",
          paddingX: "50px",
          alignItems: "center",
        }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              textAlign: "justify",
              color: theme.palette.primary.main,
            }}
          >
            Estimamos que con la utilización de los algoritmos la cosecha puede
            mejorar entre un 10 al 20 % su eficiencia, lo cual impactaría
            directamente para los accionistas en la mejora de los ingresos
            (disminución 5% costos totales) en un 10 %; así mismo, al poder
            obtener mejores rendimientos se podría impactar también
            positivamente los ingresos de los trabajadores alrededor de un 10 %.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Study;
