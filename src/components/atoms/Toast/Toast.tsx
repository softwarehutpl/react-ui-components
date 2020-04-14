import React, { useEffect } from 'react';
import styled from 'styled-components';
import {COLOR_BLACK, COLOR_WHITE} from '../../../constants/colors';

interface IToastProps {
  message: string;
  title?: string;
  className?: string;
  onClose: () => void;
  duration?: number;
  onClick?: () => void;
}

interface IToastStyleProps {
  width?: number;
  color?: string;
  backgroundColor?: string;
  fontColor?: string;
  position?: 'top' | 'bottom';
  padding?: number;
}

const Toast = ({ message, title, className, duration, onClose, onClick }: IToastProps) => {
  useEffect(() => {
    const timeout = setTimeout(onClose, duration);
    return () => {
      clearTimeout(timeout);
    };
  }, [duration, onClose]);

  return (
    <div className={className} onClick={onClick}>
      <h4>{title}</h4>
      <p>{message}</p>
    </div>
  );
};

const defaultProps = {
  width: 300,
  color: 'primary',
  position: 'bottom',
  padding: 15,
  duration: 3000,
};

Toast.defaultProps = defaultProps;

export default styled(Toast)<IToastStyleProps>`
  ${({
    theme,
    width = defaultProps.width,
    color = defaultProps.color,
    backgroundColor,
    fontColor,
    position = defaultProps.position,
    padding = defaultProps.padding,
  }) => ({
    width: `${width}px`,
    'background-color': backgroundColor || COLOR_WHITE,
    color: fontColor || COLOR_BLACK,
    position: 'fixed',
    bottom: position === 'bottom' ? '50px' : 'auto',
    top: position === 'top' ? '50px' : 'auto',
    left: `calc(50vw - ${width / 2}px)`,
    padding: `${padding}px`,
    'border-radius': '5px',
    'border-top': `7px solid ${theme.colors[color].base}`,
    'box-shadow': '0px 4px 10px 4px rgba(217,217,217,0.6)',
    h4: {
      'margin-top': 0,
      'margin-bottom': '0.5em',
      'text-align': 'left',
    },
    p: {
      'font-size': '0.8em',
      'line-height': '1.5em',
      margin: 0,
      'text-align': 'justify',
    },
  })}
`;
