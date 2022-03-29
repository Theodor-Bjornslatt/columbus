import styled from 'styled-components'
import { fontSizes, spacings } from '../../global-styles/variables'

export const ProductTitle = styled.p`
  font-size: ${fontSizes.regular};
  margin: ${spacings.small} 0;
`

export const WishlistContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  margin: ${spacings.extraLarge};
  gap: ${spacings.small};
`
