import { FC } from 'react';

interface IInput {
  type: string;
  value?: string;
  placeholder: string;
  className: string;
  name?: string;
  onChange?: () => void;
}

export const Input: FC<IInput> = ({
  type,
  value,
  placeholder,
  className,
  name,
  onChange,
}: IInput) => {
  return (
    <input
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      className={className}
      onChange={onChange}
    />
  );
};
