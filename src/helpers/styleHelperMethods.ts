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
