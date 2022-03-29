export type Product = {
  id: number
  title: string
  description: string
  features: string[]
  image: {
    url: string
    alt: string
  }
  currentPrice: number
  priceReduction: number
}