import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCamera,
  faMapMarkedAlt,
  faSlidersH,
  faMicrochip,
  faChartBar,
  faHistory,
  faPowerOff, // ✅ Import power icon
} from '@fortawesome/free-solid-svg-icons';

const navItems = [
  { icon: faCamera, label: 'Camera' },
  { icon: faMapMarkedAlt, label: 'Map' },
  { icon: faSlidersH, label: 'Settings' },
  { icon: faMicrochip, label: 'Sensors' },
  { icon: faChartBar, label: 'Telemetry' },
  { icon: faHistory, label: 'Logs' },
];

const Sidebar = () => {
  return (
    <div className="w-16 frost-black h-full flex flex-col items-center px-10 pt-8 pb-18 space-y-6 shadow-lg">
      {navItems.map((item, idx) => (
        <button
          key={idx}
          title={item.label}
          className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-700 text-gray-300 hover:bg-green-600 hover:text-white transition-all"
        >
          <FontAwesomeIcon icon={item.icon} size="lg" />
        </button>
      ))}

      {/* Power Off Button */}
      <button
        title="Power Off"
        className="w-12 h-12 flex items-center justify-center rounded-lg text-gray-30 bg-red-600 hover:text-white transition-all "
      >
        <FontAwesomeIcon icon={faPowerOff} size="lg" />
      </button>
    </div>
  );
};

export default Sidebar;
