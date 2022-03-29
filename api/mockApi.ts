import { Product } from "../types"

export function getProducts(){
  return new Promise((resolve) => {
    setTimeout(() =>
      resolve(Object.values(products)), 200)
  })
}

const products: Product[]= [
  {
    id: 1,
    title: 'Super product 1',
    description: 'Awesome phone charger',
    features: [
      'Great product', 'Can do so much', 'Cool batteries'
    ],
    image: {
      url: 'https://www.kjell.com/globalassets/productimages/748805_99218_4.tif?ref=1E20C4B389&format=jpg&w=960&h=960&mode=pad',
      alt: 'cool solar panels'
    },
    currentPrice: 569,
    priceReduction: 140
  },
  {
    id: 2,
    title: 'Super product 34',
    description: 'Solar powered powerbank',
    features: [
      'Great product', 'Can do so much', 'Wonderful'
    ],
    image: {
      url: 'https://m.media-amazon.com/images/I/81qKlaBBoZL._AC_SX522_.jpg',
      alt: 'cool solar panels'
    },
    currentPrice: 498,
    priceReduction: 120
  },
  {
    id: 3,
    title: 'Super product 39',
    description: 'Dolby speakers',
    features: [
      'Great product', 'Can do so much', 'Awesome sound'
    ],
    image: {
      url: 'https://m.media-amazon.com/images/I/61M-tYFMUmL._AC_SX679_.jpg',
      alt: 'cool solar panels'
    },
    currentPrice: 200,
    priceReduction: 0
  },
  {
    id: 4,
    title: 'Super product 56',
    description: 'Phone car stand',
    features: [
      'Great product', 'Can do so much', 'Nice and steady'
    ],
    image: {
      url: 'https://m.media-amazon.com/images/I/8103tJllA8S._AC_SX679_.jpg',
      alt: 'cool solar panels'
    },
    currentPrice: 379,
    priceReduction: 0
  },
  {
    id: 5,
    title: 'Super product 77',
    description: 'Wireless earphones',
    features: [
      'Great product', 'Can do so much', 'Water resistant'
    ],
    image: {
      url: 'https://www.kjell.com/globalassets/productimages/837850_24552.tif?ref=EE1E6D47B1&format=jpg&w=960&h=960&mode=pad',
      alt: 'cool solar panels'
    },
    currentPrice: 1090,
    priceReduction: 130
  },
  {
    id: 6,
    title: 'Super product 99',
    description: 'Battery pack',
    features: [
      'Great product', 'Can do so much', 'Rechargeable'
    ],
    image: {
      url: 'https://www.kjell.com/globalassets/productimages/701842_32074.tif?ref=8B27570E5D&format=jpg&w=960&h=960&mode=pad',
      alt: 'cool solar panels'
    },
    currentPrice: 109,
    priceReduction: 0
  }
]