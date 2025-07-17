// App.jsx (minimal context-free approach)
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Videofeed from './Components/Videofeed';
import Controller from './Components/Controller';
import Footer from './Components/Footer';

function App() {
  const [position, setPosition] = useState([23.8103, 90.4125]);

  return (
    <div>
      <Navbar />
      <div className='flex h-full'>
        <Sidebar />
        <Videofeed position={position} />
        <Controller position={position} setPosition={setPosition} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
