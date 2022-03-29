import styled from 'styled-components'
import {
  borderRadiuses,
  boxShadows,
  colors,
  fontColors,
  fontSizes,
  fontWeights,
  sizes,
  spacings
} from '../../global-styles/variables'

type CurrentPriceProps = {
  isOnSale: boolean
}

export const CurrentPrice = styled.h3<CurrentPriceProps>`
  color: ${(props) => (props.isOnSale ? fontColors.red : fontColors.black)};
`
export const Description = styled.p`
  font-size: ${fontSizes.small};
  font-weight: ${fontWeights.light};
  color: ${fontColors.black};
`

export const MainInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  row-gap: ${spacings.small};
`

export const PaddedContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: ${spacings.small};
  row-gap: ${spacings.extraSmall};
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;

  h3 {
    text-align: left;
  }
`

export const PriceReduction = styled.p`
  margin-left: ${spacings.small};
  text-decoration: line-through;
`

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 33%;
  width: 100%;
  max-width: 250px;
  min-width: 200px;
  box-shadow: ${boxShadows.gray};
  height: 100%;
  min-height: 540px;
  row-gap: ${spacings.extraSmall};

  @media screen and (max-width: ${sizes.mobile}px) {
    max-width: 300px;
    min-width: 142px;
  }

  @media screen and (max-width: ${sizes.mobileSmall}px) {
    min-height: 500px;
  }
`

export const WishlistButton = styled.button`
  align-self: center;
  justify-self: flex-end;
  margin: ${spacings.small};
  font-size: ${fontSizes.small};
  font-weight: ${fontWeights.bold};
  border-radius: ${borderRadiuses.large};
  background-color: ${colors.sand};
  padding: ${spacings.small};

  :hover {
    background-color: ${colors.darkerSand};
  }

  @media screen and(max-width: ${sizes.tablet}px) {
    margin: ${spacings.extraSmall};
  }
`
