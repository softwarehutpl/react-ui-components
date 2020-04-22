import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DownArrow } from '@styled-icons/boxicons-solid/DownArrow';
import useOutsideClick from '../../../common/hooks/clickOutside';
import { ISelectToggle, SelectToggle } from './SelectToggle';
import { SelectOptions } from './SelectOptions';
import { SelectOption } from './SelectOption';
import MultipleSelectChip from './MultipleSelectChip';

const isEqual = require('lodash.isequal');

export interface IOption {
  label: string;
  value: string | number;
}

interface ISelect extends ISelectToggle {
  options: IOption[];
  selectedOptions?: IOption[];
  onChange: (option?: IOption[]) => void;
  className?: string;
  width?: number;
  placeholder?: string;
  multiple?: boolean;
  caretSize?: number;
  optionsBackgroundColor?: string;
  optionsFontColor?: string;
  selectedOptionBackgroundColor?: string;
}

interface IStyledSelect {
  margin?: number;
  width?: number;
}

const arrowStyle = (size?: number) => ({
  width: `${size}px`,
});

const Select = ({
  options,
  color,
  className,
  selectedOptions,
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

  useOutsideClick(selectRef, closeSelect);

  useEffect(() => {
    if (toggleRef && toggleRef.current) {
      const { height } = toggleRef.current.getBoundingClientRect();
      setToggleHeight(height);
    }
  }, []);

  const handleOnClick = (option: IOption, previousSelectedOption?: IOption[]) => {
    if (multiple) {
      const newOptions = previousSelectedOption ? [...previousSelectedOption] : [];
      // don't duplicate selected options
      if (newOptions.includes(option)) {
        return;
      }
      newOptions.push(option);
      onChange(newOptions);
    } else {
      onChange([option]);
      closeSelect();
    }
  };

  const removeFromMultipleOptions = (option: IOption, previousSelectedOption: IOption[]) => {
    const newOptions = previousSelectedOption.filter((i) => i !== option);
    onChange(newOptions);
  };

  return (
    <div className={className} ref={selectRef}>
      <SelectToggle
        ref={toggleRef}
        onClick={toggleSelect}
        color={color}
        backgroundColor={backgroundColor}
        fontColor={fontColor}
        padding={padding}
        disabled={disabled}
      >
        {!selectedOptions && placeholder}
        <div>
          {selectedOptions &&
            selectedOptions.map((option) =>
              multiple ? (
                <MultipleSelectChip
                  key={option.label}
                  onDelete={() => {
                    removeFromMultipleOptions(option, selectedOptions);
                  }}
                  option={option}
                  color={color}
                />
              ) : (
                option.label
              )
            )}
        </div>
        <DownArrow style={arrowStyle(caretSize)} />
      </SelectToggle>
      {isOpen && (
        <SelectOptions toggleHeight={toggleHeight} color={color}>
          {options.map((option) => (
            <SelectOption
              key={option.label}
              padding={padding}
              color={color}
              onClick={() => {
                handleOnClick(option, selectedOptions);
              }}
              optionsFontColor={optionsFontColor}
              optionsBackgroundColor={optionsBackgroundColor}
              isSelected={
                selectedOptions ? !!selectedOptions.find((i) => isEqual(option, i)) : false
              }
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
