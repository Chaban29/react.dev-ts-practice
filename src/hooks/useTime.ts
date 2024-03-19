import { useState, useEffect } from 'react';

interface IUseTimeProps {
  currentTime: Date;
}

export const useTime = ({ currentTime }: IUseTimeProps) => {
  const [time, setTime] = useState(currentTime);
  useEffect(() => {
    const timeId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timeId);
  }, []);
  return time;
};
