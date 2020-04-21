import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DownArrow } from '@styled-icons/boxicons-solid/DownArrow';
import useOutsideClick from '../../../common/hooks/clickOutside';
import { ISelectToggle, SelectToggle } from './SelectToggle';
import { SelectOptions } from './SelectOptions';
import SelectOption from './SelectOption';

interface ISelect extends ISelectToggle {
  options: { label: string; value: string | number }[];
  selectedOption: { label: string; value: string | number } | null;
  onChange: (option: { label: string; value: string | number }) => void;
  className?: string;
  width?: number;
  placeholder?: string;
  color?: string;
  optionsBackgroundColor?: string;
  optionsFontColor?: string;
}

interface IStyledSelect {
  margin?: number;
  width?: number;
}

const arrowStyle = () => ({
  width: `15px`,
  marginLeft: '10px',
});

const Select = ({
  options,
  color,
  className,
  selectedOption,
  onChange,
  placeholder,
  backgroundColor,
  fontColor,
  padding,
  optionsBackgroundColor,
  optionsFontColor,
}: ISelect) => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleHeight, setToggleHeight] = useState(0);
  const toggleRef = React.useRef<HTMLDivElement>(null);
  const selectRef = React.useRef<HTMLDivElement>(null);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const closeSelect = () => {
    setIsOpen(false);
  };

  useOutsideClick(selectRef, closeSelect);

  useEffect(() => {
    if (toggleRef && toggleRef.current) {
      const { height } = toggleRef.current.getBoundingClientRect();
      setToggleHeight(height);
    }
  }, []);

  return (
    <div className={className} ref={selectRef}>
      <SelectToggle
        ref={toggleRef}
        onClick={toggleSelect}
        backgroundColor={backgroundColor}
        fontColor={fontColor}
        padding={padding}
      >
        {selectedOption ? selectedOption.label : placeholder}
        <DownArrow style={arrowStyle()} />
      </SelectToggle>
      {isOpen && (
        <SelectOptions toggleHeight={toggleHeight} color={color}>
          {options.map((option) => (
            <SelectOption
              key={option.label}
              option={option}
              padding={padding}
              color={color}
              selectOnChange={onChange}
              optionsFontColor={optionsFontColor}
              optionsBackgroundColor={optionsBackgroundColor}
            />
          ))}
        </SelectOptions>
      )}
    </div>
  );
};

export const defaultProps = {
  color: 'primary',
  width: 200,
  margin: 0,
  placeholder: 'select value',
  padding: 15,
};

Select.defaultProps = defaultProps;

const StyledSelect = styled(Select)<IStyledSelect>`
  ${({ margin = defaultProps.margin, width = defaultProps.width }) => ({
    margin: `${margin}px`,
    position: 'relative',
    width: `${width}px`,
  })}
`;

export default StyledSelect;
