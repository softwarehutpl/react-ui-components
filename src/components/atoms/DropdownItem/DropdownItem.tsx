import React, { useContext } from 'react';
import styled from 'styled-components';
import { mapTextPositionToFlexJustify } from '../../../helpers/styleHelperMethods';
import DropdownContext from '../../../context/dropdownContext';
import { COLOR_ALTO } from '../../../common/constants/colors';

interface IDropdownItemProps {
  children?: React.ReactNode;
  className?: string;
  divider?: boolean;
  onClick?: () => void;
}

interface IDropdownItemStyleProps {
  fontColor?: string;
  backgroundColor?: string;
  height?: number;
  padding?: number;
  textAlignment?: 'left' | 'center' | 'right';
  heading?: boolean;
  dividerColor?: string;
  color?: string;
  disabled?: boolean;
}

const DropdownItem = ({ children, className, divider, onClick }: IDropdownItemProps) => {
  if (divider) {
    return <div className={className} />;
  }
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

const defaultProps = {
  children: null,
  className: '',
  onClick: () => {},
  height: 35,
  padding: 15,
  textAlignment: 'left',
  heading: false,
  divider: false,
  dividerColor: COLOR_ALTO,
  color: 'error',
  disabled: false,
};

DropdownItem.defaultProps = defaultProps;

const StyledDropdownItem = styled(DropdownItem)<IDropdownItemStyleProps>`
  ${({
    theme,
    color = defaultProps.color,
    fontColor,
    backgroundColor,
    height = defaultProps.height,
    padding = defaultProps.padding,
    textAlignment = defaultProps.textAlignment,
    heading = defaultProps.heading,
    divider = defaultProps.divider,
    dividerColor = defaultProps.dividerColor,
    disabled = defaultProps.disabled,
  }) => {
    if (divider) {
      return {
        height: '1px',
        'background-color': dividerColor,
      };
    }
    return {
      color: fontColor || theme.colors[color].base,
      'background-color': backgroundColor || theme.colors[color].light,
      width: '100%',
      height: `${height}px`,
      padding: `0 ${padding}px`,
      'box-sizing': 'border-box',
      display: 'flex',
      'align-items': 'center',
      'justify-content': mapTextPositionToFlexJustify(textAlignment),
      'font-size': heading ? '0.75em' : '1em',
      'font-weight': heading ? 'bold' : 'bolder',
      'text-transform': heading ? 'uppercase' : 'capitalize',
      '&:hover': {
        cursor: 'pointer',
        'background-color': theme.colors[color].dark,
      },
      'pointer-events': disabled ? 'none' : 'auto',
    };
  }}
`;

type DropdownItemProps = IDropdownItemStyleProps & IDropdownItemProps;

const withDropdownContext = (WrappedComponent: React.ComponentType<DropdownItemProps>) => (
  props: DropdownItemProps
) => {
  const { dropdownColor } = useContext(DropdownContext);
  const { color } = props;
  // if color is passed to item, render item with given color, if not, take color from dropdown
  return <WrappedComponent {...props} color={color || dropdownColor} />;
};

export default withDropdownContext(StyledDropdownItem);
