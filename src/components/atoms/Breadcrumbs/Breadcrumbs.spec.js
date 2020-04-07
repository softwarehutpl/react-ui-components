
import React from 'react';
import { create, act } from 'react-test-renderer';
import 'jest-styled-components';
import Breadcrumbs, { BreadcrumbsContainer, BreadcrumbsGap } from './Breadcrumbs';
import { BreadcrumbsItemContainer } from './BreadcrumbsItem';

const items = [{
  name: 'Home', link: 'link',
  }, {
    name: 'Products', link: 'link-2',
  }, {
    name: 'Collection', link: 'link-3',
  }, {
    name: 'Product Details', link: 'link-4',
  }];

describe('Breadcrumbs Component', () => {
  it('should render Breadcrumbs correctly', () => {
    const tree = create(<Breadcrumbs items={items} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render BreadcrumbsItemContainer correctly', () => {
    const tree = create(<BreadcrumbsItemContainer items={items} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call button onClick method in BreadcrumbsGap', () => {
    const mockOnChange = jest.fn();
    const component = create(<BreadcrumbsGap onClick={mockOnChange} />);
    const instance = component.root;
    const button = instance.findByType('button');
    act(() => {
      button.props.onClick();
    });
    expect(mockOnChange.mock.calls.length).toEqual(1);
  });

  it('should render BreadcrumbsContainer with introduced params', () => {
    const component = create(<BreadcrumbsContainer
      borderWidth={2}
      backgroundColor='hotpink'
      borderRadius={3}
      margin={20}
    />);
    const breadcrumbsContainer = component.toJSON();
    expect(breadcrumbsContainer).toHaveStyleRule('background-color', 'hotpink');
    expect(breadcrumbsContainer).toHaveStyleRule('border-width', '2px');
    expect(breadcrumbsContainer).toHaveStyleRule('border-radius', '3px');
    expect(breadcrumbsContainer).toHaveStyleRule('margin', '20px');
  });
  
  it('should render BreadcrumbsContainer without border', () => {
    const component = create(<BreadcrumbsContainer noBorder />);
    const breadcrumbsContainer = component.toJSON();
    expect(breadcrumbsContainer).toHaveStyleRule('border', 'none');
  });

  it('should render BreadcrumbsContainer with default padding and margin', () => {
    const component = create(<BreadcrumbsContainer />);
    const breadcrumbsContainer = component.toJSON();
    expect(breadcrumbsContainer).toHaveStyleRule('padding', '15px');
    expect(breadcrumbsContainer).toHaveStyleRule('margin', '0px');
  });
});
