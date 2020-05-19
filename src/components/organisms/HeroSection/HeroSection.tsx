import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';

type Capture = {
  title?: string;
  width?: number;
  description?: string;
  backgroundColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  titleSize?: number;
  centerCapture?: boolean;
}

interface HeroSectionProps {
  width: string;
  height: string;
  backgroundColor?: string;
  backgroundImage?: string;
  horizontalPadding?: number;
  capture?: Capture;
}

interface HeroSectionWrapperProps {
  backgroundColor?: string;
  backgroundImage?: string;
  showTransitionEffect?: boolean;
  transitionEffect?: string;
  opacity?: number;
  width: string;
  height: string;
  horizontalPadding?: number;
}

export const HeroSectionWrapper = styled.div<HeroSectionWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ horizontalPadding }) => `0 ${horizontalPadding}px`};
  position: relative;
`;

export const HeroSectionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const HeroSectionCapture = styled.div<any>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${({ top, centerCapture  }) => centerCapture ? '50%' : `${top}px`};
  left: ${({ left, centreCapture }) => centreCapture ? '50%' : `${left}px`};
  width ${({ width }) => `${width}px`};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const HeroSectionTitle = styled.h2<any>`
  font-size: ${({ size }) => `${size}px`};
`;

export const HeroSectionDescription = styled.h5<any>`
  font-size: ${({ size }) => `${size}px`};
`;

const HeroSection = (props: HeroSectionProps) => {
 
  return (
    <HeroSectionWrapper {...props}>
      {props.backgroundImage && <HeroSectionImage src={props.backgroundImage} />}
      {props.capture && <HeroSectionCapture {...props.capture}>
        <HeroSectionTitle size={get(props, 'capture.titleSize')}>{get(props, 'capture.title')}</HeroSectionTitle>
        <HeroSectionDescription size={get(props, 'capture.DescriptionSize')}>{get(props, 'capture.description')}</HeroSectionDescription>
      </HeroSectionCapture>}
    </HeroSectionWrapper>
  );
}

const defaultProps = {
  backgroundColor: 'transparent',
  backgroundImage: 'https://images.unsplash.com/photo-1475351177616-1e5e440dccef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
};


const captureDefaultProps = {
  width: 400,
  backgroundColor: 'white',
}

HeroSectionCapture.defaultProps = captureDefaultProps;

HeroSection.defaultProps = defaultProps;

export default styled(HeroSection) `{
  width: ${({ width }) => width};
  height: ${({ height }) => height};
}`;
