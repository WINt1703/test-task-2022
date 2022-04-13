import type { AppProps } from "next/app";
import {CssBaseline, ThemeProvider} from "@mui/material";
import defaultTheme from "../common/utils/theme"
import "../../styles/__document.css"

function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default App