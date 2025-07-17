import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUp,
  faTachometerAlt,
  faArrowRightArrowLeft,
  faBatteryThreeQuarters,
  faSignal,
  faSatellite,
} from '@fortawesome/free-solid-svg-icons';

const topStats = [
  { icon: faArrowUp, value: '81.0', unit: 'm' },
  { icon: faTachometerAlt, value: '12.6', unit: 'm/s' },
  { icon: faArrowRightArrowLeft, value: '5.2', unit: 'm/s' },
  { icon: faBatteryThreeQuarters, value: '98%', unit: '' },
  { icon: faSignal, value: 'Strong', unit: '' },
  { icon: faSatellite, value: '17', unit: 'THR' },
];

const Navbar = () => {
  return (
    <>
     <div className=" h-12 frost-black flex items-center justify-between pl-24 pr-120 text-white text-sm shadow">
      {topStats.map((stat, index) => (
        <div key={index} className=" space-x-1 ">
          <FontAwesomeIcon icon={stat.icon} className="text-blue-400" />
          <span className="font-medium">{stat.value}</span>
          {stat.unit && <span className="text-gray-400">{stat.unit}</span>}
        </div>
      ))}
    </div>
    </>
   
  );
};

export default Navbar;
