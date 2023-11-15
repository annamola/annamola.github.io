import { Grid, Typography } from '@mui/material'
import Layout from '@/components/layout'
import Head from 'next/head'
import UnderConstruction from '@/components/UnderConstruction/UnderConstruction'

export default function About() {
    return (
        <Layout>
            <Head>
                <title>Anna Mola - About</title>
            </Head>
            <Grid
                container
                minHeight={'100%'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Grid item>
                    <UnderConstruction url="https://annamola.github.io/about.html" />
                </Grid>
            </Grid>
        </Layout>
    )
}
