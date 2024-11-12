// src/components/atoms/Select.tsx
import React from 'react';
import { SelectContainer, StyledSelect } from './select.styles';

interface SelectProps {
  options: { label: string; value: number }[];
  handleChange: (value: number) => void;
  curValue: number;
  className?: string;
}

const Select: React.FC<SelectProps> = ({ options, handleChange, curValue, className = '' }) => (
  <div className={className}>
    <SelectContainer>
      <StyledSelect
        value={curValue}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          handleChange(parseInt(e.target.value))
        }
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </SelectContainer>
  </div>
);

export default Select;
