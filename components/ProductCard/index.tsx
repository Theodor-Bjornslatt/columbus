import Image from 'next/image'
import { Product } from '../../types'
import { FeaturesToggle } from './FeaturesToggle'
import {
  CurrentPrice,
  Description,
  PriceContainer,
  MainInfoContainer,
  PaddedContainer,
  PriceReduction,
  ProductCardContainer,
  WishlistButton
} from './ProductCard.styled'
import { useContext } from 'react'
import { GlobalContext } from '../../state/GlobalState'

type ItemProps = {
  item: Product
}

export function ProductCard({ item }: ItemProps) {
  const { title, description, features, image, currentPrice, priceReduction } =
    item

  const isOnSale = priceReduction !== 0

  const { dispatch } = useContext(GlobalContext)

  function addToWishlist() {
    dispatch({ type: 'addItem', payload: item })
  }

  return (
    <ProductCardContainer>
      <div>
        {image?.url && (
          <Image
            src={image.url}
            quality={70}
            width={480}
            height={480}
            alt={image.alt}
            layout='responsive'
            objectFit='contain'
          />
        )}
      </div>

      <PaddedContainer>
        <MainInfoContainer>
          <h3>{title}</h3>
          <Description>{description}</Description>
          <FeaturesToggle features={features} />
        </MainInfoContainer>
        <PriceContainer>
          <CurrentPrice isOnSale={isOnSale}>{currentPrice} :-</CurrentPrice>
          {isOnSale && <PriceReduction>{priceReduction}</PriceReduction>}
        </PriceContainer>
        <WishlistButton type='submit' onClick={addToWishlist}>
          Add to list
        </WishlistButton>
      </PaddedContainer>
    </ProductCardContainer>
  )
}
