import React from 'react';
import styled from 'styled-components';
import Text, {FontWeights, IText} from '../../atoms/Text/Text';
import Image from '../../atoms/Image/Image';
import './wishlist.scss';
import { FONT_WEIGHT_OPTIONS } from '../../../common/constants/consts';
import { DeleteForever } from '@styled-icons/material-sharp/DeleteForever';
import CartIcon, { ICartIconContainer } from '../../molecules/CartIcon/CartIcon';

export interface IWishlistProduct {
  name: string;
  price: string;
  image: string;
  inCartCount?: number;
}

export interface IWishlistCommon {
  itemClassName?: string;
  hideCartIcon?: boolean;
  color?: string;
  nameTextProps?: IText;
  priceTextProps?: IText;
  onDeleteIconClick?: (product: IWishlistProduct) => void;
  onItemClick?: (product: IWishlistProduct) => void;
  deleteIconColor?: string;
  hideDeleteIcon?: boolean;
  cartIconProps?: ICartIconContainer;
}

interface IWishlistItem extends IWishlistCommon {
  product: IWishlistProduct;
}

export const StyledWishlistDeleteIcon = styled(DeleteForever)<{ color?: string, deleteIconColor?: string }>`${({
  theme, color = defaultProps.color, deleteIconColor
}) => ({
  color: deleteIconColor || theme.colors[color].base,
  width: '30px',
  position: 'absolute',
  top: '0',
  right: '0',
  cursor: 'pointer',
})}`

const WishlistItem = ({
  product,
  color,
  nameTextProps,
  priceTextProps,
  itemClassName,
  onDeleteIconClick,
  onItemClick,
  deleteIconColor,
  hideDeleteIcon,
  cartIconProps,
  hideCartIcon,
}: IWishlistItem) => {
  const nameProps = {
    color,
    fontWeight: FONT_WEIGHT_OPTIONS['600'] as FontWeights,
    ...nameTextProps,
  };
  const priceProps = {
    color,
    ...priceTextProps,
  };

  const onAddToCart = () => {
    cartIconProps?.onCartIconClick && cartIconProps.onCartIconClick(product)
  }

  const cartProps = {
    className: `wishlistItem__cartIcon ${cartIconProps && cartIconProps.className}`,
    width: 32,
    hideCartNumberLabel: true,
    color,
    numberOfItemsInCart: product.inCartCount || 0,
    ...cartIconProps,
    onCartIconClick: onAddToCart,
  }

  return (
    <div className={`${itemClassName} wishlistItem`} onClick={() => {onItemClick && onItemClick(product)}}>
      <div className="wishlistItem__imageWrapper">
        <Image src={product.image} alt={product.name} />
      </div>
      <div className="wishlistItem__textWrapper">
        <Text {...nameProps}>{product.name}</Text>
        <Text {...priceProps}>{product.price}</Text>
        { !hideCartIcon && (
          <CartIcon {...cartProps} />
        )}
        { !hideDeleteIcon && (
          <StyledWishlistDeleteIcon color={color} deleteIconColor={deleteIconColor} onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            onDeleteIconClick && onDeleteIconClick(product);
          }} />
        )}
      </div>
    </div>
  );
};

const defaultProps = {
  color: 'primary',
  hideDeleteIcon: false,
}

WishlistItem.defaultProps = defaultProps;

export default WishlistItem;
