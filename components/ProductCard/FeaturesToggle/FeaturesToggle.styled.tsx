import styled, { keyframes } from 'styled-components'
import {
  fontColors,
  fontSizes,
  fontWeights,
  sizes,
  spacings
} from '../../../global-styles/variables'

/*types*/
type InfoBoxProps = {
  isFadingIn: boolean
}

/*keyframes*/
const fadeIn = keyframes`
  0% {
    opacity: 0;
  },
  100% {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  0% {
    opacity: 1;
  },
  100% {
    opacity: 0;
  }
`

/*components*/
export const BulletPoints = styled.ul`
  li {
    color: ${fontColors.gray};
    font-size: ${fontSizes.small};
  }
`
export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const InfoBox = styled.div<InfoBoxProps>`
  display: flex;
  flex-grow: 1;
  ${(props) => !props.isFadingIn && 'opacity: 0'};
  animation: ${(props) => (props.isFadingIn ? fadeIn : fadeOut)} 0.5s ease-out;
`

export const InfoToggle = styled.button`
  height: 20px;
  text-align: left;
  font-size: ${fontSizes.small};
  font-weight: ${fontWeights.bold};
  margin-bottom: ${spacings.extraSmall};

  span {
    margin-right: ${spacings.extraSmall};
  }

  @media screen and (max-width: ${sizes.mobileSmall}px) {
    font-size: ${fontSizes.extraSmall};
  }
`
