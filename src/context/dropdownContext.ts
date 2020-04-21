import React from 'react';
import { COLOR_BLACK, COLOR_WHITE } from '../common/constants/colors';

export default React.createContext<{
  dropdownColor?: string;
  itemsBackgroundColor?: string;
  itemsFontColor?: string
  onDropdownItemClick: () => void;
}>({
  dropdownColor: 'primary',
  itemsBackgroundColor: COLOR_WHITE,
  itemsFontColor: COLOR_BLACK,
  onDropdownItemClick: () => {},
});
