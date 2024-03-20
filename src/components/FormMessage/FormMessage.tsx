import { ChangeEvent, FC, FormEvent, useState } from 'react';

type TypeAreaValue = string;

export const FormMessage: FC = () => {
  const [name, setName] = useState<string>('Alice');
  const [message] = useState<string>('Hello');
  const [areaValue, setAreaValue] = useState<TypeAreaValue>('Hello!');

  const handleAreaValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setAreaValue(event.target.value);
  };

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${name}`);
    }, 5000);
  };

  const handleOptionsValues = (event: ChangeEvent<HTMLSelectElement>) => {
    setName(event.target.value);
  };

  return (
    <form autoComplete='off' onSubmit={handleSubmitForm}>
      <label>
        To:
        <select value={name} onChange={handleOptionsValues}>
          <option value='Alice'>Alice</option>
          <option value='Bob'>Bob</option>
        </select>
      </label>
      <textarea
        value={areaValue}
        onChange={handleAreaValue}
        name=''
        id=''
        cols={10}
        rows={10}
      ></textarea>
      <button type='submit'>Send</button>
    </form>
  );
};
