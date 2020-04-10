import React from 'react';
import styled, { css } from 'styled-components';
import { ORIENTATION } from '../../../common/consts/consts';

export interface WrapperProps {
  color?: string;
  fontColor?: string;
  isSelected?: boolean;
  disabled?: boolean;
  backgroundColor?: string;
  activeColor?: string;
  activeBackgroundColor?: string;
  disabledColor?: string;
  disabledBackgroudColor?: string;
  padding?: number;
  orientation?: string;
  iconClassName?: string;
};

export interface LabelProps {
  isSelected?: boolean;
};

export interface TabProps extends WrapperProps, LabelProps {
  className?: string;
  label: string;
  value?: any;
  onClick: (value: any) => void;
  icon?: any;
};

const createBorderCSSProp = (orientation: string) => {
  let borderSide;
  if(orientation === ORIENTATION.HORIZONTAL) {
    borderSide = 'bottom';
  } else {
    borderSide= 'right';
  }
  return borderSide;
};
 
export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  cursor: pointer;
  color: ${({ fontColor, theme, color, activeColor, isSelected }) => (fontColor
    || (activeColor && activeColor)
    || ((color && isSelected ) ? theme.colors[color].base : theme.colors.disabled.dark))};
  background-color: ${({ backgroundColor, theme, color, activeBackgroundColor }) => (backgroundColor 
    || ( activeBackgroundColor &&  activeBackgroundColor) 
    || ( color && theme.colors[color].base))};
  padding: ${({ padding }) => (padding && `${padding}px`)};
  font-weight: 700;
  transition: ${({ theme }) => (theme.transitions.all.fast)};

  ${({ orientation, color, isSelected, theme }) => 
    orientation && css `
      border-${createBorderCSSProp(orientation)}-style: solid;
      border-${createBorderCSSProp(orientation)}-width: ${() => (isSelected ? '2px'  : '1px')};
      border-${createBorderCSSProp(orientation)}-color: ${() => (color && (isSelected
      ? theme.colors[color].base : theme.colors.disabled.light))};
    `
  }

  ${({ disabled, disabledColor, disabledBackgroudColor }) =>
    disabled && 
      css`
        cursor: not-allowed;
        opacity: 0.4;
        color: ${() => (disabledColor && disabledColor)};
        background-color: ${() => (disabledBackgroudColor && disabledBackgroudColor)};
    `
  }
`;

export const IconWrapper = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  padding-right: 8px;
`;

const Tab: React.StatelessComponent<TabProps> = ({
  className,
  iconClassName,
  label,
  value,
  onClick,
  icon,
  isSelected,
  disabled,
  fontColor,
  color,
  backgroundColor,
  padding,
  activeColor,
  activeBackgroundColor,
  disabledColor,
  disabledBackgroudColor,
  orientation
}) => (
  <Wrapper
    className={className}
    onClick={() => onClick(value)}
    disabled={disabled}
    fontColor={fontColor}
    color={color}
    backgroundColor={backgroundColor}
    padding={padding}
    activeColor={activeColor}
    activeBackgroundColor={activeBackgroundColor}
    disabledColor={disabledColor}
    disabledBackgroudColor={disabledBackgroudColor}
    isSelected={isSelected}
    orientation={orientation}
  >
    <IconWrapper className={iconClassName}>{icon}</IconWrapper>
    <span>{label}</span>
  </Wrapper>
);

Tab.defaultProps = {
  color: "primary",
  orientation: 'horizontal',
  className: '',
  disabled: false,
  backgroundColor: '#fff',
  padding: 10,
};

export default Tab;
