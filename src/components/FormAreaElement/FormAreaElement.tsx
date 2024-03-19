import { FC, useState, ChangeEvent } from 'react';

export const FormAreaElement: FC = () => {
  const [areaText, setAreaText] = useState<string>('Hi!');
  const [sendMessage, setSendMessage] = useState<boolean>(false);

  const handleChangeArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setAreaText(event.target.value);
  };

  if (sendMessage) {
    return <h1>Your message is on its way!</h1>;
  }
  return (
    <form
      action='#!'
      onSubmit={(event) => {
        event.preventDefault();
        setSendMessage(true);
      }}
    >
      <textarea
        cols={40}
        rows={10}
        placeholder='Message'
        onChange={handleChangeArea}
        value={areaText}
        name=''
        id=''
      ></textarea>
      <br />
      <button type='submit'>Send</button>
    </form>
  );
};
