import { CONTAINER_TEXT_ALIGNMENT_OPTIONS } from '../common/constants/consts';

export const mapTextPositionToFlexJustify = (textPosition: string) => {
  switch (textPosition) {
    case CONTAINER_TEXT_ALIGNMENT_OPTIONS.left:
      return 'flex-start';
    case CONTAINER_TEXT_ALIGNMENT_OPTIONS.right:
      return 'flex-end';
    case CONTAINER_TEXT_ALIGNMENT_OPTIONS.center:
      return 'center';
    default:
      return 'center';
  }
};
