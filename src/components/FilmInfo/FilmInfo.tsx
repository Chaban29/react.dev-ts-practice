import { FC, Fragment } from 'react';

interface IFilmsProps {
  title: string;
  genre: string;
  seasonsCount: number;
}

export const FilmInfo: FC<IFilmsProps> = ({
  title,
  genre,
  seasonsCount,
}: IFilmsProps) => {
  return (
    <Fragment>
      <h3>Movie name: {title || 'Unknown title'}</h3>
      <p>Movie genre: {genre}</p>
      <span>Movies seasonsCount: {seasonsCount}</span>
    </Fragment>
  );
};
