import React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

interface TextInputProps extends RegisterOptions {
  name: string;
  placeholder?: string;
  defaultValue?: string;
  type?: React.HTMLInputTypeAttribute;
}

const style = {
  normal: 'focus:border-sky-500',
  error: 'border-red-500',
};

const TextInput: React.FC<TextInputProps> = (props) => {
  const { name, placeholder, type, ...registerOptions } = props;

  const { register, formState, getFieldState } = useFormContext();

  const { error } = getFieldState(name, formState);

  return (
    <div className="flex flex-col w-full">
      <input
        className={`border outline-0 w-full px-4 py-3 border-grey-300 rounded-md  ${
          error ? style.error : style.normal
        }`}
        type={type}
        placeholder={placeholder}
        {...register(name, registerOptions)}
      />
      {error && (
        <p className="text-xs w-full px-4 pt-2 text-red-500">{error.message}</p>
      )}
    </div>
  );
};

export default TextInput;
