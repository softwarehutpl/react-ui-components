import React from 'react';
import styled from 'styled-components';
import { CartPlus } from '@styled-icons/fa-solid/CartPlus';
import Badge from '../../atoms/Badge/Badge';
import { COLOR_OPTIONS } from '../../../common/constants/consts';

interface ICartIcon {
  color?: string;
  isActive?: boolean;
  backgroundColor?: string;
  fontColor?: string;
  width?: number;
}

interface ICartIconContainer extends ICartIcon {
  className?: string;
  onCartIconClick?: () => void;
  hideCartNumberLabel?: boolean;
  numberOfItemsInCart?: number;
}

export const CartIcon = styled(CartPlus)<ICartIcon>`
  ${({ theme, color = COLOR_OPTIONS.primary, isActive, fontColor, backgroundColor, width = 40 }) => ({
    color: fontColor || theme.colors[color].light,
    'background-color': backgroundColor || theme.colors[color].base,
    width: `${width}px`,
    padding: '7px',
    'border-radius': '5px',
    transition: 'transform .2s',
    transform: isActive ? 'scale(1.2)' : 'scale(1)',
    cursor: 'pointer',
  })}
`;

export default ({
  color,
  isActive = false,
  onCartIconClick,
  hideCartNumberLabel,
  numberOfItemsInCart = 0,
  className,
  fontColor,
  backgroundColor,
  width
}: ICartIconContainer) => {
  const handleOnCartIconClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onCartIconClick && onCartIconClick();
  };

  if (hideCartNumberLabel || numberOfItemsInCart === 0) {
    return (
      <div className={className}>
        <CartIcon
          color={color}
          isActive={isActive}
          onClick={handleOnCartIconClick}
          className={className}
          fontColor={fontColor}
          backgroundColor={backgroundColor}
          width={width}
        />
      </div>
    );
  }
  return (
    <div className={className}>
      <Badge badgeContent={numberOfItemsInCart} color={color}>
        <CartIcon color={color} isActive={isActive} onClick={handleOnCartIconClick} fontColor={fontColor} backgroundColor={backgroundColor} width={width} />
      </Badge>
    </div>
  );
};
