import React from 'react';
import LoadingIcon from 'assets/LoadingIcon.svg';

type ButtonType = 'primary' | 'outlined' | 'text';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonType?: ButtonType;
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
}

const disabledClassName = 'opacity-50 cursor-not-allowed';

const primaryClassName = 'bg-primary text-white';

const hoverPrimaryClassName = 'hover:bg-primary-hover';

const textClassName = 'text-primary';

const hoverTextClassName = 'hover:text-primary-hover';

const outlinedClassName = 'border border-primary text-primary';

const hoverOutlinedClassName = 'hover:bg-primary-hover hover:text-white';

const cursorNotAllow = 'cursor-not-allowed';

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    isLoading,
    buttonType = 'text',
    disabled,
    className,
    onClick,
    ...rest
  } = props;

  const buttonClassName = () => {
    if (disabled) {
      return disabledClassName;
    }

    switch (buttonType) {
      case 'primary':
        return `${primaryClassName} ${
          isLoading ? cursorNotAllow : hoverPrimaryClassName
        }`;
      case 'outlined':
        return `${outlinedClassName} ${
          isLoading ? cursorNotAllow : hoverOutlinedClassName
        }`;
      case 'text':
      default:
        return `${textClassName} ${
          isLoading ? cursorNotAllow : hoverTextClassName
        }`;
    }
  };

  return (
    <button
      className={`flex align-center justify-center w-full h-14 leading-6 py-4 rounded-md font-medium ${buttonClassName()} ${className}`}
      onClick={disabled || isLoading ? undefined : onClick}
      {...rest}
    >
      {isLoading ? (
        <LoadingIcon
          className={`flex align-center justify-center animate-spin ${
            buttonType === 'primary' ? 'stroke-white' : 'stroke-primary'
          }`}
          buttonType={buttonType}
        />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
