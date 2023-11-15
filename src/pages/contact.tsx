import { Grid, Typography, Stack } from '@mui/material'
import Layout from '@/components/layout'
import ContactForm from '@/components/ContactForm/ContactForm'
import Head from 'next/head'

export default function Contact() {
    return (
        <Layout>
            <Head>
                <title>Anna Mola - Contact</title>
            </Head>
            <Grid
                container
                minHeight={'100%'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Grid item>
                    <Stack direction={'column'} gap={3} paddingX={2}>
                        <Typography variant="h1">Contact</Typography>
                        <ContactForm />
                    </Stack>
                </Grid>
            </Grid>
        </Layout>
    )
}
