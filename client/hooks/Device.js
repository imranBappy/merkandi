"use client";
import { useState, useEffect } from 'react';

const Device = (breakpoint = 768) => {
  const [deviceType, setDeviceType] = useState('desktop'); // default to desktop

  useEffect(() => {
    const checkDeviceType = () => {
      if (window.innerWidth > breakpoint) {
        setDeviceType('desktop');
      } else {
        setDeviceType('mobile');
      }
    };

    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);

    return () => window.removeEventListener('resize', checkDeviceType);
  }, [breakpoint]);

  return deviceType;
}

export default Device;