import styled from 'styled-components';
import { defaultProps } from './Dropdown';

export interface IDropdownOptions {
  openingDirection?: 'down' | 'up';
  toggleHeight: number;
  itemsBackgroundColor?: string;
  color?: string;
}

export const DropdownOptions = styled.div<IDropdownOptions>`
  ${({
    openingDirection = defaultProps.openingDirection,
    toggleHeight,
    itemsBackgroundColor,
    theme,
    color = defaultProps.color,
  }) => ({
    position: `absolute`,
    top: openingDirection === 'down' ? `${toggleHeight + 5}px` : 'auto',
    bottom: openingDirection === 'up' ? `${toggleHeight + 5}px` : 'auto',
    left: 0,
    'border-radius': '5px',
    padding: '5px 0',
    'box-shadow': '0 4px 10px 4px rgba(217,217,217,0.6)',
    'background-color': itemsBackgroundColor || theme.colors[color].light,
    width: '100%',
  })}
`;
