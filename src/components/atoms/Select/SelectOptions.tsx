import styled from 'styled-components';

export interface ISelectOptions {
  color?: string;
  toggleHeight: number;
}

export const SelectOptions = styled.div<ISelectOptions>`
  ${({ toggleHeight }) => ({
    width: '100%',
    position: 'absolute',
    left: 0,
    top: `${toggleHeight}px`,
    'box-shadow': '0 4px 10px 4px rgba(217,217,217,0.6)',
    'max-height': '200px',
    'overflow-y': 'scroll',
  })}
`;
