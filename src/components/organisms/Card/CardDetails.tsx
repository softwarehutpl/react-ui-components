import React from 'react';
import styled from 'styled-components';
import { directionType, IProductDetails } from './Card';
import Text from '../../atoms/Text/Text';
import { ORIENTATION } from '../../../common/constants/consts';

interface ICardDetails {
  productDetails: IProductDetails;
  className?: string;
  color?: string;
  direction?: directionType;
  hideDescription?: boolean;
  hidePrice?: boolean;
  children?: React.ReactNode;
}

const StyledCardDetails = styled.div<{ direction?: directionType }>`
  ${({ direction }) => ({
  height: direction === ORIENTATION.HORIZONTAL ? '40%' : '100%',
  width: direction === ORIENTATION.HORIZONTAL ? '100%' : '45%',
  padding: '10px',
  position: 'relative',
  display: 'flex',
  'flex-direction': 'column',
  'justify-content': direction === ORIENTATION.VERTICAL ? 'space-between' : 'normal',
})}
`;

const CardDetails = ({ productDetails, className, color, direction, hideDescription, hidePrice, children }: ICardDetails) => {
  const { name, shortDescription, price } = productDetails;
  return (
    <StyledCardDetails className={className} direction={direction}>
      <Text fontSize={20} fontWeight="600" lineHeight={2} color={color}>{name}</Text>
      {
        !hideDescription && (
          <Text fontSize={14} color={color}>{shortDescription}</Text>
        )
      }
      {
        !hidePrice && (
          <Text fontSize={20} color={color} lineHeight={2}>{price}</Text>
        )
      }
      { children }
    </StyledCardDetails>
  )
}

export default CardDetails;
