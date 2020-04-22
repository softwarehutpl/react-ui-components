import React from 'react';
import styled from 'styled-components';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { defaultProps, IOption } from './Select';

interface IMultipleSelectChip {
  onDelete: () => void;
  option: IOption;
  color?: string;
  className?: string;
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
  ${({ theme, color = defaultProps.color }) => ({
    padding: '5px',
    backgroundColor: theme.colors[color].light,
    color: theme.colors[color].base,
    'margin-right': '5px',
    'font-size': '0.75em',
  })}
`;
