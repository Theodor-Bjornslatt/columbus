import styled from 'styled-components'
import { sizes, spacings } from '../../global-styles/variables'

export const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  justify-content: center;
  justify-items: center;
  align-items: center;
  gap: ${spacings.extraLarge} ${spacings.medium};
  margin: ${spacings.large} auto;
  max-width: 1280px;
  padding: ${spacings.medium};

  @media screen and (max-width: ${sizes.tablet}px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media screen and (max-width: ${sizes.mobile}px) {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: ${spacings.large} ${spacings.small};
  }

  @media screen and (max-width: ${sizes.mobileSmall}px) {
    grid-template-columns: repeat(2, minmax(140px, 1fr));
  }
`

export const ProductListTitle = styled.h1`
  text-align: center;
  margin-top: ${spacings.extraLarge};
`
