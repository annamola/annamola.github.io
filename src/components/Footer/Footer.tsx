import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'

const Footer: React.FunctionComponent = () => {
    const flameGif =
        'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTNmNzQ2MDRlZTNjMWUwMTU4ZGIwMDliNmE5NDdmNDI4YWZiZDdlOSZjdD1z/SVHO60sBL6aMDIEIN0/giphy.gif'

    return (
        <div className={styles.footer}>
            <Image
                height={20}
                width={20}
                src={flameGif}
                alt="Animated GIF of a flame"
            />
            forged in the fire
            <Image
                height={20}
                width={20}
                src={flameGif}
                alt="Animated GIF of a flame"
            />
            by anna mola || 2023
        </div>
    )
}

export default Footer
