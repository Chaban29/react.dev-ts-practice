import { ChangeEvent, FC, useState } from 'react';

interface IPersonInfo {
  name: string;
  artwork: {
    title: string;
    city: string;
    image: string;
  };
}

export const FormInfo: FC = () => {
  const [person, setPerson] = useState<IPersonInfo>({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    },
  });

  const handleChangeValuesFromInputs = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setPerson({
      ...person,
      [name]: value,
      artwork: {
        ...person.artwork,
        [name]: value,
      },
    });
  };
  return (
    <form autoComplete='off'>
      <label>
        Name:
        <input
          name='name'
          type='text'
          value={person.name}
          onChange={handleChangeValuesFromInputs}
        />
      </label>
      <label>
        Title:
        <input
          name='title'
          type='text'
          value={person.artwork.title}
          onChange={handleChangeValuesFromInputs}
        />
      </label>
      <label>
        City:
        <input
          name='city'
          type='text'
          value={person.artwork.city}
          onChange={handleChangeValuesFromInputs}
        />
      </label>
      <label>
        ImageUrl:
        <input
          name='image'
          type='text'
          value={person.artwork.image}
          onChange={handleChangeValuesFromInputs}
        />
      </label>
      <h2>
        {person.name} {person.artwork.title} {person.artwork.city}
      </h2>
      <img src={person.artwork.image} alt='person artwork' />
    </form>
  );
};
