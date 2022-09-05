import reset from 'styled-reset';
import { css, DefaultTheme, createGlobalStyle } from 'styled-components';

// import fonts here
const fonts = css``;

/**
 * types/styled.d.ts에 DefaultTheme 업데이트
 */
const ThemeResource: DefaultTheme = {
  // media queries
  mq: {
    tablet: '',
    mobile: '',
  },
  // colors
  color: {
    white: '#ffffff',
    black: '#000000',
  },
};

const GlobalStyle = createGlobalStyle`
    ${reset}
    ${fonts}
    * {
        box-sizing: border-box;
    }
    /* 1rem == 10px */
    html{
        font-size:62.5%;
    }
    body{
        font-size:1.6rem;
    }
    html,body,#__next{
        height:100%;
    }
`;

export default { GlobalStyle, ThemeResource };
