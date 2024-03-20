import { FC, useState, useEffect } from 'react';

export const CustomCounter: FC = () => {
  const [number, setNumber] = useState<number>(0);
  const handleClick = () => {
    setNumber((prevNumber) => prevNumber + 1);
    setNumber((prevNumber) => prevNumber + 1);
    setNumber((prevNumber) => prevNumber + 1);
    setTimeout(() => {
      alert(number);
    }, 3000);
  };

  useEffect(() => {
    console.log(`number ${number}`);
  }, [number]);

  return (
    <div>
      <h4>{number}</h4>
      <button type='button' onClick={handleClick}>
        +3
      </button>
    </div>
  );
};
