import React from 'react';
import styled, { css } from 'styled-components';

export interface OptionItemProps {
  isActive?: boolean;
  isHover?: boolean;
  color?: string;
  hoverOption?: number;
};

export interface OptionWrapperProps {
  width?: number;
  height?: number;
  padding?: number;
  margin?: number;
}

export interface AutoCompleteOptionsProps extends OptionWrapperProps, OptionItemProps {
  options: string[];
  onClick?: (e: React.MouseEvent<HTMLLIElement>) => void;
  onMouseEnter?: any;
  onMouseLeave?:(e: React.MouseEvent<HTMLLIElement>) => void;
  activeOption?: number;
  hoverOption?: number;
};

export const OptionListWrapper = styled.ul<OptionWrapperProps>`
  width: ${({ width }) => (width ? `${width}px` : '100%' )};
  height: ${({ height }) => (height ? `${height}px` : 'auto' )};
  overflow: auto;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.12);
  border-radius: 15px;
  padding: ${({ padding }) => `${padding}px` };
  margin:${({ margin }) => `${margin}px` };
`;

export const OptionItem = styled.li<OptionItemProps>`
  list-style-type: none;
  padding: 15px;
  background-color: ${({ color, theme, isActive }) => ((isActive && color) && theme.colors[color].dark)};
  color: ${({ theme, color }) => (color && theme.colors[color].base)};
  cursor: pointer;

  ${({ isHover, color }) => css`
    background-color: ${({ theme }) => ((color && isHover ) && theme.colors[color].dark)};
  `}
`;

const AutocompleteOptions: React.FunctionComponent<AutoCompleteOptionsProps> = ({
  options,
  onClick,
  onMouseEnter,
  onMouseLeave,
  activeOption,
  color,
  width,
  height,
  padding,
  margin,
  hoverOption,
}) => (
  <OptionListWrapper
    height={height}
    width={width}
    padding={padding}
    margin={margin}
  >
    {options.map((option: string, index: number) => (
      <OptionItem
        key={option}
        onClick={onClick}
        onMouseEnter={(e) => onMouseEnter(e, index)}
        onMouseLeave={onMouseLeave}
        isActive={activeOption === index}
        color={color}
        isHover={hoverOption === index}
      >
        {option}
      </OptionItem>
    ))}
  </OptionListWrapper>
);

AutocompleteOptions.defaultProps = {
  padding: 0,
  margin: 0,
};

export default AutocompleteOptions;
