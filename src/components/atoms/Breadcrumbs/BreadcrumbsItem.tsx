import React from 'react';
import styled from 'styled-components';

interface BreadcrumbsItemContainerProps {
  // onClick: (e: any) => void;
  link: string;
  name: string;
  items: any;
  isActive: boolean;
};

interface BreadcrumbsItemButtonProps {
  link: string;
  name: string;
  items: any;
};

interface BreadcrumbsProps extends BreadcrumbsItemContainerProps {
  items: any;
  link: string;
  name: string;
};

export const BreadcrumbsItemContainer = styled.div<BreadcrumbsItemContainerProps>`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px;
`;

export const BreadcrumbsItemButton = styled.button<BreadcrumbsItemButtonProps>`
  margin-bottom: 10px;
  font-weight: bold;
  outline: none;
  border: none;
  background-color: transparent;
`;

const BreadcrumbsItem = (props: BreadcrumbsProps) => {
  const goToLink = (e: any) => {
    console.log(e);
    window.history.pushState(null, 'link', props.link);
  }
  return (
    <BreadcrumbsItemContainer {...props}>
      <BreadcrumbsItemButton {...props} onClick={goToLink}>
        {props.name}
      </BreadcrumbsItemButton>
    </BreadcrumbsItemContainer>
  )};

const defaultProps = {
  items: null,
};

BreadcrumbsItem.defaultProps = defaultProps;

export default BreadcrumbsItem;
