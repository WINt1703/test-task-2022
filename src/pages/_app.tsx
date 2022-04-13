import type { AppProps } from "next/app";
import {CssBaseline, ThemeProvider} from "@mui/material";
import defaultTheme from "../common/utils/theme"
import "../../styles/__document.css"
import {Provider} from "react-redux";
import rootStore from "../common/stores/root"

function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={rootStore}>
            <ThemeProvider theme={defaultTheme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    )
}

export default App