import { Box, Typography } from "@mui/material";
import Background from "../assets/png/history.png";

import { useTheme } from "@mui/material/styles";

const TermsAndConditions = () => {
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
        <img src={Background} alt="fondo" width="100%" />
      </Box>
      <Typography
        variant="h3"
        sx={{
          padding: "30px 50px ",
        }}
      >
        Terminos y Condiciones de Stipe
      </Typography>
      <Typography
        variant="h3"
        sx={{
          padding: "10px 50px ",
        }}
      >
        Introducción
      </Typography>
      <Typography
        variant="h6"
        sx={{
          padding: "30px 50px ",
        }}
      >
        Stipe es una aplicación móvil que le permite (al "Usuario") realizar
        diversas tareas. Estos Términos y Condiciones (los "Términos") rigen el
        uso de la aplicación Stipe por parte del Usuario.
      </Typography>
      <Typography
        variant="h3"
        sx={{
          padding: "20px 50px ",
        }}
      >
        Aceptación de los Términos
      </Typography>
      <Typography
        variant="h6"
        sx={{
          padding: "30px 50px ",
        }}
      >
        Al usar la aplicación Stipe, el Usuario acepta los Términos. Si el
        Usuario no acepta los Términos, no debe usar la aplicación Stipe.
      </Typography>
      <Typography
        variant="h3"
        sx={{
          padding: "20px 50px ",
        }}
      >
        Modificación de los Términos
      </Typography>
      <Typography
        variant="h6"
        sx={{
          padding: "30px 50px ",
        }}
      >
        Stipe puede modificar los Términos en cualquier momento. Si Stipe
        modifica los Términos, se lo notificará al Usuario por correo
        electrónico o mediante un aviso en la aplicación Stipe. El Usuario
        acepta que su uso continuo de la aplicación Stipe después de que se haya
        modificado los Términos constituye su aceptación de los Términos
        modificados.
      </Typography>
      <Typography
        variant="h3"
        sx={{
          padding: "20px 50px ",
          color: theme.palette.primary.main,
        }}
      >
        Uso de la aplicación Stipe
      </Typography>
      <Typography
        variant="h6"
        sx={{
          padding: "30px 50px ",
          color: theme.palette.primary.main,
        }}
      >
        El Usuario puede usar la aplicación Stipe para realizar diversas tareas,
        incluyendo: Calcular la distribución de trabajadores. Llevar un control
        del proceso de control de campo y definir indicadores a optimizar en un
        ambiente de trabajo
      </Typography>
      <Typography
        variant="h3"
        sx={{
          padding: "20px 50px ",
          color: theme.palette.primary.main,
        }}
      >
        Prohibiciones
      </Typography>
      <Typography
        variant="h6"
        sx={{
          padding: "30px 50px ",
          color: theme.palette.primary.main,
        }}
      >
        El Usuario no debe usar la aplicación Stipe para ningún propósito ilegal
        o no autorizado. El Usuario no debe usar la aplicación Stipe para:
        Publicar contenido ilegal, dañino, amenazante, abusivo, difamatorio,
        obsceno o de cualquier otro modo objetable. Interferir o interrumpir el
        funcionamiento de la aplicación Stipe. Violar los derechos de propiedad
        intelectual de Stipe o de cualquier tercero.
      </Typography>
      <Typography
        variant="h3"
        sx={{
          padding: "20px 50px ",
          color: theme.palette.primary.main,
        }}
      >
        Propiedad intelectual
      </Typography>
      <Typography
        variant="h6"
        sx={{
          padding: "30px 50px ",
          color: theme.palette.primary.main,
        }}
      >
        La aplicación Stipe y todo el contenido de la misma son propiedad
        intelectual de Stipe. El Usuario no debe copiar, modificar, distribuir,
        transmitir, reproducir, publicar, licenciar o crear trabajos derivados
        de la aplicación Stipe o de su contenido.
      </Typography>
      <Typography
        variant="h3"
        sx={{
          padding: "20px 50px ",
          color: theme.palette.primary.main,
        }}
      >
        Descargo de responsabilidad
      </Typography>
      <Typography
        variant="h6"
        sx={{
          padding: "30px 50px ",
          color: theme.palette.primary.main,
        }}
      >
        LA APLICACIÓN STIPE SE PROPORCIONA "TAL CUAL" Y "SEGÚN DISPONIBILIDAD".
        STIPE NO OFRECE NINGUNA GARANTÍA, EXPRESA O IMPLÍCITA, CON RESPECTO A LA
        APLICACIÓN STIPE O SU CONTENIDO. STIPE NO SE HACE RESPONSABLE DE NINGÚN
        DAÑO DIRECTO, INDIRECTO, INCIDENTAL, ESPECIAL, CONSECUENTE O EJEMPLAR,
        INCLUYENDO, ENTRE OTROS, DAÑOS POR PÉRDIDA DE BENEFICIOS, PÉRDIDA DE
        DATOS O INTERRUPCIÓN DEL NEGOCIO, QUE SURJAN DEL USO O LA INCAPACIDAD DE
        USO DE LA APLICACIÓN STIPE O DE SU CONTENIDO.
      </Typography>
      <Typography
        variant="h3"
        sx={{
          padding: "20px 50px ",
          color: theme.palette.primary.main,
        }}
      >
        Indemnización
      </Typography>
      <Typography
        variant="h6"
        sx={{
          padding: "30px 50px ",
          color: theme.palette.primary.main,
        }}
      >
        El Usuario acepta indemnizar y defender a Stipe, sus empleados,
        contratistas y agentes de y contra cualquier reclamo, responsabilidad,
        daño, pérdida y gasto (incluidos los honorarios razonables de abogados)
        que surjan de o estén relacionados con el uso de la aplicación Stipe por
        parte del Usuario.
      </Typography>
      <Typography
        variant="h3"
        sx={{
          padding: "20px 50px ",
          color: theme.palette.primary.main,
        }}
      >
        Terminación
      </Typography>
      <Typography
        variant="h6"
        sx={{
          padding: "30px 50px ",
          color: theme.palette.primary.main,
        }}
      >
        Stipe puede rescindir el acceso del Usuario a la aplicación Stipe en
        cualquier momento, por cualquier motivo o sin motivo alguno.
      </Typography>
      <Typography
        variant="h3"
        sx={{
          padding: "20px 50px ",
          color: theme.palette.primary.main,
        }}
      >
        Disposiciones generales
      </Typography>
      <Typography
        variant="h6"
        sx={{
          padding: "30px 50px ",
          color: theme.palette.primary.main,
        }}
      >
        Estos Términos se rigen e interpretan de conformidad con las leyes de
        Guatemala. Cualquier disputa que surja de o esté relacionada con estos
        Términos se resolverá mediante arbitraje vinculante de conformidad con
        las reglas de la Cámara de Comercio Internacional.
      </Typography>
      <Typography
        variant="h4"
        sx={{
          padding: "30px 50px ",
          color: theme.palette.primary.main,
        }}
      >
        Al usar la aplicación Stipe, el Usuario acepta los Términos.
      </Typography>
    </>
  );
};

export default TermsAndConditions;
