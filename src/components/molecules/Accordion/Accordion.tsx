import React from 'react';
import styled from 'styled-components';
import AccordionItem from './AccordionItem';

type Item = {
  title: string;
  description: string;
};

interface AccordionProps {
  items: any;
  noBorder: boolean;
  width?: number;
  titleBackgroundColor?: string;
  titleColor?: string;
  titleBorderColor?: string;
  boldTitle?: boolean;
  titleClassname?: string;
  descriptionClassname?: string;
};

interface AccordionContainerProps {
  width?: number;
};

export const AccordionContainer = styled.div<AccordionContainerProps>`
  width: ${({ width }) => width ? `${width}px` : 'auto'};
  display: flex;
  flex-direction: column;
`;

const Accordion = (props: AccordionProps) => {
  return (
    <AccordionContainer width={props.width}>
      {props.items && props.items.map((item: Item, index: string) => (<AccordionItem {...props} key={index} item={item} />))}
    </AccordionContainer>
  );
}

const defaultProps = {
  noBorder: true,
  boldTitle: false,
  itemBackgroundColor: 'transparent',
};

Accordion.defaultProps = defaultProps;

export default Accordion;
