import styled from 'styled-components';

export const Wrapper = styled.div`
  all: unset;
  width: 30rem;
  display: flex;
  padding: 2rem;
  margin: 0 auto;
  justify-content: center;
  /* preload css */
  background-color: ${(props) => props.theme.color.white};
`;
