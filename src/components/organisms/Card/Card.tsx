import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import CardDetails from './CardDetails';
import Image from '../../atoms/Image/Image';
import { ORIENTATION } from '../../../common/constants/consts';
import { CartPlus } from '@styled-icons/fa-solid/CartPlus';
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

// TODO: load hover image when lazy props is passed to image
interface ICard {
  className?: string;
  productDetails: IProductDetails;
  color?: string;
  direction?: directionType;
  imageProps?: object;
  hideDescription?: boolean;
  hidePrice?: boolean;
  onCartIconClick?: () => void;
  onClick?: () => void;
  hideCartIcon?: boolean;
  hideWishlistIcon?: boolean;
  onWishlistIconClick?: () => void;
  isOnWishlist?: boolean;
}

const CardImageContainer = styled.div<{ direction?: directionType }>`
  ${({ direction }) => ({
    height: direction === ORIENTATION.HORIZONTAL ? '60%' : '100%',
    width: direction === ORIENTATION.HORIZONTAL ? '100%' : '55%',
    position: 'relative',
  })}
`;

export const CartIcon = styled(CartPlus)<{ color?: string, isActive?: boolean }>`${({ theme, color = defaultProps.color, isActive }) => ({
  color: theme.colors[color].light,
  'background-color': theme.colors[color].base,
  width: '40px',
  padding: '7px',
  'border-radius': '5px',
  position: 'absolute',
  top: '15px',
  right: '15px',
  transition: 'transform .2s',
  transform: isActive ? 'scale(1.2)' : 'scale(1)',
  cursor: 'pointer',
})}`

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
  imageProps,
  hideDescription,
  hidePrice,
  onCartIconClick,
  onClick,
  hideCartIcon,
  hideWishlistIcon,
  isOnWishlist,
  onWishlistIconClick,
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
        <Image {...imageProps} src={selectImageUrl()} alt={productDetails.name} />
        {
          !hideCartIcon && (
            <CartIcon
              color={color}
              isActive={isActive}
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation()
                onCartIconClick && onCartIconClick()
              }}
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

const defaultProps = {
  color: 'primary',
  direction: 'horizontal',
  hideDescription: false,
  hidePrice: false,
  hideCartIcon: false,
  hideWishlistIcon: false,
  isOnWishlist: false,
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
