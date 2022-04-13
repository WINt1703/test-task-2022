import {createTheme} from "@mui/material";

export default createTheme({
    palette: {
        background: {
            default: "#F8F8F8",
        },
        primary: {
            main: "#F4E041",
        },
        secondary: {
            main: "#00BDD3",
        },
    },
    typography: {
        fontFamily: "Nunito",
        h1: {
            fontSize: "40px",
            lineHeight: "40px",
            fontWeight: "400"
        },
        allVariants: {
            fontSize: "16px",
            lineHeight: "26px",
            fontWeight: "400"
        },
    },
    components: {
        MuiTooltip: {
          styleOverrides: {
              tooltip: {
                  background: "rgba(0, 0, 0, 0.87)",
                  borderRadius: "4px",
                  color: "#fff",
                  height: "25px",
                  display: "flex",
                  alignItems: "center"
              }
          }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    width: 100,
                    height: 34,
                    background: "#F4E041",
                    color: "rgba(0, 0, 0, 0.87)",
                    borderRadius: 80,
                    "&:hover": {
                        background: "#FFE302",
                    },
                    "&:disabled": {
                        background: "#B4B4B4",
                        color: "rgba(255, 255, 255, 0.87)",
                    },
                }
            }
        }
    }
});