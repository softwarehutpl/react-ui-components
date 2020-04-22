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
  defaultOnDropdownItemClick?: () => void;
}

interface IDropdownItemStyleProps {
  dropdownItemFontColor?: string;
  dropdownItemBackgroundColor?: string;
  height?: number;
  padding?: number;
  textAlignment?: 'left' | 'center' | 'right';
  heading?: boolean;
  dividerColor?: string;
  dropdownColor?: string;
  disabled?: boolean;
}

const DropdownItem = ({ children, className, divider, onClick, defaultOnDropdownItemClick }: IDropdownItemProps) => {
  if (divider) {
    return <div className={className} />;
  }
  const handleClick = () => {
    if (defaultOnDropdownItemClick) {
      defaultOnDropdownItemClick();
    }
    if (onClick) {
      onClick();
    }
  }

  return (
    <div className={className} onClick={handleClick}>
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
  dropdownColor: 'primary',
  disabled: false,
};

DropdownItem.defaultProps = defaultProps;

const StyledDropdownItem = styled(DropdownItem)<IDropdownItemStyleProps>`
  ${({
    theme,
    dropdownColor = defaultProps.dropdownColor,
    dropdownItemFontColor,
    dropdownItemBackgroundColor,
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
      color: dropdownItemFontColor || theme.colors[dropdownColor].base,
      'background-color': dropdownItemBackgroundColor || theme.colors[dropdownColor].light,
      height: `${height}px`,
      width: '100%',
      padding: `0 ${padding}px`,
      'box-sizing': 'border-box',
      display: 'flex',
      'align-items': 'center',
      'justify-content': mapTextPositionToFlexJustify(textAlignment),
      'font-size': heading ? '0.75em' : '1em',
      'font-weight': '600',
      'text-transform': heading ? 'uppercase' : 'capitalize',
      '&:hover': {
        cursor: 'pointer',
        'background-color': theme.colors[dropdownColor].dark,
      },
      'pointer-events': disabled ? 'none' : 'auto',
    };
  }}
`;

type DropdownItemProps = IDropdownItemStyleProps & IDropdownItemProps;

const withDropdownContext = (WrappedComponent: React.ComponentType<DropdownItemProps>) => (
  props: DropdownItemProps
) => {
  const { dropdownColor, itemsBackgroundColor, itemsFontColor, onDropdownItemClick } = useContext(
    DropdownContext
  );
  return (
    <WrappedComponent
      {...props}
      dropdownColor={dropdownColor}
      dropdownItemFontColor={itemsFontColor}
      dropdownItemBackgroundColor={itemsBackgroundColor}
      defaultOnDropdownItemClick={onDropdownItemClick}
    />
  );
};

export default withDropdownContext(StyledDropdownItem);
