import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useOutsideClick from '../../../common/hooks/clickOutside';
import SelectToggle from './SelectToggle';
import { SelectOptions } from './SelectOptions';
import { SelectOption } from './SelectOption';
import { checkIfIsSelected } from './helpers';

export interface IOption {
  label: string;
  value: string | number;
}

interface ISelect {
  value?: IOption;
  multipleValue?: IOption[];
  onChange: (newValue: IOption | IOption[]) => void;
  options: IOption[];
  placeholder?: string;
  multiple?: boolean;
  color?: string;
  className?: string;
  disabled?: boolean;
  backgroundColor?: string;
  fontColor?: string;
  padding?: number;
  caretSize?: number;
  width?: number;
  optionsBackgroundColor?: string;
  optionsFontColor?: string;
  selectedOptionBackgroundColor?: string;
}

interface IStyledSelect {
  margin?: number;
  width?: number;
}

const Select = ({
  options,
  color,
  className,
  value,
  multipleValue,
  onChange,
  placeholder,
  backgroundColor,
  fontColor,
  padding,
  optionsBackgroundColor,
  optionsFontColor,
  multiple,
  caretSize,
  selectedOptionBackgroundColor,
  disabled,
}: ISelect) => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleHeight, setToggleHeight] = useState(0);
  const toggleRef = React.useRef<HTMLDivElement>(null);
  const selectRef = React.useRef<HTMLDivElement>(null);

  const toggleSelect = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const closeSelect = () => {
    setIsOpen(false);
  };

  const countToggleHeigh = () => {
    if (toggleRef && toggleRef.current) {
      const { height } = toggleRef.current.getBoundingClientRect();
      setToggleHeight(height);
    }
  };

  useOutsideClick(selectRef, closeSelect);

  useEffect(() => {
    countToggleHeigh();
  }, []);

  const singleSelectOnChange = (option: IOption) => {
    onChange(option);
    closeSelect();
  };

  const multipleSelectOnChange = (option: IOption, selectedOptions?: IOption[]) => {
    const newSelectedOptions = selectedOptions ? [...selectedOptions] : [];
    if (!newSelectedOptions.includes(option)) {
      newSelectedOptions.push(option);
      onChange(newSelectedOptions);
      setTimeout(countToggleHeigh, 100);
    }
  };

  const onMultipleOptionDelete = (option: IOption, selectedOptions?: IOption[]) => {
    if (selectedOptions) {
      const newOptions = selectedOptions.filter((opt) => opt !== option);
      onChange(newOptions);
      setTimeout(countToggleHeigh, 100);
    }
  };

  return (
    <div className={className} ref={selectRef}>
      <SelectToggle
        ref={toggleRef}
        toggle={toggleSelect}
        color={color}
        backgroundColor={backgroundColor}
        fontColor={fontColor}
        padding={padding}
        disabled={disabled}
        onChange={(newOptions: IOption[]) => {
          onChange(newOptions);
        }}
        onMultipleOptionDelete={(option: IOption) => {
          onMultipleOptionDelete(option, multipleValue);
        }}
        value={value}
        placeholder={placeholder}
        multipleValue={multipleValue}
        caretSize={caretSize}
      />
      {isOpen && (
        <SelectOptions toggleHeight={toggleHeight} color={color}>
          {options.map((option) => (
            <SelectOption
              key={option.label}
              padding={padding}
              color={color}
              optionsFontColor={optionsFontColor}
              optionsBackgroundColor={optionsBackgroundColor}
              onClick={() => {
                if (multiple) {
                  multipleSelectOnChange(option, multipleValue);
                } else {
                  singleSelectOnChange(option);
                }
              }}
              isSelected={checkIfIsSelected(option, multiple, value, multipleValue)}
              selectedOptionBackgroundColor={selectedOptionBackgroundColor}
            >
              {option.label}
            </SelectOption>
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
  multiple: false,
  caretSize: 15,
  disabled: false,
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
