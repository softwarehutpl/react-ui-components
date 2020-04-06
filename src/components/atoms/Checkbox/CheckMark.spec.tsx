import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Checkmark from './CheckMark';
import  theme  from '../../../common/theme';

const props = {
  checked: true, 
  disabled: false,
  required: false,
  color: 'primary'
};

describe('Checkmark', () => {
  it('should have black background color when input is checked', () => {
    const tree = renderer
      .create(<Checkmark {...props} theme={theme}/>)
      .toJSON();
      expect(tree).toHaveStyleRule('background-color', theme.colors.primary.base)
  });

  it('should have no background color when input is not checked', () => {
    const tree = renderer
      .create(<Checkmark {...props} theme={theme} checked={false} />)
      .toJSON();
      expect(tree).toHaveStyleRule(null);
  });

  it('should have lighter border color when input is disabled', () => {
    const tree = renderer
      .create(<Checkmark {...props} theme={theme} disabled={true} />)
      .toJSON();
      expect(tree).toHaveStyleRule('border-color', theme.colors.disabled.base)
  });

  it('should have error border color when input is required ', () => {
    const tree = renderer
      .create(<Checkmark {...props} theme={theme} required={true} color="error" />)
      .toJSON();
      expect(tree).toHaveStyleRule('border-color', theme.colors.error.base);
  });

  it('should not displayed border ', () => {
    const tree = renderer
      .create(<Checkmark {...props} theme={theme} noBorder={true} />)
      .toJSON();
      expect(tree).toHaveStyleRule('border', 'none');
  });
});
