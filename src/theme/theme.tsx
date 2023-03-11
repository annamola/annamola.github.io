import { createTheme } from "@mui/material/styles";

export const COLORS = {
    white: "#fff",
    black: "#000",
    main: "#14784a",
};

export const theme = createTheme({
    typography: {
        h1: {
            fontWeight: 600,
            fontSize: 32,
        },
        h2: {
            fontSize: 24,
            fontWeight: 500,
        },
        h3: {
            fontSize: 20,
            fontWeight: 500,
        },
        h4: {
            fontSize: 18,
        },
        fontFamily: "Roboto Slab",
    },
});
