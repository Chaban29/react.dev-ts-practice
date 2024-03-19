import { FC, useState } from 'react';
import { sculptureList } from '../../common/data';

export const Gallery: FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [showMore, setShowMore] = useState<boolean>(false);

  const hasPrev = index > 0;
  const hasNext = index < sculptureList.length - 1;

  const handleMoreClick = () => {
    setShowMore(!showMore);
  };

  const handleClick = () => {
    if (hasNext) {
      setIndex(index + 1);
    }
  };

  const handlePrevClick = () => {
    if (hasPrev) {
      setIndex(index - 1);
    }
  };

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick} disabled={!hasNext}>
        Next
      </button>
      <button onClick={handlePrevClick} disabled={!hasPrev}>
        Prev
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      <img src={sculpture.url} alt={sculpture.alt} />
      {showMore && <p>{sculpture.description}</p>}
    </>
  );
};
