import React from 'react';
import { create, act } from 'react-test-renderer';
import 'jest-styled-components';
import Pagination, { PaginationWrapper, IconComponent, PageNumber, PaginationItem } from './Pagination';

describe('Pagination component', () => {
  it('should render corectly', () => {
    const component = create(<Pagination />);
    expect(component).toMatchSnapshot();
  });

  it('should render corectly', () => {
    const component = create(<PaginationWrapper />);
    expect(component).toMatchSnapshot();
  });

  it('should render corectly', () => {
    const component = create(<IconComponent />);
    expect(component).toMatchSnapshot();
  });

  it('should render corectly', () => {
    const component = create(<PageNumber />);
    expect(component).toMatchSnapshot();
  });

  it('should render corectly', () => {
    const component = create(<PaginationItem />);
    expect(component).toMatchSnapshot();
  });

  it('should render PaginationWrapper component with default style', () => {
    const component = create(<PaginationWrapper />);
    const paginationWrapper = component.toJSON();
    expect(paginationWrapper).toHaveStyleRule('width', '100%');
    expect(paginationWrapper).toHaveStyleRule('height', 'auto');
    expect(paginationWrapper).toHaveStyleRule('background-color', 'transparent');
    expect(paginationWrapper).toHaveStyleRule('display', 'flex');
    expect(paginationWrapper).toHaveStyleRule('justify-content', 'center');
    expect(paginationWrapper).toHaveStyleRule('align-items', 'center');
    expect(paginationWrapper).toHaveStyleRule('flex-direction', 'column');
  });

  it('should render PaginationItem component with default style', () => {
    const component = create(<PaginationItem />);
    const paginationWrapper = component.toJSON();
    expect(paginationWrapper).toHaveStyleRule('width', '300px');
    expect(paginationWrapper).toHaveStyleRule('border-radius', '0px');
    expect(paginationWrapper).toHaveStyleRule('border', 'none');
    expect(paginationWrapper).toHaveStyleRule('box-shadow', '0px 3px 9px rgba(100,100,100,0.3)')
  });

  it('should render PaginationWrapper component with provided style', () => {
    const component = create(<PaginationWrapper
      width={900}
      height={900}
      wrapperBackgroundColor="#333"
    />);
    const paginationWrapper = component.toJSON();
    expect(paginationWrapper).toHaveStyleRule('width', '900px');
    expect(paginationWrapper).toHaveStyleRule('height', '900px');
    expect(paginationWrapper).toHaveStyleRule('background-color', '#333');
  });

  it('should render PaginationItem component with provided style', () => {
    const component = create(<PaginationItem
      itemWidth={400}
      borderRadius={10}
      borderColor="#444"
    />);
    const paginationWrapper = component.toJSON();
    expect(paginationWrapper).toHaveStyleRule('width', '400px');
    expect(paginationWrapper).toHaveStyleRule('border-radius', '10px');
    expect(paginationWrapper).toHaveStyleRule('border', '1px solid #444');
  });

  it('should call add to cart with onClick method', () => {
    const mockOnClick = jest.fn();
    const component = create(<IconComponent onClick={mockOnClick} />);
    const instance = component.root;
    const button = instance.findByType('button');
    act(() => {
      button.props.onClick();
    });
    expect(mockOnClick.mock.calls.length).toEqual(1);
  });

  it('should call handle change page method', () => {
    const mockOnClick = jest.fn();
    const component = create(<PageNumber onClick={mockOnClick} />);
    const instance = component.root;
    const button = instance.findByType('button');
    act(() => {
      button.props.onClick();
    });
    expect(mockOnClick.mock.calls.length).toEqual(1);
  });
});
