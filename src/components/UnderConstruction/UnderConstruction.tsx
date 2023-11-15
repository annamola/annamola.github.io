import React from 'react'
import styles from './UnderConstruction.module.scss'
import { Link, Stack, Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHammer } from '@fortawesome/free-solid-svg-icons'

const UnderConstruction = ({ url }: { url?: string }) => {
    return (
        <Stack
            flexDirection={'column'}
            gap={2}
            alignItems={'center'}
            textAlign={'center'}
        >
            <FontAwesomeIcon
                size="5x"
                icon={faHammer}
                className={styles.hammer}
            />
            <Typography variant="h2">⚠️under construction⚠️</Typography>
            {url && (
                <Link href={url}>
                    <Typography variant="h3">
                        Check out the original page here!
                    </Typography>
                </Link>
            )}
        </Stack>
    )
}

export default UnderConstruction
