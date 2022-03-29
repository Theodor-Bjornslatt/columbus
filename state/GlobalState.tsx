import { createContext, useReducer } from 'react'
import { Product } from '../types'

const initialState = {
  items: [],
  totalPrice: 0
}

type GlobalState = {
  items: Product[]
  totalPrice: number
}

type SetStateAction = { type: 'addItem'; payload: Product }

type GlobalContextType = {
  state: GlobalState
  dispatch: (action: SetStateAction) => void
}

export const GlobalContext = createContext<GlobalContextType>({
  state: initialState,
  dispatch: () => null
})

const GlobalReducer = (state: GlobalState, action: SetStateAction) => {
  switch (action.type) {
    case 'addItem':
      if (state.items.includes(action.payload)) {
        return { ...state }
      }
      return {
        ...state,
        totalPrice: state.totalPrice + action.payload.currentPrice,
        items: [...state.items, action.payload]
      }
    default:
      return { ...state }
  }
}

type ContextProps = {
  children: JSX.Element[] | JSX.Element
}

export const GlobalContextProvider = ({ children }: ContextProps) => {
  const [state, dispatch] = useReducer<
    (state: GlobalState, action: SetStateAction) => GlobalState
  >(GlobalReducer, {
    ...initialState
  })

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}
