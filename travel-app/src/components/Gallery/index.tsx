import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import countriesData from "../../countriesData/data";
import "./Gallery.css";

interface GalleryProps {
  countryName: string;
  lang: string;
  setImgId: any,
  imgId: number
}

const Gallery: React.FC<GalleryProps> = ({ countryName, lang, setImgId, imgId }) => {

  const images: {
    original: string;
    thumbnail: string;
    description: string;
    originalTitle: string;
  }[] = [];
  countriesData[countryName].landmarks.forEach(
    (element: {
      photo: string;
      name: { [key: string]: string };
      description: { [key: string]: string };
    }) => {
      images.push({
        original: element.photo,
        thumbnail: element.photo,
        description: element.description[lang],
        originalTitle: element.name[lang],
      });
    }
  );

  return (
    <div className="Gallery">
      <h2 className="landmark_title">{images[imgId].originalTitle}</h2>
      <ImageGallery
        items={images}
        onSlide={(id) => setImgId(id)}
        lazyLoad={true}
      />
    </div>
  );
};

export default Gallery;
