import * as React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import {
    Experimental_CssVarsProvider as CssVarsProvider,
    experimental_extendTheme as extendTheme,
    ThemeProvider,
} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { theme } from '@/config/theme'
import createEmotionCache from '@/config/createEmotionCache'
import { config } from '@fortawesome/fontawesome-svg-core'

import '@/styles/global.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { Amplify } from 'aws-amplify'
import aws_exports from '../aws-exports'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache
}

Amplify.configure(aws_exports)

const cssVarTheme = extendTheme(theme, {
    cssVarPrefix: 'mui',
})

export default function MyApp(props: MyAppProps) {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>
            <ThemeProvider theme={theme}>
                <CssVarsProvider theme={cssVarTheme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </CssVarsProvider>
            </ThemeProvider>
        </CacheProvider>
    )
}
