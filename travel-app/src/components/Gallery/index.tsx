import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import countriesData from "../../countriesData/data";
import "./Gallery.css";

interface GalleryProps {
  countryName: string;
}

const Gallery: React.FC<GalleryProps> = ({ countryName }) => {
  const [imgId, setImgId] = useState(0);

  const images: {
    original: string;
    thumbnail: string;
    description: string;
    originalTitle: string;
  }[] = [];
  countriesData[countryName].landmarks.forEach(
    (element: {
      photo: string;
      name: { en: string };
      description: { en: string };
    }) => {
      images.push({
        original: element.photo,
        thumbnail: element.photo,
        description: element.description.en,
        originalTitle: element.name.en,
      });
    }
  );

  return (
    <div className="Gallery">
      <h2>{images[imgId].originalTitle}</h2>
      <ImageGallery
        items={images}
        onSlide={(id) => setImgId(id)}
        lazyLoad={true}
      />
    </div>
  );
};

export default Gallery;
