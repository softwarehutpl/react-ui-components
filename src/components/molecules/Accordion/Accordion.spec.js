
import React from 'react';
import { create, act } from 'react-test-renderer';
import 'jest-styled-components';
import accordionItems from '../../../common/mocks/accordionItems';
import Accodrion, { AccordionContainer } from './Accordion';
import AccordionItem, { AccordionItemContainer, AccordionItemTitle, AccordionItemDescription } from './AccordionItem';

describe('Accodrion Component', () => {
  it('should render Accodrion correctly', () => {
    const tree = create(<Accodrion items={accordionItems} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render AccodrionContainer correctly', () => {
    const tree = create(<AccordionContainer items={accordionItems} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render AccordionItem correctly', () => {
    const tree = create(<AccordionItem item={accordionItems[0]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render AccordionItemContainer correctly', () => {
    const tree = create(<AccordionItemContainer item={accordionItems[0]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render AccordionItemDescription correctly', () => {
    const tree = create(<AccordionItemDescription item={accordionItems[0]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render AccordionItemTitle correctly', () => {
    const tree = create(<AccordionItemTitle item={accordionItems[0]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call button onClick method in AccordionContainer', () => {
    const mockOnChange = jest.fn();
    const component = create(<AccordionItemContainer onClick={mockOnChange} />);
    const instance = component.root;
    const button = instance.findByType('button');
    act(() => {
      button.props.onClick();
    });
    expect(mockOnChange.mock.calls.length).toEqual(1);
  });

  it('should render AccordionContainer with default width', () => {
    const component = create(<AccordionContainer />);
    const accordionContainer = component.toJSON();
    expect(accordionContainer).toHaveStyleRule('width', 'auto');
  });

  it('should render AccordionContainer with introduced width', () => {
    const component = create(<AccordionContainer width={200} />);
    const accordionContainer = component.toJSON();
    expect(accordionContainer).toHaveStyleRule('width', '200px');
  });
  
  it('should render AccordionItemContainer with introduced params', () => {
    const component = create(<AccordionItemContainer itemBackgroundColor='grey' />);
    const accordionItemContainer = component.toJSON();
    expect(accordionItemContainer).toHaveStyleRule('background-color', 'grey');
  });

  it('should render AccordionItemTitle with default params', () => {
    const component = create(<AccordionItemTitle item={accordionItems[0]} />);
    const accordionItemTitle = component.toJSON();
    expect(accordionItemTitle).toHaveStyleRule('padding', '5px');
    expect(accordionItemTitle).toHaveStyleRule('width', '100%');
    expect(accordionItemTitle).toHaveStyleRule('font-weight', '500');
  });
});
