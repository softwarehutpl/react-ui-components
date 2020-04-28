import React from 'react';
import styled from 'styled-components';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { defaultProps, IOption } from './Select';

interface IMultipleSelectChip {
  onDelete: () => void;
  option: IOption;
  color?: string;
  className?: string;
  backgroundColor?: string;
  fontColor?: string;
}

const MultipleSelectChip = ({ onDelete, option, className }: IMultipleSelectChip) => {
  return (
    <span className={className}>
      {option.label}
      <CloseOutline onClick={onDelete} style={{ width: '12px' }} />
    </span>
  );
};

export default styled(MultipleSelectChip)<IMultipleSelectChip>`
  ${({ theme, color = defaultProps.color, backgroundColor, fontColor }) => ({
    padding: '5px',
    backgroundColor: fontColor || theme.colors[color].light,
    color: backgroundColor || theme.colors[color].base,
    margin: '2px 5px 2px 0',
    'font-size': '0.75em',
    display: 'inline-block',
  })}
`;
