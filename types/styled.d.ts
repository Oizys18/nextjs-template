import 'styled-components';

// add color namings
type ColorTypes = 'black' | 'white';

// add media query type
type MediaTypes = 'mobile' | 'tablet';

type FontSizeTypes = 'big' | 'medium' | 'small';
declare module 'styled-components' {
  export interface DefaultTheme {
    color: Record<ColorTypes, string>;
    mq: Record<MediaTypes, string>;
    fontSize: Record<FontSizeTypes, string>;
  }
}
