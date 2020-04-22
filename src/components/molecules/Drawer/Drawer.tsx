import React from 'react';
import styled  from 'styled-components';
import { TRANSFORMS } from '../../../common/constants/consts';
import CloseIcon from '../../../common/icons/CloseIcon/CloseIcon';
import Button from '../../atoms/Button/Button';

export interface DrawerOverlayProps {
  size?: string;
  isOpen: boolean;
};

export interface DrawerContentProps {
  placement?: string;
  size?: string;
  color?: string;
  isOpen: boolean;
  transitionDuration?: number;
  backgroundColor?: string;
  fontColor?: string;
};

export interface DrawerProps extends DrawerOverlayProps, DrawerContentProps {
  className?: string;
  children?: any;
  onClose?: () => void;
  withIcon?: boolean;
  withButtons?: boolean;
  confirmCallback?: () => void;
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
  background-color: ${({ theme, backgroundColor }) => (backgroundColor || theme.colors.primary.light)};
  color: ${({ theme, fontColor }) => (fontColor || theme.colors.primary.base)};
  position: fixed;
  ${({ placement }) => (placement && placements[placement])};
  width: ${({ placement, size }) => ((placement !== 'top' && placement !== 'bottom') && size) ? sizes[size] : size};
  height: ${({ placement, size }) => ((placement === 'top' || placement === 'bottom') && size) ? sizes[size] : size};
  transform: ${({ isOpen, placement }) => ((!isOpen && placement) ? TRANSFORMS[placement] : null)};
  transition:${({ transitionDuration }) => (`transform ${transitionDuration}s ease-out`)};
  overflow-x: hidden;
  overflow-y: scroll;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.12);
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const Drawer: React.StatelessComponent<DrawerProps> = ({
  className,
  children,
  placement,
  size,
  color,
  isOpen,
  onClose,
  transitionDuration,
  withIcon,
  withButtons,
  backgroundColor,
  fontColor,
  confirmCallback,
}) => {

  const onConfirmClick = () => {
    if (confirmCallback) {
      confirmCallback();
    }

    if (onClose) {
      onClose();
    }
  };

    return (
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
          backgroundColor={backgroundColor}
          fontColor={fontColor}
        >
          {withIcon && (
            <CloseIcon
              color="primary"
              onClick={onClose}
            />
          )}
          {children}
          {withButtons && (
            <ButtonsWrapper>
              <Button
                onClick={onConfirmClick}
                buttonTitle="Confirm"
                color={color}
                fontColor="#fff"
                margin={10}
              />
              <Button
                onClick={() => onClose && onClose()}
                buttonTitle="Cancel"
                margin={10}
              />
          </ButtonsWrapper>
        )}
      </DrawerContent>
    </>
  );
}

Drawer.defaultProps = {
  color: 'secondary',
  isOpen: false,
  placement: 'right',
  size: 'medium',
  transitionDuration: 0.2,
};

export default Drawer;
