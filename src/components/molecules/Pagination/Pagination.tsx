import React from 'react';
import { Cart } from '@styled-icons/boxicons-solid/Cart';
import styled from 'styled-components';
import { isNotEmptyArray } from '../../../helpers/helpers';

interface PaginationProps {
  width?: number;
  height?: number;
  wrapperBackgroundColor?: string;
  activePage: number;
  changePage: any;
  pagesNumber: number;
  buttonPageNumberBackground?: string;
  buttonPageNumberColor?: string;
  buttonPageNumberHoverColor?: string;
  buttonPageNumberHoverBackground?: string;
  transitionEffect?: string;
  showAllPageButtons?: boolean;
  children?: any;
  items?: any;
  showAddToCartIcon?: boolean;
  onAddToCart?: any;
  itemsInCart: any[];
  descriptionAlignment?: string;
  itemInCartIconColor?: string;
  itemNotInCartIconColor?: string;
  buttonBorderColor?: string;
  cardBorderRadius?: number;
  itemBorder?: string;
  noCardItemShadow?: boolean;
  itemWidth?: number;
}

interface PaginationWrapperProps {
  width?: number;
  height?: number;
  wrapperBackgroundColor?: string;
}

interface PaginationItemProps {
  noShadow?: boolean;
  itemWidth?: number;
  borderRadius?: number;
  borderColor?: string;
}

interface PageButtonProps {
  buttonPageColor?: string;
  buttonBorderColor?: string;
  transitionEffect?: string;
  buttonPageNumberBackground?: string;
  buttonPageNumberColor?: string;
  buttonPageNumberHoverColor?: string;
  buttonPageNumberHoverBackground?: string;
  isActive?: boolean;
}

export const PaginationItem = styled.div<PaginationItemProps>`
  width: ${({ itemWidth }) => itemWidth ? `${itemWidth}px` : '300px'};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${({ noShadow }) => noShadow ? 'none' : '0px 3px 9px rgba(100, 100, 100, 0.3)'};
  border-radius: ${({ borderRadius = 0 }) => `${borderRadius}px`};
  border: ${({ borderColor }) => borderColor ? `1px solid ${borderColor}`: 'none'};
  margin-bottom: 50px;
  position: relative;
  `;

export const PaginationWrapper = styled.div<PaginationWrapperProps>`
  width: ${({ width }) => width ? `${width}px` : '100%'};
  height: ${({ height }) => height ? `${height}px` : 'auto'};
  background-color: ${({ wrapperBackgroundColor }) => wrapperBackgroundColor ? wrapperBackgroundColor : 'transparent'};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PaginationButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Button = styled.button<PageButtonProps>`
  cursor: pointer;
  background-color: transparent;
  padding: 5px;
  &:focus {
    outline: none;
  };
  transition: ${({ transitionEffect, theme }) => transitionEffect ? theme.transitions.all[transitionEffect] : '0.2s ease-out'}; 
`;

export const PageNumber = styled.button<PageButtonProps>`
  margin: 5px;
  padding: 10px;
  cursor: pointer;
  font-weight: ${({ isActive }) => isActive ? '700' : '400'};
  border: ${({ buttonBorderColor }) => buttonBorderColor ? `1px solid ${buttonBorderColor}` : 'none'};
  background-color: ${({ buttonPageNumberBackground }) => buttonPageNumberBackground ? buttonPageNumberBackground : 'transparent'};
  color: ${({ buttonPageNumberColor }) => buttonPageNumberColor ? buttonPageNumberColor : '#000'};
  transition: ${({ transitionEffect, theme }) => transitionEffect ? theme.transitions.all[transitionEffect] : '0.2s ease-out'};  
  &:focus {
    outline: none;
  };
  &:hover {
    background-color: ${({ buttonPageNumberHoverBackground }) => buttonPageNumberHoverBackground ? buttonPageNumberHoverBackground : 'transparent'};
    color: ${({ buttonPageNumberHoverColor }) => buttonPageNumberHoverColor ? buttonPageNumberHoverColor : '#000'};
  };
`;

const PaginationItemsContent = styled.div`
  display: flex;
  width: 1100px;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 50px;
`;

const PaginationImage = styled.img<any>`
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: ${({ borderRadius }) => `${borderRadius}px ${borderRadius}px 0 0`}
`;

const DescriptionWrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

const PaginationItemName = styled.h2<any>`
  padding: 0 0 5px;
  width: 100%;
  text-align: ${({ descriptionAlignment }) => descriptionAlignment};
`;

const PaginationItemDescription = styled.h5<any>`
  padding: 5px 0 0;
  width: 100%;
  font-weight: 400;
  text-align: ${({ descriptionAlignment }) => descriptionAlignment};
`;

export const IconComponent = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  width: 30px;
  height: 30px;
  background-color: transparent;
  cursor: pointer;
  border: none;
  &:focus {
    outline: none;
  }
`;

const Pagination = (props: PaginationProps) => {

  return (
    <PaginationWrapper
      width={props.width}
      height={props.height}
      wrapperBackgroundColor={props.wrapperBackgroundColor}>
        <PaginationItemsContent>{props.items ? props.items.map((item: any) =>(<PaginationItem
          borderColor={props.itemBorder}
          noShadow={props.noCardItemShadow}
          itemWidth={props.itemWidth}
          key={item.id}
          borderRadius={props.cardBorderRadius}>
          <PaginationImage src={item.avatar} borderRadius={props.cardBorderRadius} />
          <DescriptionWrapper>
            <PaginationItemName
              descriptionAlignment={props.descriptionAlignment}>
                {item.name}
            </PaginationItemName>
            <PaginationItemDescription
              descriptionAlignment={props.descriptionAlignment}>
                {item.description}
            </PaginationItemDescription>
            {props.showAddToCartIcon && <IconComponent onClick={() => props.onAddToCart(item.id)}>
              <Cart style={{ color: (isNotEmptyArray(props.itemsInCart) &&
                props.itemsInCart.includes(item.id)) ?
                props.itemInCartIconColor : props.itemNotInCartIconColor }} />
            </IconComponent>}
          </DescriptionWrapper>
        </PaginationItem>)): props.children}
        </PaginationItemsContent>
        <PaginationButtons>
          {props.activePage > 2 && <Button
            onClick={() => props.changePage(1)}>First</Button>}
            {Array.from({ length: props.pagesNumber }).map((number, index) => {
             if (props.showAllPageButtons || (index + 1 === props.activePage) ||
                (index === props.activePage) || ((index + 2) === props.activePage)) {
             return <PageNumber
               isActive={(index + 1 === props.activePage)}
               buttonBorderColor={props.buttonBorderColor}
               buttonPageNumberBackground={props.buttonPageNumberBackground}
               buttonPageNumberColor={props.buttonPageNumberColor}
               buttonPageNumberHoverColor={props.buttonPageNumberHoverColor}
               buttonPageNumberHoverBackground={props.buttonPageNumberHoverBackground}
               onClick={() => props.changePage(index + 1)}>{index+1}</PageNumber>
             } else return null;
             })}
          {(props.activePage < props.pagesNumber - 1) && <Button
            onClick={() => props.changePage(props.pagesNumber)}>Last</Button>}
        </PaginationButtons>
    </PaginationWrapper>
  );
}

const defaultProps = {
  showAllPageButtons: false,
  itemsInCart: [],
  descriptionAlignment: 'center',
  itemInCartIconColor: 'hotpink',
  itemNotInCartIconColor: 'white',
  cardBorderRadius: 0,
  itemWidth: 300,
  transitionEffect: 'fast',
};

Pagination.defaultProps = defaultProps;

export default Pagination;
