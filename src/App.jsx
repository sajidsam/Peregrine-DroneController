import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Videofeed from './Components/Videofeed';
import Controller from './Components/Controller';

function App() {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const coords = [pos.coords.latitude, pos.coords.longitude];
          setPosition(coords);
        },
        (err) => {
          console.error('Error getting location:', err);
          
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      
    }
  }, []);

  if (!position) {
    return <div>Loading location...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="flex h-full">
        <Sidebar />
        <Videofeed position={position} />
        <Controller position={position} setPosition={setPosition} />
      </div>
     
    </div>
  );
}

export default App;
