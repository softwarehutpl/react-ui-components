import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import CloseIcon from '../../../common/icons/CloseIcon/CloseIcon';
import './Modal.scss';

interface ModalProps {
  onClose: () => void;
  rootId: string;
  isOpen: boolean;
  topButtonPosition?: number;
  rightButtonPosition?: number;
  buttonFontColor?: string;
  buttonBackgroundColor?: string;
  showCloseButton?: true;
  backgroundColor?: string;
  opacity?: number;
  closeButtonText?: string;
  children?: any;
  showTransitionEffect?: boolean;
  transitionEffect?: string;
  ownCloseButtonIcon?: any;
  classicCloseButton?: boolean;
  fontSize?: number;
  contentWidth: number;
  contentHeight: number;
}

interface ModalWrapperProps {
  isOpen: boolean;
  backgroundColor?: string;
  showTransitionEffect?: boolean;
  transitionEffect?: string;
  opacity?: number;
}

export const ModalWrapper = styled.div<ModalWrapperProps>`
  width: 100vw;
  height: 100vh;
  background-color: ${({ backgroundColor, isOpen }) => isOpen ? backgroundColor : 'transparent'};
  opacity: ${({ opacity }) => opacity};
  position: fixed;
  display: flex;
  visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
  transition: ${({ showTransitionEffect, transitionEffect, theme }) => showTransitionEffect ? (transitionEffect ? theme.transitions.all[transitionEffect] : 'all 1s') : 'none'};
  justify-content: center;
  align-items: center;
  top: 0;
  z-index: 1;
`;

export const ModalContent = styled.div<any>`
  position: absolute;
  background-color: ${({ contentBackgroundColor, isOpen }) => isOpen ? contentBackgroundColor : 'transparent'};
  width: ${({ contentWidth }) => `${contentWidth}px`};
  height: ${({ contentHeight }) => `${contentHeight}px`};
  visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
  color: ${({ isOpen }) => isOpen ? 'inherit' : 'transparent'};
  transition: all 1s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalToggleButton = styled.button<any>`
  position: absolute;
  top: ${({ closeButtonOutside, topButtonPosition }) => !closeButtonOutside ? `${topButtonPosition}px` : 0};
  right: ${({ closeButtonOutside, rightButtonPosition }) => !closeButtonOutside ? `${rightButtonPosition}px` : 0};
  color: ${({ buttonFontColor }) => buttonFontColor};
  transform: ${({ closeButtonOutside, topButtonPosition, rightButtonPosition, buttonWidth }) => closeButtonOutside && `translate(${rightButtonPosition + buttonWidth}px, -${topButtonPosition}px)`};
  background-color: ${({ buttonBackgroundColor }) => buttonBackgroundColor};
  z-index: 1;
  border: none;
  cursor: pointer;
  width: ${({ buttonWidth }) => `${buttonWidth}px`};
  text-align: ${({ closeButtonOutside }) => closeButtonOutside ? 'left' : 'right'};
`;

const ModalCloseIcon = styled.div<any>`
  position: absolute;
  top: ${({ closeButtonOutside, topButtonPosition }) => !closeButtonOutside ? `${topButtonPosition}px` : 0};
  right: ${({ closeButtonOutside, rightButtonPosition }) => !closeButtonOutside ? `${rightButtonPosition}px` : 0};
  transform: ${({ closeButtonOutside, rightButtonPosition, fontSize }) => closeButtonOutside && `translate(${rightButtonPosition}px, -${fontSize}px)`};
  color: ${({ buttonFontColor }) => buttonFontColor};
  background-color: ${({ buttonBackgroundColor }) => buttonBackgroundColor};
  z-index: 1;
  border: none;
  cursor: pointer;
`;

const Modal = (props: ModalProps) => {
 
  const modalRoot = typeof document !== 'undefined' ? document.getElementById(props.rootId) : null;

  if(!modalRoot) {
    return null;
  }

  return ReactDOM.createPortal(
    <ModalWrapper
      id="modal"
      isOpen={props.isOpen}
      backgroundColor={props.backgroundColor}
      showTransitionEffect={props.showTransitionEffect}
      opacity={props.opacity}
    >
      <ModalContent {...props}>{props.children}
      {props.showCloseButton && !props.ownCloseButtonIcon && !props.classicCloseButton &&
        <ModalToggleButton {...props} onClick={props.onClose}>
          {props.closeButtonText}
        </ModalToggleButton>}
      {props.ownCloseButtonIcon && !props.classicCloseButton && <ModalCloseIcon {...props}>
        {props.ownCloseButtonIcon}
      </ModalCloseIcon>}
        {props.classicCloseButton && <ModalCloseIcon {...props}>
          <CloseIcon
            onClick={props.onClose}
            iconColor={props.isOpen ? props.buttonFontColor : 'transparent'}
            topPosition={props.topButtonPosition}
            rightPosition={props.rightButtonPosition}
            height={`${props.fontSize}px`}
          />
        </ModalCloseIcon>}
      </ModalContent>
    </ModalWrapper>,
    modalRoot,
  );
}

const defaultProps = {
  topButtonPosition: 0,
  rightButtonPosition: 0,
  buttonFontColor: '#fff',
  buttonBackgroundColor: 'transparent',
  showCloseButton: true,
  backgroundColor: 'black',
  opacity: 0.6,
  closeButtonText: 'CLOSE',
  showTransitionEffect: false,
  closeButtonOutside: false,
  buttonWidth: 120,
  contentWidth: 300,
  contentHeight: 300,
  contentBackgroundColor: '#fff',
  fontSize: 24,
};

Modal.defaultProps = defaultProps;

export default Modal;
