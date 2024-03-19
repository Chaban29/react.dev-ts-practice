import { FC } from 'react';
import { useTime } from '../../hooks/useTime';

interface IClock {
  time?: string;
}

export const Clock: FC<IClock> = () => {
  const currentTime = new Date();
  const time = useTime({ currentTime });
  return <div>{time.toLocaleTimeString()}</div>;
};
