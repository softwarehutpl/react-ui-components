import { COLOR_ALTO, COLOR_BLACK } from '../../../constants/colors';

export const getProgressBarLabelTopPosition = (position: string, barHeight: number) => {
  const offset = 5;
  switch (position) {
    case 'top':
      return `${-barHeight - offset}px`;
    case 'bottom':
      return `${barHeight + offset}px`;
    default:
      return 0;
  }
};

export const getLabelColor = (
  position: string,
  labelColor?: string
) => {
  if (labelColor) {
    return labelColor;
  }
  if (position === 'center') {
    return COLOR_ALTO;
  }
  return COLOR_BLACK;
};
