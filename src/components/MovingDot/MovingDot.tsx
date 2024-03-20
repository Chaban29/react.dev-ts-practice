import { FC, Fragment, PointerEventHandler, useState } from 'react';

interface IPosition {
  x: number;
  y: number;
}

interface INewPosition {
  x: number;
  y: number;
}

export const MovingDot: FC = () => {
  const [position, setPosition] = useState<IPosition>({ x: 0, y: 0 });

  const handlePointerMove: PointerEventHandler<HTMLDivElement> = (event) => {
    const newPosition: INewPosition = {
      x: 0,
      y: 0,
    };
    newPosition.x = event.clientX;
    newPosition.y = event.clientY;
    setPosition(newPosition);
  };

  return (
    <Fragment>
      <div
        onPointerMove={handlePointerMove}
        style={{
          position: 'relative',
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            backgroundColor: 'red',
            borderRadius: '50%',
            transform: `translate(${position.x}px, ${position.y}px)`,
            left: -10,
            top: -10,
            width: 20,
            height: 20,
          }}
        />
      </div>
    </Fragment>
  );
};
