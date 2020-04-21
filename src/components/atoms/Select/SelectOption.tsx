import React from 'react';
import styled from 'styled-components';
import { defaultProps } from './Select';

interface ISelectOptionProps {
  selectOnChange?: (option: { label: string, value: string | number }) => void;
  className?: string;
  option: { label: string, value: string | number };
  padding?: number;
  color?: string;
  optionsBackgroundColor?: string;
  optionsFontColor?: string;
}

const SelectOption = ({
  selectOnChange,
  className,
  option,
}: ISelectOptionProps) => {
  const handleClick = () => {
    if (selectOnChange) {
      selectOnChange(option);
    }
  };
  return (
    <div className={className} onClick={handleClick}>
      {option.label}
    </div>
  );
};

const StyledSelectOption = styled(SelectOption)<ISelectOptionProps>`
  ${({ theme, color = defaultProps.color, padding = defaultProps.padding, optionsBackgroundColor, optionsFontColor }) => ({
    width: '100%',
    padding: `${padding / 2}px ${padding}px`,
    'background-color': optionsBackgroundColor || theme.colors[color].light,
    color: optionsFontColor || theme.colors[color].base,
    '&:hover': {
      'background-color': theme.colors[color].dark,
    }
  })}
`;

export default StyledSelectOption;
