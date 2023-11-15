import { Grid, Typography } from '@mui/material'
import Layout from '@/components/layout'
import Head from 'next/head'
import UnderConstruction from '@/components/UnderConstruction/UnderConstruction'

export default function ThisWebsite() {
    return (
        <Layout>
            <Head>
                <title>Anna Mola - This Website</title>
            </Head>
            <Grid
                container
                minHeight={'100%'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Grid item>
                    <UnderConstruction />
                </Grid>
            </Grid>
        </Layout>
    )
}
