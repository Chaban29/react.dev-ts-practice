import { FC, Fragment } from 'react';

interface IMoviesInfo {
  id: number;
  title: string;
  rating: number;
  duration: number;
}

export const MoviesInfo: FC = () => {
  const movies: IMoviesInfo[] = [
    {
      id: 1,
      title: 'Spider Man',
      rating: 9.9,
      duration: 180,
    },
    {
      id: 2,
      title: 'King Kong',
      rating: 9.1,
      duration: 230,
    },
  ];
  return (
    <div>
      {movies.length !== 0 &&
        movies.map((movie) => (
          <Fragment key={movie.id}>
            <h4>{movie.title}</h4>
            <p>{movie.rating}</p>
            <span>{movie.duration}</span>
          </Fragment>
        ))}
    </div>
  );
};
