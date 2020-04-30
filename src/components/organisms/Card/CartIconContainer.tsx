import React from 'react';
import styled from 'styled-components';
import { CartPlus } from '@styled-icons/fa-solid/CartPlus';
import Badge from '../../atoms/Badge/Badge';
import { defaultProps } from './Card';
import './card.scss';

interface ICartIconContainer {
  color?: string;
  isActive: boolean;
  onCartIconClick?: () => void;
  hideCartNumberLabel?: boolean;
  numberOfItemsInCart?: number;
}

export const CartIcon = styled(CartPlus)<{ color?: string, isActive?: boolean }>`${({ theme, color = defaultProps.color, isActive }) => ({
  color: theme.colors[color].light,
  'background-color': theme.colors[color].base,
  width: '40px',
  padding: '7px',
  'border-radius': '5px',
  transition: 'transform .2s',
  transform: isActive ? 'scale(1.2)' : 'scale(1)',
  cursor: 'pointer',
})}`

export default ({ color, isActive, onCartIconClick, hideCartNumberLabel, numberOfItemsInCart }: ICartIconContainer) => {
  const handleOnCartIconClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onCartIconClick && onCartIconClick()
  }

  if (hideCartNumberLabel || numberOfItemsInCart === 0) {
    return (
      <CartIcon
        color={color}
        isActive={isActive}
        onClick={handleOnCartIconClick}
        className="cartIconContainer--nolabel"
      />
    )
  }
  return (
    <div className="cartIconContainer--label">
      <Badge
        badgeContent={numberOfItemsInCart}
        color={color}
      >
        <CartIcon
          color={color}
          isActive={isActive}
          onClick={handleOnCartIconClick}
        />
      </Badge>
    </div>
  )
}


