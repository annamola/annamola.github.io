'use client'

import { createTheme } from '@mui/material/styles'

export const COLORS = {
    white: '#fff',
    black: '#000',
    main: '#14784a',
}

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#14784A',
            100: '#D0E4DB',
        },
        secondary: {
            main: '#f50057',
        },
    },
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
        fontFamily: 'Roboto Slab',
    },
})
