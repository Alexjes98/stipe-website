import { createTheme } from "@mui/material/styles";

const appTheme = createTheme({
    palette: {
        primary: {
            main: "#003333",
            light: "#001F1F",
            dark: "#001F1F",
            contrastText: "#fff",
        },
        secondary: {
            main: "#34837C",
        },
    },
});

export default appTheme;

// const Color primaryColor = Color.fromARGB(255, 0, 51, 51);
// const Color primaryVariant = Color.fromARGB(255, 0, 31, 31);
// const Color secundaryColor = Color.fromARGB(124, 52, 156, 124);
// const Color secundaryVariant = Color.fromARGB(255, 38, 126, 108);
// const Color contrastText = Color.fromARGB(255, 255, 255, 255);

// const Color logoBorderColor = Color.fromARGB(255, 99, 251, 203);

// const Color disabledColor = Color.fromARGB(255, 189, 199, 199);
// const Color primaryLight = Color.fromARGB(255, 102, 204, 255);
// //const Color accentColor = Color.fromARGB(113, 81, 113, 113);

// const Color focusColor = Color.fromARGB(200, 255, 120, 26);

// const Color backgroundColor = Color.fromARGB(255, 255, 255, 255);
// const Color backgroundDark = Color.fromARGB(20, 15, 51, 51);
// const Color errorColor = Color.fromARGB(86, 220, 1, 1);
