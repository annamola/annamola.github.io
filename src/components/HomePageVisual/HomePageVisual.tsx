import React, { useEffect, useState } from 'react'
import styles from './HomePageVisual.module.scss'
import selfNoBg from '../../assets/images/anna-tea.png'
import teapotCrop from '../../assets/images/teapot-crop.png'
import { Storage } from 'aws-amplify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useMediaQuery from '@mui/material/useMediaQuery'
import Image from 'next/image'
import { faCircle, faCircleDot } from '@fortawesome/free-regular-svg-icons'
import { Typography } from '@mui/material'

export const HomePageVisual: React.FC = () => {
    const [, setFrame] = useState<string>()
    const [isCold, setCold] = useState<boolean>(false)

    const isMobile = useMediaQuery('(max-width:480px)')

    useEffect(() => {
        fetchFrame()
    }, [])

    async function fetchFrame() {
        const frame = await Storage.get('assets/images/frame.webp', {
            level: 'public',
        })
        setFrame(frame)
    }
    function radioButton(selected: boolean) {
        return selected ? (
            <FontAwesomeIcon
                size="lg"
                icon={faCircle}
                style={{ cursor: 'pointer' }}
            />
        ) : (
            <FontAwesomeIcon size="lg" icon={faCircleDot} />
        )
    }
    const greenGradient = [
        '#1EC074',
        '#2BC67D',
        '#37CB86',
        '#44D18F',
        '#50D798',
        '#5DDDA1',
        '#69E2A9',
        '#76E8B2',
        '#82EEBB',
        '#8FF4C4',
        '#9BF9CD',
        '#A8FFD6',
    ]

    return (
        <div className={styles['home-page-body-visual']}>
            {isMobile && (
                <>
                    <h1>Welcome!</h1>
                    <div
                        className="option-1"
                        onClick={() => {
                            setCold(false)
                        }}
                    >
                        {radioButton(isCold)}
                        <p>Warm my tea</p>
                    </div>
                    <div
                        className="option-2"
                        onClick={() => {
                            setCold(true)
                        }}
                    >
                        {radioButton(!isCold)}
                        <p>Cool my tea</p>
                    </div>
                </>
            )}

            <div className={styles['image-container']}>
                <Image
                    src={selfNoBg}
                    alt="Anna Mola"
                    className={styles['image']}
                />
                <div className={styles['teapot-container']}>
                    <Image
                        src={teapotCrop}
                        alt="teapot"
                        className={styles['teapot-crop']}
                    />
                </div>
                <Typography variant="h1">Welcome!</Typography>
                <div
                    className={styles['option-1']}
                    onClick={() => {
                        setCold(false)
                    }}
                >
                    {radioButton(isCold)}
                    <Typography variant="body1">Warm my tea</Typography>
                </div>
                <div
                    className={styles['option-2']}
                    onClick={() => {
                        setCold(true)
                    }}
                >
                    {radioButton(!isCold)}
                    <Typography variant="body1">Cool my tea</Typography>
                </div>
                {/* <div className="background-circle">
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill="#c7d9ce"
                            d="M35.1,-45.5C48.1,-38.9,63.2,-32.1,65.8,-21.9C68.4,-11.6,58.7,2.1,52.6,16C46.6,29.8,44.2,43.7,36.1,53.1C27.9,62.4,14,67.1,-0.2,67.4C-14.4,67.7,-28.8,63.6,-40.6,55.5C-52.3,47.3,-61.3,35.1,-69.6,20.1C-78,5.1,-85.6,-12.6,-82.2,-27.8C-78.7,-43,-64.2,-55.6,-48.6,-61.4C-33.1,-67.2,-16.5,-66.1,-2.8,-62.3C11,-58.6,22.1,-52.1,35.1,-45.5Z"
                            transform="translate(100 100)"
                        />
                    </svg>
                </div> */}
                {isCold ? null : (
                    <>
                        <div className={styles['tea-steam']}>
                            <div className={styles['tea-steam-1']}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 200 200"
                                    xmlSpace="preserve"
                                    enableBackground={'new 0 0 200 200'}
                                >
                                    <path
                                        d="M6.4,206.4c7.1-7.1-5.6-19.9,1.6-27s19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6
c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27l0,0c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27
c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27s19.9,5.6,27-1.6"
                                    />
                                </svg>
                            </div>
                            <div className={styles['tea-steam-2']}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 200 200"
                                    xmlSpace="preserve"
                                    enableBackground={'new 0 0 200 200'}
                                >
                                    <path
                                        d="M6.4,206.4c7.1-7.1-5.6-19.9,1.6-27s19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6
c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27l0,0c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27
c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27s19.9,5.6,27-1.6"
                                    />
                                </svg>
                            </div>
                            <div className={styles['tea-steam-3']}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 200 200"
                                    xmlSpace="preserve"
                                    enableBackground={'new 0 0 200 200'}
                                >
                                    <path
                                        d="M6.4,206.4c7.1-7.1-5.6-19.9,1.6-27s19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6
c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27l0,0c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27
c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27s19.9,5.6,27-1.6"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className={styles['teapot-steam']}>
                            <div className={styles['teapot-steam-1']}>
                                <svg
                                    width="104"
                                    height="172"
                                    viewBox="0 0 104 172"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    overflow={'visible'}
                                >
                                    <path
                                        d="M1.8252 170.246C3.62471 168.626 4.44512 167.231 5.82685 165.208C9.67054 159.58 13.7083 154.076 17.9033 148.701C21.5821 143.987 24.6426 139.61 23.6557 133.195C22.68 126.853 19.6428 123.76 14.3304 121.154C10.8211 119.432 6.62256 117.019 5.82685 112.722C5.13431 108.982 3.60621 103.776 4.54061 100.038C5.64291 95.6288 8.71713 90.1623 11.1862 86.2823C13.6522 82.4072 15.7446 79.1606 19.1181 76.0281C20.6437 74.6114 23.4044 72.7425 24.5846 71.1689C28.1891 66.3629 32.0627 65.5989 37.3756 62.844C42.2386 60.3225 46.1034 56.1536 49.8093 52.1253C52.7762 48.9004 55.2723 43.2057 59.0632 41.1208C65.1834 37.7546 74.0763 33.8731 80.8579 35.0468C84.3381 35.6492 93.3966 37.6838 96.3286 35.1183C98.7315 33.0158 100.627 29.6276 101.867 26.7934C103.053 24.081 102.607 19.0266 99.0083 17.9683C97.1348 17.4173 96.1354 15.9771 94.1491 15.896C92.2532 15.8186 89.2231 15.4611 87.4321 14.9671C82.722 13.6678 90.7022 8.76019 91.8625 7.53543C93.103 6.22595 94.3948 5.31897 95.8641 4.31981C97.0617 3.50544 96.6434 2.2509 97.6506 1.74731"
                                        stroke="black"
                                        strokeWidth={0}
                                        id="teapot-steam-1"
                                    />
                                    {Array(30)
                                        .fill(0)
                                        .map((_, i) => (
                                            <circle
                                                key={`dot_${i}`}
                                                cx="0"
                                                cy="180"
                                                r="3"
                                                fill={
                                                    greenGradient[
                                                        Math.floor(i / 2)
                                                    ]
                                                }
                                            >
                                                {/* @ts-ignore */}
                                                <set
                                                    begin={`${i / 2}s`}
                                                    attributeName="cx"
                                                    to="0"
                                                />
                                                {/* @ts-ignore */}
                                                <set
                                                    begin={`${i / 2}s`}
                                                    attributeName="cy"
                                                    to="0"
                                                />
                                                <animateMotion
                                                    begin={`${i / 2}s`}
                                                    dur="10s"
                                                    repeatCount="indefinite"
                                                    calcMode={'discrete'}
                                                >
                                                    <mpath xlinkHref="#teapot-steam-1"></mpath>
                                                </animateMotion>
                                            </circle>
                                        ))}
                                </svg>
                            </div>
                            <div className={styles['teapot-steam-2']}>
                                <svg
                                    width="192"
                                    height="167"
                                    viewBox="0 0 192 167"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    overflow={'visible'}
                                >
                                    <path
                                        d="M5.5 169C5.83333 160.5 7.5 142.6 11.5 139C16.5 134.5 29.5 126 33 116.5C36.5 107 27.5 103 33 93C37.4 85 48.1667 89.6667 53 93C57 95.5 66.8 98.1 74 88.5C81.2 78.9 74.3333 72.1667 70 70C68.3333 63.3333 66.8 49.9 74 49.5C83 49 80 43.5 98 49.5C116 55.5 124.5 64.5 142 54C156 45.6 154.833 35.4999 152.5 31.4999C146.833 27.9999 140.445 14.2114 161.5 5.00001C177.5 -1.9999 185 4.49996 194.5 11.4999"
                                        stroke="black"
                                        strokeWidth={0}
                                        id="teapot-steam-2"
                                    />
                                    {Array(30)
                                        .fill(0)
                                        .map((_, i) => (
                                            <circle
                                                key={`dot_${i}`}
                                                cx="0"
                                                cy="175"
                                                r="4"
                                                fill={
                                                    greenGradient[
                                                        Math.floor(i / 2)
                                                    ]
                                                }
                                            >
                                                {/* @ts-ignore */}
                                                <set
                                                    begin={`${i / 3}s`}
                                                    attributeName="cx"
                                                    to="0"
                                                />
                                                {/* @ts-ignore */}
                                                <set
                                                    begin={`${i / 3}s`}
                                                    attributeName="cy"
                                                    to="0"
                                                />
                                                <animateMotion
                                                    begin={`${i / 3}s`}
                                                    dur="10s"
                                                    repeatCount="indefinite"
                                                >
                                                    <mpath xlinkHref="#teapot-steam-2"></mpath>
                                                </animateMotion>
                                            </circle>
                                        ))}
                                </svg>
                            </div>
                            <div className={styles['teapot-steam-3']}>
                                <svg
                                    width="146"
                                    height="110"
                                    viewBox="0 0 146 110"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    overflow={'visible'}
                                >
                                    <path
                                        d="M2.11157 107.532C2.11157 102.547 6.34481 95.0344 9.29312 91.1322C11.9895 87.5635 15.3221 83.396 18.6899 80.4492C22.0757 77.4866 24.2409 73.7271 27.1934 70.3022C30.694 66.2415 34.2807 59.9444 38.6267 56.7251C40.9746 54.986 42.1368 52.1219 44.8435 50.7941C47.6485 49.4181 52.5364 46.273 55.6695 47.5785C61.3664 49.9522 64.1932 55.0468 68.4247 58.9761C74.579 64.6907 79.1323 58.7333 82.502 53.438C84.294 50.622 84.9718 47.2526 86.7895 44.3629C89.3856 40.2357 91.7395 35.9793 94.2211 31.7862C96.3849 28.1302 98.7467 24.481 102.082 21.8535C103.152 21.0104 104.158 20.2063 105.154 19.2811C108.419 16.2496 115.071 16.861 119.124 16.9587C123.745 17.07 123.629 18.8964 126.592 21.4963C128.288 22.9851 128.545 23.2827 130.772 23.2827C134.154 23.2827 136.853 21.2884 139.097 18.7808C140.267 17.4727 141.607 15.8471 142.491 14.3504C143.192 13.1636 142.876 11.7836 143.599 10.5632C144.349 9.29747 144.632 4.6654 143.456 3.4888C142.895 2.92751 141.449 3.52227 141.133 2.41693C141.066 2.17966 141.669 1.21311 141.669 2.70276"
                                        stroke="black"
                                        strokeWidth={0}
                                        id="teapot-steam-3"
                                    />
                                    {Array(30)
                                        .fill(0)
                                        .map((_, i) => (
                                            <circle
                                                key={`dot_${i}`}
                                                cx="-2"
                                                cy="1115"
                                                r="5"
                                                fill={
                                                    greenGradient[
                                                        Math.floor(i / 2)
                                                    ]
                                                }
                                            >
                                                {/* @ts-ignore */}
                                                <set
                                                    begin={`${i / 2}s`}
                                                    attributeName="cx"
                                                    to="0"
                                                />
                                                {/* @ts-ignore */}
                                                <set
                                                    begin={`${i / 2}s`}
                                                    attributeName="cy"
                                                    to="0"
                                                />
                                                <animateMotion
                                                    begin={`${i / 2}s`}
                                                    dur="10s"
                                                    repeatCount="indefinite"
                                                >
                                                    <mpath xlinkHref="#teapot-steam-3"></mpath>
                                                </animateMotion>
                                            </circle>
                                        ))}
                                </svg>
                            </div>
                            <div className={styles['teapot-steam-4']}>
                                <svg
                                    width="83"
                                    height="107"
                                    viewBox="0 0 83 107"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    overflow={'visible'}
                                >
                                    <path
                                        d="M1.54272 105.461C2.271 97.4502 9.35576 92.2842 14.4052 86.8464C21.4794 79.2281 31.264 76.15 41.8451 77.2353C44.4669 77.5042 48.362 79.6245 50.8489 77.8784C54.4906 75.3214 56.235 74.0942 57.9947 69.9465C59.8572 65.5564 61.2928 60.7187 62.6394 56.1551C63.6508 52.7276 62.9754 49.2821 63.4255 45.7937C64.1569 40.1253 60.1555 31.3989 65.2477 27.286C68.3512 24.7793 71.3154 21.8087 74.5372 19.6043C77.2989 17.7147 78.8019 14.7792 79.8609 11.7081C80.6192 9.50892 80.6469 7.2899 80.6469 4.99108C80.6469 4.3016 81.29 1.04686 81.29 3.20463"
                                        stroke="black"
                                        strokeWidth={0}
                                        id="teapot-steam-4"
                                    />
                                    {Array(30)
                                        .fill(0)
                                        .map((_, i) => (
                                            <circle
                                                key={`dot_${i}`}
                                                cx="-2"
                                                cy="114"
                                                r="2"
                                                fill={
                                                    greenGradient[
                                                        Math.floor(i / 3)
                                                    ]
                                                }
                                            >
                                                {/* @ts-ignore */}
                                                <set
                                                    begin={`${i / 3}s`}
                                                    attributeName="cx"
                                                    to="0"
                                                />
                                                {/* @ts-ignore */}
                                                <set
                                                    begin={`${i / 3}s`}
                                                    attributeName="cy"
                                                    to="0"
                                                />
                                                <animateMotion
                                                    begin={`${i / 3}s`}
                                                    dur="10s"
                                                    repeatCount="indefinite"
                                                >
                                                    <mpath xlinkHref="#teapot-steam-4"></mpath>
                                                </animateMotion>
                                            </circle>
                                        ))}
                                </svg>
                            </div>
                            <div className={styles['teapot-steam-5']}>
                                <svg
                                    width="193"
                                    height="116"
                                    viewBox="0 0 193 116"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    overflow={'visible'}
                                >
                                    <path
                                        d="M1.97021 113.889C2.19125 109.91 7.56476 104.16 10.9739 102.455C13.4307 101.227 14.4272 98.5178 17.4052 97.5606C24.8962 95.1527 34.692 98.6696 42.1654 99.0255C47.2086 99.2656 56.5785 96.84 60.7088 99.74C64.4598 102.374 67.7547 104.527 72.3565 105.028C77.8354 105.625 81.0473 107.424 86.4695 105.85C90.937 104.553 95.5488 102.398 99.0818 99.4542C103.029 96.1647 103.584 91.4557 103.584 86.2344C103.584 80.1124 105.876 77.5112 110.015 73.372C112.959 70.4277 121.134 69.3048 125.057 70.2278C128.257 70.9808 129.828 75.2972 132.524 76.9449C138.886 80.8326 148.899 79.2092 153.462 72.8718C157.426 67.3657 156.595 64.9362 151.461 61.0097C145.412 56.3845 136.369 56.511 135.776 46.7181C135.297 38.8146 140.598 33.6418 147.316 30.2827C151.08 28.4006 155.409 28.8546 159.142 30.64C161.848 31.9339 163.053 35.4277 166.61 35.4277C170.958 35.4277 178.527 34.6776 179.508 29.2823C180.311 24.8633 181.055 22.686 179.615 18.2063C178.437 14.5408 178.542 6.59747 183.081 5.2009C184.549 4.74913 187.387 2.71963 188.619 2.6284C192.187 2.36408 189.762 1.31082 189.762 3.27153"
                                        stroke="black"
                                        strokeWidth={0}
                                        id="teapot-steam-5"
                                    />

                                    {Array(30)
                                        .fill(0)
                                        .map((_, i) => (
                                            <circle
                                                key={`dot_${i}`}
                                                cx="-2"
                                                cy="124"
                                                r="2.5"
                                                fill={
                                                    greenGradient[
                                                        Math.floor(i / 3)
                                                    ]
                                                }
                                            >
                                                {/* @ts-ignore */}
                                                <set
                                                    begin={`${i / 3}s`}
                                                    attributeName="cx"
                                                    to="0"
                                                />
                                                {/* @ts-ignore */}
                                                <set
                                                    begin={`${i / 3}s`}
                                                    attributeName="cy"
                                                    to="0"
                                                />
                                                <animateMotion
                                                    begin={`${i / 3}s`}
                                                    dur="10s"
                                                    repeatCount="indefinite"
                                                >
                                                    <mpath xlinkHref="#teapot-steam-5"></mpath>
                                                </animateMotion>
                                            </circle>
                                        ))}
                                </svg>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
