import React from "react";
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  Polygon,
} from "react-yandex-maps";
import countriesData from "../../countriesInfo.json";
import "./Map.scss";

function changeCoordinates(coords: number[][][] | number[][]) {
  return coords.map((item: any[]) => {
    item = item.map((itemCoords: any[]) => [itemCoords[1], itemCoords[0]]);
    return item;
  });
}

const MapComponent: React.FC<React.ReactNode> = () => {
  // TODO: get country
  const capitalCoordinates = countriesData[0].capital.coords;
  const polygons = changeCoordinates(countriesData[0].polygonCoordinates);
  return (
    <div className="Map">
      <h2>Map</h2>
      <YMaps
        query={{
          lang: "ru_RU", // TODO: get language
        }}
      >
        <Map
          width={600}
          height={400}
          defaultState={{ center: capitalCoordinates, zoom: 5 }}
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
