import React from 'react';
import { create, act } from 'react-test-renderer';
import 'jest-styled-components';
import sliderItems from '../../../common/mocks/sliderItems';
import Carousel, { CarouselWrapper, Button } from './Carousel';
import CarouselContent from './CarouselContent';
import CarouselItem from './CarouselItem';

describe('Carousel Component', () => {
  it('should render Carousel correctly', () => {
    const tree = create(<Carousel slides={sliderItems} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render CarouselWrapper correctly', () => {
    const tree = create(<CarouselWrapper slides={sliderItems} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Button correctly', () => {
    const tree = create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render CarouselContent correctly', () => {
    const tree = create(<CarouselContent />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render CarouselItem correctly', () => {
    const tree = create(<CarouselItem content={sliderItems[0]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call button onClick method in Button', () => {
    const mockOnChange = jest.fn();
    const component = create(<Button onClick={mockOnChange} />);
    const instance = component.root;
    const button = instance.findByType('button');
    act(() => {
      button.props.onClick();
    });
    expect(mockOnChange.mock.calls.length).toEqual(1);
  });

  it('should render Carousel with default styles', () => {
    const component = create(<Carousel slides={sliderItems} />);
    const carouselWrapper = component.toJSON();
    expect(carouselWrapper).toHaveStyleRule('width', '800px');
    expect(carouselWrapper).toHaveStyleRule('position', 'relative');
    expect(carouselWrapper).toHaveStyleRule('overflow', 'hidden');
  });

    it('should render Carousel with provided styles', () => {
    const component = create(<Carousel slides={sliderItems} width={1000} />);
    const carouselWrapper = component.toJSON();
    expect(carouselWrapper).toHaveStyleRule('width', '1000px');
  });

  it('should render Carausel content', () => {
    const component = create(<CarouselContent translateCarousel={200} transition={0.5} />);
    const modalWrapper = component.toJSON();
    expect(modalWrapper).toHaveStyleRule('height', '100%');
    expect(modalWrapper).toHaveStyleRule('display', 'flex');
    expect(modalWrapper).toHaveStyleRule('transform', 'translateX(-200px)');
    expect(modalWrapper).toHaveStyleRule('transition', 'transform ease-out 0.5s');
  });
});
