const tooltipOffset = 15;
const arrowSize = 8;

export const countTooltipTopPosition = (
  position: string,
  tooltipSize: { [key: string]: number },
  targetDomRect: { [key: string]: number }
) => {
  if (position === 'top') {
    return `${targetDomRect.top - tooltipSize.height - tooltipOffset}px`;
  }
  if (position === 'bottom') {
    return `${targetDomRect.bottom + tooltipOffset}px`;
  }
  return `${targetDomRect.top + targetDomRect.height / 2 - tooltipSize.height / 2}px`;
};

export const countTooltipLeftPosition = (
  position: string,
  tooltipSize: { [key: string]: number },
  targetDomRect: { [key: string]: number }
) => {
  if (position === 'left') {
    return `${targetDomRect.left - tooltipSize.width - tooltipOffset}px`;
  }
  if (position === 'right') {
    return `${targetDomRect.right + tooltipOffset}px`;
  }
  return `${targetDomRect.left + targetDomRect.width / 2 - tooltipSize.width / 2}px`;
};

export const countTooltipArrowTopPosition = (position: string, tooltipHeight: number) => {
  if (position === 'top') {
    return `${tooltipHeight}px`;
  }
  if (position === 'bottom') {
    return `${-arrowSize}px`;
  }
  return `${tooltipHeight / 2 - arrowSize }px`;
};

export const countTooltipArrowLeftPosition = (position: string, tooltipWidth: number) => {
  if (position === 'left') {
    return `${tooltipWidth}px`;
  }
  if (position === 'right') {
    return `${-arrowSize}px`;
  }
  return `${tooltipWidth / 2 - arrowSize }px`;
};
