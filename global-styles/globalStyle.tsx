import { createGlobalStyle } from 'styled-components'
import { fonts, fontSizes, sizes } from './variables'

export const GlobalStyle = createGlobalStyle`
  h1,
  h2,
  h3,
  h4,
  p,
  li {
    font-family: ${fonts.roboto};
  }

  h1 {
    font-size: ${fontSizes.extraLarge};

    @media screen and (max-width: ${sizes.tablet}px){
      font-size: ${fontSizes.large};
    }
  }

  h2 {
    font-size: ${fontSizes.large};
  }

  h3 {
    font-size: ${fontSizes.medium};

    @media screen and (max-width: ${sizes.mobileSmall}px){
      font-size: ${fontSizes.regular};
    }
  }

  h4 {
    font-size: ${fontSizes.small};

    @media screen and (max-width: ${sizes.tablet}px){
      font-size: ${fontSizes.extraSmall};
    }
  }
`
