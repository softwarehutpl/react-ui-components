import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DownArrow } from '@styled-icons/boxicons-solid/DownArrow';
import { UpArrow } from '@styled-icons/boxicons-solid/UpArrow';
import DropdownContext from '../../../context/dropdownContext';
import { DropdownToggle, IDropdownToggle } from './DropdownToggle';
import { DropdownOptions } from './DropdownItems';
import useOutsideClick from '../../../common/hooks/clickOutside';

interface IDropdown extends IDropdownToggle {
  children?: React.ReactNode;
  className?: string;
  title: string;
  itemsBackgroundColor?: string;
  itemsFontColor?: string;
  caretSize?: number;
  openingDirection?: 'down' | 'up';
}

interface IStyledDropdown {
  margin?: number;
}

const arrowStyle = (size?: number) => ({
  width: `${size}px`,
  marginLeft: '10px',
});

const Dropdown = ({
  children,
  color,
  className,
  title,
  width,
  itemsBackgroundColor,
  itemsFontColor,
  openingDirection,
  caretSize,
  disabled,
  backgroundColor,
  padding,
  fontColor,
}: IDropdown) => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleHeight, setToggleHeight] = useState(0);
  const toggleRef = React.useRef<HTMLDivElement>(null);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const closeDropdown = () => {
    setIsOpen(false);
  }

  useOutsideClick(dropdownRef, closeDropdown);

  useEffect(() => {
    if (toggleRef && toggleRef.current) {
      const { height } = toggleRef.current.getBoundingClientRect();
      setToggleHeight(height);
    }
  }, []);

  return (
    <DropdownContext.Provider
      value={{
        dropdownColor: color,
        dropdownWidth: width,
        itemsBackgroundColor,
        itemsFontColor,
        onDropdownItemClick: closeDropdown,
      }}
    >
      <div className={className} ref={dropdownRef}>
        <DropdownToggle
          ref={toggleRef}
          onClick={toggleDropdown}
          color={color}
          width={width}
          backgroundColor={backgroundColor}
          padding={padding}
          fontColor={fontColor}
          disabled={disabled}
        >
          {title}
          {openingDirection === 'up' ? (
            <UpArrow style={arrowStyle(caretSize)} />
          ) : (
            <DownArrow style={arrowStyle(caretSize)} />
          )}
        </DropdownToggle>
        {isOpen && (
          <DropdownOptions
            openingDirection={openingDirection}
            toggleHeight={toggleHeight}
            itemsBackgroundColor={itemsBackgroundColor}
            color={color}
          >
            {children}
          </DropdownOptions>
        )}
      </div>
    </DropdownContext.Provider>
  );
};

export const defaultProps = {
  color: 'primary',
  width: 200,
  padding: 15,
  margin: 0,
  openingDirection: 'down',
  caretSize: 15,
  disabled: false,
};

Dropdown.defaultProps = defaultProps;

const StyledDropdown = styled(Dropdown)<IStyledDropdown>`
  ${({ margin = defaultProps.margin }) => ({
    margin: `${margin}px`,
    position: 'relative',
  })}
`;

export default StyledDropdown;
