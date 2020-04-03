import styled, { css } from 'styled-components';

export interface CheckmarkProps {
  checked: boolean;
  color?: any
  noBorder?: boolean;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  disabled?: boolean;
  required?: boolean;
};

const Checkmark = styled.span<CheckmarkProps>`
  display: flex;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: ${({ noBorder }) => (noBorder ? 'none' : 'solid')};
  border-color: ${({ borderColor, theme, color }) => (borderColor || theme.colors[color].base)};
  border-width: ${({ borderWidth }) => (borderWidth + 'px')};
  border-radius: ${({ borderRadius }) => (borderRadius + 'px')};
  background-color: ${({ checked, theme, color }) => (checked && theme.colors[color].base)};
    &:after {
      content: '';
      position: absolute;
      display: ${({ checked }) => (checked ? 'block' : 'none')};
      width: 8px;
      height: 15px;
      border: solid  #fff;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }

  ${({ disabled, color }) =>
    disabled && 
      css`
        border-color: ${({ theme }) => (theme.colors[color].light)};
        pointer-events: none;
        background-color: transparent;
    `
  }

  ${({ required }) =>
    required && 
      css`
        border-color: ${({ theme }) => (theme.colors.error.base)};
      `
  }
`

export default Checkmark;
