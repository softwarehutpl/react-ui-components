import React from 'react';
import DropdownContext from '../../../context/dropdownContext';

interface IDropdown {
  children?: React.ReactNode;
}

export const Dropdown = ({ children }: IDropdown) => {
  // TODO: pass Dropdown color prop as value to context provider
  return (
    <DropdownContext.Provider value={{ dropdownColor: 'primary' }}>
      <div className="">
        {children}
      </div>
    </DropdownContext.Provider>
  );
};
