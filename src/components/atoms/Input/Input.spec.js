
import React from 'react';
import { create, act } from 'react-test-renderer';
import 'jest-styled-components';
import Input, { InputContainer, InputLabel, InputField } from './Input';
import theme from '../../../common/theme';

describe('Input Component', () => {
  it('should render correctly', () => {
    const tree = create(<InputContainer theme={theme} placeholder='test' onChanege={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render input component with proper placeholder', () => {
    const component = create(<InputField placeholder='test' theme={theme} />);
    const instance = component.root;
    const input = instance.findByType('input');
    expect(input.props.placeholder).toBe('test');
  });

  it('should call input onChange method', () => {
    const mockOnChange = jest.fn();
    const component = create(<InputField onChange={mockOnChange} theme={theme} />);
    const instance = component.root;
    const input = instance.findByType('input');
    act(() => {
      input.props.onChange();
    });
    expect(mockOnChange.mock.calls.length).toEqual(1);
  });

  it('should render input with custom class', () => {
    const component = create(<InputField theme={theme} className='test-class' />);
    const input = component.toJSON();
    expect(input.props.className).toEqual(expect.stringContaining('test-class'));
  });

  it('should render input component with selected theme styling', () => {
    const component = create(<InputField theme={theme} color="secondary" />);
    const input = component.toJSON();
<<<<<<< HEAD
    expect(input).toHaveStyleRule('color', '#034d91');
    expect(input).toHaveStyleRule('border-color', '#034d91');
    expect(input).toHaveStyleRule('background-color', '#75b0e6', { modifier: ':hover' });
    expect(input).toHaveStyleRule('background-color', '#75b0e6', { modifier: ':focus' });
=======
    expect(input).toHaveStyleRule('color', '#0d47a1');
    expect(input).toHaveStyleRule('border-color', '#0d47a1');
    expect(input).toHaveStyleRule('background-color', '#bbdefb', { modifier: ':hover' });
    expect(input).toHaveStyleRule('background-color', '#bbdefb', { modifier: ':focus' });
>>>>>>> 8aae16351804fca1c2cf9ce307923523fb0973e7
  });

  it('should render disabled input', () => {
    const component = create(<InputField theme={theme} disabled />);
    const input = component.toJSON();
    expect(input.props.disabled).toBe(true);
  });

  it('should render input component with color based on fontColor prop', () => {
    const component = create(<InputField theme={theme} fontColor='hotpink' />);
    const input = component.toJSON();
    expect(input).toHaveStyleRule('color', 'hotpink');
  });

  it('should render input with custom hover and focus styles', () => {
    const component = create(<InputField
      theme={theme}
      hoverBackgroundColor='#CECECE'
      focusBackgroundColor='#C7C7C7C'
      hoverBorderColor='#454545'
      focusBorderColor='#474747'
    />)
    const input = component.toJSON();
    expect(input).toHaveStyleRule('border-color', '#454545', { modifier: ':hover' });
    expect(input).toHaveStyleRule('background-color', '#CECECE', { modifier: ':hover' });
    expect(input).toHaveStyleRule('border-color', '#474747', { modifier: ':focus' });
    expect(input).toHaveStyleRule('background-color', '#C7C7C7C', { modifier: ':focus' });
  });

  it('should render input with custom hover and focus, when no focus parameters introduced, but focus are introduced',
    () => {
    const component = create(<InputField
      focusBackgroundColor='#C7C7C7C'
      focusBorderColor='#474747'
    />)
    const input = component.toJSON();
    expect(input).toHaveStyleRule('border-color', '#474747', { modifier: ':hover' });
    expect(input).toHaveStyleRule('background-color', '#C7C7C7C', { modifier: ':hover' });
    expect(input).toHaveStyleRule('border-color', '#474747', { modifier: ':focus' });
    expect(input).toHaveStyleRule('background-color', '#C7C7C7C', { modifier: ':focus' });
  });

it('should render input with custom border', () => {
    const component = create(
      <InputField
        theme={theme}
        noBorder={false}
        borderColor='#CDE769'
        borderWidth={3}
        borderRadius={10}
      />
    );
    const input = component.toJSON();
    expect(input).toHaveStyleRule('border', 'solid');
    expect(input).toHaveStyleRule('border-color', '#CDE769');
    expect(input).toHaveStyleRule('border-width', '3px');
    expect(input).toHaveStyleRule('border-radius', '10px');
  });

  it('should render input component with custom transition', () => {
    const component = create(<InputField theme={theme} />);
    const input = component.toJSON();
    expect(input).toHaveStyleRule('transition', 'none');
  });

  it('should render input component with transitionEffect', () => {
    const component = create(<InputField theme={theme} transitionEffect='mid' />);
    const input = component.toJSON();
    expect(input).toHaveStyleRule('transition', 'all 2s ease-out');
  });

  it('should render input component with custom padding and margin', () => {
    const component = create(<InputField padding={10} margin={20} />);
    const input = component.toJSON();
    expect(input).toHaveStyleRule('padding', '10px');
    expect(input).toHaveStyleRule('margin', '20px');
  });
});
