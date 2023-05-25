// @ts-nocheck
import React, { useEffect, useState } from "react";
import "./ZinePage.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HeaderOffset from "../Header/HeaderOffset";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import deskBackground from "../assets/images/pexels-fwstudio-172296.jpg";
import { Storage } from "aws-amplify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

const url = `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
pdfjs.GlobalWorkerOptions.workerSrc = url;

// https://codepen.io/diemoritat/pen/LKROYZ?editors=1100
// inspired by this code pen

const ZinePage = ({ title, paragraph }) => {
    const [isLoading, setLoading] = useState(true);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [leftPage, setLeftPage] = useState(1);
    const [rightPage, setRightPage] = useState(2);
    const [zinePdf, setZinePdf] = useState();

    async function fetchZinePdf() {
        const zinePdf = await Storage.get("pdfs/myZine.pdf", {
            level: "public",
        });
        setZinePdf(zinePdf);
    }

    useEffect(() => {
        fetchZinePdf();
    }, []);

    const animationFlipTime = 500;

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
        setLoading(false);
    }

    const goToPrevPage = () => {
        const num = pageNumber - 2 <= 0 ? 0 : pageNumber - 2;
        setPageNumber(num);
        setLeftPage(num);
        setRightPage(num + 1);
    };

    const goToNextPage = () => {
        const num = pageNumber + 2 >= numPages ? numPages : pageNumber + 2;
        setPageNumber(num);
        setLeftPage(num);
        setRightPage(num + 1);
    };

    const [nextPageFlip, setNextPageFlip] = useState(false);
    const [prevPageFlip, setPrevPageFlip] = useState(false);
    const [rightPageFlip, toggleRightPageFlip] = useState(true);
    const [leftPageFlip, toggleLeftPageFlip] = useState(true);

    const toggleNextPage = () => {
        if (rightPage < 10) {
            setNextPageFlip(true);
            setTimeout(() => {
                toggleRightPageFlip(false);
            }, animationFlipTime / 2);
            setTimeout(() => {
                setNextPageFlip(false);
                goToNextPage();
                toggleRightPageFlip(true);
            }, animationFlipTime);
        }
    };
    const togglePrevPage = () => {
        if (leftPage > 1) {
            setPrevPageFlip(true);
            setTimeout(() => {
                toggleLeftPageFlip(false);
            }, animationFlipTime / 2);
            setTimeout(() => {
                setPrevPageFlip(false);
                goToPrevPage();
                toggleLeftPageFlip(true);
            }, animationFlipTime);
        }
    };

    const blankPage = (
        <div
            className={`pdf-container-document-page-blank}`}
            style={{ height: 499, width: 386, backgroundColor: "lavender", zIndex: 10 }}
        ></div>
    );
    const divider = (
        <div className="pdf-container-document-divider">
            {Array(13)
                .fill(true)
                .map((_, i) => (
                    <div
                        className="pdf-container-document-divider-ring"
                        key={`$page_${i}`}
                        style={{ marginTop: i * 20, top: i * 20 }}
                    >
                        <div className="pdf-container-document-divider-ring-left" />
                        <div className="pdf-container-document-divider-ring-1" />
                        <div className="pdf-container-document-divider-ring-2" />
                        <div className="pdf-container-document-divider-ring-right" />
                    </div>
                ))}
        </div>
    );

    function innerPageSection(index) {
        return (
            <div className={`inner section-${index} ${index + 1 === leftPage ? "" : "hidden"}`}>
                <Document
                    file={zinePdf}
                    className="pdf-container-document"
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={blankPage}
                    noData={blankPage}
                    error={blankPage}
                >
                    <>
                        <div
                            className={`pdf-container-document-page-left${prevPageFlip ? "-flip" : ""}`}
                            onClick={index !== 0 ? togglePrevPage : undefined}
                        >
                            <div className={`pdf-container-document-page-left-front ${leftPageFlip ? "" : "hidden"}`}>
                                <Page pageNumber={index + 1} height={500} />
                            </div>
                            <div className={`pdf-container-document-page-left-back ${leftPageFlip ? "hidden" : ""}`}>
                                {index + 1 < 1 ? blankPage : <Page pageNumber={index} height={500} />}
                            </div>
                        </div>
                        {divider}
                        <div
                            className={`pdf-container-document-page-right${nextPageFlip ? "-flip" : ""}`}
                            onClick={index !== numPages - 2 ? toggleNextPage : undefined}
                        >
                            <div className={`pdf-container-document-page-right-front ${rightPageFlip ? "" : "hidden"}`}>
                                <Page pageNumber={index + 2} height={500} />
                            </div>
                            <div className={`pdf-container-document-page-right-back ${rightPageFlip ? "hidden" : ""}`}>
                                <Page pageNumber={index + 3} height={500} />
                            </div>
                        </div>
                    </>
                </Document>
            </div>
        );
    }

    return (
        <div>
            <Header />
            <HeaderOffset />
            <div className="zine-page-body">
                <img src={deskBackground} alt="Wood texture background" className="background"></img>
                <h2>{title}</h2>
                {isLoading === true ? <LoadingAnimation></LoadingAnimation> : null}

                <div style={{ display: "flex", zIndex: 10, justifyContent: "center", alignItems: "center" }}>
                    <button className="button" onClick={togglePrevPage}>
                        <FontAwesomeIcon size="lg" icon={solid("chevron-left")} />
                    </button>
                    <div className="pdf-container">
                        <div className={`inner section-background ${prevPageFlip || nextPageFlip ? "" : "hidden"}`}>
                            <Document
                                file={zinePdf}
                                className="pdf-container-document"
                                onLoadSuccess={onDocumentLoadSuccess}
                            >
                                <>
                                    <div className={`pdf-container-document-page-left`} onClick={togglePrevPage}>
                                        {leftPage - 2 < 1 ? blankPage : <Page pageNumber={leftPage - 2} height={500} />}
                                    </div>
                                    {divider}
                                    <div className={`pdf-container-document-page-right`} onClick={toggleNextPage}>
                                        {rightPage + 2 > 10 ? (
                                            blankPage
                                        ) : (
                                            <Page pageNumber={rightPage + 2} height={500} />
                                        )}
                                    </div>
                                </>
                            </Document>
                        </div>
                        {Array.from(new Array(numPages), (el, index) =>
                            index % 2 === 0 ? innerPageSection(index) : null
                        )}
                    </div>
                    <button className="button" onClick={toggleNextPage}>
                        <FontAwesomeIcon size="lg" icon={solid("chevron-right")} />
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ZinePage;
