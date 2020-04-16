import React from 'react';
import styled  from 'styled-components';
import { TRANSFORMS } from '../../../common/consts/consts';

export interface DrawerOverlayProps {
  size?: string;
  isOpen: boolean;
};

export interface DrawerContentProps {
  placement?: string;
  size?: string;
  color?: string;
  isOpen: boolean;
  transitionDuration?: string;
};

export interface DrawerProps extends DrawerOverlayProps, DrawerContentProps {
  className?: string;
  children?: any;
  onClose?: () => void;
};

const sizes = {
  large: '50%',
  medium: '40%',
  small: '30%',
} as any;

const placements = {
  top: {
    top: 0,
    right: 0,
    left: 0
  },
  right: {
    top: 0,
    right: 0,
    bottom: 0
  },
  bottom: {
    right: 0,
    bottom: 0,
    left: 0
  },
  left: {
    top: 0,
    bottom: 0,
    left: 0
  }
} as any;

export const DrawerOverlay = styled.div<DrawerOverlayProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({  theme }) =>  (theme.colors.disabled.base)};
  opacity: 0.3;
  transition: opacity .3s ease-in;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

export const DrawerContent = styled.div<DrawerContentProps>`
  background-color: ${({ theme, color }) => (color && theme.colors[color].light)};
  color: ${({ theme, color }) => (color && theme.colors[color].base)};
  position: fixed;
  ${({ placement }) => (placement && placements[placement])};
  width: ${({ placement, size }) => ((placement !== 'top' && placement !== 'bottom') && size) ? sizes[size] : size};
  height: ${({ placement, size }) => ((placement === 'top' || placement === 'bottom') && size) ? sizes[size] : size};
  transform: ${({ isOpen, placement }) => ((!isOpen && placement) ? TRANSFORMS[placement] : null)};
  transition:${({ transitionDuration }) => (`transform ${transitionDuration} ease-out`)};
  overflow-x: hidden;
  overflow-y: scroll;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.12);
`;

const Drawer: React.StatelessComponent<DrawerProps> = ({
  className,
  children,
  placement,
  size,
  color,
  isOpen,
  onClose,
  transitionDuration
}) => (
  <>
    <DrawerOverlay 
      isOpen={isOpen}
      onClick={onClose}
    />
    <DrawerContent
      className={className}
      placement={placement}
      size={size}
      color={color}
      isOpen={isOpen}
      transitionDuration={transitionDuration}
    >
      {children}
    </DrawerContent>
  </>
);

Drawer.defaultProps = {
  color: 'primary',
  isOpen: false,
  placement: 'right',
  size: 'medium',
  transitionDuration: '0.2s',
};

export default Drawer;
