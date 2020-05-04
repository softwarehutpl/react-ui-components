import React from 'react';
import styled from 'styled-components';
import Text, {FontWeights, IText} from '../../atoms/Text/Text';
import Image from '../../atoms/Image/Image';
import './wishlist.scss';
import { FONT_WEIGHT_OPTIONS } from '../../../common/constants/consts';
import { DeleteForever } from '@styled-icons/material-sharp/DeleteForever';

export interface IWishlistProduct {
  name: string;
  price: string;
  image: string;
}

export interface IWishlistCommon {
  itemClassName?: string;
  hideHeartDislike?: boolean;
  hideCartIcon?: boolean;
  color?: string;
  onClick?: () => void;
  nameTextProps?: IText;
  priceTextProps?: IText;
  onDeleteIconClick?: () => void;
  onItemClick?: () => void;
  deleteIconColor?: string;
  hideDeleteIcon?: boolean;
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
  bottom: '0',
  right: '0',
  cursor: 'pointer',
})}`

const WishlistItem = ({ product, color, nameTextProps, priceTextProps, itemClassName, onDeleteIconClick, onItemClick, deleteIconColor, hideDeleteIcon }: IWishlistItem) => {
  const nameProps = {
    color,
    fontWeight: FONT_WEIGHT_OPTIONS['600'] as FontWeights,
    ...nameTextProps,
  };
  const priceProps = {
    color,
    ...priceTextProps,
  };
  return (
    <div className={`${itemClassName} wishlistItem`} onClick={onItemClick}>
      <div className="wishlistItem__imageWrapper">
        <Image src={product.image} alt={product.name} />
      </div>
      <div className="wishlistItem__textWrapper">
        <Text {...nameProps}>{product.name}</Text>
        <Text {...priceProps}>{product.price}</Text>
        { !hideDeleteIcon && (
          <StyledWishlistDeleteIcon color={color} deleteIconColor={deleteIconColor} onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            onDeleteIconClick && onDeleteIconClick();
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
