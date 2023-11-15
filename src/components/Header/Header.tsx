import { Box, Grid, Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import HeaderOffset from './HeaderOffset'
import AnimatedLogo from '../AnimatedLogo/AnimatedLogo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Turn as Hamburger } from 'hamburger-react'
import Link from 'next/link'
import styles from './Header.module.scss'
import {
    faGithubSquare,
    faLinkedin,
    faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const Header: React.FunctionComponent = () => {
    const [isOpen, setOpen] = React.useState(false)
    const [isSideBarDropdownOpen, setSideBarDropdownOpen] =
        React.useState(false)
    const [isOverButton, setOverButton] = React.useState(false)
    const [isOverList, setOverList] = React.useState(false)
    const [listOpen, setListOpen] = React.useState(false)

    useEffect(() => {
        if (listOpen && !isOverButton && !isOverList) {
            setListOpen(false)
        } else if (!listOpen && (isOverButton || isOverList)) {
            setListOpen(true)
        }
    }, [isOverButton, isOverList, listOpen])

    const dropdownOpts = [
        'art',
        'zine',
        'web design',
        'mobile app design',
        'this website',
    ]
    return (
        <div className={styles.header}>
            <Grid container className={styles['header-grid']}>
                <Grid item xs={9} sm={10} md={3}>
                    <Link href="/">
                        <AnimatedLogo />
                    </Link>
                </Grid>
                <Box sx={{ display: { xs: 'none', md: 'contents' } }}>
                    <Grid
                        className={styles['menu-grid-item']}
                        item
                        sm={1}
                        md={2}
                    >
                        <Link href="/about">
                            <Typography variant="h4">about</Typography>
                        </Link>
                    </Grid>
                    <Grid
                        className={styles['menu-grid-item']}
                        item
                        sm={1}
                        md={2}
                    >
                        <Link
                            href={''}
                            onMouseEnter={() => {
                                setOverButton(true)
                            }}
                            onMouseLeave={() => {
                                setOverButton(false)
                            }}
                        >
                            <div className={styles['center-space-between']}>
                                <Typography variant="h4">portfolio</Typography>
                                <FontAwesomeIcon
                                    icon={faCaretDown}
                                    style={{ marginLeft: 5 }}
                                />
                            </div>
                        </Link>
                        {listOpen ? (
                            <div
                                onMouseEnter={() => {
                                    setOverList(true)
                                }}
                                onMouseLeave={() => {
                                    setOverList(false)
                                }}
                            >
                                {dropdownOpts.map((title, i) => (
                                    <Link
                                        key={'dropdown_' + title}
                                        href={
                                            '/portfolio/' +
                                            title
                                                .replace(/\s+/g, '-')
                                                .toLowerCase()
                                        }
                                    >
                                        <Button
                                            className={styles['dropdown-btn']}
                                            sx={{
                                                top: 60 + i * 38,
                                                borderBottomWidth:
                                                    i !==
                                                    dropdownOpts.length - 1
                                                        ? 0
                                                        : 2,
                                                borderTopLeftRadius:
                                                    i === 0 ? 5 : 0,
                                                borderTopRightRadius:
                                                    i === 0 ? 5 : 0,
                                                borderBottomLeftRadius:
                                                    i ===
                                                    dropdownOpts.length - 1
                                                        ? 5
                                                        : 0,
                                                borderBottomRightRadius:
                                                    i ===
                                                    dropdownOpts.length - 1
                                                        ? 5
                                                        : 0,
                                            }}
                                        >
                                            <Typography
                                                variant="h4"
                                                style={{
                                                    textTransform: 'lowercase',
                                                    color: 'black',
                                                }}
                                            >
                                                {title}
                                            </Typography>
                                        </Button>
                                    </Link>
                                ))}
                            </div>
                        ) : null}
                    </Grid>
                    <Grid
                        className={styles['menu-grid-item']}
                        item
                        sm={1}
                        md={2}
                    >
                        <Link href="/contact">
                            <Typography variant="h4">contact</Typography>
                        </Link>
                    </Grid>
                </Box>
                <Grid
                    item
                    xs={3}
                    sm={2}
                    md={3}
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}
                >
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <Hamburger
                            rounded
                            toggled={isOpen}
                            toggle={setOpen}
                            label="Show menu"
                        />
                        <div
                            className={`${isOpen ? `${styles.toggled} ` : ''} ${
                                styles['side-bar']
                            }`}
                        >
                            <div>
                                <HeaderOffset />
                                <Link href="/about">
                                    <Button>
                                        <Typography variant="h4">
                                            about
                                        </Typography>
                                    </Button>
                                </Link>
                                <div className="side-bar-dd">
                                    <Button
                                        onClick={() => {
                                            setSideBarDropdownOpen(
                                                !isSideBarDropdownOpen
                                            )
                                        }}
                                        style={{
                                            backgroundColor:
                                                isSideBarDropdownOpen
                                                    ? 'rgb(20, 120, 74, 0.2)'
                                                    : 'transparrent',
                                        }}
                                    >
                                        <div
                                            className={
                                                styles['center-space-between']
                                            }
                                        >
                                            <Typography variant="h4">
                                                portfolio
                                            </Typography>
                                            <FontAwesomeIcon
                                                icon={faCaretDown}
                                                style={{ marginRight: 20 }}
                                            />
                                        </div>
                                    </Button>
                                </div>
                                {isSideBarDropdownOpen
                                    ? dropdownOpts.map((title) => (
                                          <Link
                                              key={'sidebar_dropdown_' + title}
                                              href={
                                                  '/portfolio/' +
                                                  title
                                                      .replace(/\s+/g, '-')
                                                      .toLowerCase()
                                              }
                                          >
                                              <Button
                                                  sx={{
                                                      paddingLeft: 10,
                                                      backgroundColor:
                                                          'rgb(20, 120, 74, 0.1)',
                                                  }}
                                              >
                                                  <Typography variant="h4">
                                                      {title}
                                                  </Typography>
                                              </Button>
                                          </Link>
                                      ))
                                    : null}
                                <Link href="/contact">
                                    <Button>
                                        <Typography variant="h4">
                                            contact
                                        </Typography>
                                    </Button>
                                </Link>
                            </div>
                            <div className={styles.socials}>
                                <Link href="https://www.instagram.com/bythemol/">
                                    <FontAwesomeIcon
                                        icon={faInstagramSquare}
                                        className={styles.icon}
                                    />
                                </Link>
                                <Link href="https://www.linkedin.com/in/anna-mola-b90581104/">
                                    <FontAwesomeIcon
                                        icon={faLinkedin}
                                        className={styles.icon}
                                    />
                                </Link>
                                <Link href="https://github.com/annamola/">
                                    <FontAwesomeIcon
                                        icon={faGithubSquare}
                                        className={styles.icon}
                                    />
                                </Link>
                            </div>
                        </div>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <div className={styles.socials}>
                            <Link href="https://www.instagram.com/bythemol/">
                                <FontAwesomeIcon
                                    icon={faInstagramSquare}
                                    className={styles.icon}
                                />
                            </Link>
                            <Link href="https://www.linkedin.com/in/anna-mola-b90581104/">
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className={styles.icon}
                                />
                            </Link>
                            <Link href="https://github.com/annamola/">
                                <FontAwesomeIcon
                                    icon={faGithubSquare}
                                    className={styles.icon}
                                />
                            </Link>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Header
