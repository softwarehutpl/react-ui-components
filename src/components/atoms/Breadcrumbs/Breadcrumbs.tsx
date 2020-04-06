import React from 'react';
import styled from 'styled-components';
import BreadcrumbsItem from './BreadcrumbsItem';

interface BreadcrumbsContainerProps {
};

interface BreadcrumbsProps extends BreadcrumbsContainerProps {
  items: any;
  showOnlyBorderItems: boolean;
};

export const BreadcrumbsContainer = styled.div<BreadcrumbsContainerProps>`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Breadcrumbs = (props: BreadcrumbsProps) => {
  return (
    <BreadcrumbsContainer>
      {props.items && props.items.length > 0 && props.items.map((item: any, index: number) => {
        if (!props.showOnlyBorderItems || (props.showOnlyBorderItems &&
          (index === 0 || index === props.items.length - 1))) {
          return (<BreadcrumbsItem
            key={item.link}
            isActive={index === props.items.length - 1}
            name={item.name}
            link={item.link}
            items={item.items} />)
        }
})}
    </BreadcrumbsContainer>
  )};

const defaultProps = {
  color: 'primary',
  fontColor: '#000',
  showOnlyBorderItems: false,
  disabled: false,
  className: '',
  borderWidth: 1,
  margin: 0,
  padding: 15,
  borderRadius: 5,
  showPlaceholderOnFocus: false,
  width: 200,
  direction: 'column',
  labelPosition: 'left',
  backgroundColor: '#FFF',
};

Breadcrumbs.defaultProps = defaultProps;

export default Breadcrumbs;
