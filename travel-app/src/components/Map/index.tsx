import React, { useEffect, useState } from "react";
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  Polygon,
} from "react-yandex-maps";
import countriesData from "../../countriesData/data";
import "./Map.css";

function changeCoordinates(coords: number[][][]) {
  return coords.map((item: any[]) => {
    item = item.map((itemCoords: any[]) => [itemCoords[1], itemCoords[0]]);
    return item;
  });
}

const getLangForMaps = (lang: string): "ru_RU" | "en_US" => {
  switch (lang) {
    case "ru":
    case "be":
      return "ru_RU";
    case "en":
      return "en_US";
    default:
      return "en_US";
  }
};
interface MapComponentProps {
  countryName: string;
  lang: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ countryName, lang }) => {
  const [mapWidth, setMapWidth] = useState<number>(
    document.documentElement.clientWidth / 2
  );

  useEffect(() => {
    const handleResize = () =>
      setMapWidth(document.documentElement.clientWidth / 2);
    window.addEventListener("resize", handleResize);
    console.log(lang);

    return () => window.removeEventListener("resize", handleResize);
  });

  const capitalCoordinates = countriesData[countryName].capital.coords;
  const polygons = changeCoordinates(
    countriesData[countryName].polygonCoordinates
  );

  return (
    <div className="Map">
      <YMaps
        query={{
          lang: getLangForMaps(lang),
          // lang: 'en_US', // TODO: get language
        }}
      >
        <Map
          width={mapWidth}
          defaultState={{ center: capitalCoordinates, zoom: 6 }}
        >
          <Placemark geometry={capitalCoordinates} />
          <FullscreenControl />
          <Polygon geometry={polygons} />
        </Map>
      </YMaps>
    </div>
  );
};

export default MapComponent;
