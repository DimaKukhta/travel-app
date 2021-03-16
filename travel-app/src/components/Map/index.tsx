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

function changeCoordinates(coords: number[][][] | number[][]) {
  return coords.map((item: any[]) => {
    item = item.map((itemCoords: any[]) => [itemCoords[1], itemCoords[0]]);
    return item;
  });
}

const MapComponent: React.FC<React.ReactNode> = () => {
  const [mapWidth, setMapWidth] = useState<number>(
    document.documentElement.clientWidth / 2
  );

  useEffect(() => {
    const handleResize = () =>
      setMapWidth(document.documentElement.clientWidth / 2);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  // TODO: get country
  const capitalCoordinates = countriesData.Germany.capital.coords;
  const polygons = changeCoordinates(countriesData.Germany.polygonCoordinates);
  return (
    <div className="Map">
      <YMaps
        query={{
          lang: "en_US", // TODO: get language
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
