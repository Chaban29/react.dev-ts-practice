import { ChangeEvent, FC, useState } from 'react';

interface IValueProps {
  first: string;
  second: string;
}

export const Form: FC = () => {
  const [value, setValue] = useState<IValueProps>({ first: '', second: '' });

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, first: event.target.value });
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, second: event.target.value });
  };

  const handleReset = () => {
    setValue({ ...value, first: '', second: '' });
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <input
        placeholder='First name'
        value={value.first}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder='Last name'
        value={value.second}
        onChange={handleLastNameChange}
      />
      <h1>
        Hi, {value.first} {value.second}
      </h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
};
