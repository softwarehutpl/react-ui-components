import React from 'react';
import styled from 'styled-components';

interface CarouselContentProps {
  width?: number;
  transition: number;
  translateCarousel: number;
}

const CarouselContent = styled.div<CarouselContentProps>`
  transform: translateX(-${props => props.translateCarousel}px);
  transition: transform ease-out ${props => props.transition}s;
  height: 100%;
  width: ${props => 800 && props.width}px;
  display: flex;
  overflow: hidden;
`;

export default CarouselContent;
