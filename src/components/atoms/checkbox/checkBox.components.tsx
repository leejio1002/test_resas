import React from 'react';
import { CheckBoxContainer } from './checkBox.styles';

interface Props {
  id: string;
  label: string;
  code: number;
  checked: boolean;
  onCheck: (checked: boolean, code: number) => void;
  disabled?: boolean;
}

export const CheckBox: React.FC<Props> = ({
  label,
  onCheck,
  checked,
  disabled = false,
  id,
  code,
}) => {
  return (
    <CheckBoxContainer>
      <input
        id={id}
        checked={checked}
        type="checkbox"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onCheck(e.target.checked, code)}
        disabled={disabled}
      />
      <label htmlFor={id}>{label}</label>
    </CheckBoxContainer>
  );
};
