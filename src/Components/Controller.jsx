import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouse,
    faImage,
    faVideo,
    faWrench,
    faPause,
    faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons';

const Controller = ({ position, setPosition }) => {
  const move = (dir) => {
    const delta = 0.00005;
    const [lat, lon] = position;
    let newPos = [lat, lon];

    switch (dir) {
      case 'F': newPos = [lat + delta, lon]; break;
      case 'B': newPos = [lat - delta, lon]; break;
      case 'L': newPos = [lat, lon - delta]; break;
      case 'R': newPos = [lat, lon + delta]; break;
      default: break;
    }
    setPosition(newPos);
  };

  return (
    <div className='frost-black w-screen'>
      {/* Flight Control */}
      <section>
        <div className='bg-black'>
          <h1 className='text-white my-2 mx-6 text-xl font-bold'>Flight Control</h1>
          <div className='text-black bg-white flex justify-center space-x-4 rounded mx-6 h-10 my-3'>
            <button className='hover:bg-blue-500 hover:rounded w-full '>Manual</button>
            <button className='hover:bg-blue-500 hover:rounded w-full'>Professional</button>
            <button className='hover:bg-blue-500 hover:rounded w-full'>Auto-Pilot</button>
          </div>

          <div className='grid grid-cols-3 gap-6 rounded mx-6 text-white text-center '>
            <div className='bg-white rounded text-black p-2 transform hover:scale-105 transition-all duration-300'>
              <FontAwesomeIcon icon={faHouse} />
              <h1 className='text-xs font-semibold'>RTH</h1>
            </div>
            <div className='bg-white rounded text-black p-2 transform hover:scale-105 transition-all duration-300'>
              <FontAwesomeIcon icon={faPause} />
              <h1 className='text-xs font-semibold' >Hold</h1>
            </div>
            <div className='bg-red-600 rounded text-white p-2 transform hover:scale-105 transition-all duration-300'>
              <FontAwesomeIcon icon={faTriangleExclamation} />
              <h1 className='text-xs font-semibold'>Emergency</h1>
            </div>
            <div className='bg-white rounded text-black p-2 transform hover:scale-105 transition-all duration-300'>
              <FontAwesomeIcon icon={faImage} />
              <h1 className='text-xs font-semibold'>Photo</h1>
            </div>
            <div className='bg-white rounded text-black p-2 transform hover:scale-105 transition-all duration-300'>
              <FontAwesomeIcon icon={faVideo} />
              <h1 className='text-xs font-semibold'>Record</h1>
            </div>
            <div className='bg-yellow-500 rounded text-black p-2 transform hover:scale-105 hove transition-all duration-300'>
              <FontAwesomeIcon icon={faWrench} />
              <h1 className='text-xs font-semibold'>Setting</h1>
            </div>
          </div>

          {/* Joyestick */}
          <div className='my-5'>
            <div>
              <button
                onClick={() => move('F')}
                className='ml-18 hover:bg-yellow-500 text-center bg-white text-black font-semibold w-[50px] h-[50px] rounded-full items-center justify-center flex'
              >
                F
              </button>

              <div className=''>
                <button onClick={() => move('L')} className='ml-8'>
                  <h1 className='text-center bg-white text-black font-semibold w-[50px] h-[50px] rounded-full items-center justify-center flex'>L</h1>
                </button>

                <button onClick={() => move('R')} className='ml-8'>
                  <h1 className='text-center bg-white text-black font-semibold w-[50px] h-[50px] rounded-full items-center justify-center flex'>R</h1>
                </button>
              </div>

              <button onClick={() => move('B')} className='ml-18'>
                <h1 className='text-center bg-white text-black font-semibold w-[50px] h-[50px] rounded-full items-center justify-center flex'>B</h1>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Camera Control  */}
      <section>
        {/* Add your camera UI here */}
      </section>
    </div>
  );
};

export default Controller;
