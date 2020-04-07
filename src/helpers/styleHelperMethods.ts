export const mapTextPositionToFlexJustify = (textPosition: string) => {
  switch (textPosition) {
    case 'left':
      return 'flex-start';
    case 'right':
      return 'flex-end';
    case 'center':
      return 'center';
    default:
      return 'center';
  }
};
