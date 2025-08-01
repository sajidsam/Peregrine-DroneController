import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faImage,
  faVideo,
  faWrench,
  faPause,
  faTriangleExclamation,
  faCaretUp,
  faCaretDown
} from '@fortawesome/free-solid-svg-icons';

const Controller = ({ position, setPosition }) => {
  const intervalRef = useRef(null);
  const activeDirRef = useRef(null); // To keep track of current direction

  const move = (dir) => {
    const delta = 0.00005;
    const altDelta = 1;

    let [lat, lon, alt] = position.length === 3 ? position : [...position, 0];

    switch (dir) {
      case 'F': lat += delta; break;
      case 'B': lat -= delta; break;
      case 'L': lon -= delta; break;
      case 'R': lon += delta; break;
      case 'U': alt += altDelta; break;
      case 'D': alt -= altDelta; break;
      default: break;
    }

    setPosition([lat, lon, alt]);
  };

  const startContinuousMove = (dir) => {
    if (intervalRef.current) return;
    activeDirRef.current = dir;
    move(dir); // move once immediately

    intervalRef.current = setInterval(() => {
      move(activeDirRef.current);
    }, 100); // Adjust speed here
  };

  const stopContinuousMove = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    activeDirRef.current = null;
  };

  useEffect(() => {
    window.addEventListener('mouseup', stopContinuousMove);
    return () => {
      window.removeEventListener('mouseup', stopContinuousMove);
    };
  }, []);

  // Calculate altitude and speed
  const altitude = position.length === 3 ? position[2].toFixed(2) : "0.00";
  const speed = intervalRef.current ? "5.0" : "0.0"; // simulate speed when moving

  return (
    <div className='frost-black w-screen'>
      <section>
        <div>
          <h1 className='text-white my-2 mx-6 text-xl font-bold'>Flight Control</h1>

          <div className='text-black bg-white flex justify-center space-x-4 rounded mx-6 h-10 my-3'>
            <button className='hover:bg-blue-500 hover:rounded w-full'>Manual</button>
            <button className='hover:bg-blue-500 hover:rounded w-full'>Professional</button>
            <button className='hover:bg-blue-500 hover:rounded w-full'>Auto-Pilot</button>
          </div>

          {/* Control Panel */}
          <div className='grid grid-cols-3 gap-6 rounded mx-6 text-white text-center'>
            <div className='bg-white rounded text-black p-2 transform hover:scale-105 transition-all duration-300'>
              <FontAwesomeIcon icon={faHouse} />
              <h1 className='text-xs font-semibold'>RTH</h1>
            </div>
            <div className='bg-white rounded text-black p-2 transform hover:scale-105 transition-all duration-300'>
              <FontAwesomeIcon icon={faPause} />
              <h1 className='text-xs font-semibold'>Hold</h1>
            </div>
            <div className='bg-red-600 rounded text-white p-2 transform hover:scale-105 transition-all duration-300'>
              <FontAwesomeIcon icon={faTriangleExclamation} />
              <h1 className='text-xs font-semibold'>Emergency</h1>
            </div>
            <div className='bg-white rounded text-black p-2 transform hover:scale-105 transition-all duration-300'>
              <FontAwesomeIcon icon={faImage} />
              <h1 className='text-xs font-semibold'>Capture</h1>
            </div>
            <div className='bg-white rounded text-black p-2 transform hover:scale-105 transition-all duration-300'>
              <FontAwesomeIcon icon={faVideo} />
              <h1 className='text-xs font-semibold'>Record</h1>
            </div>
            <div className='bg-yellow-500 rounded text-black p-2 transform hover:scale-105 transition-all duration-300'>
              <FontAwesomeIcon icon={faWrench} />
              <h1 className='text-xs font-semibold'>Setting</h1>
            </div>
          </div>

          {/* Joystick Controls */}
          <div className='m-10 flex items-center gap-x-25'>
            {/* FLRB */}
            <div className='flex flex-col items-center space-y-2'>
              <button
                onMouseDown={() => startContinuousMove('F')}
                className='bg-white text-black font-semibold w-[50px] h-[50px] rounded-full flex items-center justify-center hover:bg-yellow-400'
              >
                F
              </button>
              <div className='flex space-x-10'>
                <button
                  onMouseDown={() => startContinuousMove('L')}
                  className='bg-white text-black font-semibold w-[50px] h-[50px] rounded-full flex items-center justify-center hover:bg-yellow-400'
                >
                  L
                </button>
                <button
                  onMouseDown={() => startContinuousMove('R')}
                  className='bg-white text-black font-semibold w-[50px] h-[50px] rounded-full flex items-center justify-center hover:bg-yellow-400'
                >
                  R
                </button>
              </div>
              <button
                onMouseDown={() => startContinuousMove('B')}
                className='bg-white text-black font-semibold w-[50px] h-[50px] rounded-full flex items-center justify-center hover:bg-yellow-400'
              >
                B
              </button>
            </div>

            {/* U / D */}
            <div className='flex flex-col space-y-4 items-center'>
              <button
                onMouseDown={() => startContinuousMove('U')}
                className='bg-white text-black font-semibold w-[50px] h-[50px] rounded-full flex items-center justify-center hover:bg-yellow-400'
              >
                <FontAwesomeIcon icon={faCaretUp} />
              </button>
              <button
                onMouseDown={() => startContinuousMove('D')}
                className='bg-white text-black font-semibold w-[50px] h-[50px] rounded-full flex items-center justify-center hover:bg-yellow-400'
              >
                <FontAwesomeIcon icon={faCaretDown} />
              </button>
            </div>
          </div>
        </div>

        <div className='mx-5 space-y-2'>
          <h1 className='font-bold text-black bg-white rounded p-2 w-60'>Speed: {speed} km/h</h1>
          <h1 className='font-bold text-black bg-white rounded p-2 w-60'>Altitude: {altitude} meter</h1>
        </div>
      </section>
    </div>
  );
};

export default Controller;
