import React, {useContext} from 'react';
import styled from 'styled-components';
import { mapTextPositionToFlexJustify } from '../../../helpers/styleHelperMethods';
import DropdownContext from '../../../context/dropdownContext';

interface IDropdownItemProps {
  children?: React.ReactNode;
  className?: string;
  disabledClassName?: string;
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

const DropdownItem = ({
  children,
  className,
  divider,
  onClick,
}: IDropdownItemProps) => {
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
  disabledClassName: '',
  height: 50,
  padding: 15,
  textAlignment: 'left',
  heading: false,
  divider: false,
  dividerColor: '#a6a6a6',
  color: 'primary',
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
      color: fontColor || theme.colors[color].light,
      'background-color': backgroundColor || theme.colors[color].base,
      width: '100%',
      height: `${height}px`,
      padding: `${padding}px`,
      'box-sizing': 'border-box',
      display: 'flex',
      'align-items': 'center',
      'justify-content': mapTextPositionToFlexJustify(textAlignment),
      'font-weight': heading ? 'bold' : 'normal',
      'text-transform': heading ? 'uppercase' : 'none',
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
  return <WrappedComponent {...props} color={dropdownColor} />;
}

export default withDropdownContext(StyledDropdownItem);
