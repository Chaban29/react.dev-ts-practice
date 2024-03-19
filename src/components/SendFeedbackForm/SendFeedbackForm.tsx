import { FC } from 'react';

export const SendFeedbackForm: FC = () => {
  const handleClick = () => {
    let name = prompt('What is your name?', '');
    alert(`Hello, ${name}!`);
  };

  return <button onClick={handleClick}>Greet</button>;
};
