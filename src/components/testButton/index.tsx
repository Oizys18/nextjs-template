import { useRecoilState } from 'recoil';

import { buttonStore } from './button.store';
import * as SC from './button.style';

function TestButton() {
  const [value, setValue] = useRecoilState(buttonStore);

  return (
    <SC.Wrapper>
      {value}
      <button onClick={() => setValue((prev) => prev + 1)}>Test Button</button>
    </SC.Wrapper>
  );
}

export default TestButton;
