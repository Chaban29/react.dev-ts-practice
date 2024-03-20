import { FC } from 'react';

interface IPosition {
  position: { x: number; y: number };
}

export const Background: FC<IPosition> = ({ position }: IPosition) => {
  return (
    <div
      style={{
        position: 'absolute',
        transform: `translate(
        ${position.x}px,
        ${position.y}px
      )`,
        width: 250,
        height: 250,
        backgroundColor: 'rgba(200, 200, 0, 0.2)',
      }}
    />
  );
};
