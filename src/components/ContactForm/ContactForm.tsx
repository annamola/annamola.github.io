import { Grid, Paper, Button, Container, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import useBreakpoints from '@/hooks/useBreakpoints'

const ContactForm = () => {
    const { isMobile, isSm } = useBreakpoints()

    return (
        <Paper elevation={3}>
            <form
                action="https://formspree.io/f/xrgodzpw"
                method="POST"
                className="contact-form"
            >
                <Grid container spacing={2} padding={2} sx={{ width: '100%' }}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="First Name"
                            variant="outlined"
                            type="text"
                            name="first"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            label="Last Name"
                            variant="outlined"
                            type="text"
                            name="last"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            type="text"
                            name="_replyto"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            multiline
                            label="Message"
                            variant="outlined"
                            name="message"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            fullWidth={isMobile || isSm}
                            variant="contained"
                            type="submit"
                            endIcon={<SendIcon />}
                        >
                            Send
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    )
}

export default ContactForm
