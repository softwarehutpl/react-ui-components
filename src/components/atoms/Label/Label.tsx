import React from 'react';
import styled, { css } from 'styled-components';

export interface LabelProps {
  children?: any;
  className?: string;
  disabled?: boolean;
};

const Label: React.StatelessComponent<LabelProps> = ({ 
  children, 
  className ,
}) => (
  <label className={className}>{children}</label>
);

export default styled(Label)`
  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  ${({ disabled }) =>
    disabled && 
      css`
        cursor: not-allowed;
        opacity: 0.4;
    `
  }
`;
