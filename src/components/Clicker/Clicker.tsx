import { FC, Fragment, useState } from 'react';

export const Clicker: FC = () => {
  const [number, setNumber] = useState<number>(0);

  const handleRenderNewNumber = () => {
    setNumber((prev) => prev + 3);
  };

  return (
    <Fragment>
      <h1>{number}</h1>
      <button type='button' onClick={handleRenderNewNumber}>
        +3
      </button>
    </Fragment>
  );
};
