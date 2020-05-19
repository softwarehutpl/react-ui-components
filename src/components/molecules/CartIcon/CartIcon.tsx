import React from 'react';
import styled from 'styled-components';
import { CartPlus } from '@styled-icons/fa-solid/CartPlus';
import Badge from '../../atoms/Badge/Badge';
import { COLOR_OPTIONS } from '../../../common/constants/consts';
import './cartIcon.scss';

interface ICartIconContainerStyle {
  width?: number;
  hideCartNumberLabel?: boolean;
}

interface ICartIcon extends ICartIconContainerStyle {
  color?: string;
  isActive?: boolean;
  backgroundColor?: string;
  fontColor?: string;
  scaleOnHover?: boolean;
}

export interface ICartIconContainer extends ICartIcon {
  className?: string;
  onCartIconClick?: (product?: any) => void;
  numberOfItemsInCart?: number;
}

const defaultProps = {
  color: COLOR_OPTIONS.primary,
  width: 40,
  hideCartNumberLabel: false,
  numberOfItemsInCart: 0,
  isActive: false,
  scaleOnHover: false,
};

export const StyledCartIcon = styled(CartPlus)<ICartIcon>`
  ${({
    theme,
    color = defaultProps.color,
    isActive,
    fontColor,
    backgroundColor,
    width = defaultProps.width,
    scaleOnHover = defaultProps.scaleOnHover,
  }) => ({
    color: fontColor || theme.colors[color].light,
    'background-color': backgroundColor || theme.colors[color].base,
    width: `${width}px`,
    padding: '7px',
    'border-radius': '5px',
    transition: 'transform .2s',
    transform: isActive && !scaleOnHover ? 'scale(1.2)' : 'scale(1)',
    cursor: 'pointer',
    '&:hover': {
      transform: scaleOnHover ? 'scale(1.2)' : 'scale(1)',
    },
  })}
`;

const CartIconWrapper = styled.div<ICartIconContainerStyle>`
  ${({ width = defaultProps.width, hideCartNumberLabel = defaultProps.hideCartNumberLabel }) => ({
    height: hideCartNumberLabel ? `${width}px` : `${width + 25}px`,
    width: hideCartNumberLabel ? `${width}px` : `${width + 25}px`,
  })}
`;

const CartIcon = ({
  color,
  isActive,
  onCartIconClick,
  hideCartNumberLabel,
  numberOfItemsInCart,
  className,
  fontColor,
  backgroundColor,
  width,
  scaleOnHover,
}: ICartIconContainer) => {
  const handleOnCartIconClick = (e: React.MouseEvent, product: any) => {
    e.stopPropagation();
    onCartIconClick && onCartIconClick(product);
  };

  if (hideCartNumberLabel || numberOfItemsInCart === 0) {
    return (
      <CartIconWrapper
        className={className}
        width={width}
        hideCartNumberLabel={hideCartNumberLabel}
      >
        <StyledCartIcon
          color={color}
          isActive={isActive}
          onClick={(e: React.MouseEvent, product?: any) => {
            handleOnCartIconClick(e, product);
          }}
          className="cartIconContainer--nolabel"
          fontColor={fontColor}
          backgroundColor={backgroundColor}
          width={width}
          scaleOnHover={scaleOnHover}
        />
      </CartIconWrapper>
    );
  }
  return (
    <CartIconWrapper className={className} width={width}>
      <div className="cartIconContainer--label">
        <Badge badgeContent={numberOfItemsInCart} color={color}>
          <StyledCartIcon
            color={color}
            isActive={isActive}
            onClick={(e: React.MouseEvent, product?: any) => {
              handleOnCartIconClick(e, product);
            }}
            fontColor={fontColor}
            backgroundColor={backgroundColor}
            width={width}
            scaleOnHover={scaleOnHover}
          />
        </Badge>
      </div>
    </CartIconWrapper>
  );
};

CartIcon.defaultProps = defaultProps;

export default CartIcon;
