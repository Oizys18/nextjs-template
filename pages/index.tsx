import type { NextPage } from 'next';
import styled from 'styled-components';

import { TestButton, Input } from '@components';

const Index: NextPage = () => {
  return (
    <Wrapper>
      Next Template
      <Input />
      <TestButton />
    </Wrapper>
  );
};

export default Index;

const Wrapper = styled.div`
  gap: 20px;
  padding: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
