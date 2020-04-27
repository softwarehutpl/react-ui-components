import React from 'react';
import CardDetails from './CardDetails';

export interface IProductDetails {
  name: string;
  price: string;
  shortDescription?: string;
  imageUrl: string;
  hoverImage?: string;
}

interface ICard {
  className?: string;
  productDetails: IProductDetails;
}

const Card = ({ className, productDetails }: ICard) => (
  <div className={className}>
    <CardDetails productDetails={productDetails} />
  </div>
);

export default Card;
