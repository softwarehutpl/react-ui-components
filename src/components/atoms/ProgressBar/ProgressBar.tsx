import React from 'react';
import styled from 'styled-components';
import ProgressBarLabel, { IBarLabel, IBarLabelStyle } from './ProgressBarLabel';

export interface IBarValues {
  maxValue: number;
  progressValue: number;
}

interface IInnerBar extends IBarValues {
  color?: string;
  barColor?: string;
  transitionTime?: number;
}

interface IProgressBarProps extends IInnerBar, IBarLabel, IBarLabelStyle {
  className?: string;
  color?: string;
  noLabel?: boolean;
}

interface IProgressBarStyleProps {
  width?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
  noBorder?: boolean;
  margin?: string;
}

const ProgressBar = ({
  className,
  maxValue,
  progressValue,
  color,
  barColor,
  labelType,
  labelColor,
  height,
  width,
  labelPosition,
  noLabel,
  transitionTime,
}: IProgressBarProps) => (
  <div className={className}>
    <InnerBar
      maxValue={maxValue}
      progressValue={progressValue}
      color={color}
      barColor={barColor}
      transitionTime={transitionTime}
    />
    {!noLabel && (
      <ProgressBarLabel
        maxValue={maxValue}
        progressValue={progressValue}
        labelType={labelType}
        labelColor={labelColor}
        height={height}
        width={width}
        labelPosition={labelPosition}
      />
    )}
  </div>
);

const defaultProps = {
  width: 250,
  height: 15,
  color: 'primary',
  noBorder: false,
  margin: '0',
  labelType: 'percentage',
  noLabel: false,
  transitionTime: 0.5,
};

ProgressBar.defaultProps = defaultProps;

const InnerBar = styled.div<IInnerBar>`
  ${({
    theme,
    color = defaultProps.color,
    progressValue,
    maxValue,
    barColor,
    transitionTime = defaultProps.transitionTime,
  }) => ({
    width: `${(progressValue / maxValue) * 100}%`,
    'max-width': '100%',
    height: '100%',
    'background-color': barColor || theme.colors[color].base,
    'border-radius': '6px',
    transition: `width ${transitionTime}s`,
  })}
`;

export default styled(ProgressBar)<IProgressBarStyleProps>`
  ${({
    theme,
    color = defaultProps.color,
    width = defaultProps.width,
    height = defaultProps.height,
    backgroundColor,
    noBorder = defaultProps.noBorder,
    margin = defaultProps.margin,
  }) => ({
    width: `${width}px`,
    height: `${height}px`,
    border: noBorder ? 'none' : `1px solid ${theme.colors[color].base}`,
    'border-radius': '6px',
    'background-color': backgroundColor || theme.colors[color].light,
    margin,
    position: 'relative',
  })}
`;
