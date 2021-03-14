import React from "react";

import "./App.css";
import "./components/Map";
import "./components/Gallery";
import Gallery from "./components/Gallery/index";
import MapComponent from "./components/Map";

function App() {
  return (
    <div className="App">
      <Gallery />
      <MapComponent />
    </div>
  );
}

export default App;
