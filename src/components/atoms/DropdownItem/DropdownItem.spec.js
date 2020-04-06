import React from 'react';
import { create, act } from 'react-test-renderer';
import 'jest-styled-components';
import DropdownItem from './DropdownItem';
import theme from '../../../common/theme';

describe('DropdownItem component', () => {
  it('shoud render correctly', () => {
    const tree = create(<DropdownItem theme={theme}>item</DropdownItem>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render dropdown item with its child', () => {
    const component = create(<DropdownItem theme={theme}>item</DropdownItem>);
    const instance = component.root;
    const dropdownItem = instance.findByType('div');
    expect(dropdownItem.props.children).toBe('item');
  });

  it('should render dropdown item with given classes', () => {
    const component = create(
      <DropdownItem className="test-class" theme={theme}>
        item
      </DropdownItem>
    );
    const instance = component.root;
    const dropdownItem = instance.findByType('div');
    expect(dropdownItem.props.className).toEqual(expect.stringContaining('test-class'));
  });

  it('should render dropdown item with custom colors', () => {
    const component = create(<DropdownItem fontColor="blue" backgroundColor="gray" theme={theme}>item</DropdownItem>);
    const dropdownItem = component.toJSON();
    expect(dropdownItem).toHaveStyleRule('color', 'blue');
    expect(dropdownItem).toHaveStyleRule('background-color', 'gray');
  });

  it('should render dropdown item with custom height', () => {
    const component = create(<DropdownItem theme={theme} height={40}>item</DropdownItem>);
    const dropdownItem = component.toJSON();
    expect(dropdownItem).toHaveStyleRule('height', '40px');
  });

  it('should render dropdown item with custom padding', () => {
    const component = create(<DropdownItem theme={theme} padding={30}>item</DropdownItem>);
    const dropdownItem = component.toJSON();
    expect(dropdownItem).toHaveStyleRule('padding', '0 30px');
  });

  it('should render dropdown item with given text placement', () => {
    const component = create(<DropdownItem theme={theme} textAlignment="right">item</DropdownItem>);
    const dropdownItem = component.toJSON();
    expect(dropdownItem).toHaveStyleRule('justify-content', 'flex-end');
  });

  it('should render dropdown item with style proper for heading', () => {
    const component = create(<DropdownItem theme={theme} heading>item</DropdownItem>);
    const dropdownItem = component.toJSON();
    expect(dropdownItem).toHaveStyleRule('font-weight', 'bold');
    expect(dropdownItem).toHaveStyleRule('text-transform', 'uppercase');
  });

  it('should render dropdown item with style proper for divider', () => {
    const component = create(<DropdownItem theme={theme} divider />);
    const dropdownItem = component.toJSON();
    expect(dropdownItem).toHaveStyleRule('height', '1px');
    expect(dropdownItem).toHaveStyleRule('background-color', '#a6a6a6');
  });

  it('should call dropdown item onClick', () => {
    const mockOnClick = jest.fn();
    const component = create(<DropdownItem theme={theme} onClick={mockOnClick} />);
    const instance = component.root;
    const dropdownItem = instance.findByType(DropdownItem);
    act(() => {
      dropdownItem.props.onClick();
    });
    expect(mockOnClick.mock.calls.length).toEqual(1);
  });

  it('if disabled should be not clickable', () => {
    const component = create(<DropdownItem theme={theme} disabled />);
    const dropdownItem = component.toJSON();
    expect(dropdownItem).toHaveStyleRule('pointer-events', 'none');
  });
});
