/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled';

const Slide = ({ content, width, borderRadius, itemsPerSlide, height, margin, carouselWidth}: any) => (
  <div
    css={css`
      height: ${height}px;
      width: ${width ? width + 'px' : carouselWidth/itemsPerSlide + 'px'};
      padding: 0 ${margin/2}px;
    `}
  > <div
     css={css`
      height: 100%;
      border-radius: ${borderRadius}px;
      background-image: url('${content.src}');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      position: relative;

    `}>
      {content.captureComponent}
  </div>
  </div>
)

const defaultProps = {

}

export default Slide;
