import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import CardDetails from './CardDetails';
import CartIconContainer from './CartIconContainer';
import Image from '../../atoms/Image/Image';
import { ORIENTATION } from '../../../common/constants/consts';
import { Heart as FullHeart } from '@styled-icons/boxicons-solid/Heart';
import { Heart } from '@styled-icons/boxicons-regular/Heart';

export interface IProductDetails {
  name: string;
  price: string;
  shortDescription?: string;
  imageUrl: string;
  hoverImageUrl?: string;
}

export type directionType = 'vertical' | 'horizontal'

interface ICard {
  className?: string;
  productDetails: IProductDetails;
  color?: string;
  direction?: directionType;
  hideDescription?: boolean;
  hidePrice?: boolean;
  onCartIconClick?: () => void;
  onClick?: () => void;
  hideCartIcon?: boolean;
  hideWishlistIcon?: boolean;
  onWishlistIconClick?: () => void;
  isOnWishlist?: boolean;
  imageWidth?: number;
  imageHeight?: number;
  imageObjectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  hideCartNumberLabel?: boolean;
  numberOfItemsInCart?: number;
}

const CardImageContainer = styled.div<{ direction?: directionType }>`
  ${({ direction }) => ({
    height: direction === ORIENTATION.HORIZONTAL ? '60%' : '100%',
    width: direction === ORIENTATION.HORIZONTAL ? '100%' : '55%',
    position: 'relative',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
  })}
`;

const styleWishlistIcon = (Icon: any) => {
  return (
    styled(Icon)<{ color?: string }>`${({ theme, color = defaultProps.color }) => ({
      color: theme.colors[color].base,
      width: '30px',
      position: 'absolute',
      top: '15px',
      right: '15px',
      cursor: 'pointer',
    })}`
  )
}

export const HeartIcon = styleWishlistIcon(Heart);
export const FullHeartIcon = styleWishlistIcon(FullHeart);

const Card = ({
  className,
  productDetails,
  color,
  direction,
  hideDescription,
  hidePrice,
  onCartIconClick,
  onClick,
  hideCartIcon,
  hideWishlistIcon,
  isOnWishlist,
  onWishlistIconClick,
  imageHeight,
  imageWidth,
  imageObjectFit,
  hideCartNumberLabel,
  numberOfItemsInCart
}: ICard) => {
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.addEventListener('mouseenter', () => {setIsActive(true)});
      cardRef.current.addEventListener('mouseleave', () => {setIsActive(false)});
    }
  }, [])

  const selectImageUrl = () => {
    if (productDetails.hoverImageUrl && isActive) {
      return productDetails.hoverImageUrl
    }
    return productDetails.imageUrl;
  }

  const handleOnWishlistIconClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onWishlistIconClick && onWishlistIconClick();
  }

  return (
    <div className={className} ref={cardRef} onClick={onClick}>
      <CardImageContainer direction={direction}>
        <Image
          width={imageWidth}
          height={imageHeight}
          objectFit={imageObjectFit}
          src={selectImageUrl()}
          alt={productDetails.name}
        />
        {
          !hideCartIcon && (
            <CartIconContainer
              color={color}
              isActive={isActive}
              onCartIconClick={onCartIconClick}
              hideCartNumberLabel={hideCartNumberLabel}
              numberOfItemsInCart={numberOfItemsInCart}
            />
          )
        }
      </CardImageContainer>
      <CardDetails
        productDetails={productDetails}
        color={color}
        direction={direction}
        hideDescription={hideDescription}
        hidePrice={hidePrice}
      >
        {
          !hideWishlistIcon && (
            isOnWishlist ? (
                <FullHeartIcon color={color} onClick={handleOnWishlistIconClick} />
              ) : (
                <HeartIcon color={color} onClick={handleOnWishlistIconClick} />
              )
          )
        }
      </CardDetails>
    </div>
  );
}

export const defaultProps = {
  color: 'primary',
  direction: 'horizontal',
  hideDescription: false,
  hidePrice: false,
  hideCartIcon: false,
  hideWishlistIcon: false,
  isOnWishlist: false,
  hideCartNumberLabel: false,
  numberOfItemsInCart: 0,
};

Card.defaultProps = defaultProps;

export default styled(Card)<ICard>`
  ${({ direction = defaultProps.direction }) => ({
    display: 'flex',
    'flex-direction': `${direction === ORIENTATION.HORIZONTAL ? 'column' : 'row'}`,
    'justify-content': 'space-between',
    '&:hover': {
      'box-shadow': '0px 4px 10px 4px rgba(217,217,217,0.6)',
    }
  })}
`;
