import React from 'react';
import { create, act } from 'react-test-renderer';
import 'jest-styled-components';
import Tabs, { Wrapper, TabsWrapper } from './Tabs';

describe('<Tabs />', () => {
  it('should render corectly', () => {
    const component = create(<Tabs />);
    expect(component).toMatchSnapshot();
  });

  it('should render with className if provied', () => {
    const component = create(<Tabs className="test-class" />);
    const instance = component.root;
    instance.findByType('div');
    expect(instance.props.className).toEqual(expect.stringContaining('test-class'));
  });

  it('should have propery style with vertical orientation', () => {
    const component = create(<Wrapper orientation="vertical" />).toJSON();
    const tabsComponent = create(<TabsWrapper orientation="vertical" />).toJSON();
    expect(component).toHaveStyleRule('flex-direction', 'row');
    expect(tabsComponent).toHaveStyleRule('flex-direction', 'column');
  });

  it('should have proper style if margin props is provied', () => {
    const component = create(<Wrapper margin={15} />).toJSON();
    expect(component).toHaveStyleRule('margin', '15px');
  });
});
