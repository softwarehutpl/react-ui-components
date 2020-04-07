import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Alerts, {
  AlertsWrapper,
  Title,
  Message,
} from './Alerts';
import CloseIcon from '../../../common/icons/CloseIcon/CloseIcon';
import theme from '../../../common/theme';

const mockFn = jest.fn();

const props = {
  type: 'success',
  isOpen: true,
  title: 'title',
  message: 'text message'
};

describe('<Alerts />', () => {
  let wrapper: any;
  let tree: any;
  let titleTree: any;
  let messageTree: any;

  const createComponentTree = (Component: any, type: string) => {
    return renderer
    .create(<Component type={type} theme={theme} />)
    .toJSON();
  }

  beforeEach(() => {
    wrapper = shallow(<Alerts  {...props} />);
  });

  afterEach(() => {
    wrapper = undefined;
  });

  it('should render corectly', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render a title element if provided', () => {
    expect(wrapper.find(Title).length).toBe(1);
  })

  it('should render a messsage element ', () => {
    expect(wrapper.find(Message).length).toBe(1);
  });

  it('should render with success type', () => {
    tree = createComponentTree(AlertsWrapper, 'success');
    titleTree = createComponentTree(Title, 'success');
    messageTree = createComponentTree(Message, 'success');

    expect(tree).toHaveStyleRule('border-color','#66bb6a');
    expect(tree).toHaveStyleRule('border-bottom-color', '#66bb6a');
    expect(titleTree).toHaveStyleRule('color', '#66bb6a');
    expect(messageTree).toHaveStyleRule('color', '#66bb6a');
  });

  it('should render with warning type', () => {
    tree = createComponentTree(AlertsWrapper, 'warning');
    titleTree = createComponentTree(Title, 'warning');
    messageTree = createComponentTree(Message, 'warning');

    expect(tree).toHaveStyleRule('border-color', '#ffc107');
    expect(tree).toHaveStyleRule('border-bottom-color', '#ffc107');
    expect(titleTree).toHaveStyleRule('color', '#ffc107');
    expect(messageTree).toHaveStyleRule('color', '#ffc107');
  });

  it('should render with error type', () => {
    tree = createComponentTree(AlertsWrapper, 'error');
    titleTree = createComponentTree(Title, 'error');
    messageTree = createComponentTree(Message, 'error');

    expect(tree).toHaveStyleRule('border-bottom-color', '#f44336');
    expect(titleTree).toHaveStyleRule('color', '#f44336');
    expect(messageTree).toHaveStyleRule('color', '#f44336');
  });
  it('should call onClose method', () => {
      const close = shallow(
        <CloseIcon
          onClick={mockFn}
          theme={theme}
          color="success"
        />
      );
      close.simulate('click');
      expect(mockFn).toHaveBeenCalled();
  });
});
