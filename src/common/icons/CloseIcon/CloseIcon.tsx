import styled from 'styled-components';

export interface CloseIcon {
  height?: string;
  width?: string;
  color?: any;
}

const CloseIcon = styled.a<CloseIcon>`
  position: absolute;
  right: 24px;
  top: 24px;
  width: 24px;
  height: 24px;
  opacity: 1;
  transition: opacity .3s;
  cursor: pointer;
  
  &:before, &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: ${({ height }) => (height || '12px')};
    width: ${({ width }) => (width || '2px')};
    background-color: ${({ theme, color }) => (theme.colors[color].base)};
  }
  
  &:before {
    transform: rotate(45deg);
  }
  
  &:after {
    transform: rotate(-45deg);
  }
`;

export default CloseIcon;
