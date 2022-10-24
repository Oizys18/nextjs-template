import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { buttonStore } from './button.store';

function TestButton() {
  const [value, setValue] = useRecoilState(buttonStore);
  return (
    <Wrapper>
      {value}
      <button onClick={() => setValue((prev) => prev + 1)}>Test Button</button>
    </Wrapper>
  );
}

export default TestButton;

const Wrapper = styled.div`
  all: unset;
  width: 30rem;
  display: flex;
  padding: 2rem;
  margin: 0 auto;
  justify-content: center;
  /* preload css */
  background-color: ${(props) => props.theme.color.black};
`;
