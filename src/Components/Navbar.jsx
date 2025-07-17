import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUp,
  faTachometerAlt,
  faArrowRightArrowLeft,
  faBatteryThreeQuarters,
  faSignal,
  faSatellite,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';

const formatDateDot = (date) => {
  const pad = (n) => n.toString().padStart(2, '0');
  const day = pad(date.getDate());
  const month = pad(date.getMonth() + 1);
  const year = date.getFullYear();

  let hours = date.getHours();
  const mins = pad(date.getMinutes());
  const secs = pad(date.getSeconds());
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;

  return `${day}.${month}.${year}   ${hours}:${mins}:${secs} ${ampm}`;
};

const Navbar = () => {
  const [date, setDate] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(formatDateDot(new Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const topStats = [
    { icon: faArrowUp, value: '81.0', unit: 'm' },
    { icon: faTachometerAlt, value: '12.6', unit: 'm/s' },
    { icon: faArrowRightArrowLeft, value: '5.2', unit: 'm/s' },
    { icon: faBatteryThreeQuarters, value: '98%', unit: '' },
    { icon: faSignal, value: 'Strong', unit: '' },
    
  ];

  return (
    <div className="h-12 frost-black flex items-center justify-between pl-24 pr-120 text-white text-sm shadow">
      {/* Date/Time */}
      <div className="flex items-center space-x-3">
        <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-400" />
        <span className="font-medium">{date}</span>
      </div>

      {/* Other fixed stats */}
      {topStats.map((stat, i) => (
        <div key={i} className="flex items-center space-x-1">
          <FontAwesomeIcon icon={stat.icon} className="text-blue-400" />
          <span className="font-medium">{stat.value}</span>
          {stat.unit && <span className="text-gray-400">{stat.unit}</span>}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
