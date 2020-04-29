import styled from 'styled-components';
import React from 'react';
import { DownArrow } from '@styled-icons/boxicons-solid/DownArrow';
import { defaultProps, IOption } from './Select';
import MultipleSelectChip from './MultipleSelectChip';
import './selectToggle.scss';

interface ISelectToggle {
  color?: string;
  backgroundColor?: string;
  fontColor?: string;
  padding?: number;
  disabled?: boolean;
  placeholder?: string;
  value?: IOption;
  multipleValue?: IOption[];
  onChange: (newOptions: IOption[]) => void;
  caretSize?: number;
  toggle?: () => void;
  className?: string;
  onMultipleOptionDelete?: (option: IOption) => void;
}

const arrowStyle = (size?: number) => ({
  width: `${size}px`,
});

const SelectToggle = React.forwardRef<HTMLDivElement, ISelectToggle>(
  (
    {
      placeholder,
      value,
      multipleValue,
      color,
      onChange,
      caretSize,
      toggle,
      className,
      onMultipleOptionDelete = () => {},
      backgroundColor,
      fontColor,
    },
    ref
  ) => {
    const renderContent = () => {
      if (value) {
        return value.label;
      }
      if (multipleValue) {
        return (
          <div className="multipleOptions">
            {multipleValue.map((option) => (
              <MultipleSelectChip
                key={option.label}
                onDelete={() => {
                  onMultipleOptionDelete(option);
                }}
                option={option}
                color={color}
                backgroundColor={backgroundColor}
                fontColor={fontColor}
              />
            ))}
          </div>
        );
      }
      return placeholder;
    };

    return (
      <div ref={ref} onClick={toggle} className={className}>
        {renderContent()}
        <DownArrow style={arrowStyle(caretSize)} />
      </div>
    );
  }
);

export default styled(SelectToggle)<ISelectToggle>`
  ${({
    theme,
    color = defaultProps.color,
    backgroundColor,
    fontColor,
    padding,
    disabled = defaultProps.disabled,
  }) => ({
    'background-color': disabled
      ? theme.colors.disabled.base
      : backgroundColor || theme.colors[color].base,
    color: fontColor || theme.colors[color].light,
    width: '100%',
    padding: `${padding}px`,
    display: 'flex',
    'justify-content': 'space-between',
    'box-sizing': 'border-box',
  })}
`;
