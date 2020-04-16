import React from 'react';
import styled from 'styled-components';
import { ORIENTATION } from '../../../common/consts/consts';

type Orientation = 'horizontal' | 'vertical';

export interface TabProps {
  label: string;
  value?: number;
};

export interface WrapperProps {
  orientation?: Orientation; 
  margin?: number;
};

export interface TabsWrapperProps {
  orientation?: Orientation;
}

export interface TabsProps extends WrapperProps {
  className?: string;
  tabs?: any;
  content?: any;
  value?: any;
  onClick?: any;
  margin?: number;
};

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  display: flex;
  flex-direction: ${({ orientation }) => (orientation === ORIENTATION.HORIZONTAL 
    ? 'column' : 'row')};
  margin:${({ margin }) => (margin && `${margin}px`)};
`;

export const TabsWrapper = styled.div<TabsWrapperProps>`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-direction: ${({ orientation }) => (orientation === ORIENTATION.HORIZONTAL 
    ? 'row' : 'column')};
`;

export const ContentWrapper = styled.div`
  width: 100%;
`;

const Tabs: React.StatelessComponent<TabsProps> = ({
  className,
  tabs,
  content,
  orientation,
}) => (
  <Wrapper 
    className={className}
    orientation={orientation}
  >
    <TabsWrapper orientation={orientation}>
      {tabs}
    </TabsWrapper>
    <ContentWrapper>
      {content}
    </ContentWrapper>
  </Wrapper>
);

Tabs.defaultProps = {
  className: '',
  orientation: 'horizontal',
  margin: 0,
};

export default Tabs;
