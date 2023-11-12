import React from "react";
import "./ArtPage.css";
import Header from "../../components/Header/Header";
import HeaderOffset from "../../components/Header/HeaderOffset";
import Footer from "../../components/Footer/Footer";
import { PageProps } from "../../types/PageProps.type";
import { Storage } from "aws-amplify";

const ArtPage: React.FunctionComponent<PageProps> = ({ title, paragraph }) => {
    // const [, setImages] = useState();

    // const imageKeys = ["image1.jpg", "image2.jpg", "image3.jpg"];

    const listObjectsInFolder = async (folder) => {
        try {
            const result = await Storage.list(folder);
            console.log("Objects in folder:", result);
            return result;
        } catch (error) {
            console.error("Error listing objects:", error);
            throw error;
        }
    };

    listObjectsInFolder("assets/images/art");
    // const fetchImages = async () => {
    //     try {
    //       const imagePromises = imageKeys.map(async (key) => {
    //         const imageUrl = await Storage.get(key);
    //         return { key, imageUrl };
    //       });

    //       const images = await Promise.all(imagePromises);

    //       // Now 'images' is an array of objects, each containing the image key and its URL
    //       console.log(images);
    //     } catch (error) {
    //       console.error('Error fetching images:', error);
    //     }
    //   };
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
            </div>
            <Footer />
        </div>
    );
};

export default ArtPage;
