import React, { useState } from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import countriesData from "../../countriesInfo.json";
import "./Gallery.scss";

const images: {
  original: string;
  thumbnail: string;
  description: string;
  originalTitle: string;
}[] = [];
countriesData[0].landmarks.forEach((element) => {
  images.push({
    original: element.photo,
    thumbnail: element.photo,
    description: element.description,
    originalTitle: element.name,
  });
});

const Gallery = () => {
  const [imgId, setImgId] = useState(0);

  const showSlideInfo = (id: number) => {
    console.log(id);
    setImgId(id);
  };

  return (
    <div className="Gallery">
      <h2>{images[imgId].originalTitle}</h2>
      <ImageGallery items={images} onSlide={showSlideInfo} lazyLoad={true} />
    </div>
  );
};

export default Gallery;
