import React from 'react';
import { COLOR_BLACK, COLOR_WHITE } from '../constants/colors';

export default React.createContext<{
  dropdownColor?: string;
  dropdownWidth?: number;
  itemsBackgroundColor?: string;
  itemsFontColor?: string
  onDropdownItemClick: () => void;
}>({
  dropdownColor: 'primary',
  dropdownWidth: 200,
  itemsBackgroundColor: COLOR_WHITE,
  itemsFontColor: COLOR_BLACK,
  onDropdownItemClick: () => {},
});
