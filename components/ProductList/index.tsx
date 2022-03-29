import { ProductCard } from '../ProductCard'
import { ProductListContainer, ProductListTitle } from './ProductList.styled'
import { Product } from '../../types'

type ProductListProps = {
  items: Product[]
}

export function ProductList({ items }: ProductListProps) {
  return (
    <>
      <ProductListTitle>Super Product List</ProductListTitle>
      <ProductListContainer>
        {items &&
          items.map((item) => <ProductCard item={item} key={item.id} />)}
      </ProductListContainer>
    </>
  )
}
