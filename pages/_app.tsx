import '../global-styles/globals.css'
import type { AppProps } from 'next/app'
import { GlobalStyle } from '../global-styles/globalStyle'
import { GlobalContextProvider } from '../state/GlobalState'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <GlobalContextProvider>
        <Component {...pageProps} />
      </GlobalContextProvider>
    </>
  )
}

export default App
