import type { NextPage } from 'next'
import Head from 'next/head'
import { getProducts } from '../api/mockApi'
import { ProductList } from '../components/ProductList'
import { Wishlist } from '../components/Wishlist'
import { Product } from '../types'

type HomeProps = {
  products: Product[]
}

export const getServerSideProps = async () => {
  async function fetchProducts() {
    return (await getProducts()) as Product[]
  }

  const products = await fetchProducts()

  return {
    props: {
      products
    }
  }
}

const Home = ({ products }: HomeProps) => {
  return (
    <div>
      <Head>
        <title>Super Product Wishlist</title>
        <meta
          name='description'
          content='Great products and a wishlist to save them to so you can buy them later'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <ProductList items={products} />
        <Wishlist />
      </main>
    </div>
  )
}

export default Home
