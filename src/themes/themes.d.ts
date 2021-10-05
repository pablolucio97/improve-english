import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary1: string;
      primary2: string;
      secondary1: string;
      secondary2: string;
      tertiary1: string;
      tertiary2: string;
      successText: string;
      successBackground: string;
      errorText: string;
      errorBackground: string;
      warningText: string;
      warningBackground: string;
      black1: string;
      black2: string;
      black3: string;
      black4: string;
      white1: string;
      white2: string;
      white3: string;
      white4: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      gray5: string;
      gray6: string;
      gray7: string;
      gray8: string;
    },
    fonts: {
      default: string;
      secondary: string;
    },
    sizes: {
      xxsmall: string;
      xsmall: string;
      small: string;
      normal: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      huge: string;
      xhuge: string;
      xxhuge: string;
      hero: string;
      xhero: string;
      xxhero: string;
    },
    spacings: {
      xxtiny: string;
      xtiny: string;
      tiny: string;
      xxsmall: string;
      xsmall: string;
      small: string;
      mediumSmall: string;
      medium: string;
      mediumLarge: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      huge: string;
      xhuge: string;
      xxhuge: string;
      hero: string;
      xhero: string;
      xxhero: string;
    },
    transitions: {
      fastest: string;
      faster: string;
      fast: string;
      normal: string;
      slow: string;
      slower: string;
      slowest: string;
    },
    shadows:{
        soft: string;
    }
  }
}