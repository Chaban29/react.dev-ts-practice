import { ChangeEvent, FC, useState } from 'react';

interface IPlayer {
  firstName: string;
  lastName: string;
  score: number;
}

export const ScoreBoard: FC = () => {
  const [player, setPlayer] = useState<IPlayer>({
    firstName: 'Roman',
    lastName: 'Chaban',
    score: 10,
  });

  const handleIncreaseScore = () => {
    setPlayer((prevPlayer) => ({
      ...prevPlayer,
      score: prevPlayer.score + 1,
    }));
  };

  const handleChangeInputsValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPlayer({ ...player, [name]: value });
  };

  return (
    <div>
      <label>
        Score: {player.score}
        <button type='button' onClick={handleIncreaseScore}>
          +1
        </button>
      </label>
      <label>
        <input
          type='text'
          name='firstName'
          value={player.firstName}
          onChange={handleChangeInputsValue}
        />
      </label>
      <label>
        <input
          type='text'
          name='lastName'
          value={player.lastName}
          onChange={handleChangeInputsValue}
        />
      </label>
      <h3>
        {player.firstName} {player.lastName}
      </h3>
    </div>
  );
};
