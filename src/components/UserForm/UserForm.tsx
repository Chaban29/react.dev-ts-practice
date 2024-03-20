import { ChangeEvent, FC, useState } from 'react';
import '../../App.css';

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
}

export const UserForm: FC = () => {
  const [user, setUser] = useState<IUser>({
    firstName: 'Barbara',
    lastName: 'Haworth',
    email: 'bhepworth@sculpture.com',
  });

  const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form autoComplete='off'>
      <label>
        FirstName:
        <input
          name='firstName'
          type='text'
          value={user.firstName}
          onChange={handleChangeInputValue}
        />
      </label>
      <label>
        LastName:
        <input
          name='lastName'
          type='text'
          value={user.lastName}
          onChange={handleChangeInputValue}
        />
      </label>
      <label>
        Email:
        <input
          name='email'
          type='text'
          value={user.email}
          onChange={handleChangeInputValue}
        />
      </label>
      <h3>
        {user.firstName} {user.lastName} ({user.email})
      </h3>
    </form>
  );
};
