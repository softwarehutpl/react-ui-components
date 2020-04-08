import React from 'react';
import styled from 'styled-components';
import stepImage from '../../../../assets/register.svg';

export interface WrapperProps {
  width?: string;
  height?: string;
  color?: any;
  isActive?: boolean;
};

export interface IconProps {
  isActive?: boolean;
  color?: any;
};

export interface TitleProps {
  isActive?: boolean;
};

export interface StepProps extends WrapperProps, IconProps, TitleProps {
  stepClassName?: string;
  imageClassName?: string;
  image? : any;
  title?: string;
};

export const Wrapper = styled.div<WrapperProps>`
  position: relative; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  &:after {
    content: " ";
    position: absolute; 
    left: 50%;
    top: calc(50% + 35px);
    width: 100%;
    height: 3px;
    background-color: ${({ color, theme }) => (theme.colors[color].base)};
    z-index: -1;
  }
  &:last-child:after {
    display: none;
  }
`;

export const Image = styled.img`
  width: 112px;
  height: 90px;
  fill: red;
`;

export const Icon = styled.div<IconProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border-color: ${( { theme, color }) => (theme.colors[color].base)};
  border-width: 3px;
  border-style: solid;
  background-color: ${({ color, theme, isActive }) => (isActive ? theme.colors[color].base : '#fff')};
    &:after {
      content: '';
      position: absolute;
      top: 9px;
      color: #fff;
      width: 20px;
      height: 30px;
      border: solid  #fff;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
`;

export const Title = styled.span<TitleProps>`
  font-weight: ${({ isActive }) =>  (isActive  && 500)};
`;

const Step: React.StatelessComponent<StepProps> = ({ 
  stepClassName,
  imageClassName,
  image, 
  title,
  isActive,
  color,
  width,
  height,
}) => (
  <Wrapper
    className={stepClassName}
    color={color}
    width={width}
    height={height}
    isActive={isActive}
  >
    <Image
      src={image ? image : stepImage}
      alt="step-image"
      className={imageClassName}
    />
    <Icon
      color={color}
      isActive={isActive}
    />
    <Title 
      isActive={isActive}
    >
      {title}
    </Title>
  </Wrapper>
);

Step.defaultProps = {
  stepClassName: '',
  color: 'primary',
  width: '100%',
  height: '300px',
  isActive: true,
};

export default Step;
