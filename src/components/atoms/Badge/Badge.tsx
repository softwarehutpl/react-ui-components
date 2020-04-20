import React from 'react';
import styled, { css } from 'styled-components';

export type Position = {
  horizontal?: any;
  vertical?: any;
};

export interface BadgeWrapperProps {
  margin?: number;
  padding?: number
};

export interface BadgeCircleProps {
  color?: string;
  backgroundColor?: string;
  fontColor?: string;
  width?: number;
  height?: number;
  position?: Position;
};

export interface BadgeContentProps {
  max?: number;
};

export interface BadgeProps extends BadgeWrapperProps, BadgeCircleProps, BadgeContentProps {
  className?: string;
  badgeContent?: any;
  children?: any;
};

export const BadgeWrapper = styled.div<BadgeWrapperProps>`
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
  vertical-align: middle;
  margin: ${({ margin }) => margin + 'px'};
  padding: ${({ padding }) => padding + 'px'};
`;

export const BadgeCircle = styled.span<BadgeCircleProps>`
  background-color: ${({ backgroundColor, color, theme}) => (backgroundColor || (color && theme.colors[color].base))};
  color: ${({ fontColor, color, theme }) =>(fontColor || (color && theme.colors[color].light))};
  width: ${({ width }) => (width  &&`${width}px`)};
  height: ${({ height }) => (height && `${height}px`)};
  border-radius: 10px;
  padding: 0 7px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  position: absolute;
  line-height: 1;
  transform: scale(1) translate(50%, -50%);
  transform-origin: 100% 0%;

  ${({ position }) => 
    position  && css`
     top: ${() => (position.vertical === 'top' && '0')};
     bottom: ${() => (position.vertical === 'bottom' && '-15px')};
     right: ${() => (position.horizontal === 'right' && '0')};
     left: ${() => (position.horizontal === 'left' && '-20px')};
    `
  }
`;

export const BadgeText = styled.div``
export const BadgeContent = styled.div`
  width: 100%;
  height: 100%;
`;

 const Badge: React.StatelessComponent<BadgeProps> = ({ 
   className, 
   margin,
   padding,
   badgeContent,
   children,
   color,
   backgroundColor,
   fontColor,
   width,
   height,
   position,
   max
  }) => (
    <BadgeWrapper
      className={className}
      margin={margin}
      padding={padding}
    >
      <BadgeCircle 
        color={color}
        backgroundColor={backgroundColor}
        fontColor={fontColor}
        width={width}
        height={height}
        position={position}
      >
        {typeof badgeContent === 'number' && max ? `${(badgeContent - 1).toString()} +` : badgeContent}
      </BadgeCircle>
      <BadgeContent>{children}</BadgeContent>
    </BadgeWrapper>
  );

const defaultProps = {
  className: '',
  color: 'primary',
  height: 20,
  position: {
    vertical: 'top',
    horizontal: 'right',
  },
  margin: 25,
  padding: 10,
  max: 0,
};

Badge.defaultProps = defaultProps;

export default Badge;
