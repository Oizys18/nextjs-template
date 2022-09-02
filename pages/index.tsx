import type { NextPage } from 'next';
import styled from 'styled-components';
const Index: NextPage = () => {
  return <Hello>NextJS - typescript Template Index</Hello>;
};

export default Index;

const Hello = styled.div`
  background-color: red;
`;
