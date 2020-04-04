import React from 'react';
import styled from 'styled-components';
import CloseIcon from '../../../common/icons/CloseIcon/CloseIcon';

export interface AlertsWrapperProps {
  className?: string;
  type?: any;
  onClose?: () => void;
  isOpen: boolean;
  backgroundColor?: string;
};

export interface TitleProps {
  type?:any;
  title?: string;
  titleFontSize?: number;
  titleFontWeight?: string;
}

export interface MessageProps {
  message?: string;
  color?: string;
  type?: any;
}

export interface AlertsProps extends AlertsWrapperProps, TitleProps, MessageProps {
  icon?: object;
}

export const AlertsWrapper = styled.div<AlertsWrapperProps>`
  position: relative;
  width: 440px;
  height: 120px;
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme, type }) => (theme.colors[type].base)};
  border-bottom-width: 10px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme, type }) => (theme.colors[type].base)};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  border-radius: 8px;
  padding: 24px;
`;

export const Title = styled.span<TitleProps>`
  color: ${({ theme, type }) => (theme.colors[type].base)};
  font-size: ${({ titleFontSize }) => `${titleFontSize}px`};
  font-weight: ${({ titleFontWeight }) => titleFontWeight};
`;

export const Message = styled.span<MessageProps>`
  color: ${({ theme, color, type }) => (color || theme.colors[type].base)};
`;

const Alerts: React.StatelessComponent<AlertsProps> = ({
  className,
  type,
  title,
  message,
  isOpen,
  onClose,
  backgroundColor,
  color,
  titleFontSize,
  titleFontWeight
}) => (
  <AlertsWrapper
    className={className}
    type={type}
    isOpen={isOpen}
    backgroundColor={backgroundColor}
  >
    <Title 
      type={type}
      titleFontSize={titleFontSize}
      titleFontWeight={titleFontWeight}
    >
      {title}
    </Title>
    <Message 
      color={color}
      type={type}
    >
      {message}
    </Message>
    <CloseIcon 
      color={type} 
      onClick={onClose}
    />
  </AlertsWrapper>
);

Alerts.defaultProps = {
  className: '',
  type: 'success',
  message: '',
  isOpen: false,
  titleFontSize: 24,
  titleFontWeight: '700'
};

export default Alerts;
