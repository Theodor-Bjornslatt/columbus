import { useState } from 'react'
import { Product } from '../../../types'
import arrowDown from '../../../public/arrow-down.svg'
import arrowUp from '../../../public/arrow-up.svg'
import Image from 'next/image'
import {
  FeaturesContainer,
  InfoToggle,
  InfoBox,
  BulletPoints
} from './FeaturesToggle.styled'

type ProducFeaturesProps = {
  features: Product['features']
}

export function FeaturesToggle({ features }: ProducFeaturesProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isFadingIn, setIsFadingIn] = useState(false)

  function triggerAnimation() {
    if (!isVisible) {
      setIsVisible(true)
      setIsFadingIn(true)
    } else {
      setIsFadingIn(false)
    }
  }

  function handleAnimationEnd() {
    if (!isFadingIn) {
      setIsVisible(false)
    }
  }

  return (
    <FeaturesContainer>
      <InfoToggle onClick={triggerAnimation}>
        <span>
          {isFadingIn ? (
            <Image
              height={15}
              width={15}
              alt='A simple arrow pointing up'
              src={arrowUp}
            />
          ) : (
            <Image
              height={15}
              width={15}
              alt='A simple arrow pointing down'
              src={arrowDown}
            />
          )}
        </span>
        <span>See information</span>
      </InfoToggle>
      {isVisible && (
        <InfoBox isFadingIn={isFadingIn} onAnimationEnd={handleAnimationEnd}>
          <BulletPoints>
            {features.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </BulletPoints>
        </InfoBox>
      )}
    </FeaturesContainer>
  )
}
