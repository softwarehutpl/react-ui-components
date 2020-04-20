import React from 'react';
import { create, act } from 'react-test-renderer';
import 'jest-styled-components';
import Drawer, { DrawerContent, DrawerOverlay, ButtonsWrapper } from './Drawer';
import CloseIcon from '../../../common/icons/CloseIcon/CloseIcon';
import Button from '../../../components/atoms/Button/Button';
import { ThemeProvider } from 'styled-components';
import theme from '../../../common/theme';

describe('<Drawer />', () => {
  it('should render corectly', () => {
    const component = create(
      <ThemeProvider 
        theme={theme}
      >
        <Drawer isOpen />
      </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
  });

  it('should render with className if provied', () => {
    const component = create(<DrawerContent className="test-class" theme={theme} isOpen />);
    const instance = component.root;
    instance.findByType('div');
    expect(instance.props.className).toEqual(expect.stringContaining('test-class'));
  });

  it('should render with children', () => {
    const component = create(<DrawerContent theme={theme} isOpen >child</DrawerContent>);
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

  it('should call onClick on confirm button', () => {
    const mockOnClick = jest.fn();
    const component = create(
      <ThemeProvider 
        theme={theme}
      >
        <Drawer isOpen withButtons onClose={mockOnClick} confirmCallback={mockOnClick} />
      </ThemeProvider>
    );
    const instance = component.root;
    const button = instance.findAllByType(Button)[0];

    act(() => {
      button.props.onClick();
    });
    expect(mockOnClick.mock.calls.length).toEqual(2);
  });

  it('should render with propery color', () => {
    const component = create(<DrawerContent color="primary" theme={theme} isOpen />).toJSON();
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

  it('should render close icon with primary color', () => {
    const component = create(
      <ThemeProvider 
        theme={theme}
      >
        <Drawer 
          withIcon 
          isOpen 
        />
      </ThemeProvider>
    );
    const instance = component.root;
    expect(instance.findByType(CloseIcon).props.color).toBe('primary');
  });

  it('should render buttons if withButtons prop is true', () => {
    const component = create(
      <ThemeProvider 
        theme={theme}
      >
        <Drawer 
          withButtons
          isOpen 
        />
      </ThemeProvider>
    );
    const instance = component.root;
    expect(instance.findByType(ButtonsWrapper).props.children).toHaveLength(2);
  });
});
