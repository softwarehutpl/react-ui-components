import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  countTooltipArrowLeftPosition,
  countTooltipArrowTopPosition,
  countTooltipLeftPosition,
  countTooltipTopPosition,
} from './helpers';

interface ITooltipCommon {
  className?: string;
  color?: string;
  backgroundColor?: string;
  fontColor?: string;
  position?: string;
  opacity?: number;
}

interface ITooltipProps extends ITooltipCommon {
  targetElementId: string;
  tooltipText: string;
}

interface ITooltipContentStyleProps extends ITooltipCommon {
  isVisible: boolean;
  targetDomRect: { [key: string]: number };
  tooltipSize: { [key: string]: number };
  children: React.ReactNode;
}

const Tooltip = ({
  targetElementId,
  className,
  tooltipText,
  backgroundColor,
  color,
  fontColor,
  position,
  opacity,
}: ITooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [targetDomRect, setTargetDomRect] = useState({});
  const [tooltipSize, setTooltipSize] = useState({});
  const tooltipRef = React.useRef<HTMLSpanElement>(null);

  const getTooltipSize = () => {
    if (tooltipRef && tooltipRef.current) {
      const { width, height } = tooltipRef.current.getBoundingClientRect();
      setTooltipSize({ width, height });
    }
  };

  const getTargetSize = (targetElement: any) => {
    const { top, left, right, bottom, width, height } = targetElement.getBoundingClientRect();
    setTargetDomRect({ top, left, right, bottom, width, height });
  };

  useEffect(() => {
    const targetElement = document.getElementById(targetElementId);
    if (targetElement) {
      targetElement.addEventListener('mouseenter', () => {
        setIsVisible(true);
      });
      targetElement.addEventListener('mouseleave', () => {
        setIsVisible(false);
      });
      getTooltipSize();
      getTargetSize(targetElement);
      window.addEventListener('resize', () => {
        getTooltipSize();
        getTargetSize(targetElement);
      });
    }
  }, [targetElementId]);

  return (
    <StyledTooltip
      className={className}
      isVisible={isVisible}
      backgroundColor={backgroundColor}
      color={color}
      fontColor={fontColor}
      targetDomRect={targetDomRect}
      position={position}
      ref={tooltipRef}
      tooltipSize={tooltipSize}
      opacity={opacity}
    >
      {tooltipText}
    </StyledTooltip>
  );
};

const defaultProps = {
  color: 'primary',
  position: 'top',
  opacity: 1,
};

Tooltip.defaultProps = defaultProps;

const TooltipContent = React.forwardRef<
  HTMLSpanElement,
  ITooltipCommon & ITooltipContentStyleProps
>(({ className, children }, ref) => {
  return (
    <span ref={ref} className={className}>
      {children}
    </span>
  );
});

const StyledTooltip = styled(TooltipContent)<ITooltipContentStyleProps>`
  ${({
    theme,
    color = defaultProps.color,
    isVisible,
    backgroundColor,
    fontColor,
    position = defaultProps.position,
    targetDomRect,
    tooltipSize,
    opacity = defaultProps.opacity,
  }) => {
    const tooltipBackground = backgroundColor || theme.colors[color].base;
    return {
      visibility: isVisible ? 'visible' : 'hidden',
      padding: '10px 20px',
      'border-radius': '4px',
      'background-color': tooltipBackground,
      color: fontColor || theme.colors[color].light,
      position: 'fixed',
      top: countTooltipTopPosition(position, tooltipSize, targetDomRect) || 'auto',
      left: countTooltipLeftPosition(position, tooltipSize, targetDomRect) || 'auto',
      'font-size': '0.8em',
      opacity,
      '&::after': {
        content: '""',
        display: 'block',
        width: 0,
        height: 0,
        'border-style': 'solid',
        'border-top-width': position === 'bottom' ? 0 : '8px',
        'border-top-color': position === 'top' ? tooltipBackground : 'transparent',
        'border-bottom-width': position === 'top' ? 0 : '8px',
        'border-bottom-color': position === 'bottom' ? tooltipBackground : 'transparent',
        'border-right-width': position === 'left' ? 0 : '8px',
        'border-right-color': position === 'right' ? tooltipBackground : 'transparent',
        'border-left-width': position === 'right' ? 0 : '8px',
        'border-left-color': position === 'left' ? tooltipBackground : 'transparent',
        position: 'absolute',
        left: countTooltipArrowLeftPosition(position, tooltipSize.width) || 'auto',
        top: countTooltipArrowTopPosition(position, tooltipSize.height) || 'auto',
      },
    };
  }}
`;

export default Tooltip;
