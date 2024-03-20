import { FC, Fragment, useState } from 'react';

type TypePending = number;
type TypeCompleted = number;

export const RequestTracker: FC = () => {
  const [pending, setPending] = useState<TypePending>(0);
  const [completed, setCompleted] = useState<TypeCompleted>(0);
  const handleClick = async () => {
    setPending((prevPending) => prevPending + 1);
    await delay(3000);
    setPending((prevPending) => prevPending - 1);
    setCompleted((prevCompeted) => prevCompeted + 1);
  };
  return (
    <Fragment>
      <h3>Pending: {pending}</h3>
      <h3>Completed: {completed}</h3>
      <button onClick={handleClick}>Buy</button>
    </Fragment>
  );
};

export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
