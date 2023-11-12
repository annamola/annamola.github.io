import React, { useEffect, useState } from "react";
import "./ArtPage.css";
import Header from "../../components/Header/Header";
import HeaderOffset from "../../components/Header/HeaderOffset";
import Footer from "../../components/Footer/Footer";
import { PageProps } from "../../types/PageProps.type";
import { Storage } from "aws-amplify";

const ArtPage: React.FunctionComponent<PageProps> = ({ title, paragraph }) => {
    const [images, setImages] = useState<{ imageUrl: string; key: string | undefined }[]>();

    // const imageKeys = ["image1.jpg", "image2.jpg", "image3.jpg"];

    const listObjectsInFolder = async (folder) => {
        try {
            const result = await Storage.list(folder);
            const arrayOfStrings = result.results.map((obj) => obj.key);
            return arrayOfStrings;
        } catch (error) {
            console.error("Error listing objects:", error);
            throw error;
        }
    };

    const fetchImages = async () => {
        try {
            const imageKeys = await listObjectsInFolder("assets/images/art");

            const imagePromises = imageKeys.map(async (key) => {
                const imageUrl = await Storage.get(key, { level: "public", download: false });
                return { key, imageUrl };
            });

            const images = await Promise.all(imagePromises);

            console.log(images);
            setImages(images);
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    };

    useEffect(() => {
        fetchImages();
    });
    // async function fetchImages() {
    //     const frame = await Storage.get("assets/images/frame.webp", {
    //         level: "public",
    //     });
    //     setImages(frame);
    // }

    return (
        <div>
            <Header />
            <HeaderOffset />
            <div className="zine-page-body">
                <h2>{title}</h2>
                {images?.map((url) => (
                    <img src={url.imageUrl} width={100} height={"100%"} />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default ArtPage;
