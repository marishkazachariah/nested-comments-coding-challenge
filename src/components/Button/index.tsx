import React from 'react';
import { getButtonClassNames } from '../../theme';
import { ButtonType } from './types';

interface ButtonProps {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  icon?: React.ReactNode;
  buttonType?: ButtonType;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick: handleClick,
  disabled,
  icon,
  buttonType,
  ariaLabel,
}) => {
  const className = getButtonClassNames(buttonType ?? ButtonType.Tertiary);

  return (
    <button
      className={className}
      onClick={handleClick}
      disabled={disabled}
      aria-label={ariaLabel ?? label}
      title={label}
      data-testid={label}
    >
      {icon && <span className="flex items-center justify-center">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
