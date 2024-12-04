import { Box, Grid, Button, Typography } from "@mui/material";

import { useTheme } from "@mui/material/styles";
const handleDownload = () => {
  // URL of the file to be downloaded
  const fileUrl = `public/template.xlsx`;
  const fileName = "template.xlsx";

  // Create an anchor element and trigger the download
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const DownloadExcelTemplate = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      spacing={4}
      sx={{
        padding: "70px 50px ",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Grid item xs={12}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            color: theme.palette.primary.main,
          }}
        >
          Descarga el archivo Excel
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleDownload}
            sx={{
              marginTop: "20px",
              fontSize: "1.5rem",
            }}
          >
            Descargar            
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DownloadExcelTemplate;
