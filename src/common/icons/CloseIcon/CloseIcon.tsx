import styled from 'styled-components';

export interface CloseIcon {
  height?: string;
  width?: string;
  color?: any;
  topPosition?: number;
  rightPosition?: number;
  iconColor?: string;
  visibility?: string;
}

const CloseIcon = styled.a<CloseIcon>`
  position: absolute;
  right: ${({ rightPosition }) => `${rightPosition}px`};
  top: ${({ topPosition }) => `${topPosition}px`};
  width: 24px;
  height: 24px;
  opacity: 1;
  transition: all .3s;
  cursor: pointer;
  visibility: ${({ visibility }) => visibility};
  
  &:before, &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: ${({ height }) => (height || '12px')};
    width: ${({ width }) => (width || '2px')};
    background-color: ${({ theme, color, iconColor }) => iconColor ? iconColor : (theme.colors[color].base)};
  }
  
  &:before {
    transform: rotate(45deg);
  }
  
  &:after {
    transform: rotate(-45deg);
  }
`;

const defaultProps = {
  topPosition: 24,
  rightPosition: 24,
  visibility: 'visible',
};

CloseIcon.defaultProps = defaultProps;

export default CloseIcon;
