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
  { icon: faSignal, value: '98%', unit: '' },
  { icon: faSatellite, value: '14', unit: 'SAT' },
];

const Navbar = () => {
  return (

    <div className="w-full h-12 bg-gray-900 flex items-center justify-between px-40  text-white text-sm shadow">
      {topStats.map((stat, index) => (
        <div key={index} className="flex items-center space-x-1 ">
          <FontAwesomeIcon icon={stat.icon} className="text-blue-400" />
          <span className="font-medium">{stat.value}</span>
          {stat.unit && <span className="text-gray-400">{stat.unit}</span>}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
