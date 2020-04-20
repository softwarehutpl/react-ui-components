
import React from 'react';
import { create, act } from 'react-test-renderer';
import 'jest-styled-components';
import Modal, { ModalToggleButton, ModalWrapper } from './Modal';
import theme from '../../../common/theme';

describe('Modal Component', () => {
  it('should render correctly', () => {
    const tree = create(<Modal onClose={() => console.log()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call  modal toggle component with onClose method', () => {
    const mockOnClick = jest.fn();
    const component = create(<ModalToggleButton onClose={mockOnClick} />);
    const instance = component.root;
    const button = instance.findByType('button');
    act(() => {
      button.props.onClose();
    });
    expect(mockOnClick.mock.calls.length).toEqual(1);
  });

  it('should render Modal component introduced styles props', () => {
    const component = create(<ModalWrapper isOpen backgroundColor='hotpink' opacity={0.7} />);
    const modalWrapper = component.toJSON();
    expect(modalWrapper).toHaveStyleRule('background-color', 'hotpink');
  });

  it('should render Modal component with visibbility hidden when isOpen is false', () => {
    const component = create(<ModalWrapper isOpen={false} />);
    const modalWrapper = component.toJSON();
    expect(modalWrapper).toHaveStyleRule('visibility', 'hidden');
  });

  it('should render Modal component with visibbility visible when isOpen is true', () => {
    const component = create(<ModalWrapper isOpen />);
    const modalWrapper = component.toJSON();
    expect(modalWrapper).toHaveStyleRule('visibility', 'visible');
  });

  it('should render modal toggle button when modal is open', () => {
    const component = create(<ModalToggleButton
      theme={theme}
      buttonFontColor='grey'
      buttonBackgroundColor='hotpink'
      topButtonPosition={30}
      rightButtonPosition={30}
      isOpen
    />)
    const input = component.toJSON();
    expect(input).toHaveStyleRule('color', 'grey');
    expect(input).toHaveStyleRule('background-color', 'hotpink');
    expect(input).toHaveStyleRule('top', '30px');
    expect(input).toHaveStyleRule('right', '30px');
  });
});
