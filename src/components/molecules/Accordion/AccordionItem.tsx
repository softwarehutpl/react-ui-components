import React, { useState } from 'react';
import styled from 'styled-components';

interface AccordionItemProps {
  item: any;
  showIcon?: boolean;
  descriptionBackgroundColor?: string;
  borderWidth?: string;
  noBorder?: boolean;
  bottomBorder?: boolean;
  itemBackgroundColor?: string;
  titleBorderColor?: string;
  titleBackgroundColor?: string;
  titleColor?: string;
  boldTitle?: boolean;
};

interface AccordionItemContainerProps {
  itemBackgroundColor?: string;
  showDescription: boolean;
};

interface ChevronIconProps {
  showDescription: boolean;
};

interface AccordionItemDescriptionProps {
  showDescription: boolean;
  descriptionBackgroundColor?: string;
}

export const AccordionItemContainer = styled.button<AccordionItemContainerProps>`
  width: 100%;
  padding: 10px;
  border: none;
  background-color: ${({ itemBackgroundColor }) => itemBackgroundColor};
  &:focus {
    outline: none;
  };
`;

export const AccordionItemTitle = styled.div<AccordionItemProps>`
  width: 100%;
  padding: 5px;
  background-color: ${({ titleBackgroundColor }) => '#919191' && titleBackgroundColor};
  color: ${({ titleColor }) => titleColor};
  display: flex;
  font-weight: ${({ boldTitle }) => boldTitle ? '700' : '500'};
  justify-content: space-between;
  border: ${({ titleBorderColor, borderWidth, noBorder }) => !noBorder
    && `${borderWidth} solid ${titleBorderColor}`};
  border-bottom: ${({ titleBorderColor, borderWidth, bottomBorder }) => bottomBorder
    && `${borderWidth} solid ${titleBorderColor}`};
`;

export const AccordionItemDescription = styled.div<AccordionItemDescriptionProps>`
  max-height: ${({ showDescription }) => showDescription ? 'auto' : '0' };
  overflow: hidden;
  transition: all 0.2s ease-out;
  background-color: ${({ descriptionBackgroundColor }) => descriptionBackgroundColor};
  padding: ${({ showDescription }) => showDescription ? '10px 0' : '0'};
  display: flex;
  text-align: left;
`;

const ChevronIcon = styled.div<ChevronIconProps>`
  &::before {
    border-style: solid;
    border-width: 1px 1px 0 0;
    content: '';
    display: inline-block;
    height: 0.45em;
    left: 0;
    position: relative;
    top: 0.15em;
    transition: all 0.2s ease-out;
    transform: ${({ showDescription }) => showDescription ? 'rotate(-45deg)' : 'rotate(135deg)'};
    vertical-align: top;
    width: 0.45em;
  }
`;

const AccordionItem = (props: AccordionItemProps) => {
  const [showDesc, handleShowDesc] = useState(false);

  return (
    <AccordionItemContainer {...props} showDescription={showDesc} onClick={() => handleShowDesc(!showDesc)}>
      <AccordionItemTitle {...props} titleColor={props.titleColor}>
        {props.item.title}
        {props.showIcon && <ChevronIcon showDescription={showDesc} />}
      </AccordionItemTitle>
      <AccordionItemDescription showDescription={showDesc}>{props.item.description}</AccordionItemDescription>
    </AccordionItemContainer>
  );
};

const defaultProps = {
  descriptionBackgroundColor: '#fefefe',
  borderWidth: '1px',
  noBorder: true,
  bottomBorder: true,
  showIcon: true,
  itemBackgroundColor: 'transparent',
  titleBackgroundColor: 'transparent',
  titleColor: '#919191',
  titleBorderColor: '#919191',
  boldTitle: false,
};

AccordionItem.defaultProps = defaultProps;

export default AccordionItem;
