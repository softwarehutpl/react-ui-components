import React, { useEffect } from 'react';
import styled from 'styled-components';
import { OBJECT_FIT_OPTIONS } from '../../../common/constants/consts';

interface IImage {
  className?: string;
  src: string;
  width?: number;
  height?: number;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  alt: string;
  lazy?: boolean;
  rootMargin?: string;
  threshold?: number;
}

const Image = ({ className, src, alt, lazy, rootMargin, threshold }: IImage) => {
  const imageRef = React.useRef<HTMLImageElement>(null);

  const preload = (image: any, imageSrc: string) => {
    image.src = imageSrc;
  };

  const observer = new IntersectionObserver(
    (entries, self) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          preload(entry.target, src);
          self.unobserve(entry.target);
        }
      });
    },
    { rootMargin, threshold }
  );

  useEffect(() => {
    if (imageRef.current && lazy) {
      const image = imageRef.current;
      observer.observe(image);
    }
  }, []);

  return <img ref={imageRef} className={className} alt={alt} src={lazy ? '' : src} />;
};

const defaultProps = {
  objectFit: OBJECT_FIT_OPTIONS.cover,
  lazy: false,
  rootMargin: '0px',
  threshold: 0,
};

Image.defaultProps = defaultProps;

export default styled(Image)<IImage>`
  ${({ objectFit = defaultProps.objectFit, width, height }) => ({
    'object-fit': objectFit,
    width: width || '100%',
    height: height || '100%',
  })}
`;
