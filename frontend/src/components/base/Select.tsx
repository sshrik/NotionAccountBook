import React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

interface SelectProps extends RegisterOptions {
  name: string;
  multiple?: boolean;
  placeholder?: string;
  defaultValue?: string;
  options: string[];
}

const style = {
  normal: 'focus:border-sky-500',
  error: 'border-red-500',
};

const Select: React.FC<SelectProps> = (props) => {
  const { name, placeholder, options, multiple, ...registerOptions } = props;

  const { register, formState, getFieldState } = useFormContext();

  const { error } = getFieldState(name, formState);

  return (
    <div className="flex flex-col w-full">
      <select
        multiple={multiple}
        className={`border outline-0 w-full px-4 py-3 border-grey-300 rounded-md  ${
          error ? style.error : style.normal
        }`}
        placeholder={placeholder}
        {...register(name, registerOptions)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {error && (
        <p className="text-xs w-full px-4 pt-2 text-red-500">{error.message}</p>
      )}
    </div>
  );
};

export default Select;
