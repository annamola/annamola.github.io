import { Grid } from '@mui/material'
import { HomePageVisual } from '@/components/HomePageVisual/HomePageVisual'
import Layout from '@/components/layout'
import type { Metadata } from 'next'
import useBreakpoints from '@/hooks/useBreakpoints'
import Head from 'next/head'
import UnderConstruction from '@/components/UnderConstruction/UnderConstruction'

export default function Home() {
    const { isSm } = useBreakpoints()
    return (
        <Layout>
            <Head>
                <title>Anna Mola</title>
            </Head>
            <Grid container spacing={2}>
                <Grid item xs={0} sm={0} md={2} lg={2} xl={3} />
                <Grid item xs={12} sm={12} md={8} lg={8} xl={6}>
                    {isSm ? <UnderConstruction /> : <HomePageVisual />}
                </Grid>
                <Grid item xs={0} sm={0} md={2} lg={2} xl={3} />
            </Grid>
        </Layout>
    )
}
