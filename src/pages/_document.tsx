import Document, { Html, Head, Main, NextScript } from 'next/document'
import { getInitColorSchemeScript } from '@mui/material/styles'

export default class MyDocument extends Document {
    render() {
        return (
            <Html data-color-scheme="light">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    {getInitColorSchemeScript()}
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
