import { useCallback, useState } from 'react';

interface ICountReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const useCount = (initialValue: number = 0): ICountReturn => {
  const [count, setCount] = useState<number>(initialValue);

  const increment = useCallback(() => {
    setCount((currentCount) => currentCount + 1);
  }, []);
  const decrement = useCallback(() => {
    if (count <= 0) return;
    setCount((currentCount) => currentCount - 1);
  }, [count]);

  return { count, increment, decrement };
};
