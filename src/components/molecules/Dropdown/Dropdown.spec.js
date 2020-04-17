import React from 'react';
import { create, act } from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import Dropdown from './Dropdown';
import DropdownItem from '../../atoms/DropdownItem/DropdownItem';
import theme from '../../../common/theme';
import {DropdownToggle} from './DropdownToggle';

describe('Dropdown component', () => {
  it('should render correctly', () => {
    const tree = create(
      <ThemeProvider theme={theme}>
        <Dropdown title="title">
          <DropdownItem>item</DropdownItem>
        </Dropdown>
      </ThemeProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('should render dropdown with passed title', () => {
    const tree = create(
      <ThemeProvider theme={theme}>
        <Dropdown color="secondary" title="title">
          <DropdownItem>item</DropdownItem>
        </Dropdown>
      </ThemeProvider>
    );
    const instance = tree.root;
    const dropdownToggle = instance.findByType(DropdownToggle)
    expect(dropdownToggle.props.children[0]).toBe('title')
  });

  it('should open dropdown after toggle click', () => {
    const tree = create(
      <ThemeProvider theme={theme}>
        <Dropdown title="title">
          <DropdownItem>item</DropdownItem>
        </Dropdown>
      </ThemeProvider>
    );
    expect(tree.toJSON().children.length).toEqual(1);
    const instance = tree.root;
    const toggle = instance.findByType(DropdownToggle);
    act(() => {
      toggle.props.onClick();
    })
    expect(tree.toJSON().children.length).toEqual(2);
  })

  it('should not open disabled dropdown after toggle click', () => {
    const tree = create(
      <ThemeProvider theme={theme}>
        <Dropdown title="title" disabled>
          <DropdownItem>item</DropdownItem>
        </Dropdown>
      </ThemeProvider>
    );
    expect(tree.toJSON().children.length).toEqual(1);
    const instance = tree.root;
    const toggle = instance.findByType(DropdownToggle);
    act(() => {
      toggle.props.onClick();
    })
    expect(tree.toJSON().children.length).toEqual(1);
  })

  it('should render dropdown with default style', () => {
    const tree = create(
      <ThemeProvider theme={theme}>
        <Dropdown title="title">
          <DropdownItem>item</DropdownItem>
        </Dropdown>
      </ThemeProvider>
    );
    const dropdown = tree.toJSON().children[0];
    expect(dropdown).toHaveStyleRule('width', '200px');
    expect(dropdown).toHaveStyleRule('background-color', '#000000');
    expect(dropdown).toHaveStyleRule('padding', '15px');
    expect(dropdown).toHaveStyleRule('color', '#ffffff');
  });

  it('should render dropdown with custom style', () => {
    const tree = create(
      <ThemeProvider theme={theme}>
        <Dropdown title="title" width={300} backgroundColor="red" padding={10} fontColor="red" margin={10}>
          <DropdownItem>item</DropdownItem>
        </Dropdown>
      </ThemeProvider>
    );
    const dropdown = tree.toJSON().children[0];
    expect(dropdown).toHaveStyleRule('width', '300px');
    expect(dropdown).toHaveStyleRule('background-color', 'red');
    expect(dropdown).toHaveStyleRule('padding', '10px');
    expect(dropdown).toHaveStyleRule('color', 'red');
  });
});
