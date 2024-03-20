import { FC, Fragment, useState } from 'react';

type TypeNumber = number;

export const Counter: FC = () => {
  const [number, setNumber] = useState<TypeNumber>(0);
  return (
    <Fragment>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5);
          setNumber((prevNumber) => prevNumber + 1);
          setNumber(42);
        }}
      >
        Increase the number
      </button>
    </Fragment>
  );
};
