import { FC, PointerEventHandler, ReactNode, useState } from 'react';

interface IBox {
  children: ReactNode;
  position: { x: number; y: number };
  color: string;
  onMove: (dx: number, dy: number) => void;
}

export const Box: FC<IBox> = ({ children, position, color, onMove }: IBox) => {
  const [lastCoordinates, setLastCoordinates] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const handlePointerDown: PointerEventHandler<HTMLDivElement> = (event) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setLastCoordinates({ x: event.clientX, y: event.clientY });
  };
  const handlePointerMove: PointerEventHandler<HTMLDivElement> = (event) => {
    if (lastCoordinates) {
      const dx = event.clientX - lastCoordinates.x;
      const dy = event.clientY - lastCoordinates.y;
      setLastCoordinates({ x: event.clientX, y: event.clientY });
      onMove(dx, dy);
    }
  };
  const handlePointerUp: PointerEventHandler<HTMLDivElement> = () => {
    setLastCoordinates(null);
  };

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        width: 100,
        height: 100,
        cursor: 'grab',
        backgroundColor: color,
        position: 'absolute',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: `translate(
          ${position.x}px,
          ${position.y}px
        )`,
      }}
    >
      {children}
    </div>
  );
};
