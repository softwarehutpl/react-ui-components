import { IOption } from './Select';

const isEqual = require('lodash.isequal');

export const checkIfIsSelected = (
  option: IOption,
  multiple?: boolean,
  value?: IOption,
  multipleValue?: IOption[]
) => {
  if (multiple && multipleValue) {
    return !!multipleValue.find((val) => isEqual(val, option));
  }
  return isEqual(value, option);
};
