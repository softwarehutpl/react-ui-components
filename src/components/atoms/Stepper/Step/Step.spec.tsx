import React from 'react';
import { create, act } from 'react-test-renderer';
import 'jest-styled-components';
import Step, { Wrapper, Icon, Title } from './Step';
import theme from '../../../../common/theme';

describe('<Step />', () => {
  it('should render corectly', () => {
    const component = create(<Wrapper theme={theme} color="primary" />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('should render input with custom class', () => {
    const component = create(
      <Wrapper className="wrapper" theme={theme} color="secondary" />).toJSON();

    expect(component.props.className).toEqual(expect.stringContaining('wrapper'));
  });

  it('should render proper styling when isActve is false', () => {
    const icon= create( <Icon isActive={false} color="secondary" theme={theme} />).toJSON();
     expect(icon).toHaveStyleRule('background-color', '#fff');
  });

  it('should render proper styling when isActve is true and color is secondary', () => {
    const icon = create(<Icon isActive color="secondary" theme={theme} /> ).toJSON();
    const title = create( <Title isActive />).toJSON();

    expect(icon).toHaveStyleRule('background-color', '#2196f3');
    expect(title).toHaveStyleRule('font-weight', '500');
  });

  it('should render wrapper with proper style', () => {
    const wrapper = create(
      <Wrapper 
        isActive 
        theme={theme} 
        color="secondary" 
        width="10px"
        height="10px"
      />
    ).toJSON();

    expect(wrapper).toHaveStyleRule('width', '10px');
    expect(wrapper).toHaveStyleRule('height', '10px');
  });
});
