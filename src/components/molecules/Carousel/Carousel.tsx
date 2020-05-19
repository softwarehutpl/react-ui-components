import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CarouselContent from './CarouselContent';
import CarouselItem from './CarouselItem';

type Slide = {
  src: string;
  captureComponent?: React.ReactNode;
};

type Arrow = {
  color?: string,
  height?: number,
  backgroundColor? : string,
  width?: 3,
}

interface ButtonProps {
  left?: number;
  right?: number;
  height?: number;
  arrow?: Arrow;
  margin?: number;
  color?: string;
  width?: number;
  backgroundColor?: string;
  top: number;
}

interface CarouselProps {
  slides: Slide[];
  arrow?: Arrow;
  autoslider?: boolean,
  changeTime?: number,
  margin?: number;
  buttonDist?: number;
  itemsPerSlide?: number;
  width?: number;
  height?: number;
  verticalPadding?: number;
  backgroundColor?: string;
}

interface CarouselWrapperProps {
  width?: number;
  verticalPadding?: number;
  backgroundColor?: string;
}

export const Button = styled.button<ButtonProps>`
  position: absolute;
  top: ${({ top }) =>  '150px' && `${top}px`};
  ${({ left, margin }) => margin && left && `left: ${margin + left}px`};
  ${({ right, margin }) => margin && right && `right: ${right + margin}px`};
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: ${({ backgroundColor }) => backgroundColor};
  &:focus {
    outline: none;
  }
  &::before {
    border-style: solid;
    border-width: ${({ width }) => `${width}px ${width}px 0 0`};
    content: '';
    display: inline-block;
    height: ${({ height}) => '40px' && `${height}px`};
    left: 0;
    top: 0.25rem;
    color: ${({ color }) => color};
    position: relative;
    transform: ${({ left }) => left ? 'rotate(-135deg)' : 'rotate(45deg)'};
    vertical-align: top;
    width: ${({ height }) => '40px' && `${height}px`};
  }
`;

export const CarouselWrapper = styled.div<CarouselWrapperProps>`
  position: relative;
  width: ${({ width }) => `${width}px`};
  overflow: hidden;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${({ verticalPadding }) => `${verticalPadding}px 0`}
`;

/**
 * @function Carousel
 */
const Carousel = (props: CarouselProps) => {
 
  const [state, setState] = useState({
    translateCarousel: 0,
    transition: 0.45,
    activeSlide: 1,
    changeTime: props.changeTime,
  });

  useEffect(() => {
    if (props.autoslider) {
      const timer = setTimeout(() => {
        handleGoToNextSlide();
      }, state.changeTime);
      return () => clearTimeout(timer);
    }
  });

  const updateState = (slideToMove: number) => {
    const { width = 800, itemsPerSlide = 1 } = props;
    setState({ ...state, translateCarousel: width*Math.floor(slideToMove/itemsPerSlide), activeSlide: slideToMove });
  }

  const handleGoToNextSlide = () => {
    const { itemsPerSlide = 1 } = props;
    let slideToMove;
    if (activeSlide >= (props.slides.length - itemsPerSlide)) {
      slideToMove = 0
    } else {
      slideToMove = activeSlide + itemsPerSlide;
    }
    updateState(slideToMove);
  }

  const handleGoToPreviousSlide = () => {
    const { itemsPerSlide = 1 } = props;
    let slideToMove;
    if (activeSlide === 1) {
      slideToMove = props.slides.length;
    } else {
      slideToMove = activeSlide - itemsPerSlide;
    }
    updateState(slideToMove);
  }

  const { translateCarousel, transition, activeSlide } = state;

  return (
    <CarouselWrapper {...props}>
      <CarouselContent
        translateCarousel={translateCarousel}
        transition={transition}
        width={props.width && props.itemsPerSlide && props.width*props.slides.length/props.itemsPerSlide}
      >
        {props.slides.map((slide: Slide, i: number) => (
          <CarouselItem
            key={i}
            content={slide}
            itemsPerSlide={props.itemsPerSlide}
            height={props.height}
            carouselWidth={props.width}
          />
        ))}
      </CarouselContent>
      <Button onClick={() => handleGoToNextSlide()} right={props.buttonDist} {...props.arrow} margin={props.margin} top={props.height ? props.height/2 : 150} />
      <Button onClick={() => handleGoToPreviousSlide()} left={props.buttonDist} {...props.arrow} margin={props.margin} top={props.height ? props.height/2 : 150} />
    </CarouselWrapper>
  )
}

const defaultProps = {
  autoslider: true,
  changeTime: 5000,
  margin: 50,
  buttonDist: 1,
  itemsPerSlide: 1,
  width: 800,
  height: 300,
  verticalPadding: 0,
  item: {
    borderRadius: 30,
    margin: 50,
  },
}

Carousel.defaultProps = defaultProps;

const arrowDeafultProps = {
  color: 'white',
  height: 20,
  backgroundColor: 'transparent',
  width: 3,
  right: 50,
}

Button.defaultProps = arrowDeafultProps;

export default Carousel;
