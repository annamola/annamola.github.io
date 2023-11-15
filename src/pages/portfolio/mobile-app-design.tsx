import { Grid, Typography } from '@mui/material'
import Layout from '@/components/layout'
import Head from 'next/head'
import UnderConstruction from '@/components/UnderConstruction/UnderConstruction'

export default function MobileAppDesign() {
    return (
        <Layout>
            <Head>
                <title>Anna Mola - Mobile App Design</title>
            </Head>
            <Grid
                container
                minHeight={'100%'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Grid item>
                    <UnderConstruction url="https://annamola.github.io/programming.html" />
                </Grid>
            </Grid>
        </Layout>
    )
}
