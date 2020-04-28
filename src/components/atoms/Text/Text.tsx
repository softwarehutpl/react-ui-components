import React from 'react';
import styled from 'styled-components';
import { COLOR_OPTIONS, TEXT_ALIGNMENT_OPTIONS, FONT_WEIGHT_OPTIONS } from '../../../common/constants/consts';

interface IText {
  className?: string;
  children: string;
  color?: string;
  fontColor?: string;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  lineHeight?: number;
  fontSize?: number;
  textAlign?: 'left' | 'right' | 'center' | 'justify';
}

const Text = ({ className, children }: IText) => <p className={className}>{children}</p>;

const defaultProps = {
  color: COLOR_OPTIONS.primary,
  fontSize: 16,
  fontWeight: FONT_WEIGHT_OPTIONS.normal,
  lineHeight: 1.5,
  textAlign: TEXT_ALIGNMENT_OPTIONS.justify,
};

Text.defaultProps = defaultProps;

export default styled(Text)<IText>`
  ${({
    theme,
    color = defaultProps.color,
    fontColor,
    fontSize = defaultProps.fontSize,
    fontWeight = defaultProps.fontWeight,
    lineHeight = defaultProps.lineHeight,
    textAlign = defaultProps.textAlign,
  }) => ({
    color: fontColor || theme.colors[color].base,
    'font-size': `${fontSize}px`,
    'line-height': `${lineHeight}`,
    'font-weight': fontWeight,
    'text-align': textAlign,
  })}
`;
