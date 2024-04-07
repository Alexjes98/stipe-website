import { Box, Grid, Button, Typography } from "@mui/material";
import Background from "../assets/png/history.png";

const DeleteData = () => {
  const handleDeleteData = () => {
    // Code to send an email to stipeorg@gmail.com to request data deletion
    window.location.href =
      "mailto:stipeorg@gmail.com?subject=Data Deletion Request";
  };

  return (
    <>
      <Box
        position="absolute"
        width="100%"
        sx={{
          zIndex: -1,
        }}
      >
        <img src={Background} alt="fondo" width="100%" />
      </Box>
      <Grid
        container
        spacing={4}
        sx={{
          padding: "70px 50px ",
          alignItems: "center",
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h3">Elimina tus datos</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={4}
        sx={{
          padding: "70px 50px ",
          alignItems: "center",
        }}
      >
        <Grid item xs={6}>
          <Box>
            <Typography variant="h6">
              Para eliminar tus datos por favor envía un correo a{" "}
              <a href="mailto:stipeorg@gmail.com">stipeorg@gmail.com</a> con el
              asunto de "Data Deletion Request".
            </Typography>
            Recibirás una respuesta cuando hayamos eliminado tu perfil y tu
            información personal
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            justifyContent: "center",
            display: "flex",
            paddingX: "40px",
          }}
        >
          <Button
            sx={{ width: "200px" }}
            variant="contained"
            onClick={handleDeleteData}
          >
            Send Email
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default DeleteData;
