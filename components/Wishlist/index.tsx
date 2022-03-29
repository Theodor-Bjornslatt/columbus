import { useContext } from 'react'
import { GlobalContext } from '../../state/GlobalState'
import { ProductTitle, WishlistContainer } from './Wishlist.styled'

export function Wishlist() {
  const { state } = useContext(GlobalContext)

  return (
    <WishlistContainer>
      <h2>Wishlist</h2>
      <div>
        {state.items.map((item) => (
          <ProductTitle key={item.id}>{item.title}</ProductTitle>
        ))}
      </div>
      <h3>Total Price: {state.totalPrice} :-</h3>
    </WishlistContainer>
  )
}
