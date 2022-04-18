import {createTheme} from "@mui/material";
import {red} from "@mui/material/colors";

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
        MuiFormControlLabel: {
          styleOverrides: {
              root: {
                  marginTop: "8.4px"
              }
          }
        },
        MuiFormHelperText: {
          styleOverrides: {
              root: {
                  fontSize: "12px",
                  lineHeight: "14px",
              }
          }
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true
            }
        },
        MuiRadio: {
          styleOverrides: {
              root: {
                  padding: "0 9px",
                  "&.Mui-checked": {
                      color: "#00BDD3",
                  }
              }
          }
        },
        MuiTextField: {
            defaultProps: {
              InputLabelProps: {
                  required: false
              }
            },
            styleOverrides: {
                root: {
                    color: "#7E7E7E",
                    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#D0CFCF",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused  .MuiOutlinedInput-notchedOutline":
                    {
                        borderColor: "#D0CFCF",
                        borderWidth: "1px",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                        color: "#7E7E7E"
                    }
                },
            },
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
                    "&.Mui-disabled": {
                        background: "#B4B4B4",
                        color: "rgba(255, 255, 255, 0.87)",
                    },
                }
            }
        }
    }
});