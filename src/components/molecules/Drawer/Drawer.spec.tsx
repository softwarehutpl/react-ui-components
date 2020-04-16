import React from 'react';
import { create, act } from 'react-test-renderer';
import 'jest-styled-components';
import Drawer, { DrawerContent, DrawerOverlay } from './Drawer';
import { ThemeProvider } from 'styled-components';
import theme from '../../../common/theme';

describe('<Drawer />', () => {
  it('should render corectly', () => {
    const component = create(
      <ThemeProvider 
        theme={theme}
      >
        <Drawer />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render with className if provied', () => {
    const component = create(<DrawerContent className="test-class" />);
    const instance = component.root;
    instance.findByType('div');
    expect(instance.props.className).toEqual(expect.stringContaining('test-class'));
  });

  it('should render with children', () => {
    const component = create(<DrawerContent>child</DrawerContent>);
    const instance = component.root;
    instance.findByType('div');
    expect(instance.props.children).toBe('child');
  });

  it('should call button onClick method', () => {
    const mockOnClick = jest.fn();
    const component = create(<DrawerOverlay onClick={mockOnClick} theme={theme} />);
    const instance = component.root;
    const overlay = instance.findByType('div');
    act(() => {
      overlay.props.onClick();
    });
    expect(mockOnClick.mock.calls.length).toEqual(1);
  });

  it('should render with propery color', () => {
    const component = create(<DrawerContent color="primary" theme={theme} />).toJSON();
    expect(component).toHaveStyleRule('background-color', '#ffffff');
    expect(component).toHaveStyleRule('color', '#000000');
  });

  it('should have proper style with right placement prop', () => {
    const root  = create(
      <DrawerContent
        color="primary" 
        theme={theme} 
        size="large"
        placement="right"
        isOpen={false}
      />
    );

    const component = root.toJSON();
    expect(component).toHaveStyleRule('right', '0');
    expect(component).toHaveStyleRule('transform', 'translateX(100%)');   
    
  });

  it('should have proper style with left placement prop', () => {
    const root  = create(
      <DrawerContent
        color="primary" 
        theme={theme} 
        size="large"
        placement="left"
        isOpen={false}
      />
    );

    const component = root.toJSON();
    expect(component).toHaveStyleRule('left', '0');
    expect(component).toHaveStyleRule('transform', 'translateX(-100%)'); 
    
  });

  it('should have proper style with top placement prop', () => {
    const root  = create(
      <DrawerContent
        color="primary" 
        theme={theme} 
        size="large"
        placement="top"
        isOpen={false}
      />
    );

    const component = root.toJSON();
    expect(component).toHaveStyleRule('top', '0');
    expect(component).toHaveStyleRule('transform', 'translateY(-100%)')
    
  });

  it('should have proper style with bottom placement prop', () => {
    const root  = create(
      <DrawerContent
        color="primary" 
        theme={theme} 
        size="large"
        placement="bottom"
        isOpen={false}
      />
    );

    const component = root.toJSON();
    expect(component).toHaveStyleRule('bottom', '0');
    expect(component).toHaveStyleRule('transform', 'translateY(100%)');   
  });

  it('should have proper style when isOpen prop is provided', () => {
    const component  = create(
      <DrawerOverlay
        theme={theme}
        color="primary" 
        isOpen
      />
    ).toJSON();

    expect(component).toHaveStyleRule('display', 'block');
  });
});
