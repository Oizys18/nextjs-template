import styled from 'styled-components';

function TestButton() {
  return (
    <Wrapper>
      <button onClick={() => alert('button!')}>Test Button</button>
    </Wrapper>
  );
}

export default TestButton;

const Wrapper = styled.div`
  width: 30rem;
  display: flex;
  padding: 2rem;
  margin: 0 auto;
  justify-content: center;
  background-color: ${(props) => props.theme.color.black};
`;
