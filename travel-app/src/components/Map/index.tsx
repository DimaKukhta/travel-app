import React from "react";
import {
  YMaps,
  Map,
  Placemark,
  Panorama,
  FullscreenControl,
  Polygon,
} from "react-yandex-maps";
import countriesData from "../../countriesInfo.json";
import "./Map.scss";

function changeCoordinates(coords: number[][][][] | number[][][]) {
  console.log("coords - ", coords);
  if (coords.length > 1) {
    return coords.forEach((item: any[]) => {
      item.map((itemCoords: any[]) => [itemCoords[1], itemCoords[0]]);
      console.log("item - ", item);
      return <Polygon geometry={item} />;
    });
  } else {
    coords.map((item: any[]) => [item[1], item[0]]);
    console.log(coords);
    return <Polygon geometry={coords} />;
  }
}

const MapComponent: React.FC<React.ReactNode> = () => {
  const capitalCoordinates = countriesData[0].capital.coords;
  const polygonCoordinates = changeCoordinates(
    countriesData[0].polygonCoordinates
  );
  console.log("coordinates - ", polygonCoordinates);
  return (
    <div className="Map">
      <h2>Map</h2>
      <YMaps
        query={{
          lang: "ru_RU", // TODO: get language
        }}
      >
        <div>
          <Map defaultState={{ center: capitalCoordinates, zoom: 9 }}>
            <Placemark geometry={capitalCoordinates} />
            <FullscreenControl />
            {polygonCoordinates}
          </Map>
        </div>
      </YMaps>
    </div>
  );
};

export default MapComponent;
