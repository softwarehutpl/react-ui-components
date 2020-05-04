import React from 'react';
import WishlistItem, { IWishlistCommon, IWishlistProduct } from './WishlistItem';

interface IWishlist extends IWishlistCommon {
  className?: string;
  products: IWishlistProduct[];
}

const Wishlist = ({ className, products, color, nameTextProps, priceTextProps, itemClassName, onDeleteIconClick, onItemClick, deleteIconColor, hideDeleteIcon }: IWishlist) => (
  <div className={className}>
    {products.map((product, index) => (
      <WishlistItem
        key={product.name + index}
        itemClassName={itemClassName}
        product={product}
        color={color}
        nameTextProps={nameTextProps}
        priceTextProps={priceTextProps}
        onDeleteIconClick={onDeleteIconClick}
        onItemClick={onItemClick}
        deleteIconColor={deleteIconColor}
        hideDeleteIcon={hideDeleteIcon}
      />
    ))}
  </div>
);

export default Wishlist;
