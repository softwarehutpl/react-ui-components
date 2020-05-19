import React from 'react';
import { create, act } from 'react-test-renderer';
import 'jest-styled-components';
import HeroSection, {
  HeroSectionWrapper,
  HeroSectionImage,
  HeroSectionCapture,
  HeroSectionTitle,
  HeroSectionDescription,
} from './HeroSection.tsx';


describe('HeroSection Component', () => {
  it('should render HeroSection correctly', () => {
    const tree = create(<HeroSection />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render HeroSectionWrapper correctly', () => {
    const tree = create(<HeroSectionWrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render HeroSectionImage correctly', () => {
    const tree = create(<HeroSectionImage />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render HeroSectionCapture correctly', () => {
    const tree = create(<HeroSectionCapture />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render HeroSectionTitle correctly', () => {
    const tree = create(<HeroSectionTitle />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render HeroSectionDescription correctly', () => {
    const tree = create(<HeroSectionDescription />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render HeroSectionWrapper with default styles', () => {
    const component = create(<HeroSectionWrapper />);
    const accordionItemTitle = component.toJSON();
    expect(accordionItemTitle).toHaveStyleRule('display', 'flex');
    expect(accordionItemTitle).toHaveStyleRule('flex-direction', 'column');
    expect(accordionItemTitle).toHaveStyleRule('justify-content', 'flex-start');
    expect(accordionItemTitle).toHaveStyleRule('align-items', 'center');
  });

  it('should render HeroSectionImage with default styles', () => {
    const component = create(<HeroSectionImage />);
    const accordionItemTitle = component.toJSON();
    expect(accordionItemTitle).toHaveStyleRule('width', '100%');
    expect(accordionItemTitle).toHaveStyleRule('height', '100%');
    expect(accordionItemTitle).toHaveStyleRule('object-fit', 'contain');
  });

  it('should render HeroSectionWrapper with provided styles', () => {
    const component = create(
      <HeroSectionWrapper height="300px" width="800px" horizontalPadding={200} />
    );
    const accordionItemTitle = component.toJSON();
    expect(accordionItemTitle).toHaveStyleRule('width', '800px');
    expect(accordionItemTitle).toHaveStyleRule('height', '300px');
    expect(accordionItemTitle).toHaveStyleRule('padding', '0 200px');
  });
});
