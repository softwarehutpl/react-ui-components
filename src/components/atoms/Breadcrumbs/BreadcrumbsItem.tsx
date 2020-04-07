import React from 'react';
import styled from 'styled-components';

interface BreadcrumbsItemContainerProps {
  link: string;
  name: string;
  isActive: boolean;
  isFirst: boolean;
  isLastBorder: boolean;
  activeBreadcrumbClassName?: string;
  firstBreadcrumbClassName?: string;
  itemClassName?: string;
  fontColor?: string;
  fontSize?: number;
};

interface BreadcrumbsItemButtonProps {
  link: string;
  name: string;
  isActive: boolean;
  isFirst: boolean;
  firstBreadcrumbClassName?: string;
  activeBreadcrumbClassName?: string;
  fontColor?: string;
  fontSize?: number;
};

interface BreadcrumbsProps extends BreadcrumbsItemContainerProps {
  link: string;
  name: string;
  separator?: string;
};

export const BreadcrumbsItemContainer = styled.div<BreadcrumbsItemContainerProps>`
  display: flex;
  align-items: center;
`;

export const BreadcrumbsItemButton = styled.button<BreadcrumbsItemButtonProps>`
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  background-color: transparent;
  padding: 15px 10px;
  cursor: pointer;
  margin: 0;
  color: ${({ fontColor }) => fontColor};
  font-size: ${({ fontSize }) => `${fontSize}px`};
`;

const BreadcrumbsItemSeparator = styled.span`
  display: flex;
  align-items: center;
  color: ${({ color }) => color};
`;

const BreadcrumbsItem = (props: BreadcrumbsProps) => {
  const goToLink = (e: React.MouseEvent) => {
    window.history.pushState(null, 'link', props.link);
  }
  return (
    <BreadcrumbsItemContainer {...props}>
      {props.isLastBorder &&
        <BreadcrumbsItemSeparator>{props.separator}</BreadcrumbsItemSeparator>}
      <BreadcrumbsItemButton {...props}
        onClick={goToLink}
        className={`${props.isActive ? props.activeBreadcrumbClassName :
          props.itemClassName} ${props.isFirst ? props.firstBreadcrumbClassName : props.itemClassName}`}>
        {props.name}
      </BreadcrumbsItemButton>
      {!props.isActive && <BreadcrumbsItemSeparator>{props.separator}</BreadcrumbsItemSeparator>}
    </BreadcrumbsItemContainer>
  )};

const defaultProps = {
  color: '#8a8a8a',
  fontSize: 16,
};

BreadcrumbsItem.defaultProps = defaultProps;

export default BreadcrumbsItem;
