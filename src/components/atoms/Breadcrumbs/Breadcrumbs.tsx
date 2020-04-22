import React, { useState } from 'react';
import styled from 'styled-components';
import { isNotEmptyArray } from '../../../helpers/helpers';
import BreadcrumbsItem from './BreadcrumbsItem';

type Item = {
  name: string;
  link: string;
};

interface BreadcrumbsContainerProps {
  noBorder?: boolean;
  wrapperClassName?: string;
  color?: string;
  borderRadius?: number;
  showBoxShadow?: boolean;
  boxShadowEffect?: string;
  backgroundColor?: string;
  padding?: number;
  margin?: number;
  borderWidth?: number;
  theme: any;
};

interface BreadcrumbsProps {
  items: Item[];
  showOnlyBorderItems: boolean;
  separator?: string;
  activeBreadcrumbClassName?: string;
  firstBreadcrumbClassName?: string;
  wrapperClassName?: string;
  noBorder?: boolean;
  borderWidth?: number;
  itemClassName?: string;
  color?: string;
  borderRadius?: number;
  showBoxShadow?: boolean;
  boxShadowEffect?: string;
  backgroundColor?: string;
  padding?: number;
  margin?: number;
};

export const BreadcrumbsContainer = styled.div<BreadcrumbsContainerProps>`
  display: flex;
  flex: 0 0 50%;
  align-items: center;
  margin: auto;
  jusity-content: flex-start;
  border: ${({ noBorder }) => noBorder ? 'none' : 'solid'};
  border-width: ${({ borderWidth }) => `${borderWidth}px`};
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${({ padding }) => padding ? `0 ${padding}px` : '0 15px'};
  margin: ${({ margin }) => margin ? `${margin}px` : '0px'};
  border-color: ${({ color }) => color};
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  position: relative;
  ${({ boxShadowEffect, theme }) => boxShadowEffect && `
    ${theme.boxShadows[boxShadowEffect].medium}`}
`;

export const BreadcrumbsGap = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  padding: 15px 10px;
  cursor: pointer;
`;

const Breadcrumbs = (props: BreadcrumbsProps) => {
  const [showOnlyBorderItems, handleShowOnlyBorderItems] = useState(props.showOnlyBorderItems);
  return (
    <BreadcrumbsContainer {...props} className={props.wrapperClassName}>
      {isNotEmptyArray(props.items) && props.items.map((item: Item, index: number) => {
        if (!showOnlyBorderItems || (showOnlyBorderItems &&
          (index === 0 || index === props.items.length - 1))) {
          return (
            <BreadcrumbsItem
              key={item.link}
              isActive={index === props.items.length - 1}
              isFirst={index === 0}
              activeBreadcrumbClassName={props.activeBreadcrumbClassName}
              firstBreadcrumbClassName={props.firstBreadcrumbClassName}
              isLastBorder={showOnlyBorderItems && index === props.items.length - 1}
              name={item.name}
              separator={props.separator}
              link={item.link}
              itemClassName={props.itemClassName}
            />
          );
        } else if (showOnlyBorderItems && index === 1) {
          return (
          <BreadcrumbsGap
            key={item.link}
            onClick={() => handleShowOnlyBorderItems(false)}>
              ...
          </BreadcrumbsGap>
          );
        } return null;
      })}
    </BreadcrumbsContainer>
  )};

const defaultProps = {
  separator: '/',
  color: '#8e8e8e',
  fontColor: '#8e8e8e',
  showOnlyBorderItems: false,
  disabled: false,
  className: '',
  borderWidth: 1,
  margin: 0,
  padding: 15,
  borderRadius: 0,
  backgroundColor: '#fff',
};

Breadcrumbs.defaultProps = defaultProps;

export default styled(Breadcrumbs)`{
  display: flex;
  background-color: green;
  flex-direction: column;
  align-items: flex-start;
}`;
