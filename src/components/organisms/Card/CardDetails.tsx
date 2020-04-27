import React from 'react';
import { IProductDetails } from './Card';

interface ICardDetails {
  productDetails: IProductDetails;
  className?: string;
}

const CardDetails = ({ productDetails, className }: ICardDetails) => {
  // TODO: use Text component (merge Text and Image branches)
  return (
    <div className={className}>
      <div>{productDetails.name}</div>
      <div>{productDetails.shortDescription}</div>
      <div>{productDetails.price}</div>
    </div>
  )
}

export default CardDetails;
