// Videofeed.jsx
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';

const MiniMapRecenter = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.setView(position);
    }
  }, [position, map]);
  return null;
};

const Videofeed = ({ position }) => {
  return (
    <div>
      <div className="bg-black border-2 border-red-600 w-[65vw] h-[584px] relative">
        {/* Centered Title */}
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl">
          Rocket Video Feed
        </h1>

        {/* Bottom-Left Status */}
        <h1 className="absolute bottom-2 left-2 text-white text-sm">
          Not Live 00:00:00
        </h1>

        {/* GPS Mini Map */}
        <div className="absolute bottom-2 right-2 w-48 h-32 bg-white rounded-md overflow-hidden shadow-md border border-white">
          <MapContainer
            center={position}
            zoom={100}
            scrollWheelZoom={true}
            dragging={true}
            doubleClickZoom={false}
            zoomControl={false}
            keyboard={false}
            touchZoom={true}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} />
            <MiniMapRecenter position={position} />
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Videofeed;
