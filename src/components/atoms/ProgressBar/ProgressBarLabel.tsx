import styled from 'styled-components';
import React from 'react';
import { IBarValues } from './ProgressBar';
import { getLabelColor, getProgressBarLabelTopPosition } from './helpers';

export interface IBarLabel extends IBarValues {
  labelType?: 'percentage' | 'progressValue';
  className?: string;
}

export interface IBarLabelStyle {
  labelColor?: string;
  labelPosition?: 'top' | 'bottom' | 'center' | 'right';
  height: number;
  width: number;
}

const BarLabel = ({ labelType, progressValue, maxValue, className }: IBarLabel) => {
  let labelText;
  if (labelType === 'percentage') {
    labelText = `${(progressValue / maxValue) * 100}%`;
  }
  if (labelType === 'progressValue') {
    labelText = `${progressValue} of ${maxValue}`;
  }
  return <label className={className}>{labelText}</label>;
};

const defaultProps = {
  labelType: 'percentage',
  className: '',
  labelPosition: 'top',
};

BarLabel.defaultProps = defaultProps;

export default styled(BarLabel)<IBarLabelStyle>`
  ${({
    labelColor,
    labelPosition = defaultProps.labelPosition,
    height,
    width,
  }) => ({
    color: getLabelColor(labelPosition, labelColor),
    position: 'absolute',
    width: labelPosition === 'right' ? 'auto' : '100%',
    top: getProgressBarLabelTopPosition(labelPosition, height),
    left: labelPosition === 'right' ? width + 10 : 'auto',
    'font-size': labelPosition === 'center' ? '0.75em' : '1em',
    'line-height': `${height}px`,
    'text-align': 'center',
    display: 'block',
  })}
`;
