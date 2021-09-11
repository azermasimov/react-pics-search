import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = ({ images }) => {
    const mappedImages = images.map((image) => <ImageCard key={image.urls.regular} image={image} /> );
    return <div className="image-list" >{ mappedImages }</div>;
};

export default ImageList;