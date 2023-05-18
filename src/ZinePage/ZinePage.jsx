// @ts-nocheck
import React, { FunctionComponent, useEffect, useState } from "react";
import "./ZinePage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HeaderOffset from "../Header/HeaderOffset";
import { Grid } from "@mui/material";
import { Document, Page } from "react-pdf";
import zinePdf from "../assets/pdfs/myZine.pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import deskBackground from "../assets/images/pexels-fwstudio-172296.jpg";

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.js", import.meta.url).toString();

const ZinePage = ({ title, paragraph }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [leftPage, setLeftPage] = useState(1);
    const [rightPage, setRightPage] = useState(2);
    // const [pageArray, setPageArray] = useState([]);

    useEffect(() => {
        console.log("leftPage", leftPage);
        console.log("rightPage", rightPage);
    }, [pageNumber, leftPage, rightPage]);

    const animationFlipTime = 500;

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        // setPageArray(Array(numPages).fill(false));
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
        setNextPageFlip(true);
        setTimeout(() => {
            toggleRightPageFlip(false);
        }, animationFlipTime / 2);
        setTimeout(() => {
            setNextPageFlip(false);
            goToNextPage();
            toggleRightPageFlip(true);
        }, animationFlipTime);
    };
    const togglePrevPage = () => {
        setPrevPageFlip(true);
        setTimeout(() => {
            toggleLeftPageFlip(false);
        }, animationFlipTime / 2);
        setTimeout(() => {
            setPrevPageFlip(false);
            goToPrevPage();
            toggleLeftPageFlip(true);
        }, animationFlipTime);
    };

    const blankPage = (
        <div
            className={`pdf-container-document-page-blank}`}
            style={{ height: 499, width: 386, backgroundColor: "lavender", zIndex: 10 }}
        >
            {/* <Page pageNumber={pageNumber - 2} height={500} /> */}
        </div>
    );
    const divider = (
        <div className="pdf-container-document-divider">
            {Array(13)
                .fill(true)
                .map((_, i) => (
                    <div
                        className="pdf-container-document-divider-ring"
                        key={i}
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

    return (
        <div>
            <Header />
            <div className="zine-page-body">
                <img
                    src={deskBackground}
                    style={{ position: "absolute", width: "100vw", height: "100%", objectFit: "cover" }}
                ></img>
                <h2>{title}</h2>
                <div style={{ display: "flex", zIndex: 10, justifyContent: "center" }}>
                    {pageNumber}
                    <button onClick={togglePrevPage}>prev page</button>
                    <button onClick={toggleNextPage}>next page</button>
                </div>
                {/* {Array.from(new Array(numPages), (el, index) => (
                        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                    ))} */}
                <div className="pdf-container">
                    <div className="inner section-blank">
                        <Document
                            file={zinePdf}
                            className="pdf-container-document"
                            onLoadSuccess={onDocumentLoadSuccess}
                            loading={blankPage}
                            noData={blankPage}
                            error={blankPage}
                        >
                            <>
                                <div className={`pdf-container-document-page-left`} onClick={togglePrevPage}>
                                    {blankPage}
                                </div>
                                {divider}
                                <div className={`pdf-container-document-page-right`} onClick={toggleNextPage}>
                                    {blankPage}
                                </div>
                            </>
                        </Document>
                    </div>

                    <div className="inner section-1">
                        <Document
                            file={zinePdf}
                            className="pdf-container-document"
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            <div
                                className={`pdf-container-document-page-left${prevPageFlip ? "-flip" : ""}`}
                                onClick={togglePrevPage}
                            >
                                <div
                                    className={`pdf-container-document-page-left-front ${leftPageFlip ? "" : "hidden"}`}
                                >
                                    <Page
                                        pageNumber={leftPage}
                                        height={500}
                                        loading={blankPage}
                                        noData={blankPage}
                                        error={blankPage}
                                        canvasBackground="white"
                                    />
                                </div>
                                <div
                                    className={`pdf-container-document-page-left-back ${leftPageFlip ? "hidden" : ""}`}
                                >
                                    {leftPage < 1 ? (
                                        blankPage
                                    ) : (
                                        <Page
                                            pageNumber={leftPage - 1}
                                            height={500}
                                            loading={blankPage}
                                            noData={blankPage}
                                            error={blankPage}
                                            canvasBackground="white"
                                        />
                                    )}
                                </div>
                            </div>
                            {divider}
                            <div
                                className={`pdf-container-document-page-right${nextPageFlip ? "-flip" : ""}`}
                                onClick={toggleNextPage}
                            >
                                <div
                                    className={`pdf-container-document-page-right-front ${
                                        rightPageFlip ? "" : "hidden"
                                    }`}
                                >
                                    <Page
                                        pageNumber={rightPage}
                                        height={500}
                                        loading={blankPage}
                                        noData={blankPage}
                                        error={blankPage}
                                        canvasBackground="white"
                                    />
                                </div>
                                <div
                                    className={`pdf-container-document-page-right-back ${
                                        rightPageFlip ? "hidden" : ""
                                    }`}
                                >
                                    <Page
                                        pageNumber={rightPage + 1}
                                        height={500}
                                        loading={blankPage}
                                        noData={blankPage}
                                        error={blankPage}
                                        canvasBackground="white"
                                    />
                                </div>
                            </div>
                        </Document>
                    </div>

                    {/* <div className="inner front-page current">
                        <Document
                            file={zinePdf}
                            onLoadSuccess={onDocumentLoadSuccess}
                            className="pdf-container-document"
                        >
                            {pageNumber === 0 ? blankPage : null}
                            {divider}
                            <div
                                className={`pdf-container-document-page-right${nextPageFlip ? "-flip" : ""}`}
                                onClick={toggleNextPage}
                            >
                                <div className={"pdf-container-document-page-right-front"}>
                                    <Page pageNumber={1} height={500} />
                                </div>
                                <div className={"pdf-container-document-page-right-back"}>
                                    <Page pageNumber={2} height={500} />
                                </div>
                            </div>
                        </Document>
                    </div> */}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ZinePage;
