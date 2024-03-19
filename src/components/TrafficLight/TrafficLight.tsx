import { FC, Fragment, useState } from 'react';

export const TrafficLight: FC = () => {
  const [walk, setWalk] = useState<boolean>(false);

  const handleClick = () => {
    setWalk(!walk);
    alert(walk ? 'Stop is next' : 'Walk is next');
  };

  return (
    <Fragment>
      <button onClick={handleClick}>Change to {walk ? 'Stop' : 'Walk'}</button>
      <h1 style={{ color: walk ? 'darkred' : 'darkgreen' }}>
        {walk ? 'Walk' : 'Stop'}
      </h1>
    </Fragment>
  );
};
