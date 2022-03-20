import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import Legend from "./Legend";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

const Map = () => {
  const legendData = {
    name: "Cases Legend",
    description: "Active cases in thousands",
    property: "pop_est",
    stops: [
      [0, "#f8d5cc"],
      [100000, "#f4bfb6"],
      [500000, "#f1a8a5"],
      [1000000, "#ee8f9a"],
      [5000000, "#ec739b"],
      [10000000, "#dd5ca8"],
      [25000000, "#c44cc0"],
      [50000000, "#9f43d7"],
      [100000000, "#6e40e6"],
    ],
  };

  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(5);
  const [lat, setLat] = useState(34);
  const [zoom, setZoom] = useState(4);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="map-container" ref={mapContainerRef}>
        <div className="sidebarStyle">
          <div>
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </div>
        </div>

        <div class="legend">
          <Legend data={legendData} stops={legendData.stops} />
        </div>
      </div>
      <style>{`
        .map-container {
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }
        
        .sidebarStyle {
          display: inline-block;
          position: absolute;
          top: 0;
          left: 0;
          margin: 12px;
          background-color: #404040;
          color: #ffffff;
          z-index: 1 !important;
          padding: 6px;
          font-weight: bold;
        }

        .detailBox {
          padding: 10px 20px 40px 20px;
          position: absolute;
          top: 30%;
          background: #ffffff;
          left: 20px;
          z-index: 1 !important;
        }

        .detailBox p{
          margin-bottom: 0;
        }

        .legend {
          position: absolute;
          bottom: 40px;
          background: #ffffff;
          right: 20px;
          z-index: 1 !important;
        }
    `}</style>
    </>
  );
};

export default Map;
