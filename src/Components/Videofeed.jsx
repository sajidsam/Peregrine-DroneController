import React, { useEffect, useState } from 'react';
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

const Videofeed = () => {
  const [position, setPosition] = useState([23.8103, 90.4125]); // Default: Dhaka

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
      },
      (err) => {
        console.error('Geolocation error:', err);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 10000,
        timeout: 5000,
      }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

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

        {/* GPS View with Leaflet Mini Map */}
        <div className="absolute bottom-2 right-2 w-48 h-32 bg-white rounded-md overflow-hidden shadow-md border border-white">
          <div className="bg-black text-white text-xs px-2 py-1 font-bold">
            GPS View
          </div>

          <MapContainer
            center={position}
            zoom={18}
            scrollWheelZoom={false}
            style={{ height: 'calc(100% - 1.5rem)', width: '100%' }}
            dragging={false}
            doubleClickZoom={false}
            zoomControl={false}
            keyboard={false}
            touchZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
