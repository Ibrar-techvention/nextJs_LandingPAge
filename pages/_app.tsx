import React from "react";
import Head from "next/head";
import "../styles/global.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import Footer from "src/mainlayout/Footer";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import ar from "../i18n/locales/ar/translations.json";
import en from "../i18n/locales/en/translations.json";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props;
    const { locale } = useRouter();

    const messages: Record<string, any> = {
        ar,
        en,
    };
    // function getDirection(locale: any) {
    //     if (locale === "ar") {
    //         return "rtl";
    //     }

    //     return "ltr";
    // }

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles?.parentElement?.removeChild(jssStyles);
        }
    }, []);

    return (
        <IntlProvider locale={locale as string} messages={messages[locale!]}>
            <CacheProvider value={emotionCache}>
                <Head>
                    <meta
                        name="viewport"
                        content="initial-scale=1, width=device-width"
                    />
                </Head>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    <Component {...pageProps} />
                    <Footer />
                </ThemeProvider>
            </CacheProvider>
        </IntlProvider>
    );
}
