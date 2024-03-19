import { FC, useState, Fragment, useEffect, useRef } from 'react';
import { FilmInfo } from '../FilmInfo/FilmInfo';

type TypeMovieTitle = string;

export const Films: FC = () => {
  const [movieName, setMovieName] = useState<string>('');

  const buttonRef = useRef<null>(null);

  const showButtonRef = (): void => {
    console.log(buttonRef.current);
  };

  const title: TypeMovieTitle = 'Spider Man';

  const showMovieName = () => {
    if (movieName.length === 0) {
      setMovieName(title);
    } else {
      setMovieName('');
    }
  };

  useEffect(() => {
    console.log('Movie name', movieName);
  }, [movieName]);

  return (
    <Fragment>
      <FilmInfo title='Spider Man' genre='Fantastic' seasonsCount={3} />
      <h3 ref={buttonRef} onClick={showButtonRef}>
        {typeof movieName === 'string' ? movieName : 'Unknown movie'}
      </h3>
      <button onClick={showMovieName}>Show movie</button>
    </Fragment>
  );
};
