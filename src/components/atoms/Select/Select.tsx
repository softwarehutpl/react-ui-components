import React from 'react';
import styled from 'styled-components';

interface ICommonSelectProps {
  padding?: number;
}

interface ISelectContainerProps extends ICommonSelectProps {
  width?: number;
}

interface ISelectOptionProps extends ICommonSelectProps {}

interface ISelect extends ISelectContainerProps {
  className?: string;
  placeholder?: string;
  options: { label: string; value: string }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

const SelectContainer = styled.select<ISelectContainerProps>`
  ${({ width, padding }) => ({
    width: `${width}px`,
    padding: `${padding}px`,
    appearance: 'none',
    '-webkit-appearance': 'none',
  })}
`;

const SelectOption = styled.option<ISelectOptionProps>`
  ${({ padding }) => ({
    padding: `${padding}px`,
    'line-height': '40px',
    height: '40px',
    '-webkit-appearance': 'none',
    '&:hover': {
      'background-color': 'red',
      color: 'green'
    }
  })}
`;

const Select = ({ className, placeholder, options, onChange, value, width, padding }: ISelect) => (
  <SelectContainer
    className={className}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    width={width}
    padding={padding}
  >
    {options.map((option) => (
      <SelectOption key={option.label} value={option.value} padding={padding}>
        {option.label}
      </SelectOption>
    ))}
  </SelectContainer>
);

const defaultProps = {
  width: 200,
  padding: 15,
};

Select.defaultProps = defaultProps;

export default Select;
