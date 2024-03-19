import { FC } from 'react';
import './App.css';
import { TrafficLight } from './components/TrafficLight/TrafficLight';

export const App: FC = () => {
  return (
    <div>
      <TrafficLight />
    </div>
  );
};
